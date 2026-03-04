import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { collectionDetails } from "@/data/collections";
import { ArrowRight } from "lucide-react";

const CollectionsPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-16 lg:pt-20">
                <PageHero
                    title="Collections"
                    subtitle="Our Brands"
                    description="Explore our exclusive brands offering premium bathroom solutions."
                    bgImage="https://i.pinimg.com/1200x/e0/0a/21/e00a21bb3d33395e9941d39ff3e6327a.jpg"
                />

                <div
                    className="relative section-padding bg-fixed bg-cover bg-center"
                    style={{ backgroundImage: `url("https://i.pinimg.com/736x/3f/54/83/3f548396389d6094094634bf4f6cefa7.jpg")` }}
                >
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
                    <div className="relative z-10 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {collectionDetails.map((c) => (
                                <Link
                                    key={c.name}
                                    to={`/collection/${c.name.toLowerCase()}`}
                                    className="group block relative overflow-hidden rounded-lg aspect-[4/3] bg-secondary"
                                >
                                    <img
                                        src={c.img}
                                        alt={c.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="font-heading text-2xl md:text-3xl text-white mb-2">{c.name}</h3>
                                        <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors text-sm uppercase tracking-[0.2em] font-body opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                                            Explore <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CollectionsPage;
