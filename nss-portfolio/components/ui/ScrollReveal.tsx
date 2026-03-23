"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants, MotionProps } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  variants?: Variants;
  /** IntersectionObserver root margin — controls when the reveal fires */
  margin?: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Wraps children in a `motion.div` (or any element via `as`) that fades in
 * when it enters the viewport.  Fires once; won't re-animate on scroll out.
 *
 * Usage:
 *   <ScrollReveal variants={fadeLeft}>
 *     <p>Revealed on scroll</p>
 *   </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  variants = fadeUp,
  margin = "-80px",
  className,
  as = "div",
  ...motionProps
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);

  const Tag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...motionProps}
    >
      {children}
    </Tag>
  );
}
