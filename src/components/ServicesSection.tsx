import { Link } from "react-router-dom";
import { Wrench, Truck, Headphones, PenTool, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: PenTool, title: "Custom Design", desc: "Bespoke bathroom solutions tailored to your space.", img: "https://i.pinimg.com/736x/60/7e/66/607e6608fb4224b86d05893c6dd693d4.jpg" },
  { icon: Wrench, title: "Installation Support", desc: "Professional installation guidance and after-sales service.", img: "https://i.pinimg.com/1200x/d1/5d/1b/d15d1b478798fd08daf48709abfdb78a.jpg" },
  { icon: Truck, title: "Pan-India Delivery", desc: "Fast and safe delivery across all major cities in India.", img: "https://i.pinimg.com/1200x/31/fc/80/31fc800d183222787a463d595ac3cef8.jpg" },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer support for all your queries.", img: "https://i.pinimg.com/1200x/e5/75/df/e575dfbecdec3954a684880d948a0744.jpg" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="section-subtitle mb-3 text-center">What We Offer</p>

        {/* Heading with animated wavy underline */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title text-blue-600">Our Services</h2>
          <div className="mt-2 overflow-hidden">
            <svg
              viewBox="0 0 200 12"
              xmlns="http://www.w3.org/2000/svg"
              className="w-60 h-3"
              preserveAspectRatio="none"
            >
              <style>{`
                @keyframes waveMove {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .wave-path-serv {
                  animation: waveMove 2.5s linear infinite;
                }
              `}</style>
              <g className="wave-path-serv">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {services.map((s) => (
            <div key={s.title} className="group border border-border flex flex-col md:flex-row items-stretch hover:border-foreground/20 hover:shadow-lg transition-all bg-background overflow-hidden rounded-lg">
              <div className="w-full md:w-2/5 shrink-0 overflow-hidden relative min-h-[200px] md:min-h-full">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5 text-left">
                <s.icon className="mb-4 text-accent" size={32} strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-body text-foreground hover:text-accent transition-colors">
            View More <ArrowRight size={16} />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesSection;
