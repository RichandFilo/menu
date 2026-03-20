import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHASTAPP_NUMBER } from "../data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Promociones", href: "#promociones" },
    { name: "Hamburguesas", href: "#hamburguesas" },
    { name: "Salchipapas", href: "#salchipapas" },
    { name: "Mazorcadas", href: "#mazorcadas" },
    { name: "Perros Calientes", href: "#perros" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrder = () => {
    window.open(`https://wa.me/57${WHASTAPP_NUMBER}?text=Hola,%20quisiera%20hacer%20un%20pedido.`, "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-zinc-800" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-3xl font-black text-white uppercase tracking-tighter cursor-pointer select-none flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-yellow-400">R&</span>F
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-zinc-300 hover:text-yellow-400 font-bold text-sm tracking-widest uppercase transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={handleOrder}
            className="hidden lg:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider transition-colors active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-zinc-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 items-center flex-grow">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-black text-white uppercase tracking-tighter hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="pb-12 pt-8 flex justify-center">
              <button
                onClick={handleOrder}
                className="w-full max-w-sm flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-black text-xl uppercase tracking-wider transition-colors active:scale-95 shadow-lg shadow-yellow-400/20"
              >
                <MessageCircle className="w-6 h-6" />
                Pedir Ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
