import SectionHead from "./SectionHead";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="gutter bg-sage py-24 sm:py-36"
    >
      <SectionHead index="02" label="Capability map" aside="Six disciplines" />

      <div className="mb-12 grid gap-8 sm:mb-20 lg:grid-cols-12 lg:items-end">
        <h2
          id="capabilities-title"
          data-split
          className="display text-[13vw] sm:text-[9vw] lg:col-span-8 lg:text-[6.6vw]"
        >
          One operating system <span className="serif-italic text-moss">for people.</span>
        </h2>
        <p data-reveal className="max-w-md text-lg leading-relaxed text-ink/75 lg:col-span-4">
          From the first interview to the final clearance form, I work across the full employee
          lifecycle and the business systems that hold it together.
        </p>
      </div>

      <ol className="border-t border-ink/20">
        {capabilities.map((c, i) => (
          <li
            key={c.title}
            className="cap-row relative isolate grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 border-b border-ink/20 py-7 transition-colors duration-500 sm:grid-cols-[5rem_1fr_1fr] sm:py-10 lg:grid-cols-[6rem_1.3fr_1fr_3rem] lg:px-4"
          >
            <span className="cap-index label pt-2 text-moss transition-colors duration-500">
              0{i + 1}
            </span>
            <h3 className="display text-3xl sm:text-4xl lg:text-5xl">{c.title}</h3>
            <p className="col-start-2 max-w-md text-base leading-relaxed opacity-80 sm:col-start-3 sm:pt-2">
              {c.body}
            </p>
            <span
              aria-hidden="true"
              className="hidden self-start pt-2 text-2xl transition-transform duration-500 lg:block lg:group-hover:translate-x-1"
            >
              ↘
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
