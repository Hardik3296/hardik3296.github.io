import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Senior Frontend Developer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] mb-6">
            Hardik
            <br />
            <span className="text-gradient">Gaur</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-10">
            6 years crafting high-performance web & mobile apps. Building
            scalable, offline-first solutions with React & React Native.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-5 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download Resume
          </a>
          <div className="flex items-center gap-5">
            <a
              href="mailto:gaur.hardik@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hardik-gaur-135891122"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Hardik3296"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
