import Image from "next/image";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";

export function TestimonialOliur() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Oliur said
          </div>
          <blockquote className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] md:text-[44px]">
            “A mini website builder more aimed for professionals. Love the
            aesthetic.”
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-base font-semibold">
              O
            </div>
            <div>
              <div className="text-[15px] font-semibold">Oliur</div>
              <div className="text-[14px] text-muted-foreground">
                Designer &amp; Creator
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://youtube.com/@UrAvgConsumer"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-[24px] border border-border bg-muted"
        >
          <Image
            src="/images/yt-tO33eQ5oa0o.webp"
            alt="Oliur on YouTube"
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
              <div className="text-[13px] font-semibold">Oliur on YouTube</div>
              <div className="text-[12px] text-white/80">421K Subscribers</div>
            </div>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </a>
      </div>
    </section>
  );
}
