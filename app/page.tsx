import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import { ExperienceSection } from "@/components/main/experience-section";
import { Projects } from "@/components/main/projects";
import { AwardsSection } from "@/components/main/awards-section";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <ExperienceSection />
        <Projects />
        <AwardsSection />
      </div>
    </main>
  );
}

