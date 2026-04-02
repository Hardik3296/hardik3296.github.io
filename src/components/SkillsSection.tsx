import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Web",
    skills: ["React", "Next.js", "TypeScript", "Redux", "HTML/CSS", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo", "iOS & Android", "Realm", "React Query", "Zustand"],
  },
  {
    label: "Tools",
    skills: ["Git", "CI/CD", "Performance Optimization"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-16">Skills</h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-primary text-xs tracking-[0.2em] uppercase mb-3 font-display">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm lg:text-base rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
