import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LogoIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="24"
        fontFamily="Satoshi, sans-serif"
        fontWeight="700"
        fontSize="24"
        fontStyle="italic"
        fill="currentColor"
      >
        pop site
      </text>
      <text
        x="102"
        y="14"
        fontFamily="Satoshi, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="currentColor"
      >
        *
      </text>
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 14h.01M2 10h20"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.4 5.2L18 8.6l-4.6 1.4L12 15l-1.4-5L6 8.6l4.6-1.4L12 2z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
}

export function ChatBubbleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      <path d="M12 3a9 9 0 0 0 0 18" strokeWidth="1.8" fill="currentColor" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="18" cy="5" r="3" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="3" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="3" strokeWidth="1.8" />
      <path
        d="M8.6 13.5 15.4 17.5M15.4 6.5 8.6 10.5"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EditIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AnalyticsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M3 3v18h18M7 15l4-4 4 4 6-6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M5 12l5 5L20 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XTwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.94l-5.43-7.09L4.4 22H1.14l8.02-9.17L1 2h7.1l4.91 6.49L18.244 2zm-1.22 18.16h1.86L7.05 3.73H5.07l11.955 16.43z" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.5 3 2.5 10.8c-1 .4-.9 1.8.1 2.1l4.7 1.5 1.8 5.8c.2.7 1 .9 1.6.4l2.7-2.2 4.6 3.4c.7.5 1.7.1 1.9-.8L21.9 4.4c.2-.9-.7-1.7-1.5-1.3l.1-.1zM9 14.6 18.2 8 10.8 15.4l-.3 3.2-1.5-4z" />
    </svg>
  );
}
