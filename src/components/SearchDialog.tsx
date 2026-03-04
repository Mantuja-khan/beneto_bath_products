import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { allCombinedProducts as allProducts } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const SearchDialog = ({ open, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = query.length > 0
    ? allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.collection?.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8)
    : [];

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const handleSelect = (id: string) => {
    onClose();
    navigate(`/product/${id}`);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-background border border-border w-[90%] max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-border px-4">
              <Search className="text-muted-foreground shrink-0" size={18} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, collections..."
                className="flex-1 bg-transparent px-3 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            {query.length > 0 && (
              <div className="max-h-[300px] overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-center text-muted-foreground text-sm font-body py-8">No products found</p>
                ) : (
                  results.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelect(p.id)}
                      className="w-full flex items-center gap-4 px-4 py-3 hover:bg-secondary transition-colors text-left"
                    >
                      <img src={p.img} alt={p.name} className="w-10 h-10 object-contain bg-secondary" />
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

            <div className="border-t border-border px-4 py-2 flex justify-end">
              <span className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchDialog;
