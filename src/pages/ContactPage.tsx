import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import contactImg from "@/assets/hero-bathroom.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16 lg:pt-20">
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        description="Have questions? We'd love to hear from you. Reach out to us anytime."
        bgImage={contactImg}
      />

      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Address", value: "123 Industrial Area, Mumbai, Maharashtra, India" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "info@yourbrand.com" },
                  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <item.icon className="text-accent shrink-0 mt-1" size={22} strokeWidth={1.5} />
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-body text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
                </div>
                <input type="email" placeholder="Your Email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
                <input type="text" placeholder="Subject" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
                <textarea placeholder="Your Message" rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none" />
                <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 font-body text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>

    {/* FAQ Section without Fixed Background Image */}
    <div className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="w-full h-full min-h-[400px] hidden lg:block">
            <img src={"https://i.pinimg.com/736x/e4/7a/b9/e47ab9ae463133ea1b40840b47a80344.jpg"} alt="FAQ" className="w-full h-full object-cover rounded-md drop-shadow-md lg:aspect-[3/4]" />
          </div>
          <div>
            <div className="text-left mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground font-body">Common questions from our customers about our products, shipping, and more.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Do you ship across India?",
                  answer: "Yes, we provide safe and timely delivery to all major cities and towns across India through our trusted logistics partners."
                },
                {
                  question: "What is the warranty on your products?",
                  answer: "We offer a comprehensive up to 10-year warranty on our premium bathroom fittings and accessories against manufacturing defects. Specific warranty terms vary by product category."
                },
                {
                  question: "Do you provide installation services?",
                  answer: "We offer professional installation guidance. In select major cities, we have partner technicians who can assist with the installation of our premium shower systems and specialized fittings."
                },
                {
                  question: "How do I maintain my bathroom fittings to prevent scaling?",
                  answer: "We recommend regular cleaning with a soft cloth and mild soap. Avoid using harsh chemicals, acidic cleaners, or abrasive scrubbers to maintain the finish and longevity of our products."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-background border border-border p-6 rounded-lg shadow-sm">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default ContactPage;
