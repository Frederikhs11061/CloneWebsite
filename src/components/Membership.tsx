import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";
import { ClaimUrlInput } from "@/components/ClaimUrlInput";
import { CheckIcon } from "@/components/icons";

const PERKS = [
  "Gated pages for paying members",
  "Recurring subscriptions",
  "Email & content access control",
  "Powered by MemberSpace",
];

export function Membership() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">New · MemberSpace Partner</SectionBadge>
          <h2 className="max-w-[980px] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[64px] lg:text-[80px]">
            Make a powerful
            <br />
            <span className="italic">membership site</span>
          </h2>
          <p className="mt-6 max-w-[680px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Turn your audience into paying members. Gate content, sell
            subscriptions, and grow your community—all from your Pop Site.
          </p>
          <div className="mt-10">
            <ClaimUrlInput />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1080px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[24px] border border-border bg-muted shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/fTuo3BLBmOawEBlfHheYjKQTiw.png"
              alt="Membership dashboard preview"
              width={720}
              height={520}
              className="h-auto w-full"
            />
          </div>
          <ul className="space-y-4">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-[17px]">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/90">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
