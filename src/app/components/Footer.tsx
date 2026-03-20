import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { WHASTAPP_NUMBER } from "../data";

export function Footer() {
  return (
    <footer className="bg-black py-16 px-6 md:px-8 border-t border-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Col */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            <span className="text-yellow-400">R&</span>F
          </h2>
          <p className="text-zinc-500 font-medium">
            El verdadero sabor callejero en cada mordisco. Ingredientes frescos y recetas únicas.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:bg-zinc-800 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={`https://wa.me/57${WHASTAPP_NUMBER}`} className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:bg-zinc-800 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Col */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Menú</h3>
          <a href="#hamburguesas" className="text-zinc-500 hover:text-yellow-400 transition-colors font-medium">Hamburguesas</a>
          <a href="#salchipapas" className="text-zinc-500 hover:text-yellow-400 transition-colors font-medium">Salchipapas</a>
          <a href="#mazorcadas" className="text-zinc-500 hover:text-yellow-400 transition-colors font-medium">Mazorcadas</a>
          <a href="#perros" className="text-zinc-500 hover:text-yellow-400 transition-colors font-medium">Perros Calientes</a>
        </div>

        {/* Contact Col */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Contacto</h3>
          <div className="flex items-center gap-3 text-zinc-500 font-medium group">
            <Phone className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
            <span>+57 {WHASTAPP_NUMBER}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-500 font-medium group">
            <MapPin className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
            <span>Cra 15 #45-67, Bogotá</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-500 font-medium group">
            <Mail className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
            <span>hola@richandfilo.com</span>
          </div>
        </div>

        {/* Hours Col */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Horarios</h3>
          <div className="flex justify-between text-zinc-500 font-medium border-b border-zinc-900 pb-2">
            <span>Lun - Jue</span>
            <span className="text-white">5:00 PM - 11:00 PM</span>
          </div>
          <div className="flex justify-between text-zinc-500 font-medium border-b border-zinc-900 pb-2">
            <span>Vie - Sab</span>
            <span className="text-yellow-400 font-bold">5:00 PM - 2:00 AM</span>
          </div>
          <div className="flex justify-between text-zinc-500 font-medium">
            <span>Domingos</span>
            <span className="text-white">4:00 PM - 10:00 PM</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm font-medium">
          &copy; {new Date().getFullYear()} Rich & Filo. Todos los derechos reservados.
        </p>
        <p className="text-zinc-700 text-sm font-medium">
          Diseñado con <span className="text-yellow-400">♥</span> y mucho filo.
        </p>
      </div>
    </footer>
  );
}
