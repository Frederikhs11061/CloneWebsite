import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";
import { ClaimUrlInput } from "@/components/ClaimUrlInput";

export function EasiestWay() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">
            <span>Join thousands on</span>
            <span className="font-bold italic">pop site*</span>
          </SectionBadge>
          <h2 className="max-w-[1000px] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[64px] lg:text-[80px]">
            The easiest way to build a
            <br />
            <span className="italic">quality personal site</span>
          </h2>
          <p className="mt-6 max-w-[720px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            No complicated tools, no hidden fees. Just a fast way to create a
            stunning site in minutes. Professionals love it, and you will too.
          </p>
          <div className="mt-10">
            <ClaimUrlInput />
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[760px] items-end justify-center">
          <div className="relative w-full overflow-hidden rounded-[16px] border border-border bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <Image
              src="/images/zybVUotjdFEAMWQXMnOLeDIEPo.jpg"
              alt="Pop Site editor preview"
              width={760}
              height={480}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
