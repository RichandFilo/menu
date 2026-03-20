import { motion } from "motion/react";
import { ProductCard } from "./ProductCard";

interface MenuSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  items: Array<{
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  }>;
}

export function MenuSection({ id, title, subtitle, items }: MenuSectionProps) {
  return (
    <section id={id} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 inline-block relative">
          {title}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-yellow-400 rounded-full" />
        </h2>
        {subtitle && (
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl">
            {subtitle}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={item.id} className="flex h-full">
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
