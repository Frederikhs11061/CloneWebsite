import Image from "next/image";
import { SectionBadge } from "@/components/SectionBadge";
import { ArrowRightIcon } from "@/components/icons";

interface ShowcaseItem {
  title: string;
  description: string;
  image: string;
}

const ITEMS: ShowcaseItem[] = [
  {
    title: "Links",
    description:
      "Put all your socials and links in a single place to make it easy for people to discover you.",
    image: "/images/jvWQK1OAcvujJal5mRbPS1GGzuI.jpg",
  },
  {
    title: "Socials",
    description:
      "Link everything in one place so visitors easily connect with your platforms.",
    image: "/images/Qr7KMQJHcfeNk4LSsnK1id52E7g.jpg",
  },
  {
    title: "Forms",
    description:
      "Capture inquiries with customizable forms to grow your business.",
    image: "/images/4cRxw5WzNfrPAjGUiEGzrrHbMoE.jpg",
  },
  {
    title: "Services",
    description:
      "Clearly display your services, pricing, and descriptions to attract more clients.",
    image: "/images/XBrRATTfyONa9DLnCQ9QQqJNkNM.jpg",
  },
  {
    title: "Projects",
    description:
      "Highlight your experience and expertise to win clients and job opportunities.",
    image: "/images/w4aeHLOXaUejqFSPzWk9sVNqdkw.jpg",
  },
  {
    title: "Gallery",
    description:
      "Show the world your visual works and even add links to boost engagement.",
    image: "/images/uJrHRkiS9VkFOQd3d7rAUnDpRoU.jpg",
  },
  {
    title: "Skills",
    description:
      "Make it easy for people to see what you're skilled at, and why you stand out.",
    image: "/images/ANN0pcYUTu1irgW2Shitk6Y.jpg",
  },
  {
    title: "Resume",
    description:
      "Highlight your experience and expertise to win clients and job opportunities.",
    image: "/images/U7ONvjSO4tFRexJCBv69x0O7I.jpg",
  },
  {
    title: "FAQ",
    description:
      "Answer questions upfront to build trust and save time for you and customers.",
    image: "/images/h4NtlJI69nsUCTgJMqCfcddzC0.jpg",
  },
  {
    title: "Tech Stack",
    description:
      "Showcase the tools and tech you've mastered and attract opportunities.",
    image: "/images/AG4NbEc1vlVyLZtonCBmltk2jM.jpg",
  },
  {
    title: "Videos",
    description:
      "Feature one or more videos to showcase your work, brand, or story.",
    image: "/images/FslHXXxXCDOMyOJzYO89SJJlvXA.jpg",
  },
  {
    title: "Testimonials",
    description:
      "Build trust fast by letting satisfied clients speak on your behalf.",
    image: "/images/XkBqyfrXhJSH88VAqh1qdsHGJ44.jpg",
  },
  {
    title: "Shop",
    description:
      "Sell products straight from your site with the Shopify integration.",
    image: "/images/oMdcviojJa9zK00dtdpSR7ffq6E.jpg",
  },
  {
    title: "Newsletter",
    description:
      "Collect subscribers and keep your audience close with a clean signup block.",
    image: "/images/qZzGjNL8NXrwCD6Qf0liwVfZ3g.jpg",
  },
  {
    title: "About",
    description:
      "Introduce yourself with a rich text area, photo, and personal story.",
    image: "/images/n00D5ajFr6R3wBbO7sD1FdqfqQ.jpg",
  },
];

export function SectionsShowcase() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge className="mb-8">
            <span>Join 8K+ people on</span>
            <span className="font-bold italic">pop site*</span>
          </SectionBadge>
          <h2 className="max-w-[1000px] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[64px] lg:text-[76px]">
            Sections designed to get
            <br />
            <span className="italic">clicks, leads, and sales.</span>
          </h2>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Powerful, ready-made sections that make you look stunning in
            minutes
          </p>
          <a
            href="/sections"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-[14px] font-medium text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-muted"
          >
            See all below
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[20px] border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[335/251] overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={335}
                  height={251}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-medium tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
