import Image from "next/image";
import portrait from "@/public/images/oluwatosin-dada-portrait.jpg";
import { person, chapters } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      data-hero
      aria-label="Introduction"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0a1712] text-paper"
    >
      {/* soft glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_50%_45%,#03190f_0%,#02130b_45%,#0a1712_100%)]"
      />

      <div className="gutter relative flex flex-1 flex-col pb-6 pt-24 sm:pt-28">
        <div className="label grid grid-cols-2 gap-4 text-mist sm:grid-cols-3" data-hero-fade>
          <span>Portfolio · {new Date().getFullYear()}</span>
          <span className="hidden text-center sm:block">
            {person.disciplines.join(" · ")}
          </span>
          <span className="text-right">{person.location}</span>
        </div>

        {/* Portrait */}
        <div
          data-hero-img
          className="feather absolute left-1/2 top-[13svh] -z-0 aspect-[2/3] h-[50svh] -translate-x-1/2 overflow-hidden sm:top-[14svh] sm:h-[60svh] lg:h-[64svh]"
        >
          <Image
            src={portrait}
            alt="Portrait of Oluwatosin Dada, HR professional, in a blue dress with arms crossed"
            fill
            preload
            fetchPriority="high"
            placeholder="blur"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 70vw"
            className="object-cover object-top"
          />
        </div>

        <div className="relative z-10 mt-auto">
          <h1
            aria-label={person.name}
            className="display text-[18.5vw] leading-[0.8] sm:text-[16vw] lg:text-[15vw]">
            <span data-hero-line="1" className="block whitespace-nowrap">
              {person.firstName}
            </span>
            <span
              data-hero-line="2"
              className="serif-italic block whitespace-nowrap pr-[0.04em] text-right text-fern"
            >
              {person.lastName}
            </span>
          </h1>

          <div className="mt-6 grid gap-6 border-t border-mist/15 pt-5 sm:mt-8 sm:grid-cols-3 sm:items-end">
            <p
              data-hero-fade
              className="serif-italic max-w-xs text-2xl leading-tight text-paper sm:text-[1.7rem]"
            >
              {person.positioning}
            </p>

            <a
              href="#profile"
              data-hero-fade
              className="label group hidden flex-col items-center gap-3 justify-self-center text-mist sm:flex"
            >
              <span>Scroll</span>
              <span className="relative block h-12 w-px overflow-hidden bg-mist/20">
                <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-fern" />
              </span>
            </a>

            <dl data-hero-fade className="grid gap-1 text-sm text-mist sm:justify-self-end sm:text-right">
              <dt className="label text-fern">Currently</dt>
              <dd className="text-paper">
                {person.role}, {chapters[1].short}
              </dd>
              <dt className="sr-only">Previously</dt>
              <dd>Previously HR / Admin Officer, {chapters[0].short}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
