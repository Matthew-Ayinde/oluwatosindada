import SectionHead from "./SectionHead";
import { chapters, earlier, education } from "@/lib/content";

export default function Career() {
  return (
    <section id="career" aria-labelledby="career-title" className="gutter bg-paper py-24 sm:py-36">
      <SectionHead index="03" label="Career" aside="Two chapters, one direction" />

      <h2
        id="career-title"
        data-split
        className="display mb-20 max-w-[16ch] text-[13vw] sm:mb-28 sm:text-[9vw] lg:text-[6.6vw]"
      >
        From running the process to <span className="serif-italic text-moss">designing it.</span>
      </h2>

      <div className="flex flex-col gap-24 sm:gap-36">
        {chapters.map((c) => (
          <article
            key={c.id}
            data-pin-parent
            aria-labelledby={`${c.id}-title`}
            className="grid gap-10 lg:grid-cols-12 lg:gap-8"
          >
            <header data-pin className="self-start lg:col-span-5">
              <p className="label mb-6 flex items-center gap-3 text-moss">
                <span>Chapter {c.numeral}</span>
                <span className="h-px w-10 bg-moss/50" />
                <span className="text-ink/60">{c.place}</span>
              </p>
              <p
                aria-hidden="true"
                className="display whitespace-nowrap text-[17vw] leading-[0.8] text-ink sm:text-[13vw] lg:text-[8vw]"
              >
                {c.years.split("—")[0]}
                <span className="serif-italic text-moss">—{c.years.split("—")[1]}</span>
              </p>
              <h3 id={`${c.id}-title`} className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
                {c.company}
              </h3>
              <p className="mt-2 text-lg text-ink/80">{c.role}</p>
              <p className="label mt-4 text-ink/60">{c.period}</p>
              <p className="mt-6 max-w-sm border-l-2 border-moss pl-4 text-sm leading-relaxed text-ink/75">
                {c.focus}
              </p>
            </header>

            <div className="lg:col-span-6 lg:col-start-7">
              <p data-reveal className="text-xl leading-relaxed sm:text-2xl">
                {c.intro}
              </p>

              <dl className="mt-12 border-t border-ink/15">
                {c.scope.map((s) => (
                  <div
                    key={s.label}
                    data-reveal
                    className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4"
                  >
                    <dt className="text-ink/75">{s.label}</dt>
                    <dd className="display shrink-0 text-3xl sm:text-4xl">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <h4 className="label mb-6 mt-14 text-moss">Key contributions</h4>
              <ol data-stagger className="grid gap-5">
                {c.contributions.map((item, i) => (
                  <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-2 text-base leading-relaxed">
                    <span className="label pt-1.5 text-ink/50">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>

              <h4 className="label mb-6 mt-14 text-moss">{c.extraTitle}</h4>
              <ul data-stagger className="flex flex-wrap gap-2">
                {c.extra.map((x) => (
                  <li key={x} className="rounded-full bg-sage px-4 py-2 text-sm">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Earlier path */}
      <div className="mt-28 sm:mt-40">
        <div className="mb-10 grid gap-6 lg:grid-cols-12">
          <h3 data-split className="display text-5xl sm:text-6xl lg:col-span-5 lg:text-7xl">
            The road <span className="serif-italic text-moss">here.</span>
          </h3>
          <p data-reveal className="max-w-lg text-lg leading-relaxed text-ink/75 lg:col-span-6 lg:col-start-7">
            Before HR, I supported a CEO as Executive Assistant and Strategy Officer, and worked
            across public-health monitoring, evaluation and data roles — grounding in accurate
            records, reporting and stakeholder communication that I still lean on.
          </p>
        </div>
        <ol className="border-t border-ink/15">
          {earlier.map((e) => (
            <li
              key={e.role + e.period}
              data-reveal
              className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-12 sm:gap-6"
            >
              <span className="label pt-1 text-moss sm:col-span-3">{e.period}</span>
              <span className="font-serif text-xl leading-snug sm:col-span-4 sm:text-2xl">{e.role}</span>
              <span className="text-ink/70 sm:col-span-5">
                <span className="block font-medium text-ink">{e.org}</span>
                {e.note}
              </span>
            </li>
          ))}
          {education.map((e) => (
            <li
              key={e.title}
              data-reveal
              className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-12 sm:gap-6"
            >
              <span className="label pt-1 text-moss sm:col-span-3">{e.year}</span>
              <span className="font-serif text-xl leading-snug sm:col-span-4 sm:text-2xl">{e.title}</span>
              <span className="text-ink/70 sm:col-span-5">{e.org}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
