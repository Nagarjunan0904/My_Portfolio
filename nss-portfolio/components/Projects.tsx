"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";

const projects = [
  {
    title: "3D Gaussian Splatting – Indoor Multi-Room Reconstruction",
    timeline: "Mar 2026",
    description:
      "Built an end-to-end 3D reconstruction pipeline from smartphone video using COLMAP Structure-from-Motion and Nerfstudio Gaussian Splatting.",
    achievements: [
      "Processed 1,206 frames achieving 99.4% registration (1,199/1,206 images)",
      "0.567 px reprojection error via bundle adjustment",
      "Generated 294K+ point sparse reconstruction",
      "Optimized 917K Gaussian representation on RTX 5070 GPU",
    ],
    tags: ["3D Reconstruction", "Neural Rendering", "SfM", "NeRF", "CUDA"],
    github: null,
    icon: "✨",
    gradient: "from-violet-500/20 to-indigo-500/20",
    isNew: true,
  },
  {
    title: "Multi-Sensor Perception Pipeline (AGV System)",
    timeline: "Jan 2026 – Feb 2026",
    description:
      "Developed a production-style perception pipeline combining camera and LiDAR data for autonomous ground vehicles.",
    achievements: [
      "Fused YOLOv8 camera detections with LiDAR point clouds via calibrated late fusion",
      "97.7% 2D recall on KITTI dataset",
      "1.42 m mean 3D center error",
      ">91% detection retention under 70% LiDAR point dropout",
    ],
    tags: ["Sensor Fusion", "Autonomous Driving", "Computer Vision", "LiDAR", "3D Perception"],
    github: null,
    icon: "🤖",
    gradient: "from-blue-500/20 to-cyan-500/20",
    isNew: false,
  },
  {
    title: "Open-Vocabulary Object Detection for Maritime Perception",
    timeline: "Sep 2025 – Nov 2025",
    description:
      "Built a comparative pipeline for open-vocabulary detection enabling identification of unseen maritime objects using language-driven queries.",
    achievements: [
      "Benchmarked YOLOv8 vs OWL-ViT and GroundingDINO",
      "Achieved mAP@0.5 ≈ 0.71 on known classes",
      "Improved recall on novel hazards using language-driven queries",
      "Deployed interactive Streamlit system for human-in-the-loop review",
    ],
    tags: ["Open-Vocabulary", "Maritime Safety", "Zero-Shot Detection", "Robotics"],
    github: null,
    icon: "🎯",
    gradient: "from-teal-500/20 to-green-500/20",
    isNew: false,
  },
  {
    title: "Retail Demand Forecasting System (End-to-End)",
    timeline: "May 2025 – Sep 2025",
    description:
      "Built an end-to-end time-series forecasting system for retail demand prediction.",
    achievements: [
      "Processed 125K+ records with 40+ engineered features",
      "Benchmarked LightGBM, XGBoost, Prophet, and TFT models",
      "Deployed FastAPI service with sub-60 ms prediction latency",
      "~95% speedup through inference caching",
    ],
    tags: ["Time Series", "Forecasting", "MLOps", "Production ML"],
    github: null,
    icon: "📊",
    gradient: "from-amber-500/20 to-orange-500/20",
    isNew: false,
  },
  {
    title: "Mental Health Anonymity Monitor (MHAM)",
    timeline: "Sep 2025 – Nov 2025",
    description:
      "Scalable NLP pipeline processing 800K+ social media posts for behavioral analysis.",
    achievements: [
      "~99.9% uptime with rate-limit handling",
      "Integrated Perspective API for toxicity detection",
      "Built Flask dashboard for real-time monitoring",
      "Containerized for reliable deployment",
    ],
    tags: ["NLP", "Data Pipeline", "Mental Health", "Social Media"],
    github: null,
    icon: "🧠",
    gradient: "from-pink-500/20 to-rose-500/20",
    isNew: false,
  },
  {
    title: "Augmented Reality with Planar Homographies",
    timeline: "Coursework",
    description:
      "Implemented AR pipeline using planar homography estimation to overlay virtual content onto real-world surfaces.",
    achievements: [
      "Used SIFT/ORB feature matching with RANSAC",
      "Achieved stable overlay under varying viewpoints",
      "Demonstrated foundational AR and geometric vision techniques",
    ],
    tags: ["Augmented Reality", "Computer Vision", "Feature Matching"],
    github: null,
    icon: "🔭",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
    isNew: false,
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
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {project.isNew && (
                  <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-accent text-white font-medium">
                    New
                  </span>
                )}
                <span className="text-5xl opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300">
                  {project.icon}
                </span>
                <span className="absolute bottom-3 right-3 text-xs text-muted/60 font-[family-name:var(--font-jetbrains)]">
                  {project.timeline}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent-light transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mb-3">
                  {project.description}
                </p>

                <ul className="space-y-1 mb-4 flex-1">
                  {project.achievements.map((a, j) => (
                    <li key={j} className="text-xs text-muted/80 flex items-start gap-1.5">
                      <span className="text-accent mt-0.5 shrink-0">▹</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1 border-t border-border">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  ) : (
                    <span className="text-xs text-muted/40 italic">Repo coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
