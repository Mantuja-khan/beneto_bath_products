import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import heroShower from "@/assets/shower.webp";
import heroAccessories from "@/assets/tabs.webp";

const slides = [
  {
    img: "https://i.pinimg.com/1200x/b7/bd/fa/b7bdfaef2ede2880e7f833f9d9ffeeae.jpg",
    subtitle: "Premium Bathroom Solutions",
    title: "Redefine Your Bathroom",
    desc: "Discover our curated collection of premium faucets, showers & accessories crafted for modern living.",
    link: "/products",
    cta: "Explore Now",
    objectPosition: "center center",
  },
  {
    img: heroShower,
    subtitle: "Luxury Shower Systems",
    title: "Experience\nPure Comfort",
    desc: "From rainfall showers to multi-function panels — elevate your daily routine with our shower range.",
    link: "/products",
    cta: "Shop Showers",
    objectPosition: "center center",
  },
  {
    img: heroAccessories,
    subtitle: "Elegant Accessories",
    title: "Every Detail\nMatters",
    desc: "Complete your bathroom with our premium accessories — towel rods, soap dispensers, shelves & more.",
    link: "/products",
    cta: "View Accessories",
    objectPosition: "center center",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative mt-16 lg:mt-20 h-[50vh] min-h-[480px] md:h-[60vh] lg:h-[calc(100vh-80px)] lg:min-h-[600px] flex items-center overflow-hidden">
      {/* All background images stacked — no white flash */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* Wrapper scaled down slightly to "zoom out" the image */}
          <div className="absolute inset-[0%] w-[100%] h-[100%]">
            <img
              src={s.img}
              alt={s.subtitle}
              className="w-full h-full object-cover"
              style={{ objectPosition: s.objectPosition }}
            />
          </div>
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70 font-body mb-4">
              {slides[current].subtitle}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight max-w-2xl whitespace-pre-line">
              {slides[current].title}
            </h1>
            <p className="mt-6 text-primary-foreground/80 font-body text-base md:text-lg max-w-md font-light leading-relaxed">
              {slides[current].desc}
            </p>
            <Link
              to={slides[current].link}
              className="mt-8 inline-flex items-center gap-3 text-primary-foreground text-sm uppercase tracking-[0.2em] font-body hover:gap-5 transition-all"
            >
              {slides[current].cta} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;