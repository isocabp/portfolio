import { motion } from "framer-motion";
import classNames from "classnames";

interface AboutProps {
  language: "pt" | "en";
  theme: "light" | "dark";
}

export default function About({ language, theme }: AboutProps) {
  const isLight = theme === "light";

  const title = language === "pt" ? "sobre mim" : "about me";

  const paragraphs = [
    language === "pt"
      ? `Oi! Sou a Isabella, apaixonada por criar experiências digitais que unam design e funcionalidade. Além de amar gatos, vinho e café, sou uma desenvolvedora front-end dedicada, com 3 anos de experiência construindo interfaces modernas, acessíveis e responsivas que rodam lisinhas e são fáceis de usar.`
      : `Hi! I'm Isabella, passionate about creating digital experiences that combine design and functionality. Besides loving cats, wine, and coffee, I'm a dedicated front-end developer with 3 years of experience building modern, accessible, and responsive interfaces that run smoothly and are easy to use.`,
    language === "pt"
      ? `Tenho domínio em React, TypeScript, TailwindCSS, Next.js e integração com WordPress via Sage. Trabalho bem com versionamento usando Git/GitHub e metodologias ágeis como Scrum, sempre buscando performance e usabilidade.`
      : `I'm proficient in React, TypeScript, TailwindCSS, Next.js, and WordPress integration via Sage. I work well with version control using Git/GitHub and agile methodologies like Scrum, always aiming for performance and usability.`,
    language === "pt"
      ? `Sou focada, colaborativa e curiosa. Adoro aprender coisas novas e encontrar soluções práticas para desafios reais. Meu objetivo é contribuir com projetos que realmente façam diferença e entreguem valor para o usuário final.`
      : `I'm focused, collaborative, and curious. I love learning new things and finding practical solutions to real challenges. My goal is to contribute to projects that truly make a difference and deliver value to the end user.`,
  ];

  const paragraphColor = isLight ? "text-purple" : "!text-cherry-light";
  const bgColor = isLight ? "bg-offwhite" : "bg-dark";
  const titleColor = isLight
    ? "text-purple hover:text-lesbianGreen-dark"
    : "text-lesbianGreen-light hover:text-offwhite";
  const underlineColor = isLight ? "bg-lesbianGreen-dark" : "bg-offwhite";

  return (
    <section
      id="about"
      className={classNames(
        "relative w-full min-h-screen flex items-center transition-colors duration-500",
        bgColor
      )}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-0">
        {/* imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={classNames(
            "group relative w-full max-w-md rounded-lg overflow-hidden cursor-pointer border-4 order-last md:order-first",
            isLight
              ? "border-transparent bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 shadow-[inset_0_0_8px_2px_rgba(255,255,255,0.4)]"
              : "border-transparent bg-gradient-to-br from-cherry-dark via-cherry-medium to-cherry-light shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.6)]"
          )}
          style={{ aspectRatio: "3 / 4" }}
        >
          <div
            className={classNames(
              "pointer-events-none absolute -inset-1 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              isLight
                ? "bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800"
                : "bg-gradient-to-r from-cherry-dark via-cherry-medium to-cherry-light"
            )}
            style={{
              filter: "blur(6px)",
              animation: "gradient-shimmer 3s ease infinite",
              zIndex: 0,
            }}
          />
          <img
            src="/img/eu.jpg"
            alt="Isabella Ferreira"
            className="relative z-10 object-cover w-full h-full rounded-lg"
            loading="lazy"
          />
        </motion.div>

        {/* texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-xl font-modern text-lg leading-relaxed text-justify"
        >
          <h2
            className={classNames(
              "font-cursive font-bold text-5xl mb-6 capitalize relative inline-block cursor-pointer transition-colors duration-300",
              titleColor
            )}
          >
            {title}
            <span
              className={classNames(
                "absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
                underlineColor
              )}
            />
          </h2>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={classNames(
                "transition-colors duration-300 text-sm md:text-base",
                paragraphColor
              )}
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
