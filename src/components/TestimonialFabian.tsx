import Image from "next/image";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";

export function TestimonialFabian() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative order-2 block overflow-hidden rounded-[24px] border border-border bg-muted lg:order-1"
        >
          <Image
            src="/images/yt-5WFlSyB4Z2o.webp"
            alt="Fabian Albert on YouTube"
            width={640}
            height={480}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
              <PlayIcon className="ml-1 h-6 w-6 text-foreground" />
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 px-4 py-2.5 text-white backdrop-blur">
            <div>
              <div className="text-[13px] font-semibold">Fabian Albert</div>
              <div className="text-[12px] text-white/80">Creator</div>
            </div>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </a>

        <div className="order-1 lg:order-2">
          <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Fabian Albert said
          </div>
          <blockquote className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] md:text-[44px]">
            &ldquo;Ease of use, fast launch, amazing visual outputs.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-base font-semibold">
              F
            </div>
            <div>
              <div className="text-[15px] font-semibold">Fabian Albert</div>
              <div className="text-[14px] text-muted-foreground">
                Creator &amp; Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
