import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { categories, allCombinedProducts as allProducts } from "@/data/products";
import { collections, collectionDetails, brandExclusiveProducts } from "@/data/collections";
import { useNavigate } from "react-router-dom";
import faucetImg from "@/assets/product-faucet.jpg";
import showerImg from "@/assets/product-shower.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const categoryImages: Record<string, string> = {
  Faucets: faucetImg,
  Showers: showerImg,
  Accessories: accessoriesImg,
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products", dropdown: "products" },
  { label: "Collections", path: "/collections", dropdown: "collections" },
  { label: "Why Us", path: "/why-us" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/products") return location.pathname.startsWith("/product");
    if (path === "/collections") return location.pathname.startsWith("/collection");
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // scrolling down
          setVisible(false);
        } else { // scrolling up
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const searchableProducts = [...allProducts, ...brandExclusiveProducts];

  const searchResults =
    query.length > 0
      ? searchableProducts
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.collection?.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8)
      : [];

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setSearchOpen(false);
    setQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSelect = (id: string) => {
    setSearchOpen(false);
    setQuery("");
    navigate(`/product/${id}`);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Main bar or Search bar */}
      {searchOpen ? (
        <div className="flex items-center px-4 sm:px-6 lg:px-16 xl:px-24 h-16 lg:h-20 gap-4">
          <Search className="text-muted-foreground shrink-0" size={20} />
          <input
            ref={searchInputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, collections..."
            className="flex-1 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close search"
            >
              <X size={20} />
            </button>
            <a
              href="/catalogue.pdf"
              download
              className="hidden sm:block bg-primary text-primary-foreground px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-body hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Catalogue
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 xl:px-24 h-16 lg:h-20">
          <Link
            to="/"
            className="inline-block font-heading text-xl lg:text-2xl font-bold tracking-tight text-black hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col leading-tight">
              <span>BENETO</span>
              <span className="text-[8px] lg:text-xs font-medium tracking-[2px] text-gray-500">
                THE BATH SOLUTION
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5" ref={dropdownRef}>
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown!)}
                    className={`flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] font-body hover:text-accent hover:-translate-y-0.5 transition-all duration-300 ${isActive(item.path) ? "text-accent font-semibold" : "text-black"}`}
                  >
                    {item.label}{" "}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === item.dropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Products dropdown */}
                  {activeDropdown === "products" && item.dropdown === "products" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-background border border-border shadow-lg w-56 py-2 z-50">
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-xs uppercase tracking-[0.15em] font-body text-accent hover:bg-secondary transition-colors font-semibold"
                      >
                        All Products
                      </Link>
                      <div className="border-t border-border my-1" />
                      {categories.map((cat) => (
                        <Link
                          key={cat}
                          to={`/products?category=${cat}`}
                          className="flex items-center gap-3 px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          <img src={categoryImages[cat]} alt={cat} className="w-8 h-8 object-contain rounded bg-secondary" />
                          {cat}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Collections dropdown */}
                  {activeDropdown === "collections" && item.dropdown === "collections" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-background border border-border shadow-lg w-56 py-2 z-50 max-h-[70vh] overflow-y-auto">
                      <Link
                        to="/collections"
                        className="block px-4 py-2 text-xs uppercase tracking-[0.15em] font-body text-accent hover:bg-secondary transition-colors font-semibold"
                      >
                        All Collections
                      </Link>
                      <div className="border-t border-border my-1" />
                      {collections.map((c) => {
                        const sample = allProducts.find((p) => p.collection === c);
                        return (
                          <Link
                            key={c}
                            to={`/collection/${c.toLowerCase()}`}
                            className="flex items-center gap-3 px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            {sample && (
                              <img src={sample.img} alt={c} className="w-8 h-8 object-contain rounded bg-secondary" />
                            )}
                            {c}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`inline-block text-[11px] uppercase tracking-[0.12em] font-body hover:text-accent hover:-translate-y-0.5 transition-all duration-300 ${isActive(item.path) ? "text-accent font-semibold" : "text-black"}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-black hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Search products"
              >
                <Search size={18} />
              </button>
              <a
                href="/catalogue.pdf"
                download
                className="bg-primary text-primary-foreground px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-body hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Catalogue
              </a>
            </div>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/catalogue.pdf"
              download
              className="bg-primary text-primary-foreground px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-body hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Catalogue
            </a>
            <button onClick={() => setSearchOpen(true)} className="text-black p-2 hover:scale-110 transition-transform duration-300" aria-label="Search">
              <Search size={22} />
            </button>
            <button onClick={() => setOpen(!open)} className="text-black p-2 hover:scale-110 transition-transform duration-300">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      )}

      {/* Search results below navbar */}
      {searchOpen && query.length > 0 && (
        <div className="bg-background border-t border-border shadow-lg max-h-[60vh] overflow-y-auto">
          {searchResults.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm font-body py-8">No products found</p>
          ) : (
            searchResults.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelect(p.id)}
                className="w-full flex items-center gap-4 px-4 sm:px-6 lg:px-16 xl:px-24 py-3 hover:bg-secondary transition-colors text-left">
                <img src={p.img} alt={p.name} className="w-10 h-10 object-contain bg-secondary rounded" />
                <div>
                  <p className="text-sm font-body text-foreground">{p.name}</p>
                  <p className="text-xs font-body text-muted-foreground">
                    {p.collection ? `${p.collection} · ` : ""}{p.category} · {p.price}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>
      )}

      {/* Mobile nav */}
      {open && !searchOpen && (
        <nav className="lg:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.dropdown ? null : item.dropdown!)}
                  className={`flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-body hover:text-accent hover:translate-x-1 transition-all duration-300 text-left w-full ${isActive(item.path) ? "text-accent font-semibold" : "text-black"}`}
                >
                  {item.label}{" "}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileExpanded === item.dropdown ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === item.dropdown && item.dropdown === "products" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="/products" className="text-xs uppercase tracking-[0.15em] font-body text-accent font-semibold">
                      All Products
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat}
                        to={`/products?category=${cat}`}
                        className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <img src={categoryImages[cat]} alt={cat} className="w-6 h-6 object-contain rounded bg-secondary" />
                        {cat}
                      </Link>
                    ))}
                  </div>
                )}
                {mobileExpanded === item.dropdown && item.dropdown === "collections" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link to="/collections" className="text-xs uppercase tracking-[0.15em] font-body text-accent font-semibold">
                      All Collections
                    </Link>
                    {collections.map((c) => {
                      const sample = allProducts.find((p) => p.collection === c);
                      return (
                        <Link
                          key={c}
                          to={`/collection/${c.toLowerCase()}`}
                          className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {sample && (
                            <img src={sample.img} alt={c} className="w-6 h-6 object-contain rounded bg-secondary" />
                          )}
                          {c}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`block text-sm uppercase tracking-[0.15em] font-body hover:text-accent hover:translate-x-1 transition-all duration-300 text-left ${isActive(item.path) ? "text-accent font-semibold" : "text-black"}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
