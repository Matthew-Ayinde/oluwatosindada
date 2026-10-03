import SectionHead from "./SectionHead";
import { savings } from "@/lib/content";

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function Ledger() {
  return (
    <section id="savings" aria-labelledby="savings-title" className="gutter bg-paper py-24 sm:py-36">
      <SectionHead index="06" label="Cost optimisation" aside="Vendor negotiation · Xown Solutions" />

      <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
        <h2
          id="savings-title"
          data-split
          className="display text-[13vw] sm:text-[9vw] lg:col-span-7 lg:text-[6.6vw]"
        >
          Negotiated, <span className="serif-italic text-moss">not accepted.</span>
        </h2>
        <div className="lg:col-span-4 lg:col-start-9">
          <p
            data-count="320000"
            data-prefix="₦"
            data-suffix="+"
            className="display text-6xl tabular-nums text-moss sm:text-7xl"
          >
            ₦320,000+
          </p>
          <p className="mt-3 text-ink/75">
            In immediate savings on two furniture purchases, plus recurring reductions on AC and
            generator servicing — across 4 vendors.
          </p>
        </div>
      </div>

      <div role="table" aria-label="Negotiated supplier rates" className="border-t border-ink/20">
        <div role="row" className="label hidden grid-cols-12 gap-6 border-b border-ink/20 py-4 text-ink/60 sm:grid">
          <span role="columnheader" className="col-span-4">Item</span>
          <span role="columnheader" className="col-span-3 text-right">Quoted</span>
          <span role="columnheader" className="col-span-3 text-right">Negotiated</span>
          <span role="columnheader" className="col-span-2 text-right">Saved</span>
        </div>
        {savings.map((s) => {
          const pct = Math.round(((s.from - s.to) / s.from) * 100);
          return (
            <div
              role="row"
              key={s.item}
              data-ledger-row
              className="grid grid-cols-2 items-baseline gap-x-6 gap-y-2 border-b border-ink/20 py-6 sm:grid-cols-12 sm:py-8"
            >
              <span role="cell" className="col-span-2 sm:col-span-4">
                <span className="block font-serif text-2xl sm:text-3xl">{s.item}</span>
                <span className="label mt-1 block text-moss">{s.kind}</span>
              </span>
              <span role="cell" className="relative justify-self-start text-xl text-ink/50 sm:col-span-3 sm:justify-self-end sm:text-2xl">
                <span className="sr-only">Quoted at </span>
                {naira(s.from)}
                <span
                  data-strike
                  aria-hidden="true"
                  className="absolute inset-x-[-4%] top-1/2 h-[2px] -rotate-3 bg-moss"
                />
              </span>
              <span role="cell" data-after className="display justify-self-end text-3xl sm:col-span-3 sm:text-4xl">
                <span className="sr-only">Negotiated to </span>
                {naira(s.to)}
              </span>
              <span
                role="cell"
                data-after
                className="col-span-2 justify-self-end rounded-full bg-moss px-3 py-1 text-sm text-paper sm:col-span-2"
              >
                −{pct}%
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
