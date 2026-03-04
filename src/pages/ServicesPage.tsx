import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import showerImg from "@/assets/hero-shower.jpg";
import { Wrench, Truck, Headphones, PenTool, Settings, ShieldCheck, Clock, Zap } from "lucide-react";

const services = [
  { icon: PenTool, title: "Custom Design", desc: "Bespoke bathroom solutions tailored to your space and style. Our design experts help you create the perfect bathroom layout with products that complement your vision.", img: "https://i.pinimg.com/736x/60/7e/66/607e6608fb4224b86d05893c6dd693d4.jpg" },
  { icon: Wrench, title: "Installation Support", desc: "Professional installation guidance and after-sales service. Our trained technicians ensure every product is installed correctly for optimal performance.", img: "https://i.pinimg.com/1200x/d1/5d/1b/d15d1b478798fd08daf48709abfdb78a.jpg" },
  { icon: Truck, title: "Pan-India Delivery", desc: "Fast and safe delivery across all major cities in India. We ensure your products arrive in perfect condition with our secure packaging system.", img: "https://i.pinimg.com/1200x/31/fc/80/31fc800d183222787a463d595ac3cef8.jpg" },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer support for all your queries. Our dedicated team is always ready to help you with product selection, installation, and maintenance.", img: "https://i.pinimg.com/1200x/e5/75/df/e575dfbecdec3954a684880d948a0744.jpg" },
  { icon: Settings, title: "Annual Maintenance", desc: "Scheduled maintenance contracts to keep your bathroom fittings in pristine condition. Preventive care extends product life significantly.", img: "https://i.pinimg.com/1200x/02/e1/b1/02e1b11e740cb93656fd4ce28203e435.jpg" },
  { icon: ShieldCheck, title: "Warranty Claims", desc: "Hassle-free warranty claim process. Simply reach out to us with your purchase details and we'll handle the rest promptly.", img: "https://i.pinimg.com/1200x/d0/e4/70/d0e470e523ce04f5a923b8db30ba5ef6.jpg" },
  { icon: Clock, title: "Quick Turnaround", desc: "Fast processing of orders and service requests. We value your time and strive to deliver within committed timelines.", img: "https://i.pinimg.com/736x/c6/ec/20/c6ec2040782be7f4aba0925392cccb49.jpg" },
  { icon: Zap, title: "Smart Solutions", desc: "Modern sensor-based and touchless faucet solutions for hygiene-conscious spaces. Upgrade to the future of bathroom technology.", img: "https://i.pinimg.com/1200x/de/a2/f9/dea2f96694a23398cad39860c3f20836.jpg" },
];

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16 lg:pt-20">
      <PageHero
        title="Our Services"
        subtitle="What We Offer"
        description="From design consultation to after-sales support, we provide end-to-end bathroom solutions."
        bgImage={showerImg}
      />

      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((s) => (
                <div key={s.title} className="group border border-border flex flex-col md:flex-row items-stretch hover:border-foreground/20 hover:shadow-lg transition-all bg-background overflow-hidden rounded-lg">
                  {/* Left Side: Image */}
                  <div className="w-full md:w-1/2 shrink-0 overflow-hidden relative min-h-[250px] md:min-h-full">
                    <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  {/* Right Side: Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2 text-left">
                    <s.icon className="mb-4 text-accent" size={32} strokeWidth={1.5} />
                    <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
                  </div>
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

export default ServicesPage;
