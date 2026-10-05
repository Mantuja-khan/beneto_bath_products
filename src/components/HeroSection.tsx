import { useState, useRef } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import benetoVideo from "@/beneto_imgs/beneto_video.mp4";

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const titleWords = "Redefine Your Luxury Bathroom Living".split(" ");
  const descWords = "Discover precision craftsmanship, modern elegance, and uncompromising quality engineered for your everyday comfort.".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.25,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const descContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative mt-16 lg:mt-20 h-[85vh] min-h-[580px] lg:h-[calc(100vh-80px)] lg:min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* 20-Second Full Video Background (No Images) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={benetoVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Soft, lightweight overlay to keep video bright and vibrant */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Centered Hero Content with Text-by-Text Reveal Animation */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#FDC601]/40 mb-6 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#FDC601] animate-ping" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FDC601] font-body font-semibold">
            BENETO · Bath Solution
          </span>
        </motion.div>

        {/* Heading: Word-by-Word Reveal Animation */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.12] tracking-tight max-w-3xl drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)]"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block mr-[0.24em] ${
                word.toLowerCase() === "luxury" || word.toLowerCase() === "bathroom"
                  ? "text-[#FDC601]"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description: Word-by-Word Staggered Reveal */}
        <motion.p
          variants={descContainerVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 text-white/90 font-body text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          {descWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Centered Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.65, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-[#FDC601] hover:bg-[#FEED99] text-black font-bold px-7 py-3.5 rounded-sm shadow-[0_4px_20px_rgba(253,198,1,0.35)] hover:shadow-[0_4px_25px_rgba(253,198,1,0.55)] transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-body group"
          >
            Explore Products
            <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>

          <Link
            to="/collections"
            className="inline-flex items-center gap-2 bg-black/50 hover:bg-black/80 text-white font-medium px-7 py-3.5 rounded-sm border border-white/30 hover:border-[#FDC601] hover:text-[#FDC601] transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-body backdrop-blur-sm shadow-md"
          >
            View Collections
          </Link>
        </motion.div>
      </div>

      {/* Audio Toggle in bottom corner (No pause button as requested) */}
      <div className="absolute bottom-5 right-6 z-20 hidden sm:block">
        <button
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.muted = !isMuted;
              setIsMuted(!isMuted);
            }
          }}
          className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white/90 hover:text-[#FDC601] hover:border-[#FDC601]/50 transition-all shadow-lg cursor-pointer"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          title={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Smooth Scroll Down Animation Indicator */}
      <motion.button
        onClick={() => {
          const target = document.getElementById("about-us") || document.getElementById("products");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
          }
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/90 hover:text-[#FDC601] transition-all cursor-pointer group"
        aria-label="Scroll down to explore"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-light text-[#FDC601] group-hover:text-white transition-colors">
          Scroll Down
        </span>
        <div className="w-4 h-7 rounded-full border border-[#FDC601]/80 group-hover:border-[#FDC601] flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-[#FDC601]"
          />
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;