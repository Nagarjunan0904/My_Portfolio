"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";

const skillCategories = [
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "Keras", level: 90 },
      { name: "OpenCV", level: 95 },
      { name: "Open3D", level: 85 },
      { name: "Scikit-learn", level: 88 },
      { name: "NumPy", level: 95 },
      { name: "Pandas", level: 90 },
    ],
  },
  {
    title: "Computer Vision & Perception",
    skills: [
      { name: "Object Detection", level: 92 },
      { name: "Image Segmentation", level: 90 },
      { name: "3D Point Clouds", level: 88 },
      { name: "Depth Estimation", level: 85 },
      { name: "Visual SLAM", level: 80 },
      { name: "Image Classification", level: 92 },
      { name: "Object Tracking", level: 85 },
      { name: "OCR / Scene Text", level: 82 },
    ],
  },
  {
    title: "ML / AI",
    skills: [
      { name: "CNNs", level: 95 },
      { name: "Transformers", level: 88 },
      { name: "GANs", level: 82 },
      { name: "Transfer Learning", level: 92 },
      { name: "Model Optimization", level: 85 },
      { name: "MLOps", level: 80 },
      { name: "Data Augmentation", level: 90 },
      { name: "Hyperparameter Tuning", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 75 },
      { name: "Docker", level: 82 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 88 },
      { name: "AWS / GCP", level: 78 },
      { name: "CUDA", level: 75 },
      { name: "ROS", level: 72 },
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
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <h3 className="text-lg font-semibold mb-5 text-accent-light">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.9,
                          ease: [0.0, 0.0, 0.2, 1],
                          delay: 0.15 + i * 0.05,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
