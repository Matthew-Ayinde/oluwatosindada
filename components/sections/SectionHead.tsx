type Props = {
  index: string;
  label: string;
  aside?: string;
  tone?: "light" | "dark";
};

export default function SectionHead({ index, label, aside, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className="mb-10 sm:mb-16">
      <div
        className={`label flex items-center justify-between gap-6 pb-4 ${dark ? "text-mist" : "text-ink/70"}`}
      >
        <span className="flex items-center gap-3">
          <span className={dark ? "text-fern" : "text-moss"}>{index}</span>
          <span>{label}</span>
        </span>
        {aside && <span className="hidden text-right sm:block">{aside}</span>}
      </div>
      <div data-rule className={`h-px w-full ${dark ? "bg-mist/20" : "bg-ink/15"}`} />
    </div>
  );
}
