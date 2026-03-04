import { Link } from "react-router-dom";
import bgImg from "@/assets/hero-bathroom.jpg";

const Footer = () => (
  <footer
    className="relative bg-primary text-primary-foreground px-4 sm:px-6 lg:px-16 xl:px-24 py-12 bg-cover bg-center"
    style={{ backgroundImage: `url(${"https://i.pinimg.com/736x/fd/9d/28/fd9d2891b8a8c577811c940e0c9c594b.jpg"})` }}
  >
    <div className="absolute inset-0 bg-primary/95" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex flex-col leading-tight">
            <span>BENETO</span>
            <span className="text-[8px] lg:text-xs font-medium tracking-[2px] text-gray-500">
              THE BATH SOLUTION
            </span>
          </div>          <p className="text-sm font-body opacity-70 leading-relaxed">
            Premium bathroom fittings & accessories for modern homes.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body opacity-70">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.label}><Link to={l.path} className="hover:opacity-100 transition-opacity">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-widest mb-4">Products</h4>
          <ul className="space-y-2 text-sm font-body opacity-70">
            {["Faucets", "Showers", "Accessories"].map((l) => (
              <li key={l}><Link to="/products" className="hover:opacity-100 transition-opacity">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-widest mb-4">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-3 py-2 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
            />
            <button className="bg-accent text-accent-foreground px-4 py-2 text-xs uppercase tracking-wider font-body">
              →
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center">
        <p className="text-xs font-body opacity-50">CREATED BY SS GRAPHICS </p>
      </div>
    </div>
  </footer>
);

export default Footer;
