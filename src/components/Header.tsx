import Link from "next/link";
import { LogoIcon } from "@/components/icons";

const NAV_LINKS = [
  { text: "Pricing", href: "/pricing" },
  { text: "Sections", href: "/sections" },
  { text: "Blog", href: "/blog" },
  { text: "Featured", href: "/featured" },
  { text: "Memberships", href: "/memberships" },
];

export function Header() {
  return (
    <header className="relative z-30 border-b border-border/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-8">
        <Link href="/" aria-label="Pop Site home" className="text-foreground">
          <LogoIcon className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/choose-account"
            className="hidden rounded-full px-4 py-2 text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground sm:inline-block"
          >
            Create Account
          </Link>
          <Link
            href="https://app.pop.site?signin"
            className="rounded-full bg-foreground px-4 py-2 text-[15px] font-medium text-background transition-opacity hover:opacity-90"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
}
