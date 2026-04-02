import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-lg mx-auto leading-relaxed">
            Have a project in mind or looking for a senior developer? I'd love to hear from you.
          </p>
          <motion.a
            href="mailto:gaur.hardik@outlook.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:opacity-90 transition-opacity mt-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} />
            Say Hello
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
