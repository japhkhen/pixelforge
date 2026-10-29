import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { LogoRow } from "@/components/LogoRow";
import { Packages } from "@/components/Packages";
import { SelectedWork } from "@/components/SelectedWork";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Packages />
      <LogoRow />
      <Testimonials />
      <CtaBand />
    </>
  );
}
