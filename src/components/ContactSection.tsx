import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary">
    <div className="max-w-6xl mx-auto">
      <p className="section-subtitle mb-3 text-center">Get In Touch</p>
      <h2 className="section-title text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {[
            { icon: MapPin, label: "Address", value: "123 Industrial Area, Mumbai, Maharashtra, India" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            { icon: Mail, label: "Email", value: "info@yourbrand.com" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <item.icon className="text-accent shrink-0 mt-1" size={22} strokeWidth={1.5} />
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                <p className="font-body text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-body text-foreground hover:text-accent transition-colors">
            View More <ArrowRight size={16} />
          </Link>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
          <input type="email" placeholder="Your Email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors" />
          <textarea placeholder="Your Message" rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none" />
          <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 font-body text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
