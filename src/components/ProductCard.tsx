import { Link } from "react-router-dom";
import { Product } from "@/data/types";
import { ArrowUpRight } from "lucide-react";

export interface ProductCardProps {
    product: Product;
    badgeType?: "collection" | "category" | "none";
}

const ProductCard = ({ product, badgeType = "collection" }: ProductCardProps) => {
    const badgeLabel =
        badgeType !== "none"
            ? badgeType === "category"
                ? product.category
                : product.collection
            : null;

    return (
        <Link
            to={`/product/${product.id}`}
            className="group cursor-pointer block bg-background border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
        >
            {/* Image Area */}
            <div className="relative overflow-hidden bg-secondary aspect-square flex items-center justify-center">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-[80%] h-[80%] object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                    style={{ "--tw-scale-x": "1.08", "--tw-scale-y": "1.08" } as React.CSSProperties}
                />

                {/* Badge */}
                {badgeLabel && (
                    <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 font-body border border-border">
                        {badgeLabel}
                    </span>
                )}

                {/* Hover overlay with arrow */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={14} />
                </div>
            </div>

            {/* Info Area */}
            <div className="px-3 py-3">
                {product.name.includes(" ") ? (
                    <>
                        <p className="font-heading text-base lg:text-lg font-bold text-accent mb-0.5 tracking-wider uppercase">
                            {product.name.split(" ")[0]}
                        </p>
                        <h3 className="font-body text-sm text-muted-foreground line-clamp-1 leading-snug">
                            {product.name.substring(product.name.indexOf(" ") + 1)}
                        </h3>
                    </>
                ) : (
                    <h3 className="font-heading text-base lg:text-lg font-bold text-accent mb-0.5 tracking-wider uppercase line-clamp-1 leading-snug">
                        {product.name}
                    </h3>
                )}
                <p
                    className="font-heading text-sm font-black text-black tracking-tight mt-1"
                    style={{ color: "#000000" }}
                >
                    {product.price}
                </p>
            </div>

            {/* Bottom accent line on hover */}
            <div className="h-[2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
    );
};

export default ProductCard;