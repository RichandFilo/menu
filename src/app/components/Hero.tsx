import { motion } from "motion/react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { WHASTAPP_NUMBER } from "../data";
import heroBg from "figma:asset/38d234c3db4fdc5a7fb9d743936cd89368642aa9.png";

export function Hero() {
  const handleOrder = () => {
    window.open(`https://wa.me/57${WHASTAPP_NUMBER}?text=Hola,%20quiero%20conocer%20el%20menú%20y%20hacer%20un%20pedido.`, "_blank");
  };

  const handleScroll = () => {
    const el = document.getElementById("promociones");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBg}
          alt="Rich & Filo Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 uppercase tracking-tighter drop-shadow-xl mb-4 leading-none">
            El verdadero<br />sabor callejero
          </h1>
          <p className="text-xl md:text-3xl font-medium text-zinc-200 mt-6 max-w-2xl mx-auto drop-shadow-md">
            Hamburguesas, salchipapas, mazorcadas y más. Todo hecho con pasión y mucho filo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={handleOrder}
            className="group relative overflow-hidden bg-yellow-400 text-black px-10 py-5 rounded-full font-black text-xl uppercase tracking-wider flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(250,204,21,0.4)]"
          >
            <div className="absolute inset-0 w-1/4 h-full bg-white/30 -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
            <MessageCircle className="w-7 h-7" />
            Pide ahora
          </button>
          
          <button
            onClick={handleScroll}
            className="text-zinc-300 hover:text-yellow-400 px-6 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-colors border-2 border-zinc-600 hover:border-yellow-400 bg-zinc-900/50 backdrop-blur-sm"
          >
            Ver Menú
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
