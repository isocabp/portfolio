import classNames from "classnames";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  theme: "light" | "dark";
  language: "pt" | "en";
  imageSrc: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  techStack: string[];
  repoLink?: string;
  deployLink?: string;
}

export default function ProjectCard({
  theme,
  language,
  imageSrc,
  title,
  description,
  techStack,
  repoLink,
  deployLink,
}: ProjectCardProps) {
  const isLight = theme === "light";

  return (
    <div className="relative w-[300px] h-[400px] md:h-[200px] group transition-all duration-500 hover:my-20 cursor-pointer ">
      {/* face1 - imagem (frente) */}
      <div className="absolute inset-0 z-20 flex justify-center items-center transition-all duration-500 translate-y-0 transform md:translate-y-[100px] group-hover:translate-y-0 ">
        <div className="opacity-100 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center w-full h-full">
          <img
            src={imageSrc}
            alt={language === "pt" ? title.pt : title.en}
            className="w-full h-[200px] md:h-full object-cover"
          />
        </div>
      </div>

      {/* face2 - texto (fundo) */}
      <div
        className={classNames(
          "absolute h-[200px] inset-0 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex justify-center items-center transition-all duration-500 transform translate-y-[200px]  md:translate-y-[100px] group-hover:translate-y-[200px] p-5",
          isLight
            ? "bg-white text-purple"
            : "bg-lesbianGreen-dark text-offwhite"
        )}
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            {language === "pt" ? title.pt : title.en}
          </h3>
          <p className="text-sm mb-2">
            {language === "pt" ? description.pt : description.en}
          </p>
          <p className="text-xs opacity-80 mb-3">{techStack.join(" • ")}</p>
          <div className="flex gap-4">
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className={classNames(
                  "text-lg transition-colors",
                  isLight
                    ? "hover:text-lesbianGreen-dark"
                    : "hover:text-lesbianGreen-light"
                )}
              >
                <FaGithub />
              </a>
            )}
            {deployLink && (
              <a
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className={classNames(
                  "text-lg transition-colors",
                  isLight
                    ? "hover:text-lesbianGreen-dark"
                    : "hover:text-lesbianGreen-light"
                )}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
