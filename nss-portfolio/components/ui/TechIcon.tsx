"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";

interface TechIconProps {
  name: string;
  Icon?: ComponentType<{ size?: number; color?: string }>;
  color?: string;
  shortLabel?: string;
}

function badgeFontSize(label: string): string {
  if (label.length <= 3) return "text-sm";
  if (label.length <= 5) return "text-xs";
  if (label.length <= 7) return "text-[10px]";
  return "text-[9px]";
}

export default function TechIcon({
  name,
  Icon,
  color = "#6366f1",
  shortLabel,
}: TechIconProps) {
  const label = shortLabel ?? name;

  return (
    <div
      className="group relative flex flex-col items-center gap-2"
      tabIndex={0}
      role="img"
      aria-label={name}
    >
      {/* Icon card */}
      <motion.div
        className="flex items-center justify-center w-12 h-12 rounded-xl
                   bg-surface-light border border-border cursor-default select-none"
        whileHover={{
          scale: 1.12,
          boxShadow: `0 0 18px ${color}50, 0 0 36px ${color}20`,
          borderColor: `${color}70`,
        }}
        whileFocus={{
          scale: 1.12,
          boxShadow: `0 0 18px ${color}50, 0 0 36px ${color}20`,
          borderColor: `${color}70`,
        }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {Icon ? (
          <Icon size={26} color={color} />
        ) : (
          <span
            className={`font-mono font-bold leading-tight text-center px-1 ${badgeFontSize(label)}`}
            style={{ color }}
          >
            {label}
          </span>
        )}
      </motion.div>

      {/* Tooltip */}
      <div
        className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2
                   pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100
                   transition-opacity duration-200 z-50"
      >
        <div
          className="bg-[#1a1a24] border border-border rounded-lg px-3 py-1.5
                     text-xs text-foreground whitespace-nowrap shadow-xl"
        >
          {name}
        </div>
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "5px solid #27272a",
          }}
        />
      </div>
    </div>
  );
}
