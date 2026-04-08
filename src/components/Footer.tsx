import { LogoIcon, XTwitterIcon, TelegramIcon } from "@/components/icons";

const COLUMNS = [
  {
    title: "Use",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Sections", href: "#sections" },
      { label: "Memberships", href: "#memberships" },
      { label: "Templates", href: "#templates" },
    ],
  },
  {
    title: "Featured",
    links: [
      { label: "Showcase", href: "#showcase" },
      { label: "Creators", href: "#creators" },
      { label: "Customers", href: "#customers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Changelog", href: "#changelog" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="/" className="inline-flex items-center text-foreground">
              <LogoIcon className="h-6 w-auto" />
            </a>
            <p className="mt-4 max-w-[260px] text-[14px] leading-[1.5] text-muted-foreground">
              The easiest way to build a quality personal site.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition hover:text-foreground"
              >
                <XTwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition hover:text-foreground"
              >
                <TelegramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-foreground/80 transition hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-[13px] text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Pop Site. All rights reserved.</div>
          <div>Made with care for creators.</div>
        </div>
      </div>
    </footer>
  );
}
