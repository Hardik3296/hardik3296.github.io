import { motion } from "framer-motion";

const projects = [
  {
    title: "Dynamic Modular Framework for Multi-Client Apps",
    description: "Scalable framework enabling multiple apps from a single codebase with dynamic navigation and modular components for rapid client customization.",
    tags: ["React Native", "Architecture", "Multi-tenant"],
  },
  {
    title: "Offline-First Architecture with Realm Database",
    description: "Engineered offline-first transaction storage using Realm, enabling seamless data access during network disruptions with automatic reconciliation.",
    tags: ["React Native", "Realm", "Offline-first"],
  },
  {
    title: "Backend-Driven Client Management Portal",
    description: "Scalable portal framework with dynamic UI generation from backend configurations, replacing legacy admin panels with self-service capabilities.",
    tags: ["React", "TypeScript", "Dynamic UI"],
  },
  {
    title: "Multi-Brand Website Generator with Prismic",
    description: "Framework generating multiple brand websites from a single codebase using Prismic CMS with a widget-based modular architecture.",
    tags: ["Next.js", "Prismic", "CMS"],
  },
  {
    title: "Patient Health Management App",
    description: "Comprehensive mobile app for tracking doctor visits, placing medicine orders, and setting health reminders with intuitive interface design.",
    tags: ["React Native", "Healthcare", "Mobile"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-2">Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-16">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors cursor-default"
            >
              <h3 className="font-display font-semibold text-lg lg:text-xl mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-display"
                  >
                    {tag}
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

export default ProjectsSection;
