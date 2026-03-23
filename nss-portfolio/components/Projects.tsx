"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";

const projects = [
  {
    title: "Real-Time Object Detection Pipeline",
    description:
      "End-to-end object detection system using YOLOv8 with custom training on domain-specific datasets. Optimized for real-time inference with TensorRT.",
    tags: ["PyTorch", "YOLOv8", "TensorRT", "OpenCV", "CUDA"],
    github: "https://github.com/Nagarjunan0904",
  },
  {
    title: "3D Point Cloud Segmentation",
    description:
      "Semantic segmentation of LiDAR point clouds for autonomous driving scenes using PointNet++ and Open3D for visualization and preprocessing.",
    tags: ["Open3D", "PyTorch", "PointNet++", "LiDAR", "Python"],
    github: "https://github.com/Nagarjunan0904",
  },
  {
    title: "Monocular Depth Estimation",
    description:
      "Deep learning model for predicting depth maps from single RGB images using encoder-decoder architecture with attention mechanisms.",
    tags: ["TensorFlow", "Keras", "Depth Estimation", "CNN", "Python"],
    github: "https://github.com/Nagarjunan0904",
  },
  {
    title: "Visual SLAM System",
    description:
      "Feature-based visual SLAM implementation for indoor navigation with loop closure detection and real-time 3D map construction.",
    tags: ["OpenCV", "C++", "SLAM", "Feature Matching", "3D Mapping"],
    github: "https://github.com/Nagarjunan0904",
  },
  {
    title: "Image Classification with Vision Transformers",
    description:
      "Fine-tuned Vision Transformer (ViT) for multi-class image classification, achieving state-of-the-art accuracy on custom industrial datasets.",
    tags: ["PyTorch", "ViT", "Transfer Learning", "Transformers"],
    github: "https://github.com/Nagarjunan0904",
  },
  {
    title: "Automated Data Annotation Tool",
    description:
      "Semi-automated annotation pipeline leveraging SAM (Segment Anything) for accelerating dataset creation for CV projects.",
    tags: ["SAM", "Python", "OpenCV", "Streamlit", "Data Pipeline"],
    github: "https://github.com/Nagarjunan0904",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-4" />
          <p className="text-muted mb-12 max-w-2xl">
            A selection of projects showcasing my work in computer vision, 3D
            perception, and machine learning.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(99,102,241,0.15)" }}
              transition={{ duration: 0.22 }}
              className="group rounded-xl bg-surface border border-border hover:border-accent/50 transition-colors duration-300 overflow-hidden flex flex-col"
            >
              {/* Placeholder image area */}
              <div className="h-44 bg-gradient-to-br from-accent/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
                <motion.svg
                  className="w-12 h-12 text-accent/30 group-hover:text-accent/60 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </motion.svg>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
