import { motion } from "framer-motion";
import type { JSX } from "react/jsx-runtime";

interface TextAnimationProps {
  words: string[];
  isInView: boolean;
  wordDelay: number;
  baseDelay?: number;
}

export function TextAnimation({
  words,
  isInView,
  wordDelay,
  baseDelay = 0,
}: TextAnimationProps): JSX.Element[] {
  return words.map((word, index) => (
    <span key={index} className="inline-flex">
      <motion.span
        className="inline-block"
        initial={{
          opacity: 0,
          filter: "blur(6px)",
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                filter: "blur(0px)",
              }
            : undefined
        }
        transition={{
          visualDuration: 0.4,
          type: "spring",
          bounce: 0.1,
          delay: baseDelay + index * wordDelay,
        }}
      >
        {word}
        {index < words.length - 1 ? "\u00A0" : ""}
      </motion.span>
    </span>
  ));
}
