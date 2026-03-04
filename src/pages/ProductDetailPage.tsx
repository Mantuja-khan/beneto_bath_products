import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById, getRelatedProducts } from "@/data/products";
import { ArrowLeft, Tag } from "lucide-react";
import ProductCard from "@/components/ProductCard";
// https://i.pinimg.com/1200x/41/dd/7c/41dd7c1f547a6b23b639411f8f012ff7.jpg

const ImageMagnifier = ({ src, alt }: { src: string; alt: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setPosition({ x: (x / width) * 100, y: (y / height) * 100 });
    setCursorPosition({ x, y });
    setContainerSize({ width, height });
  };

  return (
    <div
      className="relative w-full h-full flex justify-center items-center cursor-crosshair"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500"
      />

      {showMagnifier && (
        <div
          className="hidden md:block absolute pointer-events-none border border-border/50 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          style={{
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            width: "200px",
            height: "200px",
            backgroundImage: `url("${src}")`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: `${containerSize.width * 2}px ${containerSize.height * 2}px`,
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            zIndex: 50,
          }}
        />
      )}
    </div>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center section-padding">
          <h1 className="section-title mb-4">Product Not Found</h1>
          <Link to="/products" className="text-accent font-body hover:underline">← Back to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(product);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Reduced top padding on large screens to push content up */}
      <div className="pt-16 lg:pt-6">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">

            {/* Back Link */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-6 transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>

            {/* Main Product Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

              {/* Image Section */}
              <div className="relative">
                {/* Subtle background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-muted rounded-sm -z-0" />
                <div className="relative z-10 aspect-square flex items-center justify-center p-10">
                  <ImageMagnifier src={product.img} alt={product.name} />
                </div>
                {/* Collection badge overlay */}
                {product.collection && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full">
                    <Tag size={11} className="text-accent" />
                    <span className="font-body text-[10px] uppercase tracking-[0.15em] text-accent font-semibold">
                      {product.collection}
                    </span>
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="flex flex-col justify-center lg:py-4">

                {/* Name */}
                {product.name.includes(" ") ? (
                  <div className="mb-3">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      {product.name.split(" ")[0]}
                    </h1>
                    <h2 className="font-heading text-xl md:text-2xl font-medium text-muted-foreground mt-1">
                      {product.name.substring(product.name.indexOf(" ") + 1)}
                    </h2>
                  </div>
                ) : (
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                    {product.name}
                  </h1>
                )}

                {/* Price */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-heading text-3xl font-bold text-accent">{product.price}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-body leading-relaxed mb-8 text-sm lg:text-base">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">
                    Specifications
                  </h3>
                  <div className="rounded-sm overflow-hidden border border-border">
                    {Object.entries(product.specifications).map(([key, value], i) => (
                      <div
                        key={key}
                        className={`flex justify-between px-4 py-3 gap-4 ${i % 2 === 0 ? "bg-secondary/40" : "bg-background"
                          }`}
                      >
                        <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">{key}</span>
                        <span className="font-body text-xs font-semibold text-foreground text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="bg-primary text-primary-foreground px-8 py-3 font-body text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity flex-1 text-center lg:flex-none"
                  >
                    Enquire Now
                  </Link>
                  {product.collection && (
                    <Link
                      to={`/collection/${product.collection.toLowerCase()}`}
                      className="border border-foreground text-foreground px-8 py-3 font-body text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors flex-1 text-center lg:flex-none"
                    >
                      View Collection
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            {related.length > 0 && (
              <div className="mt-20 mb-12 flex items-center gap-6">
                <div className="h-px flex-1 bg-border" />
                <h2 className="font-heading text-xl font-semibold tracking-wide text-foreground whitespace-nowrap">
                  Related Products
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>
            )}

            {/* Related Products */}
            {related.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} badgeType="none" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetailPage;