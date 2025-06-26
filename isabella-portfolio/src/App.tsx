import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  // aplicar classe 'dark' no html para o tailwind pegar o modo escuro
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <Header
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />

      {/* resto do site */}
      <main className="pt-20">
        <HomeHero theme={theme} language={language} />
      </main>
    </div>
  );
}
