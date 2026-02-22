import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { getReadingTime } from "@/lib/reading-time";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-heading uppercase tracking-widest"
            >
              <ArrowLeft size={16} /> Back Home
            </button>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mb-12">
              Thoughts on backend engineering, distributed systems, and technical leadership.
            </p>
          </motion.div>

          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
