import React from "react";
import { motion, type Variants } from "motion/react";

interface RevealTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  trigger?: "onScroll" | "onLoad";
  delay?: number;
  staggerSpeed?: number;
  duration?: number;
}

export function RevealText({
  text,
  tag: Tag = "h1",
  className = "",
  style = {},
  trigger = "onScroll",
  delay = 0,
  staggerSpeed = 0.05,
  duration = 0.7,
}: RevealTextProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerSpeed,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "105%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  const animationProps =
    trigger === "onLoad"
      ? { initial: "hidden", animate: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.2 },
        };

  return (
    <Tag className={`m-0 ${className}`} style={style}>
      <motion.span
        variants={containerVariants}
        {...animationProps}
        className="flex flex-wrap gap-[0.01em]"
        style={{ lineHeight: "inherit" }}
      >
        {text.split(" ").map((word, index) => {
          const isItalic = word.startsWith("*") && word.endsWith("*");
          const cleanWord = isItalic ? word.replace(/\*/g, "") : word;

          return (
            <span
              key={index}
              className="overflow-hidden inline-block py-[0.02em]! px-[0.1em]"
            >
              <motion.span
                variants={wordVariants}
                className={`inline-block leading-[1.1] ${
                  isItalic ? "italic font-light tracking-normal" : ""
                }`}
              >
                {cleanWord}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
