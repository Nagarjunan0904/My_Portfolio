"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainerSlow, fadeUp } from "@/lib/animations";

const experiences = [
  {
    role: "Computer Vision Engineer",
    company: "Your Company Name",
    period: "2024 — Present",
    description: [
      "Developed real-time object detection and tracking systems for production environments",
      "Optimized deep learning models for edge deployment using TensorRT and ONNX",
      "Built data pipelines for large-scale image dataset processing and annotation",
    ],
    tech: ["PyTorch", "OpenCV", "TensorRT", "Docker"],
  },
  {
    role: "ML / Perception Engineer",
    company: "Your Previous Company",
    period: "2022 — 2024",
    description: [
      "Implemented 3D point cloud processing pipelines for LiDAR-based perception",
      "Trained and deployed semantic segmentation models for autonomous systems",
      "Collaborated with cross-functional teams to integrate CV models into production",
    ],
    tech: ["TensorFlow", "Open3D", "Python", "AWS"],
  },
  {
    role: "Data Science Intern",
    company: "Your Intern Company",
    period: "2021 — 2022",
    description: [
      "Conducted exploratory data analysis on large datasets using Python and Pandas",
      "Built classification models with scikit-learn achieving 95%+ accuracy",
      "Created dashboards and visualizations for stakeholder reporting",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-12" />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <motion.div
            className="space-y-12"
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-8 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-accent border-2 border-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 + i * 0.12 }}
                />

                <motion.div
                  className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors duration-300"
                  whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(99,102,241,0.10)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent-light text-sm">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted font-[family-name:var(--font-jetbrains)] mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
