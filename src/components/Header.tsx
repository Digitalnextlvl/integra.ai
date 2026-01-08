import { useState } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4">
      <nav className="max-w-7xl mx-auto bg-card rounded-full px-6 py-3 shadow-lg border border-border flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-foreground font-bold tracking-tight text-xl flex items-center">
          integra<span className="text-brand-500">.AI</span>
        </a>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="group relative flex items-center">
            <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Funcionalidades
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Entrar
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="hero" className="rounded-full px-6">
            <User className="w-4 h-4 mr-2" />
            Criar conta
          </Button>
          <button 
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-card z-40 transform transition-transform duration-300 flex flex-col pt-24 px-6 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a href="#solucao" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-foreground py-4 border-b border-border flex justify-between">
          Funcionalidades
        </a>
        <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-foreground py-4 border-b border-border flex justify-between">
          Entrar
        </a>
      </div>
    </header>
  );
};

export default Header;
