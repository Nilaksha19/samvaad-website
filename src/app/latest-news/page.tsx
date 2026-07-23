import Image from "next/image";
import Link from "next/link";

const newsPosts = [
  {
    id: 1,
    category: "National",
    headline: "National News and Public Affairs",
    caption:
      "Important developments from across India will appear here with clear and responsible captions.",
    date: "Coming Soon",
    background:
      "linear-gradient(135deg, #082b57 0%, #174d7c 65%, #ef7218 100%)",
  },
  {
    id: 2,
    category: "International",
    headline: "International Affairs",
    caption:
      "Global developments and their relevance to India and young citizens will be presented here.",
    date: "Coming Soon",
    background:
      "linear-gradient(135deg, #102f52 0%, #176b75 65%, #11823b 100%)",
  },
  {
    id: 3,
    category: "Regional",
    headline: "Regional and Bengal Affairs",
    caption:
      "Regional developments, public issues and stories from Bengal will be covered here.",
    date: "Coming Soon",
    background:
      "linear-gradient(135deg, #192f50 0%, #75511e 60%, #ee7218 100%)",
  },
];

export default function LatestNewsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#10243e]">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/samvaad-logo.png"
              alt="SAMVAAD logo"
              width={60}
              height={60}
              className="h-14 w-14 rounded-full border border-slate-200 bg-white object-cover p-1"
            />

            <div>
              <p className="text-xl font-bold tracking-[0.16em] text-[#082b57]">
                SAMVAAD
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                Informing Youth, Empowering Nation
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-2 text-[11px] font-semibold text-slate-700 sm:gap-5 sm:text-sm lg:gap-7">
            <Link href="/" className="transition hover:text-[#e96f17]">
              Home
            </Link>

            <Link href="/latest-news" className="text-[#e96f17]">
              Latest News
            </Link>

            <Link
              href="/about-us"
              className="transition hover:text-[#e96f17]"
            >
              About Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Heading */}
      <section className="relative overflow-hidden bg-[#082b57]">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
            News Without Noise
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Latest News
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            National, international and regional developments presented with
            clarity, context and a youth-focused perspective.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-5 py-6 lg:px-8">
          {["All News", "National", "International", "Regional"].map(
            (category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  index === 0
                    ? "bg-[#082b57] text-white"
                    : "border border-slate-300 bg-white text-[#082b57] hover:border-[#e96f17] hover:text-[#e96f17]"
                }`}
              >
                {category}
              </button>
            ),
          )}
        </div>
      </section>

      {/* News Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
            Recent Publications
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#082b57]">
            From the SAMVAAD Desk
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            These cards are temporary. News images and captions uploaded
            through the future admin dashboard will automatically replace
            them.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="relative flex h-64 items-end p-6"
                style={{ background: post.background }}
              >
                <div className="absolute inset-0 bg-black/10" />

                <div className="relative">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#082b57]">
                    {post.category}
                  </span>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                    SAMVAAD News
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#e96f17]">
                  {post.date}
                </p>

                <h2 className="mt-3 text-xl font-bold leading-7 text-[#082b57]">
                  {post.headline}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {post.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-[#061d38] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/samvaad-logo.png"
                alt="SAMVAAD logo"
                width={60}
                height={60}
                className="h-14 w-14 rounded-full border border-slate-200 bg-white object-cover p-1"
              />

              <div>
                <p className="font-bold tracking-[0.16em]">SAMVAAD</p>
                <p className="mt-1 text-xs text-blue-200">
                  Informing Youth, Empowering Nation
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-orange-300">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-blue-100">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/latest-news" className="hover:text-white">
                Latest News
              </Link>
              <Link href="/about-us" className="hover:text-white">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-orange-300">Contact Us</h3>

            <div className="mt-4 space-y-3 text-sm leading-6 text-blue-100">
              <a
                href="mailto:samvaad.debates@gmail.com"
                className="block hover:text-white"
              >
                samvaad.debates@gmail.com
              </a>

              <div>
                <a href="tel:+918420831948" className="hover:text-white">
                  +91 84208 31948
                </a>

                <span> / </span>

                <a href="tel:+919123898473" className="hover:text-white">
                  +91 91238 98473
                </a>
              </div>

              <p>
                C/15, Millanpally, Dumdum,
                <br />
                Italgacha, Kolkata – 700079
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-orange-300">Follow SAMVAAD</h3>

            <a
              href="https://www.instagram.com/samvaad.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-blue-700 px-5 py-2.5 text-sm font-bold text-blue-100 transition hover:border-orange-300 hover:text-orange-300"
            >
              Instagram · @samvaad.official
            </a>
          </div>
        </div>

        <div className="border-t border-blue-950 px-5 py-5 text-center text-xs text-blue-300">
          © 2026 SAMVAAD. All rights reserved.
        </div>
      </footer>
    </main>
  );
}