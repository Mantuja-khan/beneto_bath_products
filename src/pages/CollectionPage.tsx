import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { collectionDetails, brandExclusiveProducts } from "@/data/collections";
import { ArrowLeft } from "lucide-react";

const CollectionPage = () => {
    const { name } = useParams<{ name: string }>();

    // Find the collection detail to get the hero image
    const collectionDetail = collectionDetails.find(
        (c) => c.name.toLowerCase() === name?.toLowerCase()
    );

    // Filter products directly from brandExclusiveProducts
    const collectionProducts = brandExclusiveProducts.filter(
        (p) => p.collection?.toLowerCase() === name?.toLowerCase()
    );

    if (!collectionDetail) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="pt-32 text-center section-padding">
                    <h1 className="section-title mb-4">Collection Not Found</h1>
                    <Link to="/collections" className="text-accent font-body hover:underline">← Back to Collections</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-16 lg:pt-20">
                <PageHero
                    title={collectionDetail.name}
                    subtitle="Collection"
                    description={`Explore the exclusive ${collectionDetail.name} collection of premium products.`}
                    bgImage={collectionDetail.img}
                />

                <div
                    className="relative section-padding bg-fixed bg-cover bg-center"
                    style={{ backgroundImage: `url("https://i.pinimg.com/736x/3f/54/83/3f548396389d6094094634bf4f6cefa7.jpg")` }}
                >
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
                    <div className="relative z-10 max-w-6xl mx-auto">
                        {/* Back Link */}
                        <Link
                            to="/collections"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors group"
                        >
                            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Collections
                        </Link>

                        {collectionProducts.length > 0 ? (
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {collectionProducts.map((p) => (
                                    <ProductCard key={p.id} product={p} badgeType="category" />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground font-body">No products found in this collection currently.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CollectionPage;
