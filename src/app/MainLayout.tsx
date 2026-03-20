import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Promotions } from "./components/Promotions";
import { MenuSection } from "./components/MenuSection";
import { Footer } from "./components/Footer";
import { BURGERS, SALCHIPAPAS, MAZORCADAS, HOTDOGS } from "./data";

export function MainLayout() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-yellow-400 selection:text-black scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        
        <Promotions />
        
        <div className="bg-zinc-950 relative">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          <MenuSection 
            id="hamburguesas" 
            title="Hamburguesas" 
            subtitle="Las reinas de la casa. Carne 100% artesanal, pan suave y el mejor sabor urbano."
            items={BURGERS} 
          />
        </div>

        <div className="bg-zinc-900/50 relative border-y border-zinc-900">
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-zinc-700/10 rounded-full blur-[120px] pointer-events-none" />
          <MenuSection 
            id="salchipapas" 
            title="Salchipapas" 
            subtitle="Pura sabrosura en cada bocado. Perfectas para compartir (o no)."
            items={SALCHIPAPAS} 
          />
        </div>

        <div className="bg-zinc-950 relative">
          <MenuSection 
            id="mazorcadas" 
            title="Mazorcadas" 
            subtitle="El maíz dulce que te hace agua la boca, con todo el filo que necesitas."
            items={MAZORCADAS} 
          />
        </div>

        <div className="bg-zinc-900/50 relative border-t border-zinc-900">
          <MenuSection 
            id="perros" 
            title="Perros Calientes" 
            subtitle="Los clásicos que nunca fallan. Con salchicha premium y full sabor."
            items={HOTDOGS} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
