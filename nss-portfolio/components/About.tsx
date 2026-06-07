"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeLeft, fadeRight, staggerContainer, scaleIn } from "@/lib/animations";

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Computer Vision & 3D",
    desc: "Object detection, 3D reconstruction, neural rendering, edge inference",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <circle cx="5" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6.5l3 4.5M7 17.5l3-4.5M14 11.5l3-4.5M14 12.5l3 4.5" />
      </svg>
    ),
    title: "Agentic AI & LLMs",
    desc: "LangChain pipelines, self-correcting loops, Text-to-SQL, SSE streaming",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M12 2a4 4 0 014 4c0 1.95-2 4-4 6-2-2-4-4.05-4-6a4 4 0 014-4z" />
        <path d="M12 14c3 2.5 6 4 6 7H6c0-3 3-4.5 6-7z" />
      </svg>
    ),
    title: "Deep Learning",
    desc: "PyTorch, Vision Transformers, TensorRT optimization, model deployment",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Production ML",
    desc: "FastAPI services, Docker, Cloud Run, end-to-end ML pipelines",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text block */}
          <ScrollReveal variants={fadeLeft}>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                I&apos;m Nagarjunan Saravanan, an AI and Computer Vision Engineer building
                production-grade intelligent systems at the intersection of visual perception,
                large language models, and agentic AI. My work spans from 3D neural scene
                reconstruction to self-correcting LLM pipelines deployed at scale.
              </p>
              <p>
                My foundation is deep: 2D/3D visual perception, multi-sensor fusion, neural
                rendering, and edge-optimized inference. I&apos;m now expanding into Agentic AI
                systems, Text-to-SQL applications, and LLM-powered full-stack products —
                bridging the gap between computer vision research and production AI engineering.
              </p>
              <p>
                Whether it&apos;s optimizing YOLOv8 with TensorRT for real-time maritime edge
                deployment, reconstructing 3D indoor scenes with Gaussian Splatting, or
                engineering self-correcting LLM loops that query 25M+ records in plain
                English — I build systems that work in the real world.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {cards.map((item) => (
              <ScrollReveal key={item.title} variants={fadeRight}>
                <motion.div
                  className="p-5 rounded-xl bg-surface border border-border hover:border-accent/50 transition-colors duration-300 h-full"
                  whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(99,102,241,0.12)" }}
                  transition={{ duration: 0.22 }}
                >
                  <span className="mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
