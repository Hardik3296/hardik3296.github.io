import { motion } from "framer-motion";

const experiences = [
  {
    company: "Atlas Consolidated Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Jul 2022 — Present",
    highlights: [
      "Resolved mobile app performance issues by optimizing navigation logic and enhancing responsiveness.",
      "Implemented offline-first architecture with local database storage for seamless offline functionality.",
      "Mentored juniors and interns; enforced code quality standards.",
      "Developed a framework to identify and remove unused modules, reducing app bundle size.",
      "Architected a backend-driven UI framework for client configuration management.",
    ],
  },
  {
    company: "Hypersonix Inc.",
    role: "Senior Frontend Engineer",
    period: "Sep 2021 — Jul 2022",
    highlights: [
      "Built new mobile app features and resolved bugs to ensure stability.",
      "Implemented data visualization features for the web dashboard.",
      "Collaborated on a major interface modernization overhaul.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    period: "Jul 2019 — Sep 2021",
    highlights: [
      "Developed a fully offline-capable healthcare app for doctors to diagnose patients and store records.",
      "Built a React Native app for patients to track symptoms and book appointments.",
      "Built accessible, responsive React.js web interfaces.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-16">Experience</h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-display font-semibold">{exp.company}</h3>
                  <p className="text-primary text-sm lg:text-base">{exp.role}</p>
                </div>
                <p className="text-muted-foreground text-sm mt-1 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-muted-foreground text-sm lg:text-base leading-relaxed pl-4 border-l border-border hover:border-primary/40 transition-colors">
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
