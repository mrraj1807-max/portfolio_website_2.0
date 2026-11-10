import Image from "next/image";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center justify-center text-center py-10">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
        </h1>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl">
          End-to-End Business Intelligence, Data Analytics & Machine Learning Portfolio
        </p>
      </div>

      {/* Featured Projects Banner */}
      <div className="w-full mb-12 relative group rounded-2xl overflow-hidden border border-[#7042f88b] shadow-[0_0_30px_rgba(112,66,248,0.25)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all duration-500">
        <div className="relative w-full aspect-[16/7] md:aspect-[1920/640]">
          <Image
            src="/projects/featured-project-banner.png"
            alt="Business Intelligence & Data Analytics Featured Portfolio Banner"
            fill
            priority
            className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-700"
            unoptimized
          />
        </div>
      </div>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            documents={"documents" in project ? project.documents : undefined}
          />
        ))}
      </div>
    </section>
  );
};
