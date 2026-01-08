import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#" className="text-foreground font-bold tracking-tighter text-2xl block">
              integra<span className="text-brand-400">.AI</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              A plataforma operacional definitiva para vendedores online modernos.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium">
          <div>© 2024 Integra AI Tecnologia Ltda.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
