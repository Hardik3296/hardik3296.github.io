import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Hardik Gaur
        </p>
        <div className="flex items-center gap-5">
          <a href="mailto:gaur.hardik@outlook.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hardik-gaur-135891122" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/Hardik3296" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
