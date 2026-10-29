type IconProps = { className?: string };

export function SunIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M18.9 5.1l-1.6 1.6M6.7 17.3l-1.6 1.6" />
      </g>
    </svg>
  );
}

export function PinIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function MailIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <path d="M8 4h2.2l1.2 3.2-1.6 1a12 12 0 0 0 6 6l1-1.6 3.2 1.2V16a2 2 0 0 1-2.2 2A14.2 14.2 0 0 1 6 6.2 2 2 0 0 1 8 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v4.5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden="true">
      <path fill="currentColor" d="m12 3.2 2.4 5.3 5.8.6-4.4 3.8 1.3 5.6L12 15.8 6.9 18.5l1.3-5.6L3.8 9.1l5.8-.6L12 3.2Z" />
    </svg>
  );
}

export function HeartIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9Z" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function DownloadIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} fill="none" aria-hidden="true">
      <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CurvedArrow({ className = "h-10 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 80 46" className={className} fill="none" aria-hidden="true">
      <path d="M6 32c14 2 22-18 48-16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m46 8 12 8-14 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.6" cy="7.4" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className="h-4 w-4" aria-hidden="true">
      <path fill="currentColor" d="M14 9h2.2V6.4h-2.2C11.4 6.4 10 7.9 10 10.4V12H8v2.6h2V20h2.8v-5.4h2.2L15.4 12H12.8v-1.4c0-.8.3-1.6 1.2-1.6Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className="h-4 w-4" aria-hidden="true">
      <path fill="currentColor" d="M7.2 9.2H4.6V19h2.6V9.2ZM5.9 4.5A1.5 1.5 0 1 0 5.9 7.5 1.5 1.5 0 0 0 5.9 4.5ZM19.4 19h-2.6v-5.1c0-1.4-.5-2.2-1.6-2.2s-1.8.8-1.8 2.2V19H11V9.2h2.5v1.3c.4-.7 1.4-1.6 3-1.6 2.1 0 3.9 1.4 3.9 4.4V19Z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className="h-4 w-4" aria-hidden="true">
      <path fill="currentColor" d="M8.7 11.2c.8-.3 1.3-.9 1.3-1.7 0-1.4-1.1-2.2-3-2.2H3.2V17h4.1c2 0 3.3-.9 3.3-2.5 0-1.1-.6-1.9-1.9-2.3ZM5.4 8.8h1.4c.8 0 1.2.3 1.2.9s-.4.9-1.2.9H5.4V8.8Zm1.6 6.6H5.4v-2h1.7c.8 0 1.3.4 1.3 1s-.5 1-1.4 1ZM15.2 7.4h4.4v1.3h-4.4V7.4ZM17.4 9.4c-2.4 0-3.9 1.6-3.9 3.9s1.5 4 3.9 4c1.8 0 3.1-.8 3.6-2.2h-1.8c-.3.5-.8.8-1.6.8-1.1 0-1.8-.6-2-1.6h5.5c.1-.3.1-.6.1-.9 0-2.2-1.4-4-3.8-4Zm-1.9 3.1c.2-.9.9-1.4 1.9-1.4s1.6.5 1.8 1.4h-3.7Z" />
    </svg>
  );
}

export function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "Instagram":
      return <InstagramIcon />;
    case "Facebook":
      return <FacebookIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    default:
      return <BehanceIcon />;
  }
}
