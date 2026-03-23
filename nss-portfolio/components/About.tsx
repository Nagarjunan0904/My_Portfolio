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
    title: "Computer Vision",
    desc: "Object detection, segmentation, tracking, and image processing",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    title: "3D Perception",
    desc: "Point cloud processing, depth estimation, 3D reconstruction",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M12 2a4 4 0 014 4c0 1.95-2 4-4 6-2-2-4-4.05-4-6a4 4 0 014-4z" />
        <path d="M12 14c3 2.5 6 4 6 7H6c0-3 3-4.5 6-7z" />
      </svg>
    ),
    title: "Deep Learning",
    desc: "CNN, Transformer architectures, model optimization",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Data Science",
    desc: "Statistical analysis, data pipelines, visualization",
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
                I&apos;m Nagarjunan Saravanan, a passionate Computer Vision and AI
                Engineer dedicated to building intelligent systems that bridge the
                gap between visual data and actionable insights.
              </p>
              <p>
                My expertise spans across 2D image understanding, 3D perception
                and point cloud processing, deep learning model development, and
                deploying production-grade ML pipelines. I work at the intersection
                of classical computer vision and modern deep learning.
              </p>
              <p>
                Whether it&apos;s building real-time object detection systems,
                developing 3D scene understanding pipelines, or training custom
                neural networks — I thrive on solving complex visual perception
                challenges.
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
