import { SectionBadge } from "@/components/SectionBadge";
import { PlayIcon } from "@/components/icons";

export function VideoThemes() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-6">New Video</SectionBadge>
          <h2 className="max-w-[900px] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[60px] lg:text-[72px]">
            Themes that make you
            <br />
            <span className="italic">look incredible</span>
          </h2>
          <p className="mt-5 text-[16px] text-muted-foreground md:text-[18px]">
            See how themes work on Pop Site.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-video w-full max-w-[1000px] overflow-hidden rounded-[24px] border border-border bg-black shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
          <video
            className="h-full w-full object-cover"
            poster="/images/pcuazrEIpAoQPBPbCjblc9C1YJY.png"
            controls
            preload="metadata"
            playsInline
          >
            <source src="/videos/ijpNx6T2exFmN0FMGSH60oT3rlA.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl">
              <PlayIcon className="ml-1 h-7 w-7 text-foreground" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
