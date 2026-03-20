import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHASTAPP_NUMBER } from "../data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export function ProductCard({ name, description, price, image }: ProductCardProps) {
  const handleOrder = () => {
    const text = encodeURIComponent(`Hola, me gustaría pedir: ${name} por ${price}.`);
    window.open(`https://wa.me/57${WHASTAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col h-full shadow-lg hover:shadow-yellow-400/10 hover:border-yellow-400/30 transition-colors"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-800 group/image">
        <div className="w-full h-full transition-transform duration-300 group-hover/image:scale-105">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-3 right-3 bg-yellow-400 text-black font-black px-3 py-1 rounded-full text-sm shadow-md z-10">
          {price}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{name}</h3>
        <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <button
          onClick={handleOrder}
          className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-95 group"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Pedir por WhatsApp</span>
        </button>
      </div>
    </motion.div>
  );
}
