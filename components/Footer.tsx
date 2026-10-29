import Link from "next/link";
import { studio } from "@/lib/data";
import { MailIcon, PhoneIcon, PinIcon, SocialIcon, SunIcon } from "@/components/icons";

const explore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/about#experience", label: "Experience" },
];

const studioLinks = [
  { href: "/about#skills", label: "Skills" },
  { href: "/#packages", label: "Packages" },
  { href: "/#work", label: "Selected work" },
  { href: studio.cv, label: "Download CV" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sun text-ink">
              <SunIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-script text-3xl leading-none text-white">PixelForge</span>
              <span className="text-[10px] font-bold tracking-[0.22em] text-white/60">STUDIO</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Thoughtful websites for Accra brands that want to look sharp, load quickly, and give customers a clear next step.
          </p>
          <div className="mt-5 flex gap-2">
            {studio.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`PixelForge on ${social.name}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white transition hover:border-sun hover:text-sun"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-sun">EXPLORE</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {explore.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-sun">STUDIO</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {studioLinks.map((link) => (
              <li key={link.href}>
                {link.href.endsWith(".pdf") ? (
                  <a href={link.href} download className="transition hover:text-white">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-sun">LET&apos;S CONNECT</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a className="inline-flex items-start gap-2 transition hover:text-white" href={`mailto:${studio.email}`}>
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
                {studio.email}
              </a>
            </li>
            {studio.phones.map((phone) => (
              <li key={phone.href}>
                <a className="inline-flex items-center gap-2 transition hover:text-white" href={phone.href}>
                  <PhoneIcon />
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="inline-flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{studio.address}</span>
            </li>
          </ul>
          <div className="mt-6 grid h-28 w-28 place-items-center rounded-full border border-dashed border-white/30 text-center">
            <p className="px-3 font-script text-lg leading-tight text-sun">
              Design with heart. Built to inspire.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} PixelForge Studio. All rights reserved.</p>
          <p>East Legon, Accra · {studio.hours}</p>
        </div>
      </div>
    </footer>
  );
}
