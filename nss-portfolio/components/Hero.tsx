"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroContainer, heroItem, fadeIn } from "@/lib/animations";

const roles = [
  "Computer Vision Engineer",
  "Perception Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Data Scientist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!deleting && displayed.length < currentRole.length) {
      const timeout = setTimeout(
        () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
        60
      );
      return () => clearTimeout(timeout);
    }

    if (!deleting && displayed.length === currentRole.length) {
      const timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        30
      );
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Glow orbs — static, no infinite JS animation */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={heroItem}
          className="text-accent font-[family-name:var(--font-jetbrains)] text-sm tracking-widest uppercase mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={heroItem}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Nagarjunan{" "}
          <span className="gradient-text">Saravanan</span>
        </motion.h1>

        <motion.div
          variants={heroItem}
          className="h-10 md:h-12 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-2xl text-muted font-[family-name:var(--font-jetbrains)]">
            {displayed}
          </span>
          <span
            className="inline-block w-0.5 h-6 md:h-7 bg-accent ml-1"
            style={{ animation: "typewriter-blink 1s step-end infinite" }}
          />
        </motion.div>

        <motion.p
          variants={heroItem}
          className="text-muted text-lg max-w-2xl mx-auto mb-10"
        >
          Building intelligent systems that see, understand, and perceive the
          world — from 2D image analysis to 3D point cloud processing.
        </motion.p>

        <motion.div
          variants={heroItem}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border hover:border-accent text-foreground rounded-lg font-medium transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/Nagarjunan0904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nagarjunan-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — outer fades in via framer-motion, inner bobs via CSS */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div style={{ animation: "hero-scroll-bob 1.5s ease-in-out 1.8s infinite" }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center">
            <div className="w-1 h-2 bg-muted rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
