import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  {
    number: "01",
    title: "National Affairs",
    description:
      "Important developments concerning governance, public policy, the economy and society across India.",
  },
  {
    number: "02",
    title: "International Affairs",
    description:
      "Global events explained through their wider relevance to India and its young citizens.",
  },
  {
    number: "03",
    title: "Regional Affairs",
    description:
      "Stories, developments and public issues emerging from Bengal and other regions of India.",
  },
  {
    number: "04",
    title: "Youth Awareness",
    description:
      "Content designed to encourage informed thinking, responsible dialogue and active citizenship.",
  },
];

const principles = [
  "Clarity before complexity",
  "Context beyond headlines",
  "Dialogue over division",
  "Facts over sensationalism",
  "Youth participation and leadership",
  "Respect for diverse perspectives",
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#10243e]">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-5 sm:py-4 lg:px-8">
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

            <Link
              href="/latest-news"
              className="transition hover:text-[#e96f17]"
            >
              Latest News
            </Link>

            <Link href="/about-us" className="text-[#e96f17]">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#082b57]">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-green-500/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
              About SAMVAAD
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Building an informed generation through responsible dialogue.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              SAMVAAD is a youth-focused current-affairs and civic-awareness
              organisation committed to making national, international and
              regional developments easier to understand.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/15 bg-white p-7 shadow-2xl sm:h-80 sm:w-80">
              <div className="absolute inset-4 rounded-full border border-dashed border-orange-300/50" />

              <Image
                src="/samvaad-logo.png"
                alt="SAMVAAD organisation logo"
                width={320}
                height={320}
                className="relative h-full w-full rounded-full bg-white object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#082b57] sm:text-4xl">
              More than a news platform.
            </h2>

            <div className="mt-8 rounded-3xl bg-[#f4f7fb] p-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e96f17]">
                Our Tagline
              </p>

              <p className="mt-3 text-2xl font-bold text-[#082b57]">
                Informing Youth,
                <span className="block text-[#e96f17]">
                  Empowering Nation.
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              In a world filled with constant headlines, fragmented
              information and misinformation, we believe young people need
              more than news. They need context, clarity and balanced
              perspectives.
            </p>

            <p>
              SAMVAAD aims to explain not only what is happening, but also why
              it is happening, why it matters and what may happen next.
            </p>

            <p>
              Our work covers politics, governance, international affairs, the
              economy, science, technology, education, society, the environment
              and regional developments.
            </p>

            <p>
              Through simplified information, responsible analysis and
              youth-led contributions, we seek to build a generation capable
              of thinking critically and participating meaningfully in
              society.
            </p>
          </div>
        </div>
      </section>

      {/* Meaning of Samvaad */}
      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
            The Meaning Behind Our Name
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#082b57]">
            SAMVAAD means dialogue.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            The name represents our belief that knowledge grows through
            discussion and that progress begins with informed conversation.
            Rooted in the values of Bharat while remaining globally aware,
            SAMVAAD seeks to create a space where facts are respected, diverse
            viewpoints are heard and complex issues are discussed responsibly.
          </p>
        </div>
      </section>


      {/* Founders Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#e96f17]">
              The Minds Behind SAMVAAD
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082b57] sm:text-4xl lg:text-5xl">
              Founded through a shared vision of informed youth and responsible
              dialogue.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              SAMVAAD was founded by Nilaksha Sinha Roy and Arka Chowdhury with
              the belief that young people should not merely consume headlines,
              but understand the ideas, decisions and developments shaping
              society.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {/* Nilaksha Sinha Roy */}
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src="/nilaksha-v2.png"
                  alt="Nilaksha Sinha Roy, Co-Founder of SAMVAAD"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  quality={90}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061d38]/95 via-[#061d38]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                    Co-Founder
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    Nilaksha Sinha Roy
                  </h3>

                  <p className="mt-2 text-sm text-blue-100">
                    Vision, Research and Public Engagement
                  </p>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-8 text-slate-600">
                  Nilaksha Sinha Roy is a student leader, public speaker and
                  current-affairs enthusiast with a strong interest in
                  governance, public policy, infrastructure and national
                  development.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  His vision for SAMVAAD is to make complex events
                  understandable and meaningful for young people. Through
                  research, discussion and responsible communication, he seeks
                  to build a generation that is aware of the present and
                  prepared to contribute towards the future.
                </p>

                <blockquote className="mt-6 border-l-4 border-[#e96f17] pl-5 text-lg font-semibold italic leading-8 text-[#082b57]">
                  “An informed generation does not merely observe the future—it
                  helps shape it.”
                </blockquote>
              </div>
            </article>

            {/* Arka Chowdhury */}
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src="/arka.png"
                  alt="Arka Chowdhury, Co-Founder of SAMVAAD"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061d38]/95 via-[#061d38]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                    Co-Founder
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">Arka Chowdhury</h3>

                  <p className="mt-2 text-sm text-blue-100">
                    Communication, Outreach and Organisational Development
                  </p>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-8 text-slate-600">
                  Arka Chowdhury plays an important role in shaping SAMVAAD’s
                  communication, outreach and public identity.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  With an interest in youth engagement and organisational
                  development, he works towards presenting SAMVAAD’s ideas in a
                  clear, accessible and impactful manner. His vision is to help
                  create a platform where diverse perspectives are respected
                  and meaningful conversations inspire greater awareness.
                </p>

                <blockquote className="mt-6 border-l-4 border-[#11823b] pl-5 text-lg font-semibold italic leading-8 text-[#082b57]">
                  “Dialogue becomes powerful when it informs minds and connects
                  people.”
                </blockquote>
              </div>
            </article>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#082b57] px-7 py-10 text-center text-white sm:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Their Shared Vision
            </p>

            <p className="mx-auto mt-4 max-w-4xl text-xl leading-9 text-blue-50">
              Together, they envision SAMVAAD as a credible youth-led platform
              that brings clarity to national, international and regional
              affairs while encouraging informed dialogue, critical thinking
              and responsible citizenship.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
              What We Cover
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#082b57] sm:text-4xl">
              From the world to the region.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              SAMVAAD connects wider developments with their meaning for India,
              its regions and its young citizens.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-bold tracking-[0.18em] text-[#e96f17]">
                  {area.number}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[#082b57]">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#082b57]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Our Editorial Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Responsible information must be clear, balanced and meaningful.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-blue-100">
              These principles will guide every post and publication produced
              by SAMVAAD.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-semibold text-white"
              >
                <span className="mr-2 text-orange-300">●</span>
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
            Our Community
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#082b57] sm:text-4xl">
            Curious minds working towards a stronger future.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            SAMVAAD aspires to become a growing community of young writers,
            researchers, speakers and responsible citizens working together to
            understand the present and contribute towards a stronger nation.
          </p>

          <Link
            href="/latest-news"
            className="mt-8 inline-flex rounded-full bg-[#082b57] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#123f70]"
          >
            Explore Latest News
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