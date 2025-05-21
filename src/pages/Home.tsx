import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.main
      className="bg-background text-text min-h-screen px-6 sm:px-10 md:px-24 pt-40 font-sans"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <section id="inicio" className="max-w-3xl mx-auto space-y-6 text-center">
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold tracking-tight text-highlight">
          Gabriel Franco
        </h1>
        <p className="text-[clamp(1.2rem,3vw,1.5rem)] leading-relaxed max-w-xl mx-auto text-muted">
          Desenvolvedor Front-End focado em criar experiências digitais
          modernas, acessíveis e com animações suaves e envolventes.
        </p>

        <div className="flex justify-center flex-wrap gap-5 pt-6">
          <a
            href="https://github.com/lamphead18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-highlight hover:text-yellow-300 transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-f-956163131"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-highlight hover:text-yellow-300 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="/Gabriel_Franco_CV.pdf"
            download
            className="px-4 py-2 border border-highlight text-highlight hover:bg-highlight hover:text-black transition rounded"
          >
            Baixar CV
          </a>
        </div>
      </section>
    </motion.main>
  );
}
