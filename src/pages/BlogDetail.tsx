import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { ArrowLeft } from "lucide-react";
import { getReadingTime } from "@/lib/reading-time";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <button
            onClick={() => navigate("/#blog")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-heading uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs text-muted-foreground font-heading uppercase tracking-widest">
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="w-1 h-1 bg-muted-foreground" />
            <span className="text-xs text-muted-foreground font-heading uppercase tracking-widest">
              {getReadingTime(post.content)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs border border-border px-3 py-1 text-muted-foreground font-heading uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <article className="prose prose-invert prose-sm max-w-none font-body 
            prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground
            prose-strong:text-foreground
            prose-code:text-foreground prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5
            prose-a:text-foreground prose-a:underline
          ">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const inline = !match;
                  return !inline ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{ background: "hsl(0 0% 8%)", border: "1px solid hsl(0 0% 18%)", borderRadius: 0 }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;
