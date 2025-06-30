import { motion } from "framer-motion";
import classNames from "classnames";

interface TrilhaProps {
  language: "pt" | "en";
  theme: "light" | "dark";
}

const experienceData = [
  {
    date: "04–2023 – 03–2025",
    title: {
      pt: "Desenvolvedora Front End Jr",
      en: "Front End Developer Jr",
    },
    company: "Agência S3 Digital, Rio das Ostras, Brasil",
    description: {
      pt: `Trabalhei com React, TypeScript, Tailwind CSS e WordPress/PHP em projetos variados.
Implementei a migração do Bootstrap para TailwindCSS, aumentando a consistência visual e agilidade no desenvolvimento.
Transformei protótipos Figma em componentes responsivos, acessíveis e otimizados para performance.
Colaborei com designers e back-end, lidando com diferentes bases de código e fluxos de trabalho.
Ganhei experiência em versionamento Git, metodologias ágeis (Scrum/Kanban) e comunicação eficiente em times remotos.`,
      en: `Worked with React, TypeScript, Tailwind CSS, and WordPress/PHP on diverse projects.
Led migration from Bootstrap to TailwindCSS, improving visual consistency and development speed.
Converted Figma prototypes into responsive, accessible, and performance-optimized components.
Collaborated closely with designers and back-end teams, adapting to different codebases and workflows.
Gained experience with Git version control, agile methodologies (Scrum/Kanban), and effective remote communication.`,
    },
  },
  {
    date: "12–2024 – 12–2024",
    title: {
      pt: "Freelancer Front End",
      en: "Front End Freelancer",
    },
    company: "Call Express, Rio de Janeiro, Brasil",
    description: {
      pt: `Responsável pelo desenvolvimento Front-End do site da Call Express
utilizando PHP, JavaScript, Tailwind CSS e Sage.
Implementei um layout responsivo e otimizado para SEO, melhorando a
visibilidade online.`,
      en: `Responsible for Front-End development of Call Express website
using PHP, JavaScript, Tailwind CSS, and Sage.
Implemented a responsive and SEO-optimized layout, improving
online visibility.`,
    },
  },
  {
    date: "09–2022 – 03–2023",
    title: {
      pt: "Estagiária Front End",
      en: "Front End Intern",
    },
    company: "Agência S3 Digital, Rio das Ostras, Brasil",
    description: {
      pt: `Colaborei no desenvolvimento e na manutenção de sistemas em PHP,
WordPress, HTML5, CSS3 e JavaScript.
Contribuí para a implementação de novas funcionalidades, correção de
bugs e publicação de projetos.`,
      en: `Collaborated in development and maintenance of systems using PHP,
WordPress, HTML5, CSS3, and JavaScript.
Contributed to implementing new features, bug fixing, and project deployments.`,
    },
  },
  {
    date: "11–2024 – 11–2024",
    title: {
      pt: "Freelancer Front End",
      en: "Front End Freelancer",
    },
    company: "IQ Log, Rio de Janeiro, Brasil",
    description: {
      pt: `Desenvolvi o Front-End do site da IQ Log usando PHP, JavaScript, Tailwind
CSS e Sage.
Implementei design responsivo e realizei melhorias significativas de
performance.`,
      en: `Developed the Front-End for IQ Log website using PHP, JavaScript, Tailwind
CSS, and Sage.
Implemented responsive design and made significant performance improvements.`,
    },
  },
  {
    date: "09–2024 – 09–2024",
    title: {
      pt: "Freelancer Full Stack",
      en: "Full Stack Freelancer",
    },
    company: "Franchising Group, Rio de Janeiro, Brasil",
    description: {
      pt: `Atuei na criação de temas com PHP, WordPress, Bootstrap e JavaScript.
Implementei responsividade e realizei otimizações de performance e
plugins.`,
      en: `Worked on theme creation using PHP, WordPress, Bootstrap, and JavaScript.
Implemented responsiveness and performance/plugin optimizations.`,
    },
  },
];

const educationData = [
  {
    date: "02–2025 – Presente",
    title: {
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      en: "Technologist in Systems Analysis and Development",
    },
    company: "Centro Universitário IBMR, Rio de Janeiro, Brasil",
    description: {
      pt: "",
      en: "",
    },
  },
  {
    date: "05–2025 – Presente",
    title: {
      pt: "Google IT Support, Curso Técnico TI",
      en: "Google IT Support, Technical IT Course",
    },
    company: "Google, Rio de Janeiro, Brasil",
    description: {
      pt: "",
      en: "",
    },
  },
  {
    date: "02–2022 – 08–2022",
    title: {
      pt: "Desenvolvimento FullStack",
      en: "FullStack Development",
    },
    company: "Digital House, Rio de Janeiro, Brasil",
    description: {
      pt: "",
      en: "",
    },
  },
];

export default function Trilha({ language, theme }: TrilhaProps) {
  const isLight = theme === "light";

  const sectionTitle = language === "pt" ? "trilha" : "path";

  const experienceTitle =
    language === "pt" ? "experiência profissional" : "professional experience";

  const educationTitle = language === "pt" ? "formação" : "education";

  return (
    <section
      id="trilha"
      className={classNames(
        "w-full min-h-screen py-16 transition-colors duration-500",
        isLight ? "bg-offwhite text-purple" : "bg-dark text-cherry-light"
      )}
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={classNames(
            "font-cursive font-bold text-5xl mb-12 capitalize cursor-default select-none transition-colors duration-300",
            isLight
              ? "hover:text-lesbianGreen-dark text-purple"
              : "hover:text-offwhite text-lesbianGreen-light"
          )}
        >
          {sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* experiência profissional */}
          <div>
            <h3 className="font-sans font-semibold text-2xl mb-6 capitalize">
              {experienceTitle}
            </h3>
            <ul>
              {experienceData.map(
                ({ date, title, company, description }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="mb-8 last:mb-0"
                  >
                    <time className="block font-mono text-sm mb-1 select-none">
                      {date}
                    </time>
                    <h4 className="font-sans font-semibold text-lg capitalize">
                      {title[language]}
                    </h4>
                    <p className="font-sans italic mb-2">{company}</p>
                    <p className="whitespace-pre-line text-sm leading-relaxed max-w-[600px]">
                      {description[language]}
                    </p>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* formação */}
          <div>
            <h3 className="font-sans font-semibold text-2xl mb-6 capitalize">
              {educationTitle}
            </h3>
            <ul>
              {educationData.map(({ date, title, company }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  <time className="block font-mono text-sm mb-1 select-none">
                    {date}
                  </time>
                  <h4 className="font-sans font-semibold text-lg capitalize">
                    {title[language]}
                  </h4>
                  <p className="font-sans italic">{company}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
