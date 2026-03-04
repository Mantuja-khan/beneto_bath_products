import { Link } from "react-router-dom";
import { ArrowRight, Leaf, PenTool, Heart, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Leaf, title: "Sustainability", desc: "We care deeply about the environment and ensure our processes are environmentally friendly." },
  { icon: PenTool, title: "Design Excellence", desc: "Every product is thoughtfully crafted, balancing aesthetics with exceptional usability." },
  { icon: Heart, title: "Customer Satisfaction", desc: "We strive to exceed customer exceptions through outstanding service and superior product quality." },
  { icon: Clock, title: "Timely Service", desc: "We offer our prompt, professional service through our dedicated support team." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <AnimatedSection>
        <p className="section-subtitle mb-3">The Difference</p>

        {/* Heading with animated wavy underline */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title text-blue-600">Why Choose Us</h2>
          <div className="mt-2 overflow-hidden">
            <svg
              viewBox="0 0 200 12"
              xmlns="http://www.w3.org/2000/svg"
              className="w-80 h-3"
              preserveAspectRatio="none"
            >
              <style>{`
                @keyframes waveMove {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .wave-path-why {
                  animation: waveMove 2.5s linear infinite;
                }
              `}</style>
              <g className="wave-path-why">
                <path
                  d="M0,6 C10,0 20,12 30,6 C40,0 50,12 60,6 C70,0 80,12 90,6 C100,0 110,12 120,6 C130,0 140,12 150,6 C160,0 170,12 180,6 C190,0 200,12 210,6 C220,0 230,12 240,6 C250,0 260,12 270,6 C280,0 290,12 300,6 C310,0 320,12 330,6 C340,0 350,12 360,6 C370,0 380,12 390,6 C400,0 410,12 420,6"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
          {reasons.map((r) => (
            <div key={r.title} className="bg-background border border-border p-8 rounded-lg text-center hover:border-foreground/20 hover:shadow-sm transition-all">
              <r.icon className="mx-auto mb-4 text-accent" size={32} strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <Link to="/why-us" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-body text-foreground hover:text-accent transition-colors">
          View More <ArrowRight size={16} />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyUsSection;
