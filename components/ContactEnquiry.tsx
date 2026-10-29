"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { packages } from "@/lib/data";

export function ContactEnquiry() {
  const params = useSearchParams();
  const packageId = params.get("package") ?? "";
  const selected = packages.find((item) => item.id === packageId);

  return (
    <>
      {selected ? (
        <p className="mb-4 rounded-2xl bg-sun/40 px-4 py-3 text-sm font-semibold text-ink">
          You asked about the {selected.name} package ({selected.price}). Change it below if another fit is better.
        </p>
      ) : null}
      <ContactForm initialPackage={packageId} />
    </>
  );
}
