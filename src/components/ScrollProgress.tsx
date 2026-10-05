import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D6A600] via-[#FEED99] to-[#FDC601] origin-left z-[100] pointer-events-none shadow-[0_1px_8px_rgba(253,198,1,0.5)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
