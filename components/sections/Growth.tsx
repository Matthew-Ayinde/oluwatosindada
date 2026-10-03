import SectionHead from "./SectionHead";
import { growth, learning, certifications } from "@/lib/content";

export default function Growth() {
  return (
    <section id="growth" aria-labelledby="growth-title" className="gutter bg-paper py-24 sm:py-36">
      <SectionHead index="08" label="Professional development" aside="Membership · Certification · MBA" />

      <h2
        id="growth-title"
        data-split
        className="display mb-14 max-w-[14ch] text-[13vw] sm:mb-20 sm:text-[9vw] lg:text-[6.6vw]"
      >
        Always, <span className="serif-italic text-moss">in progress.</span>
      </h2>

      <div data-stagger className="grid gap-4 md:grid-cols-3">
        {growth.map((g) => (
          <article
            key={g.title}
            className="group flex flex-col gap-14 rounded-3xl bg-sage p-6 transition-colors duration-500 hover:bg-ink hover:text-paper sm:p-8"
          >
            <p className="label text-moss transition-colors duration-500 group-hover:text-fern">
              {g.kicker}
            </p>
            <div>
              <h3 className="display text-7xl sm:text-8xl">{g.title}</h3>
              <p className="mt-3 font-medium">{g.sub}</p>
              <p className="mt-4 text-sm leading-relaxed opacity-80">{g.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-14 sm:mt-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h3 className="label mb-6 text-moss">Current learning orientation</h3>
          <ul data-stagger className="flex flex-wrap gap-2">
            {learning.map((l) => (
              <li key={l} className="rounded-full border border-ink/15 px-4 py-2 text-sm">
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <h3 className="label mb-6 text-moss">Certifications & training</h3>
          <ul className="border-t border-ink/15">
            {certifications.map((c) => (
              <li
                key={c.title}
                data-reveal
                className="grid grid-cols-[4rem_1fr] gap-4 border-b border-ink/15 py-5"
              >
                <span className="label pt-1.5 text-ink/60">{c.year}</span>
                <span>
                  <span className="block font-serif text-xl leading-snug">{c.title}</span>
                  <span className="text-sm text-ink/70">{c.org}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
