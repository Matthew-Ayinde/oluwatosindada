import SectionHead from "./SectionHead";
import { tools, advisory } from "@/lib/content";

export default function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-title" className="gutter bg-sage py-24 sm:py-36">
      <SectionHead index="07" label="Systems & advisory" aside="Data-led, digital-first HR" />

      <div className="grid gap-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <h2 id="toolkit-title" data-split className="display text-5xl sm:text-6xl lg:text-7xl">
            The <span className="serif-italic text-moss">toolkit.</span>
          </h2>
          <ul className="mt-10 border-t border-ink/20">
            {tools.map((t) => (
              <li
                key={t.name}
                data-reveal
                className="grid gap-1 border-b border-ink/20 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <span className="font-serif text-2xl">{t.name}</span>
                <span className="text-ink/75 sm:pt-1">{t.use}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <h2 data-split className="display text-5xl sm:text-6xl lg:text-7xl">
            Where leaders <span className="serif-italic text-moss">lean in.</span>
          </h2>
          <p data-reveal className="mt-6 text-lg leading-relaxed text-ink/75">
            Beyond administration, I give management structured reports, recommendations and
            implementation support on:
          </p>
          <ol className="mt-8 grid gap-3">
            {advisory.map((a, i) => (
              <li
                key={a}
                data-reveal
                className="flex items-center gap-5 rounded-2xl bg-paper px-5 py-4 transition-transform duration-500 hover:-translate-y-0.5"
              >
                <span className="display w-8 text-3xl text-moss">{i + 1}</span>
                <span className="text-base sm:text-lg">{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
