import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { interests } from "@/data/interests";

const InterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="interests" className="py-32 px-6" aria-label="Interests">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Interests
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mb-12">
            Beyond the terminal — what keeps me curious and energized.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="border border-border bg-transparent p-6 hover:border-muted-foreground transition-colors group"
            >
              <interest.icon
                size={24}
                className="text-muted-foreground group-hover:text-foreground transition-colors mb-4"
              />
              <h3 className="text-sm font-heading font-semibold text-foreground mb-1">
                {interest.label}
              </h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
