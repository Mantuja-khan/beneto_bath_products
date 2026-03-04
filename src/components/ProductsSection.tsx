import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";
import AnimatedSection from "./AnimatedSection";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [active, setActive] = useState<typeof categories[number]>("Faucets");
  const items = getProductsByCategory(active).slice(0, 4);

  return (
    <section id="products" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="section-subtitle mb-3 text-center">Our Range</p>

          {/* Heading with animated wavy underline */}
          <div className="flex flex-col items-center mb-12">
            <h2 className="section-title text-blue-600">Products</h2>
            <div className="mt-2 overflow-hidden">
              <svg
                viewBox="0 0 200 12"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-3"
                preserveAspectRatio="none"
              >
                <style>{`
                @keyframes waveMove {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .wave-path-prod {
                  animation: waveMove 2.5s linear infinite;
                }
              `}</style>
                <g className="wave-path-prod">
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

          <div className="flex justify-center gap-8 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-sm uppercase tracking-[0.15em] font-body pb-2 border-b-2 transition-colors ${active === c ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-body text-foreground hover:text-accent transition-colors">
              View More <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
export default ProductsSection;