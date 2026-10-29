import { ContactForm } from "@/components/ContactForm";
import { CurvedArrow } from "@/components/icons";

export function CtaBand() {
  return (
    <section className="px-4 pb-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-6 rounded-[32px] bg-blue px-5 py-8 text-white shadow-lift sm:px-8 lg:grid-cols-[220px_1fr] lg:py-10">
        <div className="relative mx-auto w-full max-w-[220px] -rotate-2 rounded-[24px] bg-sun px-4 py-5 text-ink shadow-card">
          <p className="font-script text-3xl leading-tight">Let&apos;s create something amazing!</p>
          <CurvedArrow className="mt-2 ml-auto h-8 w-14 text-ink" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">HAVE A PROJECT IN MIND?</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/85">
            I&apos;d love to hear about it. Leave your name, email, and a short note. You can email the finished message straight to the studio.
          </p>
          <div className="mt-5">
            <ContactForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
