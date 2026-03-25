"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainerSlow, fadeUp } from "@/lib/animations";

const experiences = [
  {
    role: "AI/ML Intern (Team Lead – HGI, Content Moderation)",
    company: "Uplifty AI",
    period: "Aug 2025 – Present",
    location: "Remote",
    description: [
      "Led development of Human Growth Index (HGI) pipelines using transformer-based models (BERTweet + LoRA), enabling structured scoring across multiple behavioral dimensions",
      "Built a multi-stage image moderation system combining perceptual hashing, NSFW classification, OCR signals, and rule-based decisioning, improving unsafe-content recall by ~18% with <3% false positives",
      "Designed event-driven ML workflows using Supabase triggers, enabling real-time content evaluation and scalable orchestration across services",
      "Optimized inference pipelines on Cloud Run, reducing latency from ~420 ms → ~190 ms (~55% improvement) through preprocessing and model efficiency tuning",
    ],
    tech: ["Python", "PyTorch", "Transformers", "FastAPI", "Google Cloud Run", "PDQ", "OCR", "Supabase"],
  },
  {
    role: "Research Assistant – Marine Robotics Lab",
    company: "Binghamton University",
    period: "Aug 2025 – Present",
    location: "Binghamton, NY",
    description: [
      "Conducted field deployments using BlueBoat USV, collecting synchronized Side-Scan Sonar (SSS) and Single-Beam Echosounder (SBE) datasets for underwater perception and mapping",
      "Built data pipelines for sensor ingestion and processing, converting ROS bag recordings into structured datasets (50+ CSV outputs) for downstream analysis",
      "Investigating multi-sensor fusion approaches for sonar + GPS data to improve depth estimation, confidence scoring, and spatial alignment",
      "Studying perception literature (SLAM, multimodal sensing, mapping) to design robust evaluation strategies for real-world marine environments",
    ],
    tech: ["ROS Noetic", "BlueBoat USV", "Sonar (SSS/SBE)", "Python", "Linux"],
  },
  {
    role: "Senior Associate",
    company: "State Street Corporation",
    period: "Jul 2022 – Aug 2024",
    location: "Bangalore, India",
    description: [
      "Developed and maintained enterprise-grade backend systems in a high-availability financial environment with strict reliability requirements",
      "Built and optimized API-driven services supporting large-scale transaction workflows and data integration pipelines",
      "Strengthened system robustness through production debugging, monitoring, and performance tuning under real client constraints",
      "Collaborated across teams to deliver scalable solutions aligned with regulatory and operational standards",
    ],
    tech: ["Python", "IBM ACE", "IIB v10", "ESQL", "MQ", "Power BI"],
  },
  {
    role: "System Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "Sep 2018 – Jun 2022",
    location: "Chennai, India",
    description: [
      "Built and supported backend services using IBM ACE (IIB) and IBM MQ, enabling reliable message-driven integration systems",
      "Designed and maintained data transformation pipelines for enterprise clients, ensuring high-throughput and fault tolerance",
      "Gained strong foundations in SDLC, debugging, and production support, handling real-world deployment challenges",
      "Contributed to cross-functional development and support cycles in client-facing environments",
    ],
    tech: ["IBM IIB", "ACE", "ESQL", "SOAPUI"],
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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent-light text-sm">{exp.company}</p>
                      <p className="text-xs text-muted/70 mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-sm text-muted font-[family-name:var(--font-jetbrains)] mt-1 md:mt-0 md:text-right shrink-0">
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
