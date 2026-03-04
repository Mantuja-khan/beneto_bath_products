import { Link } from "react-router-dom";
import { Award, Droplets, Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about-us" className="section-padding">
    <div className="max-w-6xl mx-auto text-center">
      <AnimatedSection>
        <p className="section-subtitle mb-3">Who We Are</p>

        {/* Heading with animated wavy underline */}
        <div className="inline-block mb-6">
          <h2 className="section-title text-blue-600">About Us</h2>
          <div className="mt-2 flex justify-center overflow-hidden">
            <svg
              viewBox="0 0 200 12"
              xmlns="http://www.w3.org/2000/svg"
              className="w-50 h-3"
              preserveAspectRatio="none"
            >
              <style>{`
                @keyframes waveMove {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .wave-path {
                  animation: waveMove 2.5s linear infinite;
                }
              `}</style>
              {/* Double the path so it loops seamlessly */}
              <g className="wave-path">
                <path
                  d="M0,6 C10,0 20,12 30,6 C40,0 50,12 60,6 C70,0 80,12 90,6 C100,0 110,12 120,6 C130,0 140,12 150,6 C160,0 170,12 180,6 C190,0 200,12 210,6 C220,0 230,12 240,6 C250,0 260,12 270,6 C280,0 290,12 300,6 C310,0 320,12 330,6 C340,0 350,12 360,6 C370,0 380,12 390,6 C400,0 410,12 420,6"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>

        <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed mb-12">
          With decades of experience in bathroom solutions, we bring you premium quality products that combine elegance with functionality. Our commitment to innovation and quality makes us a trusted name in bathroom fittings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            { icon: Award, title: "Premium Quality", desc: "Every product undergoes rigorous quality testing to ensure lasting durability." },
            { icon: Droplets, title: "Water Efficient", desc: "Eco-friendly designs that save water without compromising performance." },
            { icon: Shield, title: "10 Year Warranty", desc: "We stand behind our products with a comprehensive warranty program." },
          ].map((item) => (
            <div key={item.title} className="p-8 border border-border hover:border-foreground/20 transition-colors group">
              <item.icon className="mx-auto mb-4 text-accent" size={32} strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link to="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-body text-foreground hover:text-accent transition-colors">
          View More <ArrowRight size={16} />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;