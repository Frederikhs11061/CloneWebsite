import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";

export function DesktopMobile() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">New</SectionBadge>
          <h2 className="max-w-[900px] text-[44px] font-medium leading-[1.02] tracking-[-0.03em] md:text-[72px] lg:text-[88px]">
            Desktop &amp; Mobile
          </h2>
          <p className="mt-6 max-w-[640px] text-[22px] font-medium leading-[1.3] text-foreground md:text-[28px]">
            Look incredible on mobile &amp; desktop.
          </p>
          <p className="mt-4 max-w-[600px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Automatically responsive so you look perfect on every device.
          </p>
        </div>

        <div className="relative mt-16 flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-center">
          {/* Desktop frame */}
          <div className="relative w-full max-w-[760px] overflow-hidden rounded-[16px] border border-border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <Image
              src="/images/xYwfKaNeG7urMQUnPh6hUwvl1Yo.jpg"
              alt="Pop Site desktop preview"
              width={760}
              height={480}
              className="h-auto w-full"
            />
          </div>

          {/* Phone overlap */}
          <div className="relative -mt-16 w-[200px] md:-ml-16 md:mt-0 md:w-[240px]">
            <Image
              src="/images/a9gc2DlbpkkZlsKZRlBfRklZyY.png"
              alt="Phone frame"
              width={534}
              height={784}
              className="relative z-10 h-auto w-full"
            />
            <Image
              src="/images/RozrUikLcv6hJxoOewwdO4GstOE.jpg"
              alt="Mobile preview"
              width={297}
              height={645}
              className="absolute left-1/2 top-[5%] z-0 h-auto w-[82%] -translate-x-1/2 rounded-[28px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
