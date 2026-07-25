import Link from "next/link";

export default function AdminNewsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#10243e]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e96f17]">
              SAMVAAD Admin
            </p>

            <h1 className="mt-1 text-xl font-bold text-[#082b57]">
              News Management
            </h1>
          </div>

          <Link
            href="/admin"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#082b57] hover:border-[#e96f17] hover:text-[#e96f17]"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
            News Workspace
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#082b57]">
            News upload system coming next
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            This page will contain the news-image upload, headline, caption,
            category and publishing controls.
          </p>

          <button
            type="button"
            disabled
            className="mt-7 rounded-full bg-slate-200 px-6 py-3 font-bold text-slate-500"
          >
            Create News Post — Coming Next
          </button>
        </div>
      </section>
    </main>
  );
}