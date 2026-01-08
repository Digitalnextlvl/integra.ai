import { motion } from "framer-motion";
import { ShoppingCart, PackageCheck, BrainCircuit, ArrowUpRight, Sparkles, Lock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-brand-400 overflow-hidden pt-28 pb-0">
      {/* Large decorative circle */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4">
        <div className="w-full h-full rounded-full border-[80px] border-white/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">
        {/* Left Content */}
        <div className="text-left">
          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-brand-600 border-2 border-brand-400 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">1 milhão de</p>
              <p className="text-sm font-bold text-foreground">vendas otimizadas</p>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6"
          >
            Escale suas vendas<br />
            sem aumentar a equipe.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-lg mb-10 leading-relaxed"
          >
            A IA da Integra sincroniza estoques, automatiza anúncios e dá controle financeiro total. A plataforma que trabalha enquanto você dorme.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full px-8 py-6 text-base bg-card text-foreground hover:bg-card/90 shadow-xl border-2 border-foreground/10">
              Testar Grátis
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Mockups */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-end justify-center lg:justify-end"
        >
          {/* Dashboard Mockup */}
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-neutral-950 rounded-t-xl md:rounded-t-2xl p-1.5 md:p-3 shadow-2xl transform hover:scale-[1.01] transition-transform duration-700 border-x border-t border-neutral-800">
              <div className="bg-card rounded-md md:rounded-lg overflow-hidden relative">
                {/* Browser Header */}
                <div className="h-6 md:h-10 border-b border-border flex items-center px-4 justify-between bg-neutral-50/80">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-400/20 border border-red-400/30" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-400/20 border border-yellow-400/30" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-400/20 border border-green-400/30" />
                  </div>
                  <div className="hidden md:flex bg-card border border-border rounded text-[10px] text-muted-foreground px-16 py-1 items-center gap-2 shadow-sm">
                    <Lock className="w-2 h-2" /> dash.integra.ai
                  </div>
                  <div className="w-4" />
                </div>

                {/* Dashboard Content */}
                <div className="p-4 md:p-6 bg-neutral-50/30">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <div className="text-[10px] md:text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Faturamento Total</div>
                      <div className="text-xl md:text-2xl font-bold text-foreground tracking-tight">R$ 142.302,00</div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" /> 12%
                    </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
                    <div className="bg-card p-2 md:p-3 rounded-xl border border-border shadow-sm">
                      <div className="w-6 h-6 bg-brand-50 rounded-full flex items-center justify-center mb-2">
                        <ShoppingCart className="w-3 h-3 text-brand-600" />
                      </div>
                      <div className="text-[10px] text-muted-foreground">Pedidos</div>
                      <div className="text-sm font-semibold text-foreground">1.240</div>
                    </div>
                    <div className="bg-card p-2 md:p-3 rounded-xl border border-border shadow-sm">
                      <div className="w-6 h-6 bg-brand-50 rounded-full flex items-center justify-center mb-2">
                        <PackageCheck className="w-3 h-3 text-brand-600" />
                      </div>
                      <div className="text-[10px] text-muted-foreground">Enviados</div>
                      <div className="text-sm font-semibold text-foreground">1.185</div>
                    </div>
                    <div className="bg-card p-2 md:p-3 rounded-xl border border-border shadow-sm">
                      <div className="w-6 h-6 bg-brand-50 rounded-full flex items-center justify-center mb-2">
                        <BrainCircuit className="w-3 h-3 text-brand-600" />
                      </div>
                      <div className="text-[10px] text-muted-foreground">IA</div>
                      <div className="text-sm font-semibold text-foreground">842</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-card rounded-xl border border-border shadow-sm p-3 relative overflow-hidden">
                    <div className="flex items-end justify-between h-16 gap-1 md:gap-2">
                      <div className="w-full bg-neutral-100 rounded-t-sm h-[40%]" />
                      <div className="w-full bg-neutral-100 rounded-t-sm h-[60%]" />
                      <div className="w-full bg-neutral-100 rounded-t-sm h-[45%]" />
                      <div className="w-full bg-brand-400 rounded-t-sm h-[80%] shadow-[0_0_20px_rgba(250,204,21,0.3)]" />
                      <div className="w-full bg-neutral-100 rounded-t-sm h-[50%]" />
                      <div className="w-full bg-neutral-100 rounded-t-sm h-[70%]" />
                      <div className="w-full bg-neutral-100 rounded-t-sm h-[65%]" />
                    </div>
                  </div>
                </div>

                {/* Floating AI Notification */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/95 backdrop-blur rounded-2xl shadow-2xl border border-border p-4 w-56 animate-float text-center z-20">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                  </div>
                  <h4 className="font-bold text-foreground text-xs mb-1">Oportunidade Detectada</h4>
                  <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">Baixar preço do "Headphone X" em 2% pode aumentar vendas em 15%.</p>
                  <button className="bg-foreground text-background text-[10px] font-bold py-1.5 px-3 rounded-full w-full hover:bg-neutral-800 transition-colors">Aplicar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:left-0 w-28 md:w-48 bg-neutral-900 p-1 md:p-2 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl transform rotate-3 z-30">
            <div className="bg-card rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden aspect-[9/19] relative border border-neutral-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-20 h-3 md:h-5 bg-neutral-900 rounded-b-xl z-20" />
              <div className="pt-6 md:pt-8 px-2 md:px-3 bg-neutral-50 h-full flex flex-col">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <div className="text-[10px] md:text-xs font-bold">Olá, João</div>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-neutral-200 rounded-full" />
                </div>
                <div className="bg-card p-2 md:p-3 rounded-lg shadow-sm border border-border mb-2 md:mb-3">
                  <div className="text-[8px] md:text-[10px] text-muted-foreground mb-0.5">Vendas Hoje</div>
                  <div className="text-sm md:text-lg font-bold">R$ 4.290</div>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <div className="bg-card p-1.5 md:p-2 rounded-lg border border-border flex items-center gap-1.5 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-brand-100 rounded-md flex items-center justify-center">
                      <Package className="w-2.5 h-2.5 md:w-3 md:h-3 text-brand-600" />
                    </div>
                    <div className="flex-1">
                      <div className="h-1 md:h-1.5 w-12 bg-neutral-100 rounded mb-0.5" />
                      <div className="h-1 md:h-1.5 w-6 bg-neutral-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
