"use client";

import Link from "next/link";
import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { auth, database } from "@/lib/firebase";

type Member = {
  firebaseId: string;
  fullName: string;
  memberId: string;
  contactNumber: string;
  designation: string;
  ranking: number;
  photoUrl: string;
  isActive: boolean;
  createdAt?: number;
  updatedAt?: number;
};

type MemberForm = {
  fullName: string;
  memberId: string;
  contactNumber: string;
  designation: string;
  ranking: string;
  photoUrl: string;
  isActive: boolean;
};

const emptyForm: MemberForm = {
  fullName: "",
  memberId: "",
  contactNumber: "",
  designation: "",
  ranking: "",
  photoUrl: "",
  isActive: true,
};

function withTimeout<T>(
  operation: Promise<T>,
  milliseconds = 10000,
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      reject(
        new Error(
          "Firebase request timed out. Please check your internet connection and database permissions.",
        ),
      );
    }, milliseconds);

    operation
      .then((result) => {
        window.clearTimeout(timer);
        resolve(result);
      })
      .catch((error) => {
        window.clearTimeout(timer);
        reject(error);
      });
  });
}

function getFirebaseErrorMessage(
  error: unknown,
  fallbackMessage: string,
): string {
  const firebaseError = error as {
    code?: string;
    message?: string;
  };

  if (firebaseError.code) {
    return `${fallbackMessage}: ${firebaseError.code}`;
  }

  if (firebaseError.message) {
    return firebaseError.message;
  }

  return fallbackMessage;
}

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [form, setForm] = useState<MemberForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const membersReference = ref(database, "members");

    const unsubscribe = onValue(
      membersReference,
      (snapshot) => {
        const databaseValue = snapshot.val() as
          | Record<string, Omit<Member, "firebaseId">>
          | null;

        if (!databaseValue) {
          setMembers([]);
          setIsLoading(false);
          return;
        }

        const loadedMembers = Object.entries(databaseValue).map(
          ([firebaseId, member]) => ({
            firebaseId,
            ...member,
            ranking: Number(member.ranking) || 999,
          }),
        );

        setMembers(loadedMembers);
        setIsLoading(false);
      },
      (error) => {
        console.error("Unable to load members:", error);
        setErrorMessage(
          "Unable to load members. Check your login and database rules.",
        );
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  const sortedMembers = useMemo(() => {
    return [...members].sort((first, second) => {
      if (first.ranking !== second.ranking) {
        return first.ranking - second.ranking;
      }

      return first.fullName.localeCompare(second.fullName);
    });
  }, [members]);

  function updateForm<K extends keyof MemberForm>(
    field: K,
    value: MemberForm[K],
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
    setMessage("");
    setErrorMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setErrorMessage("");

    const fullName = form.fullName.trim();
    const memberId = form.memberId.trim();
    const contactNumber = form.contactNumber.trim();
    const designation = form.designation.trim();
    const photoUrl = form.photoUrl.trim();
    const ranking = Number(form.ranking);

    if (
      !fullName ||
      !memberId ||
      !contactNumber ||
      !designation ||
      !photoUrl
    ) {
      setErrorMessage("Please complete every field.");
      return;
    }

    if (!Number.isInteger(ranking) || ranking < 1) {
      setErrorMessage("Ranking must be a whole number starting from 1.");
      return;
    }

    const duplicateMemberId = members.some(
      (member) =>
        member.memberId.toLowerCase() === memberId.toLowerCase() &&
        member.firebaseId !== editingId,
    );

    if (duplicateMemberId) {
      setErrorMessage("This Member ID is already being used.");
      return;
    }

    const currentUser = auth.currentUser;

    if (!currentUser) {
      setErrorMessage(
        "You are not signed in. Please log in through the Admin Login page.",
      );
      return;
    }

    setIsSaving(true);

    const memberData = {
      fullName,
      memberId,
      contactNumber,
      designation,
      ranking,
      photoUrl,
      isActive: form.isActive,
      updatedAt: Date.now(),
    };

    try {
      // Refresh the Firebase authentication token before writing.
      await withTimeout(currentUser.getIdToken(true), 10000);

      if (editingId) {
        await withTimeout(
          update(
            ref(database, `members/${editingId}`),
            memberData,
          ),
          10000,
        );

        setMessage("Member updated successfully.");
      } else {
        const newMemberReference = push(ref(database, "members"));

        await withTimeout(
          set(newMemberReference, {
            ...memberData,
            createdAt: Date.now(),
          }),
          10000,
        );

        setMessage("Member added successfully.");
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (error: unknown) {
      console.error("Unable to save member:", error);

      setErrorMessage(
        getFirebaseErrorMessage(
          error,
          "Member could not be saved",
        ),
      );
    } finally {
      setIsSaving(false);
    }
  }

  function handleEdit(member: Member) {
    setEditingId(member.firebaseId);

    setForm({
      fullName: member.fullName,
      memberId: member.memberId,
      contactNumber: member.contactNumber,
      designation: member.designation,
      ranking: String(member.ranking),
      photoUrl: member.photoUrl,
      isActive: member.isActive,
    });

    setMessage("");
    setErrorMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleToggleStatus(member: Member) {
    setMessage("");
    setErrorMessage("");

    if (!auth.currentUser) {
      setErrorMessage(
        "You are not signed in. Please log in through the Admin Login page.",
      );
      return;
    }

    try {
      await withTimeout(
        update(ref(database, `members/${member.firebaseId}`), {
          isActive: !member.isActive,
          updatedAt: Date.now(),
        }),
        10000,
      );

      setMessage(
        member.isActive
          ? "Member hidden successfully."
          : "Member activated successfully.",
      );
    } catch (error: unknown) {
      console.error("Unable to change member status:", error);
      setErrorMessage(
        getFirebaseErrorMessage(
          error,
          "Unable to change the member status",
        ),
      );
    }
  }

  async function handleDelete(member: Member) {
    const shouldDelete = window.confirm(
      `Delete ${member.fullName} permanently?`,
    );

    if (!shouldDelete) {
      return;
    }

    setMessage("");
    setErrorMessage("");

    if (!auth.currentUser) {
      setErrorMessage(
        "You are not signed in. Please log in through the Admin Login page.",
      );
      return;
    }

    try {
      await withTimeout(
        remove(ref(database, `members/${member.firebaseId}`)),
        10000,
      );

      if (editingId === member.firebaseId) {
        resetForm();
      }

      setMessage("Member deleted successfully.");
    } catch (error: unknown) {
      console.error("Unable to delete member:", error);
      setErrorMessage(
        getFirebaseErrorMessage(
          error,
          "Unable to delete the member",
        ),
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#10243e]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#11823b]">
              SAMVAAD Admin
            </p>

            <h1 className="mt-1 text-xl font-bold text-[#082b57]">
              Member Management
            </h1>
          </div>

          <Link
            href="/admin"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#082b57] transition hover:border-[#11823b] hover:text-[#11823b]"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        {/* Member form */}
        <div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#11823b]">
              {editingId ? "Edit Member" : "Add Member"}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#082b57]">
              {editingId
                ? "Update member information"
                : "Create a member record"}
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Full name
                </label>

                <input
                  id="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(event) =>
                    updateForm("fullName", event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#11823b] focus:ring-4 focus:ring-green-100"
                  placeholder="Enter the member’s full name"
                />
              </div>

              <div>
                <label
                  htmlFor="memberId"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Member ID
                </label>

                <input
                  id="memberId"
                  type="text"
                  required
                  value={form.memberId}
                  onChange={(event) =>
                    updateForm("memberId", event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#11823b] focus:ring-4 focus:ring-green-100"
                  placeholder="Example: SAM-001"
                />
              </div>

              <div>
                <label
                  htmlFor="contactNumber"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Contact number
                </label>

                <input
                  id="contactNumber"
                  type="tel"
                  required
                  value={form.contactNumber}
                  onChange={(event) =>
                    updateForm("contactNumber", event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#11823b] focus:ring-4 focus:ring-green-100"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label
                  htmlFor="designation"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Custom designation
                </label>

                <input
                  id="designation"
                  type="text"
                  required
                  value={form.designation}
                  onChange={(event) =>
                    updateForm("designation", event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#11823b] focus:ring-4 focus:ring-green-100"
                  placeholder="Example: Research and Documentation Lead"
                />
              </div>

              <div>
                <label
                  htmlFor="ranking"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Ranking
                </label>

                <input
                  id="ranking"
                  type="number"
                  required
                  min="1"
                  step="1"
                  value={form.ranking}
                  onChange={(event) =>
                    updateForm("ranking", event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#11823b] focus:ring-4 focus:ring-green-100"
                  placeholder="1"
                />

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Smaller numbers appear first on the Members page.
                </p>
              </div>

              <div>
                <label
                  htmlFor="photoUrl"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Photograph URL or public path
                </label>

                <input
                  id="photoUrl"
                  type="text"
                  required
                  value={form.photoUrl}
                  onChange={(event) =>
                    updateForm("photoUrl", event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#11823b] focus:ring-4 focus:ring-green-100"
                  placeholder="/nilaksha-v2.png"
                />

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Example: /arka.png or a complete HTTPS image URL.
                </p>
              </div>

              {form.photoUrl && (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <img
                    src={form.photoUrl}
                    alt="Member photograph preview"
                    className="h-64 w-full object-cover object-top"
                  />
                </div>
              )}

              <label className="flex items-center gap-3 rounded-2xl bg-[#f5f7fa] p-4">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(event) =>
                    updateForm("isActive", event.target.checked)
                  }
                  className="h-5 w-5 accent-[#11823b]"
                />

                <span className="text-sm font-semibold text-[#082b57]">
                  Display this member publicly
                </span>
              </label>

              {errorMessage && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {message && (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {message}
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 rounded-full bg-[#082b57] px-6 py-3 font-bold text-white transition hover:bg-[#11823b] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving
                    ? "Saving..."
                    : editingId
                      ? "Update Member"
                      : "Add Member"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-full border border-slate-300 px-6 py-3 font-bold text-[#082b57] hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Member records */}
        <div>
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#11823b]">
              Member Directory
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#082b57]">
              Existing members
            </h2>

            <p className="mt-2 text-slate-600">
              {members.length} member record
              {members.length === 1 ? "" : "s"}
            </p>
          </div>

          {isLoading ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
              <p className="font-semibold text-[#082b57]">
                Loading members...
              </p>
            </div>
          ) : sortedMembers.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <h3 className="text-xl font-bold text-[#082b57]">
                No members added yet
              </h3>

              <p className="mt-3 text-slate-600">
                Complete the form to create the first member record.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {sortedMembers.map((member) => (
                <article
                  key={member.firebaseId}
                  className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[130px_1fr]"
                >
                  <div className="overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={member.photoUrl}
                      alt={member.fullName}
                      className="h-40 w-full object-cover object-top sm:h-full"
                    />
                  </div>

                  <div>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#082b57] px-3 py-1 text-xs font-bold text-white">
                            Rank {member.ranking}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              member.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {member.isActive ? "Active" : "Hidden"}
                          </span>
                        </div>

                        <h3 className="mt-3 text-xl font-bold text-[#082b57]">
                          {member.fullName}
                        </h3>

                        <p className="mt-1 font-semibold text-[#11823b]">
                          {member.designation}
                        </p>
                      </div>

                      <p className="text-sm font-bold text-[#e96f17]">
                        {member.memberId}
                      </p>
                    </div>

                    <p className="mt-4 text-sm text-slate-600">
                      Contact: {member.contactNumber}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => handleEdit(member)}
                        className="rounded-full bg-[#082b57] px-4 py-2 text-sm font-bold text-white hover:bg-[#123f70]"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggleStatus(member)}
                        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#082b57] hover:border-[#11823b] hover:text-[#11823b]"
                      >
                        {member.isActive ? "Hide" : "Activate"}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(member)}
                        className="rounded-full border border-red-200 px-4 py-2 text-sm font-bold text-red-700 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}