import SectionHead from "./SectionHead";
import { manifesto, profile, stats, person } from "@/lib/content";

export default function Profile() {
  return (
    <section id="profile" aria-labelledby="profile-title" className="gutter bg-paper pb-24 pt-24 sm:pb-36 sm:pt-32">
      <SectionHead index="01" label="Profile" aside="People · Process · Performance" />

      <h2 id="profile-title" className="sr-only">
        Professional profile
      </h2>
      <p
        data-words
        className="display max-w-[30ch] text-[9.5vw] leading-[1] tracking-[-0.03em] sm:text-[6.2vw] lg:text-[5vw]"
      >
        {manifesto}
      </p>

      <div className="mt-16 grid gap-10 sm:mt-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label mb-4 text-moss">Disciplines</p>
          <ul data-stagger className="flex flex-wrap gap-2">
            {[...person.disciplines, "Employee Relations", "Governance", "Compliance"].map((d) => (
              <li key={d} className="rounded-full border border-ink/15 px-4 py-2 text-sm">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div data-stagger className="grid gap-6 text-lg leading-relaxed text-ink/80 sm:grid-cols-2 lg:col-span-8">
          {profile.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>

      {/* Numbers */}
      <div className="mt-24 sm:mt-36">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h3 data-split className="display max-w-[14ch] text-5xl sm:text-6xl lg:text-7xl">
            Proof, <span className="serif-italic text-moss">in numbers.</span>
          </h3>
          <p className="label hidden max-w-[30ch] text-right text-ink/60 sm:block">
            Across a corporate PLC and a growing technology firm
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-px border-y border-ink/15 bg-ink/15 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              data-stagger
              className="flex flex-col justify-between gap-6 bg-paper py-8 pr-4 even:pl-4 sm:py-10 sm:even:pl-8 lg:px-8 lg:even:pl-8 lg:[&:nth-child(3n+1)]:pl-0"
            >
              <dt className="order-2">
                <span className="block text-sm leading-snug text-ink/80 sm:text-base">{s.label}</span>
                <span className="label mt-2 block text-moss">{s.note}</span>
              </dt>
              <dd
                data-count={s.value}
                data-prefix={s.prefix}
                data-suffix={s.suffix}
                className="display order-1 text-[15vw] tabular-nums sm:text-[11vw] lg:text-[7vw]"
              >
                {s.prefix}
                {s.value.toLocaleString("en-NG")}
                {s.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
