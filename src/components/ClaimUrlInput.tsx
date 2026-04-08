"use client";

import { cn } from "@/lib/utils";
import { WalletIcon } from "@/components/icons";

interface ClaimUrlInputProps {
  className?: string;
  buttonLabel?: string;
}

export function ClaimUrlInput({
  className,
  buttonLabel = "Claim your pop.site",
}: ClaimUrlInputProps) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <form
        className="flex items-center gap-1.5 w-full max-w-[540px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex-1 flex items-center rounded-full border border-border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <input
            type="text"
            placeholder="yourname"
            className="flex-1 bg-transparent px-5 py-4 text-[15px] font-medium outline-none placeholder:text-muted-foreground"
            aria-label="Your pop.site subdomain"
          />
          <span className="pr-4 pl-2 py-4 text-[15px] font-medium text-foreground/90 border-l border-border">
            .pop.site
          </span>
        </div>
        <button
          type="submit"
          className="h-[52px] rounded-full bg-primary px-6 text-[15px] font-semibold text-white whitespace-nowrap shadow-[0_1px_2px_rgba(59,130,246,0.3)] transition-opacity hover:opacity-90"
        >
          {buttonLabel}
        </button>
      </form>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <WalletIcon className="h-4 w-4" />
        <span>No Credit Card Required</span>
      </div>
    </div>
  );
}
