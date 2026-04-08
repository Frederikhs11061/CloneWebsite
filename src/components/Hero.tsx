import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";
import { ClaimUrlInput } from "@/components/ClaimUrlInput";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 pt-20 pb-0 md:pt-24">
        <SectionBadge className="mb-10">
          <span>Join 8K+ people on</span>
          <span className="font-bold italic">pop site*</span>
        </SectionBadge>

        <h1 className="text-center text-[56px] font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[80px] md:text-[110px] lg:text-[120px]">
          Make a stunning
          <br />
          site, easily
        </h1>

        <p className="mt-8 max-w-[640px] text-center text-[17px] font-medium leading-[1.4] text-muted-foreground md:text-[18px]">
          Used by 8,000+ people &amp; businesses in 50+ countries.
          <br />
          Built-in Analytics, SEO, Forms and more.
        </p>

        <div className="mt-10 w-full max-w-[560px]">
          <ClaimUrlInput />
        </div>

        {/* Phone mockup row */}
        <div className="relative mt-16 flex w-full items-end justify-center">
          <div className="relative">
            <Image
              src="/images/a9gc2DlbpkkZlsKZRlBfRklZyY.png"
              alt="Pop Site phone frame"
              width={534}
              height={784}
              priority
              className="relative z-10 w-[320px] md:w-[440px] lg:w-[500px] h-auto"
            />
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[48px]">
              <Image
                src="/images/B5hQQjZTaCqWNhCywO7Tsyfslc.jpg"
                alt="Pop Site website example"
                width={252}
                height={547}
                className="absolute left-1/2 top-[6%] w-[82%] -translate-x-1/2 rounded-[32px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
