import { motion } from "framer-motion";

const PageLoader = () => (
  <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-8">
    <div className="relative w-24 h-24 rounded-full border-4 border-blue-100 overflow-hidden flex items-center justify-center shadow-inner">
      {/* Water Fill - Back Wave */}
      <motion.div
        className="absolute bottom-0 w-[200%] h-[200%] bg-blue-400/50 rounded-[45%]"
        animate={{
          y: ["85%", "-15%"],
          rotate: [360, 0]
        }}
        transition={{
          y: {
            duration: 2.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          rotate: {
            duration: 3.5,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
      {/* Water Fill - Front Wave */}
      <motion.div
        className="absolute bottom-0 w-[200%] h-[200%] bg-blue-500/80 rounded-[40%]"
        animate={{
          y: ["80%", "-20%"],
          rotate: [0, 360]
        }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
    </div>

    {/* Loading Text */}
    <div className="flex gap-1 items-center">
      <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-body font-medium">Loading</p>
      <motion.div className="flex gap-1 ml-1" initial="hidden" animate="visible">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-blue-500"
            animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  </div>
);

export default PageLoader;
