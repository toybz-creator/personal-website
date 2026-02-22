import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" aria-label="Experience">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About & Experience
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-16">
            I believe in building systems that are simple to understand, reliable under pressure,
            and designed to evolve. Over 10 years, I've led teams, architected platforms serving
            millions, and shipped software that companies depend on daily.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-[3.5px] border border-foreground bg-background group-hover:bg-foreground transition-colors" />

              <div className="border border-border bg-transparent p-6 hover:border-muted-foreground transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-muted-foreground font-heading uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  {exp.company} · {exp.duration}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="w-1 h-1 mt-2 bg-muted-foreground shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
