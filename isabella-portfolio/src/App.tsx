import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import AboutSection from "./components/AboutSection";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  // carregar preferências salvas no localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    const storedLang = localStorage.getItem("language") as "pt" | "en";

    if (storedTheme) setTheme(storedTheme);
    if (storedLang) setLanguage(storedLang);
  }, []);

  // aplicar classe `dark` no html
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // salvar idioma no localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div>
      <Header
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="pt-20">
        <HomeHero theme={theme} language={language} />
        <AboutSection theme={theme} language={language} />
      </main>
    </div>
  );
}
