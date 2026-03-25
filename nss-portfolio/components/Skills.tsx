"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  SiOpencv,
  SiOnnx,
  SiRos,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiHuggingface,
  SiScikitlearn,
  SiGooglecloud,
  SiDocker,
  SiFastapi,
  SiVercel,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiLinux,
  SiNumpy,
  SiPandas,
  SiNvidia,
} from "react-icons/si";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import TechIcon from "@/components/ui/TechIcon";

interface TechItem {
  name: string;
  icon?: ComponentType<{ size?: number; color?: string }>;
  color?: string;
  shortLabel?: string;
}

interface Category {
  title: string;
  accentColor: string;
  items: TechItem[];
}

const categories: Category[] = [
  {
    title: "Computer Vision & 3D Reconstruction",
    accentColor: "#5C3EE8",
    items: [
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "YOLOv8", color: "#00D4AA", shortLabel: "YOLOv8" },
      { name: "GroundingDINO", color: "#FF6B6B", shortLabel: "GDINO" },
      { name: "OWL-ViT", color: "#A78BFA", shortLabel: "OWL-ViT" },
      { name: "Vision Transformer (ViT)", color: "#60A5FA", shortLabel: "ViT" },
      { name: "COLMAP", color: "#34D399", shortLabel: "COLMAP" },
      { name: "Nerfstudio", color: "#F59E0B", shortLabel: "Nerfs." },
      { name: "Gaussian Splatting (3DGS)", color: "#EC4899", shortLabel: "3DGS" },
      { name: "Open3D", color: "#0094C6", shortLabel: "Open3D" },
      { name: "SLAM", color: "#10B981", shortLabel: "SLAM" },
      { name: "ONNX", icon: SiOnnx, color: "#005CED" },
      { name: "TensorRT", color: "#76B900", shortLabel: "TRT" },
    ],
  },
  {
    title: "Deep Learning & Machine Learning",
    accentColor: "#EE4C2C",
    items: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "Hugging Face Transformers", icon: SiHuggingface, color: "#FFD21E" },
      { name: "BERT", color: "#F59E0B", shortLabel: "BERT" },
      { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "XGBoost", color: "#189BFF", shortLabel: "XGBoost" },
      { name: "LightGBM", color: "#4CAF50", shortLabel: "LGBM" },
    ],
  },
  {
    title: "Robotics & Perception",
    accentColor: "#22A3E0",
    items: [
      { name: "Robot Operating System (ROS)", icon: SiRos, color: "#22314E" },
      { name: "LiDAR", color: "#9CA3AF", shortLabel: "LiDAR" },
      { name: "Multi-Sensor Fusion", color: "#6EE7B7", shortLabel: "Fusion" },
    ],
  },
  {
    title: "Cloud & Deployment",
    accentColor: "#FF9900",
    items: [
      { name: "Amazon Web Services (AWS)", color: "#FF9900", shortLabel: "AWS" },
      { name: "Google Cloud Platform", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Vercel", icon: SiVercel, color: "#e4e4e7" },
      { name: "GitHub Actions", color: "#2088FF", shortLabel: "GH Act" },
    ],
  },
  {
    title: "Languages & Core",
    accentColor: "#3776AB",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", color: "#A8B9CC", shortLabel: "C" },
      { name: "Java", color: "#F89820", shortLabel: "Java" },
      { name: "SQL", color: "#F29111", shortLabel: "SQL" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Data & Visualization",
    accentColor: "#4DABCF",
    items: [
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Pandas", icon: SiPandas, color: "#E70488" },
      { name: "Matplotlib", color: "#3A7EBF", shortLabel: "Matplt" },
      { name: "Seaborn", color: "#4C72B0", shortLabel: "Seaborn" },
      { name: "Power BI", color: "#F2C811", shortLabel: "PowerBI" },
    ],
  },
  {
    title: "Systems & Tools",
    accentColor: "#F05032",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#e4e4e7" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "IBM ACE", color: "#1F70C1", shortLabel: "ACE" },
      { name: "IBM MQ", color: "#1F70C1", shortLabel: "IBM MQ" },
      { name: "CUDA", icon: SiNvidia, color: "#76B900" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded mb-12" />
        </ScrollReveal>

        <motion.div
          className="flex flex-col gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase opacity-80">
                  {cat.title}
                </h3>
                <div
                  className="flex-1 h-px opacity-25"
                  style={{
                    background: `linear-gradient(to right, ${cat.accentColor}, transparent)`,
                  }}
                />
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-10 gap-4">
                {cat.items.map((tech) => (
                  <TechIcon
                    key={tech.name}
                    name={tech.name}
                    Icon={tech.icon}
                    color={tech.color}
                    shortLabel={tech.shortLabel}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
