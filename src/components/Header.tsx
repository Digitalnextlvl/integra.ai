import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-card border-b border-border shadow-sm h-20 flex items-center transition-all duration-300">
      <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50 flex-shrink-0">
          <a href="#" className="text-foreground font-bold tracking-tighter text-2xl flex items-center">
            integra<span className="text-brand-400">.AI</span>
          </a>
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Soluções para você
              <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Incremente sua loja
              <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <div className="h-full flex items-center">
            <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </a>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <Button variant="outline" className="hidden md:flex">
            Fazer login
          </Button>
          <Button variant="hero">
            Criar loja
          </Button>
          <button 
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-card z-40 transform transition-transform duration-300 flex flex-col pt-24 px-6 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a href="#solucao" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-foreground py-4 border-b border-border flex justify-between">
          Soluções
        </a>
        <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-foreground py-4 border-b border-border flex justify-between">
          Recursos
        </a>
        <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-foreground py-4 border-b border-border flex justify-between">
          Planos
        </a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-foreground py-4 border-b border-border">
          Fazer login
        </a>
      </div>
    </nav>
  );
};

export default Header;
