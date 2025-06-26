import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import classNames from "classnames";
import TulipMotion from "./TulipMotion";

interface HomeHeroProps {
  language: "pt" | "en";
  theme: "light" | "dark";
}

export default function HomeHero({ language, theme }: HomeHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const helloText = language === "pt" ? "olá, eu sou" : "hello, i'm";
  const subtitle =
    language === "pt"
      ? "desenvolvedora front-end apaixonada por design, estética e experiências únicas. entre um café e um commit, sempre tem roxo no meu código."
      : "front-end developer passionate about design, aesthetics and unique experiences. between a coffee and a commit, there’s always purple in my code.";

  const callToAction =
    language === "pt"
      ? "vamos transformar suas ideias em código? explore meus projetos mais recentes e me chama para criarmos algo incrível juntos!"
      : "let’s turn your ideas into code! explore my recent projects and reach out to create something amazing together!";

  const helloColor =
    theme === "light" ? "text-purple" : "text-lesbianGreen-light";
  const titleColor = theme === "light" ? "text-purple" : "text-cherry-dark";
  const subtitleColor = titleColor;
  const callToActionColor =
    theme === "light" ? "text-lesbianGreen-dark" : "text-lesbianGreen-light";
  const bgColor = theme === "light" ? "bg-offwhite" : "bg-dark";

  return (
    <section
      id="home"
      className={classNames(
        "relative w-full min-h-screen flex items-center overflow-hidden transition-colors duration-500",
        bgColor
      )}
    >
      {/* partículas de tulipa no fundo */}
      <TulipMotion theme={theme} />

      <div className="relative z-10 container flex flex-col md:flex-row items-center justify-between gap-12">
        {/* texto à esquerda */}
        <div className="flex flex-col gap-4 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={classNames("font-modern text-xl", helloColor)}
          >
            {helloText}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={classNames(
              "text-5xl md:text-7xl font-cursive font-bold leading-tight",
              titleColor
            )}
          >
            isabella ferreira
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={classNames(
              "font-modern text-sm md:text-base mt-4 max-w-md",
              subtitleColor
            )}
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className={classNames(
              "font-modern text-sm md:text-base max-w-md",
              callToActionColor
            )}
          >
            {callToAction}
          </motion.p>
        </div>

        {/* imagem à direita */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md rounded-lg overflow-hidden shadow-xl border-4 border-purple dark:border-cherry-dark"
        >
          <img
            src="/img/banner.png"
            alt="Isabella banner"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
