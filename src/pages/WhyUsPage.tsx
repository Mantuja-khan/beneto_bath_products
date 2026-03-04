import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import whyUsImg from "@/assets/hero-accessories.jpg";
import { CheckCircle, Award, Factory, Globe, Users, ShieldCheck, Leaf, Headphones } from "lucide-react";

const reasons = [
  { icon: Award, title: "ISO Certified Manufacturing", desc: "Our manufacturing processes are ISO 9001:2015 certified, ensuring consistent quality across every product." },
  { icon: Leaf, title: "Eco-Friendly Technology", desc: "Water-saving aerators and flow limiters built into every product, reducing consumption by up to 40%." },
  { icon: Globe, title: "Pan-India Network", desc: "Over 200 authorized dealers and service centers across India for local support." },
  { icon: Factory, title: "10+ Years Experience", desc: "A decade of expertise in designing and manufacturing premium bathroom solutions." },
  { icon: ShieldCheck, title: "Service Guarantee", desc: "Comprehensive after-sales service with dedicated support managers for every region." },
  { icon: Users, title: "Competitive Pricing", desc: "Premium quality products at prices that offer the best value in the market." },
  { icon: Headphones, title: "Dedicated Support", desc: "Trained customer care executives available round the clock for assistance." },
  { icon: CheckCircle, title: "Quality Testing", desc: "Every product tested for 5 lakh cycles to ensure long-lasting performance." },
];

const WhyUsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16 lg:pt-20">
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url("https://i.pinimg.com/1200x/62/52/ca/6252caf6a00f80f25f4809090fc5a272.jpg")` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Why Choose Us</h1>
            <p className="font-body text-white/80 text-lg max-w-2xl mx-auto">
              We are committed to delivering excellence in every product and service we offer.
            </p>
          </div>
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg hover:bg-white/15 transition-all text-center">
                  <r.icon className="text-blue-400 mb-4 mx-auto" size={36} strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">{r.title}</h3>
                  <p className="text-white/80 text-sm font-body leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default WhyUsPage;
