import { useRef, useState } from "react";
import classNames from "classnames";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface ContactSectionProps {
  theme: "light" | "dark";
  language: "pt" | "en";
}

export default function ContactSection({
  theme,
  language,
}: ContactSectionProps) {
  const isLight = theme === "light";
  const formRef = useRef<HTMLFormElement | null>(null);

  // estados para controlar loading e feedback do envio
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    emailjs
      .sendForm(
        "service_akctk1n",
        "template_x3vcpba",
        formRef.current!,
        "_TqngyLAtE0HTULJm"
      )
      .then(() => {
        setLoading(false);
        setToast({
          type: "success",
          message:
            language === "pt"
              ? "Mensagem enviada com sucesso!"
              : "Message sent successfully!",
        });
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("Erro ao enviar:", err);
        setLoading(false);
        setToast({
          type: "error",
          message:
            language === "pt"
              ? "Erro ao enviar. Tente novamente."
              : "Error sending message. Try again.",
        });
      });
  };

  // timer pra sumir o toast depois de uns 4s
  if (toast) {
    setTimeout(() => setToast(null), 4000);
  }

  const text = {
    title: language === "pt" ? "vamos conversar" : "let's talk",
    subtitle:
      language === "pt"
        ? "curtiu meu trabalho? me chama nas redes ou me manda uma mensagem:"
        : "like my work? reach out or drop a message:",
    send: language === "pt" ? "enviar" : "send",
    namePlaceholder: language === "pt" ? "seu nome" : "your name",
    emailPlaceholder: language === "pt" ? "seu e-mail" : "your email",
    subjectPlaceholder: language === "pt" ? "assunto" : "subject",
    msgPlaceholder: language === "pt" ? "sua mensagem" : "your message",
  };

  const socialIconHover = isLight
    ? "text-lilac hover:text-lesbianGreen-dark"
    : "text-lesbianGreen-light hover:text-offwhite";

  return (
    <section
      id="contact"
      className={classNames(
        "w-full py-24 px-4 transition-colors duration-500 relative",
        isLight ? "bg-offwhite text-purple" : "bg-dark text-cherry-light"
      )}
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* LADO ESQUERDO - TEXTO E ÍCONES */}
        <div className="w-full md:w-[40%] flex flex-col justify-center items-start gap-6 h-full text-left">
          <h2
            className={classNames(
              "font-cursive text-5xl font-bold capitalize cursor-default select-none transition-colors duration-300",
              isLight
                ? "text-purple hover:text-lesbianGreen-dark"
                : "text-lesbianGreen-light hover:text-offwhite"
            )}
          >
            {text.title}
          </h2>
          <p className="text-base">{text.subtitle}</p>
          <div className="flex gap-6 text-2xl mt-2">
            <a
              href="https://github.com/isocabp"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(socialIconHover)}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/isabellabferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(socialIconHover)}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/isocabf/"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(socialIconHover)}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* LADO DIREITO - FORMULÁRIO */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full md:w-[60%] space-y-5 p-0 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder={text.namePlaceholder}
              className={classNames(
                "w-full px-4 py-3 rounded bg-transparent outline-none border",
                isLight ? "border-purple/30" : "border-cherry-dark"
              )}
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder={text.emailPlaceholder}
              className={classNames(
                "w-full px-4 py-3 rounded bg-transparent outline-none border",
                isLight ? "border-purple/30" : "border-cherry-dark"
              )}
              required
              disabled={loading}
            />
          </div>

          <input
            type="text"
            name="title"
            placeholder={text.subjectPlaceholder}
            className={classNames(
              "w-full px-4 py-3 rounded bg-transparent outline-none border",
              isLight ? "border-purple/30" : "border-cherry-dark"
            )}
            required
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder={text.msgPlaceholder}
            rows={6}
            className={classNames(
              "w-full px-4 py-3 rounded bg-transparent outline-none resize-none border",
              isLight ? "border-purple/30" : "border-cherry-dark"
            )}
            required
            disabled={loading}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={classNames(
              "w-full py-3 rounded font-semibold transition-colors text-lg flex justify-center items-center gap-2",
              isLight
                ? "bg-purple text-white hover:bg-lesbianGreen-dark disabled:opacity-60"
                : "bg-lesbianGreen-light text-offwhite hover:bg-offwhite hover:text-lesbianGreen-light disabled:opacity-60"
            )}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                {language === "pt" ? "Enviando..." : "Sending..."}
              </>
            ) : (
              text.send
            )}
          </button>
        </form>
      </div>

      {/* TOAST */}
      {toast && (
        <div
          className={classNames(
            "fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg font-semibold text-center z-50 transition-opacity duration-300",
            toast.type === "success"
              ? "bg-lesbianGreen-light text-offwhite"
              : "bg-cherry-light text-offwhite"
          )}
          role="alert"
        >
          {toast.message}
        </div>
      )}
    </section>
  );
}
