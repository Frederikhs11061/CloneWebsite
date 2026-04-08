const LOGOS = [
  "Product Hunt",
  "Indie Hackers",
  "TechCrunch",
  "The Verge",
  "Designer News",
  "Hacker News",
];

export function FeaturedOn() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          As featured on
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-[20px] font-semibold tracking-tight text-foreground/70 md:text-[24px]"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
