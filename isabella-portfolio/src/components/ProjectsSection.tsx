// atualizado ProjectsSection.tsx com layout fluido para os cards

import classNames from "classnames";
import projectsData from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

interface ProjectsSectionProps {
  language: "pt" | "en";
  theme: "light" | "dark";
}

export default function ProjectsSection({
  language,
  theme,
}: ProjectsSectionProps) {
  const isLight = theme === "light";

  return (
    <section
      id="projects"
      className={classNames(
        "min-h-screen flex justify-center items-center transition-colors duration-500",
        isLight ? "bg-offwhite text-purple" : "bg-dark text-cherry-light"
      )}
    >
      <div className="container">
        <h2
          className={classNames(
            "font-cursive font-bold text-5xl mb-12 capitalize cursor-default select-none transition-colors duration-300",
            isLight
              ? "hover:text-lesbianGreen-dark text-purple"
              : "hover:text-offwhite text-lesbianGreen-light"
          )}
        >
          {language === "pt" ? "projetos" : "projects"}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 pb-[200px]">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              theme={theme}
              language={language}
              imageSrc={project.img}
              title={project.title}
              description={project.desc}
              techStack={project.stack}
              repoLink={project.repo}
              deployLink={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
