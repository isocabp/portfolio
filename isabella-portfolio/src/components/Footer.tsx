import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import classNames from "classnames";

interface FooterProps {
  theme: "light" | "dark";
  language: "pt" | "en";
}

export default function Footer({ theme, language }: FooterProps) {
  const isLight = theme === "light";

  const text = {
    name: "isabella ferreira",
    role:
      language === "pt" ? "desenvolvedora front-end" : "front-end developer",
    copyright:
      language === "pt"
        ? "© Copyright Isabella Ferreira. Todos os direitos reservados"
        : "© Copyright Isabella Ferreira. All Rights Reserved",
  };

  const iconColorClass = isLight
    ? "text-roxo hover:text-lesbianGreen-dark"
    : "text-lesbianGreen-dark hover:text-offwhite";

  return (
    <footer
      className={classNames(
        "w-full py-10 px-4 flex flex-col items-center justify-center gap-1 transition-colors duration-500",
        // bg transparente com blur igual header
        isLight
          ? "bg-transparent backdrop-blur-md text-roxo"
          : "bg-transparent backdrop-blur-md text-lesbianGreen-dark"
      )}
    >
      <p
        className={classNames(
          "font-cursive text-5xl font-bold select-none cursor-default",
          isLight
            ? "text-roxo hover:text-lesbianGreen-dark"
            : "text-lesbianGreen-light hover:text-offwhite"
        )}
      >
        {text.name}
      </p>
      <p
        className={classNames(
          "text-sm select-none cursor-default",
          isLight ? "text-purple" : "text-cherry-dark"
        )}
      >
        {text.role}
      </p>
      <div className="flex gap-8 text-3xl mt-8">
        <a
          href="https://github.com/isocabp"
          target="_blank"
          rel="noopener noreferrer"
          className={iconColorClass}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/isabellabferreira/"
          target="_blank"
          rel="noopener noreferrer"
          className={iconColorClass}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/isocabf/"
          target="_blank"
          rel="noopener noreferrer"
          className={iconColorClass}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <p
        className={classNames(
          "text-xs mt-6 select-none cursor-default",
          isLight ? "text-purple" : "text-cherry-dark"
        )}
      >
        {text.copyright}
      </p>
    </footer>
  );
}
