export default function Preloader() {
  return (
    <div
      data-preloader
      aria-hidden="true"
      className="preloader fixed inset-0 z-[90] flex-col justify-between bg-night text-mist gutter py-6"
    >
      <div className="flex items-start justify-between">
        <span className="label">Oluwatosin Dada</span>
        <span className="label hidden sm:block">HR · People · Structure</span>
      </div>

      <div className="overflow-hidden">
        <p
          data-preloader-word
          className="display text-[18vw] text-paper sm:text-[12vw]"
        >
          People<span className="serif-italic text-fern">,</span>{" "}
          <span className="serif-italic">structured.</span>
        </p>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div className="relative h-px flex-1 bg-mist/20">
          <span
            data-preloader-bar
            className="absolute inset-0 origin-left scale-x-0 bg-fern"
          />
        </div>
        <span
          data-preloader-count
          className="display w-[3.2ch] text-right text-6xl tabular-nums text-paper sm:text-8xl"
        >
          0
        </span>
      </div>
    </div>
  );
}
