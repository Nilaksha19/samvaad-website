import Image from "next/image";
import Link from "next/link";
import AdminSignOutButton from "@/Components/AdminSignOutButton";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#10243e]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white p-1">
              <Image
                src="/samvaad-logo.png"
                alt="SAMVAAD logo"
                width={56}
                height={56}
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold tracking-[0.14em] text-[#082b57]">
                SAMVAAD ADMIN
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                Content Management Portal
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
          <Link
              href="/"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#082b57] transition hover:border-[#e96f17] hover:text-[#e96f17]"
          >
            View Website
          </Link>
          <AdminSignOutButton />
          </div>
        </div>
      </header>

      {/* Dashboard heading */}
      <section className="relative overflow-hidden bg-[#082b57]">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-green-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
            Administration
          </p>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            SAMVAAD Admin Dashboard
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Manage news publications and organisational member information
            from one central workspace.
          </p>

          <div className="mt-7 inline-flex rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-200">
            Authentication will be enabled later
          </div>
        </div>
      </section>

      {/* Management cards */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* News Management */}
          <article className="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
              📰
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
              News Management
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#082b57] sm:text-3xl">
              Manage news publications
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              This section will allow administrators to create and manage
              national, international and regional news posts.
            </p>

            <div className="mt-6 rounded-2xl bg-[#f5f7fa] p-5">
              <p className="font-bold text-[#082b57]">
                Planned administrative tasks
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>• Upload a news image</p>
                <p>• Add a headline and caption</p>
                <p>• Choose the news category</p>
                <p>• Add the publication date</p>
                <p>• Publish, edit or delete posts</p>
              </div>
            </div>

            <Link
              href="/admin/news"
              className="mt-7 inline-flex justify-center rounded-full bg-[#082b57] px-6 py-3 font-bold text-white transition hover:bg-[#e96f17]"
            >
              Open News Management
            </Link>
          </article>

          {/* Member Management */}
          <article className="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
              👥
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#11823b]">
              Member Management
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#082b57] sm:text-3xl">
              Manage organisation members
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              This section will manage the information displayed on the public
              SAMVAAD Members page.
            </p>

            <div className="mt-6 rounded-2xl bg-[#f5f7fa] p-5">
              <p className="font-bold text-[#082b57]">
                Planned administrative tasks
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>• Upload a member photograph</p>
                <p>• Add the member&apos;s full name</p>
                <p>• Add the member ID and contact number</p>
                <p>• Enter a custom designation</p>
                <p>• Assign ranking and display order</p>
                <p>• Edit, hide or delete member records</p>
              </div>
            </div>

            <Link
              href="/admin/members"
              className="mt-7 inline-flex justify-center rounded-full bg-[#082b57] px-6 py-3 font-bold text-white transition hover:bg-[#11823b]"
            >
              Open Member Management
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}