import { motion } from "framer-motion";
import classNames from "classnames";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiWordpress,
  SiBootstrap,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiJest,
  SiCypress,
  SiAxios,
  SiReactquery,
  SiReacthookform,
  SiZod,
  SiGraphql,
  SiSwagger,
  SiStorybook,
  SiGoogle,
  SiJira,
  SiTrello,
  SiZapier,
} from "react-icons/si";

import { TbSql } from "react-icons/tb";

interface SkillsProps {
  language: "pt" | "en";
  theme: "light" | "dark";
}

const skillsData = {
  languages: [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      desc: {
        pt: "Linguagem dinâmica usada em web",
        en: "Dynamic language used on the web",
      },
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      desc: {
        pt: "Superset do JavaScript com tipagem",
        en: "JavaScript superset with typing",
      },
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      desc: { pt: "Backend e scripts", en: "Backend and scripting" },
    },
    {
      name: "Python",
      icon: <SiPython />,
      desc: { pt: "Linguagem versátil", en: "Versatile language" },
    },
    {
      name: "React.js",
      icon: <SiReact />,
      desc: { pt: "Biblioteca UI", en: "UI library" },
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      desc: { pt: "Framework React SSR", en: "React SSR framework" },
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      desc: {
        pt: "Ambiente JavaScript server-side",
        en: "JavaScript server-side runtime",
      },
    },
  ],
  styling: [
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
      desc: {
        pt: "Framework CSS utilitário",
        en: "Utility-first CSS framework",
      },
    },
    {
      name: "HTML5",
      icon: <SiHtml5 />,
      desc: { pt: "Marcações semânticas", en: "Semantic markup" },
    },
    {
      name: "CSS3",
      icon: <SiCss3 />,
      desc: { pt: "Estilos modernos", en: "Modern styles" },
    },
    {
      name: "SASS",
      icon: <SiSass />,
      desc: { pt: "Pré-processador CSS", en: "CSS preprocessor" },
    },
    {
      name: "WordPress (Sage)",
      icon: <SiWordpress />,
      desc: { pt: "Temas personalizados", en: "Custom themes" },
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      desc: { pt: "Framework CSS popular", en: "Popular CSS framework" },
    },
  ],
  databases: [
    {
      name: "SQL",
      icon: <TbSql />,
      desc: { pt: "Banco relacional", en: "Relational database" },
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      desc: { pt: "Banco avançado", en: "Advanced database" },
    },
  ],
  testingDevops: [
    {
      name: "Jest",
      icon: <SiJest />,
      desc: { pt: "Testes unitários", en: "Unit testing" },
    },
    {
      name: "Cypress",
      icon: <SiCypress />,
      desc: { pt: "Testes end-to-end", en: "End-to-end testing" },
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      desc: { pt: "Containers", en: "Containers" },
    },
    {
      name: "Git/GitHub",
      icon: <SiGit />,
      desc: { pt: "Versionamento", en: "Version control" },
    },
  ],
  libsApis: [
    {
      name: "Axios",
      icon: <SiAxios />,
      desc: { pt: "Requisições HTTP", en: "HTTP requests" },
    },
    {
      name: "React Query",
      icon: <SiReactquery />,
      desc: { pt: "Gerenciamento de dados", en: "Data management" },
    },
    {
      name: "React Hook Form",
      icon: <SiReacthookform />,
      desc: { pt: "Formulários", en: "Forms" },
    },
    {
      name: "Zod",
      icon: <SiZod />,
      desc: { pt: "Validação de dados", en: "Data validation" },
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      desc: { pt: "Query language API", en: "API query language" },
    },
    {
      name: "REST APIs",
      icon: <SiSwagger />,
      desc: { pt: "Integração com APIs", en: "API integration" },
    },
  ],
  uiux: [
    {
      name: "Storybook",
      icon: <SiStorybook />,
      desc: { pt: "Componentes UI", en: "UI components" },
    },
    {
      name: "ShadCN",
      icon: <SiReact />,
      desc: { pt: "UI components library", en: "UI components library" },
    }, // sem ícone próprio
    {
      name: "Mobile Development",
      icon: <SiReact />,
      desc: { pt: "Apps mobile", en: "Mobile apps" },
    }, // idem
    {
      name: "SEO",
      icon: <SiGoogle />,
      desc: {
        pt: "Otimização motores busca",
        en: "Search engines optimization",
      },
    },
  ],
  methodologies: [
    {
      name: "Scrum",
      icon: <SiJira />,
      desc: { pt: "Metodologia ágil", en: "Agile methodology" },
    },
    {
      name: "Kanban",
      icon: <SiTrello />,
      desc: { pt: "Fluxo visual de trabalho", en: "Visual workflow" },
    },
    {
      name: "Agile",
      icon: <SiZapier />,
      desc: { pt: "Metodologias ágeis", en: "Agile methodologies" },
    },
  ],
};

export default function SkillsSection({ language, theme }: SkillsProps) {
  const isLight = theme === "light";

  const sectionTitle = language === "pt" ? "habilidades" : "skills";

  const categoryTitles = {
    languages:
      language === "pt" ? "Linguagens & Frameworks" : "Languages & Frameworks",
    styling:
      language === "pt" ? "Estilização & Ferramentas" : "Styling & Tools",
    databases: language === "pt" ? "Bancos de Dados" : "Databases",
    testingDevops: language === "pt" ? "Testes & DevOps" : "Testing & DevOps",
    libsApis: language === "pt" ? "Bibliotecas & APIs" : "Libraries & APIs",
    uiux: language === "pt" ? "UI/UX & Ferramentas" : "UI/UX & Tools",
    methodologies: language === "pt" ? "Metodologias" : "Methodologies",
  };

  return (
    <section
      id="skills"
      className={classNames(
        "w-full min-h-screen py-16 transition-colors duration-500",
        isLight ? "bg-offwhite text-purple" : "bg-dark text-cherry-light"
      )}
    >
      <div className="container">
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

        {/* categorias */}
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl font-bold mb-6 select-none font-modern"
            >
              {categoryTitles[category as keyof typeof categoryTitles]}
            </motion.h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {(skills as typeof skillsData.languages).map(
                ({ name, icon, desc }, i) => (
                  <motion.li
                    key={i}
                    className="flex flex-col items-center gap-2 group cursor-default"
                    title={desc[language]}
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <div
                      className={classNames(
                        "text-4xl transition-colors duration-300",
                        isLight
                          ? "group-hover:text-lesbianGreen-dark text-purple"
                          : "group-hover:text-offwhite text-lesbianGreen-light"
                      )}
                    >
                      {icon}
                    </div>
                    <span className="text-sm select-none">{name}</span>
                  </motion.li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
