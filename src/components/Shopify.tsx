import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";
import { ClaimUrlInput } from "@/components/ClaimUrlInput";

export function Shopify() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">New · Shopify Integration</SectionBadge>
          <h2 className="max-w-[980px] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[64px] lg:text-[80px]">
            Let customers buy
            <br />
            straight from your site
          </h2>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Powered by Shopify with Pop Site&apos;s one-click Shopify
            integration.
          </p>
          <div className="mt-10">
            <ClaimUrlInput />
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-[960px] items-end justify-center">
          <div className="relative w-[280px] md:w-[360px]">
            <Image
              src="/images/a9gc2DlbpkkZlsKZRlBfRklZyY.png"
              alt="Phone frame"
              width={534}
              height={784}
              className="relative z-10 h-auto w-full"
            />
            <Image
              src="/images/U8is4LxcsMygsapf6MK27qYVSs.jpg"
              alt="Shopify-powered store preview"
              width={252}
              height={547}
              className="absolute left-1/2 top-[5%] z-0 h-auto w-[82%] -translate-x-1/2 rounded-[28px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
