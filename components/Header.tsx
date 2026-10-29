"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, studio } from "@/lib/data";
import {
  ArrowIcon,
  ClockIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  SocialIcon,
  SunIcon,
} from "@/components/icons";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-sun text-ink shadow-sm">
        <SunIcon className="h-5 w-5" />
      </span>
      <span className="leading-none">
        <span className="block font-script text-[1.85rem] font-semibold tracking-tight text-ink">
          PixelForge
        </span>
        <span className="mt-0.5 block text-[10px] font-bold tracking-[0.22em] text-muted">
          STUDIO
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="border-b border-line/80 text-xs text-muted">
        <div className="mx-auto flex max-w-6xl items-center gap-x-5 gap-y-1 overflow-x-auto px-4 py-2 whitespace-nowrap sm:px-6">
          <span className="inline-flex items-center gap-1.5">
            <PinIcon />
            {studio.city}
          </span>
          <a className="hidden items-center gap-1.5 transition hover:text-blue sm:inline-flex" href={`mailto:${studio.email}`}>
            <MailIcon />
            {studio.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <PhoneIcon />
            {studio.phones.map((phone, index) => (
              <span key={phone.href}>
                {index > 0 ? <span className="mx-1 text-line">/</span> : null}
                <a className="transition hover:text-blue" href={phone.href}>
                  {phone.display}
                </a>
              </span>
            ))}
          </span>
          <span className="hidden items-center gap-1.5 lg:inline-flex">
            <ClockIcon />
            {studio.hours}
          </span>
          <span className="ml-auto hidden items-center gap-2 md:inline-flex">
            {studio.socials.slice(0, 3).map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`PixelForge on ${social.name}`}
                className="grid h-7 w-7 place-items-center rounded-full text-ink transition hover:bg-blue-soft hover:text-blue"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-mist text-blue shadow-sm"
                    : "text-ink hover:bg-mist hover:text-blue"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-sun px-4 py-2.5 text-sm font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-sun-deep sm:inline-flex"
          >
            Let&apos;s Connect
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70">
              <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold ${
                    active ? "bg-blue-soft text-blue" : "text-ink hover:bg-mist"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sun px-4 py-3 text-sm font-bold text-ink"
            >
              Let&apos;s Connect
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <p className="mt-3 px-4 text-sm text-muted">
              {studio.address}
              <br />
              {studio.hours}
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
