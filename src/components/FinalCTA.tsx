import { SectionBadge } from "@/components/SectionBadge";
import { ClaimUrlInput } from "@/components/ClaimUrlInput";

export function FinalCTA() {
  return (
    <section className="hero-glow relative py-28 md:py-36">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">
            <span>Get started with</span>
            <span className="font-bold italic">pop site*</span>
          </SectionBadge>
          <h2 className="max-w-[1000px] text-[44px] font-medium leading-[1.02] tracking-[-0.03em] md:text-[72px] lg:text-[96px]">
            Make your personal
            <br />
            <span className="italic">site now</span>
          </h2>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Join thousands of creators who launched a stunning Pop Site in
            minutes. Free to start, no credit card required.
          </p>
          <div className="mt-10">
            <ClaimUrlInput />
          </div>
        </div>
      </div>
    </section>
  );
}
