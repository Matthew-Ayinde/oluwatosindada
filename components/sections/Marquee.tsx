type Props = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

function Row({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="whitespace-nowrap px-[0.35em]">{item}</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-[0.5em] shrink-0 fill-current opacity-70"
          >
            <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee({ items, reverse, className = "" }: Props) {
  return (
    <div
      data-marquee={reverse ? "reverse" : ""}
      className={`overflow-hidden ${className}`}
    >
      <div data-marquee-track className="marquee-track">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}
