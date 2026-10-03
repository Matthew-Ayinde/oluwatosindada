import SectionHead from "./SectionHead";
import { iso } from "@/lib/content";

export default function Iso() {
  return (
    <section
      id="iso"
      aria-labelledby="iso-title"
      className="relative overflow-hidden bg-night py-24 text-paper sm:py-36"
    >
      <div className="gutter">
        <SectionHead index="05" label="ISO certification documentation" aside="Submitted to Amtivo" tone="dark" />
      </div>

      {/* Standard codes: sized to fit on small screens, drift sideways on desktop only */}
      <div aria-hidden="true" className="flex flex-col gap-2 select-none overflow-hidden">
        <p
          data-drift="-18"
          className="display whitespace-nowrap pl-[var(--gutter)] text-[13vw] text-fern lg:text-[13vw]"
        >
          ISO 9001<span className="serif-italic">:2015</span>
        </p>
        <p
          data-drift="12"
          className="display whitespace-nowrap pl-[var(--gutter)] text-[9.2vw] text-mist/70 lg:outline-text lg:pl-[18vw] lg:text-[13vw]"
        >
          ISO/IEC 27001<span className="serif-italic">:2022</span>
        </p>
      </div>

      <div className="gutter mt-16 grid gap-14 sm:mt-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="iso-title" data-split className="display text-5xl sm:text-6xl lg:text-[4.2vw]">
            HR, beyond <span className="serif-italic text-fern">the remit.</span>
          </h2>
          <p data-reveal className="mt-8 text-lg leading-relaxed text-mist">
            {iso.intro}
          </p>
          <ul data-stagger className="mt-8 flex flex-wrap gap-2">
            {iso.standards.map((s) => (
              <li key={s.code} className="rounded-full border border-mist/20 px-4 py-2 text-sm">
                <span className="text-fern">{s.code}</span> · {s.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h3 className="label mb-6 text-fern">Documents contributed</h3>
          <ol className="border-t border-mist/15">
            {iso.documents.map((d, i) => (
              <li
                key={d.title}
                data-reveal
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-mist/15 py-6"
              >
                <span className="display text-3xl text-fern">{i + 1}</span>
                <div>
                  <h4 className="font-serif text-2xl leading-tight sm:text-3xl">{d.title}</h4>
                  <p className="mt-2 text-mist">{d.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div data-reveal className="mt-10 rounded-3xl bg-pine p-6 sm:p-8">
            <p className="label mb-3 text-fern">Why this matters</p>
            <p className="leading-relaxed text-mist">{iso.why}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
