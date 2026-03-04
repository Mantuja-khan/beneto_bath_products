import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collectionDetails } from "@/data/collections";
import AnimatedSection from "./AnimatedSection";

const CollectionsSection = () => (
  <section id="collections" className="section-padding bg-secondary">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="section-subtitle mb-3 text-center">Explore</p>

        {/* Heading with animated wavy underline */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title text-blue-600">Our Collections</h2>
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
                .wave-path-col {
                  animation: waveMove 2.5s linear infinite;
                }
              `}</style>
              <g className="wave-path-col">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {collectionDetails.slice(0, 4).map((collection) => (
            <Link
              key={collection.name}
              to={`/collection/${collection.name.toLowerCase()}`}
              className="bg-background border border-border hover:border-foreground/30 transition-all p-0 text-center cursor-pointer group hover:shadow-md overflow-hidden flex flex-col"
            >
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={collection.img}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="font-heading text-base font-semibold group-hover:text-accent transition-colors">{collection.name}</h3>
                <p className="text-muted-foreground text-[10px] font-body mt-1 uppercase tracking-widest">Collection</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/collections" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-body text-foreground hover:text-accent transition-colors">
            View More <ArrowRight size={16} />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CollectionsSection;