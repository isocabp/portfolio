import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, GlobeIcon } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import classNames from "classnames";
import { Turn as Hamburger } from "hamburger-react";

const navLinks = [
  { label: { pt: "Sobre", en: "About" }, href: "#about" },
  { label: { pt: "Habilidades", en: "Skills" }, href: "#skills" },
  { label: { pt: "Trilha", en: "Timeline" }, href: "#timeline" },
  { label: { pt: "Projetos", en: "Projects" }, href: "#projects" },
  { label: { pt: "Contato", en: "Contact" }, href: "#contact" },
];

interface HeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
}

export default function Header({
  theme,
  setTheme,
  language,
  setLanguage,
}: HeaderProps) {
  const [text] = useTypewriter({
    words: ["isabella ferreira"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  const baseText = theme === "light" ? "text-purple" : "text-cherry-dark";
  const hoverLink =
    theme === "light"
      ? "hover:text-lesbianGreen-dark"
      : "hover:text-lesbianGreen-light";

  const iconHover = "hover:text-lavender-white";
  const iconBg =
    theme === "light" ? "hover:bg-purple-muted" : "hover:bg-cherry-medium";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-transparent z-50">
      {/* nome */}
      <div
        className={`text-2xl font-cursive select-none ${baseText}`}
        style={{ width: "20ch" }}
      >
        {text}
        <Cursor cursorStyle="|" />
      </div>

      {/* nav desktop */}
      <nav className="hidden md:flex gap-8 font-modern">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`${baseText} ${hoverLink} transition-colors duration-300`}
          >
            {label[language]}
          </a>
        ))}
      </nav>

      {/* ícones + hambúrguer */}
      <div className="flex items-center gap-4 z-50">
        {/* idioma */}
        <button
          onClick={toggleLanguage}
          aria-label="Toggle Language"
          className={`p-2 rounded transition ${iconBg}`}
        >
          <GlobeIcon
            className={`w-6 h-6 transition-colors ${baseText} ${iconHover}`}
          />
        </button>

        {/* tema */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`p-2 rounded transition ${iconBg}`}
        >
          {theme === "light" ? (
            <MoonIcon
              className={`w-6 h-6 transition-colors ${baseText} ${iconHover}`}
            />
          ) : (
            <SunIcon
              className={`w-6 h-6 transition-colors ${baseText} ${iconHover}`}
            />
          )}
        </button>

        {/* hamburguer react */}
        <div className="md:hidden z-[1000]">
          <Hamburger
            toggled={mobileOpen}
            toggle={setMobileOpen}
            size={20}
            color={theme === "light" ? "#5C3C85" : "#72262C"}
            label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            rounded
          />
        </div>
      </div>

      {/* menu mobile lateral */}
      <div
        className={classNames(
          "fixed top-0 left-0 h-screen w-full z-[999] transform transition-transform duration-300 ease-in-out flex flex-col px-6 pt-4 font-modern overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full",
          theme === "light" ? "bg-offwhite" : "bg-dark"
        )}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setMobileOpen(false)}
            className={`${baseText} text-3xl font-bold`}
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className={`text-xl mb-4 ${baseText} ${hoverLink} transition-colors duration-300`}
          >
            {label[language]}
          </a>
        ))}
      </div>

      {/* overlay pra fechar */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}
    </header>
  );
}
