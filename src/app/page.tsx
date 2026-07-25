import Image from "next/image";
import Link from "next/link";

const latestNews = [
  {
    category: "National",
    title: "Understanding India Beyond the Headlines",
    caption:
      "A clearer view of the policies, developments and conversations shaping the nation.",
    date: "Coming Soon",
    background:
      "linear-gradient(135deg, #082b57 0%, #174d7c 65%, #f47a20 100%)",
  },
  {
    category: "International",
    title: "The World and Why It Matters to India",
    caption:
      "International events explained through their wider impact on India and its youth.",
    date: "Coming Soon",
    background:
      "linear-gradient(135deg, #102f52 0%, #176b75 65%, #11823b 100%)",
  },
  {
    category: "Regional",
    title: "Voices and Developments from Bengal",
    caption:
      "Regional affairs, public issues and stories that deserve informed attention.",
    date: "Coming Soon",
    background:
      "linear-gradient(135deg, #192f50 0%, #79551e 60%, #ee7218 100%)",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#10243e]">
      {/* Navigation Bar */}
      <header className="border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-5 sm:py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
             src="/samvaad-logo.png"
             alt="SAMVAAD logo"
             width={62}
             height={62}
             className="h-14 w-14 rounded-full border border-slate-200 bg-white object-cover p-1"
             preload
             />

            <div>
              <p className="text-xl font-bold tracking-[0.16em] text-[#082b57]">
                SAMVAAD
              </p>
              <p className="hidden text-xs text-slate-500 md:block">
                Informing Youth, Empowering Nation
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-2 text-[11px] font-semibold text-slate-700 sm:gap-5 sm:text-sm lg:gap-7">
            <Link
              href="/"
              className="text-[#e96f17] transition hover:text-[#082b57]"
            >
              Home
            </Link>

            <Link
              href="/latest-news"
              className="transition hover:text-[#e96f17]"
            >
              Latest News
            </Link>

            <Link
              href="/about-us"
              className="transition hover:text-[#e96f17]"
            >
              About Us
            </Link>
            <Link
                href="/admin"
                className="rounded-full bg-[#082b57] px-3 py-2 text-white transition hover:bg-[#e96f17] sm:px-4"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c95c10]">
              Youth • Current Affairs • Civic Awareness
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#082b57] sm:text-5xl lg:text-6xl">
              Beyond Headlines.
              <span className="block text-[#e96f17]">
                Towards Understanding.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              SAMVAAD helps young people understand national, international
              and regional developments through clear information, meaningful
              context and responsible dialogue.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/latest-news"
                className="rounded-full bg-[#082b57] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#123f70]"
              >
                Explore Latest News
              </Link>

              <Link
                href="/about-us"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-[#082b57] transition hover:border-[#e96f17] hover:text-[#e96f17]"
              >
                Discover SAMVAAD
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[270px] w-[270px] max-w-full items-center justify-center rounded-full border border-slate-100 bg-white p-6 shadow-[0_30px_80px_rgba(8,43,87,0.14)] sm:h-[340px] sm:w-[340px] sm:p-8 lg:h-[420px] lg:w-[420px]">
              <div className="absolute inset-5 rounded-full border border-dashed border-orange-200" />

              <Image
              src="/samvaad-logo.png"
              alt="SAMVAAD — Informing Youth, Empowering Nation"
              width={420}
              height={420}
              className="relative h-full w-full rounded-full bg-white object-cover"
              preload
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section id="latest" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
              Stay Informed
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#082b57] sm:text-4xl">
              Latest from SAMVAAD
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Important developments presented with clarity, context and a
              youth-focused perspective.
            </p>
          </div>

          <Link
            href="/latest-news"
            className="font-bold text-[#082b57] transition hover:text-[#e96f17]"
          >
            View all news →
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((news) => (
            <article
              key={news.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="relative flex h-56 items-end overflow-hidden p-6"
                style={{ background: news.background }}
              >
                <div className="absolute inset-0 bg-black/10" />

                <div className="relative">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#082b57]">
                    {news.category}
                  </span>

                  <p className="mt-5 text-sm font-semibold tracking-[0.18em] text-white/80">
                    SAMVAAD NEWS
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#e96f17]">
                  {news.date}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-7 text-[#082b57]">
                  {news.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{news.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#082b57]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              News should create understanding—not confusion.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-blue-100">
            <p>
              In a world filled with constant headlines and fragmented
              information, SAMVAAD provides young people with context,
              balanced perspectives and responsible explanations.
            </p>

            <p>
              We explain what happened, why it matters and how it may influence
              India, its regions and the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
            Dialogue for an Informed Generation
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#082b57] sm:text-4xl">
            Rooted in Bharat. Aware of the World.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            SAMVAAD is a growing community of young writers, researchers,
            speakers and responsible citizens working together to understand
            the present and contribute towards a stronger future.
          </p>

          <Link
            href="/about-us"
            className="mt-8 inline-flex rounded-full border border-[#082b57] px-7 py-3.5 text-sm font-bold text-[#082b57] transition hover:bg-[#082b57] hover:text-white"
          >
            Read About Us
          </Link>
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
              width={58}
              height={58}
              className="h-14 w-14 rounded-full border border-white/20 bg-white object-cover p-1"
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