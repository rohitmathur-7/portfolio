"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projectsData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index }: { project: (typeof projectsData)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, [x, y]);

  const handleMouseLeave = () => { x.set(0); y.set(0); setIsHovered(false); };

  const emoji = project.title === "Watchflix" ? "\ud83c\udfac" : project.title === "Food Delivery App" ? "\ud83c\udf55"
    : project.title.includes("Gutenberg") ? "\ud83d\udcdd" : project.title.includes("Portfolio") ? "\ud83d\udcbc" : "\ud83c\udf10";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: isHovered ? rotateX : 0, rotateY: isHovered ? rotateY : 0, transformPerspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative spotlight-card"
    >
      <div className="relative rounded-2xl bg-surface border border-border overflow-hidden card-hover-border transition-all duration-500">
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-secondary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          style={{ transformOrigin: "left" }}
        />

        <div className="relative h-56 md:h-64 overflow-hidden bg-surface-light">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute inset-0 line-pattern opacity-50" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute w-32 h-32 rounded-full border border-primary/10"
              animate={isHovered ? { scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] } : { scale: 1, opacity: 0.1 }}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            />
            <motion.div
              className="text-7xl relative z-10"
              animate={isHovered ? { scale: 1.3, rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {emoji}
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-transparent flex items-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-3">
              {project.live && project.live !== "#" && (
                <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-light transition-colors"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.1 }}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live
                </motion.a>
              )}
              {project.github && project.github !== "#" && (
                <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated text-foreground text-sm font-semibold rounded-xl border border-border-light hover:border-primary/50 transition-colors"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.15 }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </motion.a>
              )}
            </div>
          </motion.div>

          {project.featured && (
            <div className="absolute top-4 right-4">
              <motion.span
                className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm"
                animate={{ boxShadow: ["0 0 0px rgba(34,211,238,0)", "0 0 15px rgba(34,211,238,0.2)", "0 0 0px rgba(34,211,238,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Featured
              </motion.span>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-all duration-300">{project.title}</h3>
            <p className="text-sm text-primary/70 font-medium">{project.subtitle}</p>
          </div>

          <p className="text-sm text-muted-light leading-relaxed mb-5">{project.description}</p>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3 text-sm">
              <motion.span className="shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"
                animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <div>
                <span className="text-red-400/80 font-medium text-xs uppercase tracking-wider">Challenge</span>
                <p className="text-muted text-[13px] mt-0.5">{project.problem}</p>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <motion.span className="shrink-0 w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5"
                animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
              <div>
                <span className="text-green-400/80 font-medium text-xs uppercase tracking-wider">Solution</span>
                <p className="text-muted text-[13px] mt-0.5">{project.solution}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, tIdx) => (
              <motion.span key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + tIdx * 0.05 }}
                whileHover={{ scale: 1.1, y: -2, borderColor: "rgba(99,102,241,0.3)" }}
                className="px-3 py-1 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 rounded-lg cursor-default transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] morph-blob" />
      </div>
      <div className="mx-auto max-w-6xl relative">
        <SectionHeading title="Featured Projects" subtitle="What I've built" />
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
