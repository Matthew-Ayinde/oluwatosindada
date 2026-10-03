import { person } from "@/lib/content";
import Marquee from "./Marquee";

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-night text-paper">
      <Marquee
        items={person.targets}
        reverse
        className="border-b border-mist/10 py-5 font-serif text-[8vw] italic text-mist/70 sm:text-[5vw] lg:text-[3.6vw]"
      />

      <div className="gutter pb-8 pt-24 sm:pt-32">
        <p className="label mb-8 flex items-center gap-3 text-mist">
          <span className="text-fern">09</span> Contact
        </p>
        <h2
          id="contact-title"
          data-split="chars"
          className="display max-w-[12ch] text-[16vw] sm:text-[12vw] lg:text-[9vw]"
        >
          Let&rsquo;s build <span className="serif-italic text-fern">structure.</span>
        </h2>

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p data-reveal className="max-w-lg text-lg leading-relaxed text-mist">
              Open to HR Business Partnering, People Operations, HR Strategy, Governance and
              Transformation roles — and to conversations about building people functions that
              scale.
            </p>
            <a
              href={`mailto:${person.email}`}
              data-reveal
              className="link-line mt-10 inline-block whitespace-nowrap font-serif text-[5.6vw] leading-tight text-paper sm:text-[4vw] lg:text-[2.8vw]"
            >
              {person.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
            <a
              href={`mailto:${person.email}`}
              data-magnetic
              className="grid size-36 place-items-center rounded-full bg-fern text-center text-night transition-colors hover:bg-paper sm:size-44"
            >
              <span className="label text-[0.75rem]">
                Write to me
                <span aria-hidden="true" className="mt-2 block text-2xl">↗</span>
              </span>
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer me"
              data-magnetic
              className="grid size-36 place-items-center rounded-full border border-mist/30 text-center transition-colors hover:border-fern hover:text-fern sm:size-44"
            >
              <span className="label text-[0.75rem]">
                LinkedIn
                <span aria-hidden="true" className="mt-2 block text-2xl">↗</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-mist/15 pt-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {person.name} · {person.location}
          </p>
          <p className="label">HR · People Management · Governance</p>
          <a href="#top" className="label link-line self-start text-paper sm:self-auto">
            Back to top ↑
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="display -mb-[0.14em] select-none whitespace-nowrap text-center text-[11.5vw] leading-none text-[#173226]"
      >
        Oluwatosin<span className="serif-italic">Dada</span>
      </p>
    </footer>
  );
}
