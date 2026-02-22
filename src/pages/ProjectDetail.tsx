import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  const images = project.images || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-heading uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>

          <span className="text-xs border border-border px-3 py-1 text-muted-foreground font-heading uppercase tracking-widest">
            {project.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs border border-border px-3 py-1 text-muted-foreground font-heading uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>

          {/* Image Slider */}
          {images.length > 0 && (
            <div className="mb-10 border border-border relative group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={images[currentSlide]}
                  alt={`${project.title} demo ${currentSlide + 1}`}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-foreground hover:text-background"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-foreground hover:text-background"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 border border-foreground transition-colors ${idx === currentSlide ? "bg-foreground" : "bg-transparent"}`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{project.fullDescription}</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Architecture</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{project.architecture}</p>
            </div>

            {project.links.length > 0 && (
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Links</h2>
                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="border border-foreground px-5 py-2 text-sm font-heading uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
