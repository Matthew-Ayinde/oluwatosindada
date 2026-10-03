import Image from "next/image";
import profilePhoto from "@/public/images/oluwatosin-dada-profile.jpg";

export default function Quote() {
  return (
    <section aria-labelledby="quote-title" className="gutter relative overflow-hidden bg-paper py-24 sm:py-36">
      <span
        aria-hidden="true"
        data-speed="0.85"
        className="serif-italic pointer-events-none absolute -left-[0.08em] top-6 select-none text-[48vw] leading-none text-sage lg:text-[30vw]"
      >
        &ldquo;
      </span>

      <div className="relative grid items-center gap-14 lg:grid-cols-12">
        <figure className="lg:col-span-7">
          <p className="label mb-8 text-moss">Known at Xown Solutions as</p>
          <blockquote>
            <h2
              id="quote-title"
              data-split="chars"
              className="display text-[16vw] sm:text-[12vw] lg:text-[8.4vw]"
            >
              The People&rsquo;s <span className="serif-italic text-moss">Champion.</span>
            </h2>
            <p data-reveal className="mt-10 max-w-xl text-xl leading-relaxed text-ink/80 sm:text-2xl">
              I foster collaboration, transparency and continuous improvement through proactive
              leadership and empathy-driven management.
            </p>
          </blockquote>
          <figcaption data-reveal className="label mt-8 flex items-center gap-3 text-ink/60">
            <span className="h-px w-10 bg-ink/40" /> Oluwatosin Dada
          </figcaption>
        </figure>

        <div className="lg:col-span-4 lg:col-start-9">
          <div data-img className="relative aspect-[2/3] overflow-hidden rounded-[2rem] bg-night">
            <div data-img-inner className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src={profilePhoto}
                alt="Side profile portrait of Oluwatosin Dada wearing a pearl necklace"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
