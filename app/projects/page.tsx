import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectBrowser } from "@/components/ProjectBrowser";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected PixelForge projects: shops, studios, menus, and professional sites designed and built for clients in Accra and Cape Coast.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="PROJECTS" title="Sites with a job to do.">
        Each card is a real kind of brief I take: a shop that needs orders, a studio that needs a portfolio, a timetable people can read between classes. Open a case study for the story, the tools, and what changed after launch.
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ProjectBrowser />
      </section>
    </>
  );
}
