import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import showerImg from "@/assets/product_background.jpg";
import { categories } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import bg from "@/assets/background.jpg"

const ProductsPage = () => {
  const [active, setActive] = useState<typeof categories[number]>("Faucets");
  const items = getProductsByCategory(active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <PageHero
          title="Products"
          subtitle="Our Range"
          description="Browse our complete range of premium bathroom fittings and accessories."
          bgImage="https://i.pinimg.com/1200x/e0/0a/21/e00a21bb3d33395e9941d39ff3e6327a.jpg"
        />

        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
