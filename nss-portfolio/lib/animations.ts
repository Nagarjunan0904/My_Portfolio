import type { Variants } from "framer-motion";

// ─── Easing ──────────────────────────────────────────────────────────────────
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  spring: { type: "spring", stiffness: 300, damping: 30 },
  springSnappy: { type: "spring", stiffness: 400, damping: 25 },
  out: [0.0, 0.0, 0.2, 1] as const,
};

// ─── Core entrance variants ───────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.out },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.smooth },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.out },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.out },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.out },
  },
};

// ─── Stagger containers ───────────────────────────────────────────────────────

/** Wrap a list of `motion` children; they'll animate in sequence. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// ─── Progress bar (width) ─────────────────────────────────────────────────────

/** Use as `animate={{ width: \`${level}%\` }}` after measuring inView. */
export const progressBar = (level: number): object => ({
  hidden: { width: "0%" },
  visible: {
    width: `${level}%`,
    transition: { duration: 0.9, ease: ease.out, delay: 0.2 },
  },
});

// ─── Hero-specific ────────────────────────────────────────────────────────────

/** Hero content stagger with a slightly longer initial delay */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

// ─── Card hover ───────────────────────────────────────────────────────────────

export const cardHover = {
  rest: { y: 0, boxShadow: "0 0 0px rgba(99,102,241,0)" },
  hover: {
    y: -5,
    boxShadow: "0 12px 40px rgba(99,102,241,0.15)",
    transition: { duration: 0.25, ease: ease.smooth },
  },
};
