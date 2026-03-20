import { motion } from "motion/react";
import { WHASTAPP_NUMBER } from "../data";

export function Promotions() {
  const handlePromo = (promo: string) => {
    window.open(`https://wa.me/57${WHASTAPP_NUMBER}?text=Hola,%20quiero%20la%20promoción:%20${encodeURIComponent(promo)}.`, "_blank");
  };

  return (
    <section id="promociones" className="py-24 px-4 md:px-8 bg-zinc-950 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-yellow-400/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-yellow-600/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 shadow-lg shadow-yellow-400/20">
            Pide ahora, no lo pienses
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-md">
            Promociones del <span className="text-yellow-400">Día</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Promo 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-1 overflow-hidden shadow-2xl hover:shadow-yellow-400/20 transition-all cursor-pointer"
            onClick={() => handlePromo("Combo Pareja")}
          >
            <div className="absolute inset-0 bg-yellow-400/20 blur-xl group-hover:bg-yellow-400/40 transition-colors" />
            <div className="relative h-full bg-zinc-900 rounded-[22px] p-8 flex flex-col justify-between border border-zinc-700/50 group-hover:border-yellow-400/50 transition-colors">
              <div>
                <span className="bg-red-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full absolute top-6 right-6 shadow-lg rotate-12 group-hover:scale-110 transition-transform">
                  ¡20% OFF!
                </span>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">COMBO PAREJA</h3>
                <p className="text-zinc-400 mb-6 font-medium">
                  2 Hamburguesas Clásicas + Porción de papas grandes + 2 Gaseosas
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800">
                <div className="text-yellow-400 font-black text-3xl">
                  $35.000 <span className="text-sm text-zinc-500 line-through font-medium ml-2">$44.000</span>
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-full font-bold group-hover:bg-yellow-400 transition-colors">
                  Pedir ya
                </button>
              </div>
            </div>
          </motion.div>

          {/* Promo 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-1 overflow-hidden shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all cursor-pointer"
            onClick={() => handlePromo("Filo Extremo")}
          >
            <div className="absolute inset-0 bg-black/10 blur-xl group-hover:bg-black/0 transition-colors" />
            <div className="relative h-full bg-yellow-400 rounded-[22px] p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-10 -top-10 text-yellow-500/30 font-black text-9xl pointer-events-none rotate-12 select-none">
                PROMO
              </div>
              <div className="relative z-10">
                <span className="bg-black text-yellow-400 text-xs font-black uppercase px-3 py-1 rounded-full absolute top-6 right-6 shadow-lg -rotate-12 group-hover:scale-110 transition-transform">
                  ¡MÁS VENDIDO!
                </span>
                <h3 className="text-3xl font-black text-black mb-3 tracking-tight drop-shadow-sm">FILO EXTREMO</h3>
                <p className="text-black/80 mb-6 font-medium">
                  1 Salchipapa Salvaje + 1 Perro Tradicional + 1 Gaseosa 1.5L
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-black/10">
                <div className="text-black font-black text-3xl drop-shadow-sm">
                  $40.000
                </div>
                <button className="bg-black text-yellow-400 px-6 py-2 rounded-full font-bold hover:bg-zinc-900 transition-colors shadow-lg">
                  Pedir ya
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
