"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
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
    // TODO: Replace with actual GitHub repo URL
    github: "https://github.com/Nagarjunan0904/3DGS_Indoor_Reconstruction",
    image: "/projects/gaussian-splatting.png",
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
    // TODO: Replace with actual GitHub repo URL
    github: "https://github.com/Nagarjunan0904/Multi-Sensor_Perception_Pipeline_for_Autonomous_Surface_Vehicles",
    image: "/projects/multi-sensor-perception.png",
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
    // TODO: Replace with actual GitHub repo URL
    github: "https://github.com/Nagarjunan0904/Open-Vocabulary-Object-Detection-for-Maritime-Perception",
    image: "/projects/maritime-perception.png",
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
    // TODO: Replace with actual GitHub repo URL
    github: "https://github.com/Nagarjunan0904/Demand_Forecasting_System_for_Retail",
    image: "/projects/demand-forecasting.png",
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
    // TODO: Replace with actual GitHub repo URL
    github: "https://github.com/Nagarjunan0904/Mental-Health-Anonymity-Monitor",
    image: "/projects/mham.png",
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
    // TODO: Replace with actual GitHub repo URL
    github: "https://github.com/Nagarjunan0904/Augmented-Reality-with-Planar-Homographies",
    image: "/projects/ar-homography.png",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
    isNew: false,
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageError, setImageError] = useState(false);
  const isPlaceholderGithub = project.github.includes("YOUR_REPO_NAME_HERE");

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(99,102,241,0.15)" }}
      transition={{ duration: 0.22 }}
      className="group rounded-xl bg-surface border border-border hover:border-accent/50 transition-colors duration-300 overflow-hidden flex flex-col"
    >
      {/* Project image */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-accent/20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9l4-4 4 4 4-4 4 4" />
              <circle cx="8.5" cy="13.5" r="1.5" />
            </svg>
          </div>
        )}
        {project.isNew && (
          <span className="absolute top-3 right-3 z-10 text-xs px-2.5 py-1 rounded-full bg-accent text-white font-medium">
            New
          </span>
        )}
        <span className="absolute bottom-3 right-3 z-10 text-xs text-white/70 font-[family-name:var(--font-jetbrains)] drop-shadow">
          {project.timeline}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent-light transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-3">{project.description}</p>

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

        <div className="flex items-center gap-2 pt-2 border-t border-border">
          {isPlaceholderGithub ? (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/40 text-xs font-medium text-muted/40 cursor-not-allowed select-none">
              <FiGithub className="w-3.5 h-3.5" />
              Code Coming Soon
            </div>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] transition-all duration-300 text-xs font-medium text-muted hover:text-accent"
            >
              <FiGithub className="w-3.5 h-3.5" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
