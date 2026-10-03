import { caseStudies } from "@/lib/content";

export default function Work() {
  const total = String(caseStudies.length).padStart(2, "0");
  return (
    <section
      id="work"
      data-hscroll
      aria-labelledby="work-title"
      className="relative overflow-hidden bg-night py-24 text-paper sm:py-32 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0"
    >
      <div className="gutter label absolute inset-x-0 top-24 hidden items-center justify-between text-mist lg:flex">
        <span className="flex items-center gap-3">
          <span className="text-fern">04</span> Selected work
        </span>
        <span>Challenge · Approach · Result</span>
      </div>

      <div
        data-hscroll-track
        className="gutter grid gap-4 sm:grid-cols-2 lg:flex lg:w-max lg:items-stretch lg:gap-6 lg:pr-[10vw]"
      >
        {/* Intro panel */}
        <div className="flex flex-col justify-between gap-10 pb-8 sm:col-span-2 lg:w-[38vw] lg:shrink-0 lg:pb-0 lg:pr-10">
          <p className="label flex items-center gap-3 text-mist lg:invisible">
            <span className="text-fern">04</span> Selected work
          </p>
          <h2
            id="work-title"
            data-split
            className="display text-[14vw] sm:text-[10vw] lg:text-[5.6vw]"
          >
            Ambiguity in, <span className="serif-italic text-fern">structure out.</span>
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-mist">
            {caseStudies.length} case studies — each one a gap I found, the system I built, and what
            changed.
            <span className="label mt-6 hidden items-center gap-3 text-fern lg:flex">
              Keep scrolling <span aria-hidden="true">→</span>
            </span>
          </p>
        </div>

        {caseStudies.map((c, i) => (
          <article
            key={c.title}
            data-reveal
            className="group flex flex-col gap-6 rounded-3xl border border-mist/10 bg-pine p-6 transition-colors duration-500 hover:border-fern/40 sm:p-8 lg:w-[27rem] lg:shrink-0 xl:w-[30rem]"
          >
            <div className="flex items-center justify-between">
              <span className="label text-mist">
                {String(i + 1).padStart(2, "0")} / {total}
              </span>
              <span className="label rounded-full border border-fern/30 px-3 py-1.5 text-fern">
                {c.org}
              </span>
            </div>
            <h3 className="display text-[2rem] leading-[1] sm:text-[2.4rem]">{c.title}</h3>
            <dl className="grid gap-4 text-[0.95rem] leading-relaxed text-mist">
              {(
                [
                  ["Challenge", c.challenge],
                  ["Approach", c.approach],
                  ["Result", c.result],
                ] as const
              ).map(([k, v]) => (
                <div key={k}>
                  <dt className="label mb-1 text-fern">{k}</dt>
                  <dd className={k === "Result" ? "text-paper" : ""}>{v}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {c.tags.map((t) => (
                <li key={t} className="rounded-full bg-night/70 px-3 py-1 text-xs text-mist">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="gutter mt-10 hidden lg:block">
        <div className="relative h-px bg-mist/15">
          <span data-hscroll-progress className="absolute inset-0 origin-left scale-x-0 bg-fern" />
        </div>
      </div>
    </section>
  );
}
