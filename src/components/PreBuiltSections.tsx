import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";
import { ClaimUrlInput } from "@/components/ClaimUrlInput";

const PREVIEW_TILES = [
  { src: "/images/yXQTefuZSquJukQGCEdJtRYAGY.jpg", alt: "Links" },
  { src: "/images/q3i7KD0X92kfWz1q2P04yM3Xo.jpg", alt: "Projects" },
  { src: "/images/UULPtA9o5Ayr3aoUSkUtiRrkPs.jpg", alt: "Services" },
  { src: "/images/g0DwN5mvHLQB8kirz2aWP8ex9PU.jpg", alt: "Gallery" },
  { src: "/images/3uePkZoyUfBUEH6sP13baAlRo0.jpg", alt: "Socials" },
  { src: "/images/PNnKht5fkykv5VpkXq45bRjfhGk.jpg", alt: "FAQ" },
];

export function PreBuiltSections() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">New</SectionBadge>
          <h2 className="max-w-[900px] text-[44px] font-medium leading-[1.02] tracking-[-0.03em] md:text-[72px] lg:text-[88px]">
            Use Pre-Built
            <br />
            <span className="italic">Sections</span>
          </h2>
          <p className="mt-6 max-w-[600px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Pop Site gives you stunning prebuilt sections to build your site
            effortlessly. Just pick, customize, and publish. No design skills
            needed.
          </p>
        </div>

        {/* Stacked preview carousel */}
        <div className="relative mt-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {PREVIEW_TILES.map((tile) => (
            <div
              key={tile.src}
              className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                width={248}
                height={280}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <ClaimUrlInput />
        </div>
      </div>
    </section>
  );
}
