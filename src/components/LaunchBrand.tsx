import { SectionBadge } from "@/components/SectionBadge";
import { ClaimUrlInput } from "@/components/ClaimUrlInput";
import {
  ThemeIcon,
  ShareIcon,
  EditIcon,
  AnalyticsIcon,
} from "@/components/icons";

const FEATURES = [
  {
    title: "Stunning Themes",
    description:
      "Customize your site with beautifully designed themes that make your content stand out effortlessly.",
    Icon: ThemeIcon,
  },
  {
    title: "Share Instantly",
    description:
      "Publish and share your site with a single click—no coding, no hassle, just instant access.",
    Icon: ShareIcon,
  },
  {
    title: "Easily Edit",
    description:
      "Make quick changes anytime with an intuitive editor designed for seamless updates.",
    Icon: EditIcon,
  },
  {
    title: "Powerful Analytics",
    description:
      "Track visitor insights and performance metrics to optimize your site's impact.",
    Icon: AnalyticsIcon,
  },
];

export function LaunchBrand() {
  return (
    <section className="hero-glow relative py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">
            <span>Join 8K+ people on</span>
            <span className="font-bold italic">pop site*</span>
          </SectionBadge>
          <h2 className="max-w-[1000px] text-[40px] font-medium leading-[1.02] tracking-[-0.03em] md:text-[64px] lg:text-[84px]">
            Launch your personal
            <br />
            brand today
          </h2>
          <p className="mt-6 max-w-[680px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Pick a template, edit a few sections, and share. No design skills
            needed. Just a fast, effortless way to build your brand.
          </p>
          <div className="mt-10">
            <ClaimUrlInput />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-[20px] border border-border bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-[20px] font-medium tracking-[-0.02em]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
