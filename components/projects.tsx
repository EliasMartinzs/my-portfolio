import { projects } from "@/data/projects";
import { ProjectDesktop } from "./project-desktop";
import { ProjectMobile } from "./project-mobile";

export const Projects = () => {
  return (
    <section id="projects" className="space-y-8 lg:space-y-16 px-8">
      <h6 className="text-4xl max-lg:text-end font-JetBrainsBold">
        {"<"}Projetos{"/>"}
      </h6>

      {/* Mobile */}
      <div className="flex gap-5 flex-col lg:hidden">
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <ProjectMobile key={project.github} {...project} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex flex-col gap-y-40">
        {projects.reverse().map((project, index) => (
          <ProjectDesktop
            key={project.projectName}
            {...project}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};
