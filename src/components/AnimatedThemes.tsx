import { SectionBadge } from "@/components/SectionBadge";

export function AnimatedThemes() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-6">Animated Themes</SectionBadge>
          <h2 className="max-w-[900px] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[60px] lg:text-[72px]">
            Themes that feel
            <br />
            <span className="italic">alive</span>
          </h2>
          <p className="mt-5 max-w-[620px] text-[16px] text-muted-foreground md:text-[18px]">
            Motion-driven templates that add personality to every scroll,
            without slowing your site down.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-video w-full max-w-[1000px] overflow-hidden rounded-[24px] border border-border bg-black shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/93SQYLzKtZptZWQRtVmSw1DFjDY.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
