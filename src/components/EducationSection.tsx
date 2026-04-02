import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Graphic Era Deemed University",
    year: "2015 — 2019",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary (ISC)",
    field: "",
    institution: "St. Dominic Savio College",
    year: "2014",
    icon: BookOpen,
  },
  {
    degree: "Secondary (ICSE)",
    field: "",
    institution: "St. Dominic Savio College",
    year: "2012",
    icon: School,
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6" id="education">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-16">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="text-xs text-primary font-display tracking-wider uppercase mb-2">{edu.year}</p>
                <h3 className="font-display font-semibold text-base mb-1">{edu.degree}</h3>
                {edu.field && <p className="text-sm text-muted-foreground mb-2">{edu.field}</p>}
                <p className="text-sm text-muted-foreground/70">{edu.institution}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
