import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";
import { getReadingTime } from "@/lib/reading-time";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-32 px-6" aria-label="Blog">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Blog
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mb-12">
            Thoughts on backend engineering, distributed systems, and technical leadership.
          </p>
        </motion.div>

        {/* Show only first 3 on homepage */}

        <div className="space-y-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="border border-border bg-transparent p-8 cursor-pointer group hover:border-muted-foreground transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs text-muted-foreground font-heading uppercase tracking-widest">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </span>
                <span className="w-1 h-1 bg-muted-foreground" />
                <span className="text-xs text-muted-foreground font-heading uppercase tracking-widest">
                  {getReadingTime(post.content)}
                </span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-glow transition-all flex items-center gap-3">
                {post.title}
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-border px-3 py-1 text-muted-foreground font-heading uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-heading uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            See All Posts <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
