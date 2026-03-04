import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import faucetImg from "@/assets/hero-bathroom.jpg";
import { Award, Droplets, Shield, Users, Target, Heart } from "lucide-react";

const values = [
  { icon: Award, title: "Premium Quality", desc: "Every product undergoes rigorous quality testing to ensure lasting durability and performance.", img: "https://i.pinimg.com/736x/a2/f0/57/a2f05752ede45753b484a67908d80b96.jpg" },
  { icon: Droplets, title: "Water Efficient", desc: "Eco-friendly designs that save water without compromising on performance or user experience.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" },
  { icon: Shield, title: "10 Year Warranty", desc: "We stand behind our products with a comprehensive warranty program for your peace of mind.", img: "https://i.pinimg.com/1200x/a6/4c/62/a64c62a86660c016dd1a9444748ba5f0.jpg" },
  { icon: Users, title: "Expert Team", desc: "Our experienced professionals guide you from selection to installation and beyond.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80" },
  { icon: Target, title: "Innovation Driven", desc: "Constantly researching and developing new technologies for better bathroom solutions.", img: "https://i.pinimg.com/736x/d5/6a/42/d56a420d75684cb4180ee722f2a6fe4a.jpg" },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction is our priority. We go above and beyond to exceed expectations.", img: "https://i.pinimg.com/1200x/cb/da/4c/cbda4cf3932db1201ab5bffc6e078c48.jpg" },
];

// ── Add / change your 4 story images here ──────────────────────────────────
const storyImages = [
  "https://i.pinimg.com/1200x/41/dd/7c/41dd7c1f547a6b23b639411f8f012ff7.jpg",
  "https://i.pinimg.com/736x/a2/f0/57/a2f05752ede45753b484a67908d80b96.jpg",
  "https://i.pinimg.com/1200x/5d/ca/8d/5dca8db967359e3d1dd72317efed07da.jpg",
  "https://i.pinimg.com/1200x/a6/4c/62/a64c62a86660c016dd1a9444748ba5f0.jpg",
];
// ───────────────────────────────────────────────────────────────────────────

const StoryCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % storyImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full rounded overflow-hidden shadow-md aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
      {/* Slides */}
      {storyImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Our Story ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {storyImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current
              ? "w-6 h-2 bg-white"
              : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white text-[10px] font-body uppercase tracking-widest px-2.5 py-1">
        {current + 1} / {storyImages.length}
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16 lg:pt-20">
      <PageHero
        title="About Us"
        subtitle="Who We Are"
        description="With decades of experience in bathroom solutions, we bring you premium quality products that combine elegance with functionality. Our commitment to innovation and quality makes us a trusted name in bathroom fittings across India."
        bgImage={faucetImg}
      />

      {/* Story */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">

            {/* Left Side: Carousel */}
            <StoryCarousel />

            {/* Right Side: Content */}
            <div className="flex flex-col justify-center h-full lg:min-h-[420px]">
              <p className="section-subtitle mb-3">Our Story</p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                Building Trust Since Day One
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Founded with a vision to transform Indian bathrooms, we have grown
                from a small manufacturing unit to a nationally recognized brand.
                Our journey has been defined by an unwavering commitment to quality
                and customer satisfaction.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Today, we offer over 500+ products across multiple collections,
                serving thousands of happy customers. Our state-of-the-art
                manufacturing facility ensures each product meets international
                quality standards.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "300+", label: "Products" },
              { num: "10+", label: "Years Experience" },
              { num: "1000+", label: "Happy Customers" },
              { num: "25+", label: "Dealers" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-border p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="font-heading text-3xl font-bold text-accent">{s.num}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle mb-3 text-center">Our Values</p>
          <h2 className="section-title text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="relative bg-cover bg-center overflow-hidden rounded-lg group hover:shadow-lg transition-all min-h-[250px] flex flex-col justify-center p-8 text-center"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="relative z-10 w-full h-full">
                  <item.icon className="mx-auto mb-4 text-blue-400" size={36} strokeWidth={1.5} />
                  <h3 className="font-heading text-xl text-white font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;