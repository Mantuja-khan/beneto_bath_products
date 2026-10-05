import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 35 };
      case "down":
        return { opacity: 0, y: -35 };
      case "left":
        return { opacity: 0, x: 35 };
      case "right":
        return { opacity: 0, x: -35 };
      case "none":
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
