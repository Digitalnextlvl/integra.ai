import { motion } from "framer-motion";
import { PlayCircle, ShoppingCart, PackageCheck, BrainCircuit, ArrowUpRight, Sparkles, Lock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

      {/* Animated Blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border shadow-sm text-muted-foreground text-xs font-medium"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500" />
          Disponível para integração imediata
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[1.05] mb-8 max-w-6xl mx-auto"
        >
          Escale suas vendas <br className="hidden md:block" />
          <span className="text-gradient-brand pr-2">sem aumentar a equipe.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-normal px-4"
        >
          Sincronize estoques, automatize anúncios com IA e tenha controle financeiro total. A plataforma que trabalha enquanto você dorme.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-24 px-4"
        >
          <Button size="lg" variant="hero" className="rounded-full px-8 py-6 text-base shadow-xl">
            Solicitar demonstração
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base group">
            Ver vídeo
            <PlayCircle className="w-4 h-4 ml-2 text-muted-foreground group-hover:text-brand-500 transition-colors" />
          </Button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-6xl mx-auto mt-4 px-2 md:px-0"
        >
          {/* Laptop Mockup */}
          <div className="relative z-10 mx-auto w-full">
            <div className="bg-neutral-950 rounded-t-xl md:rounded-t-2xl p-1.5 md:p-3 shadow-2xl mx-auto aspect-[16/10] max-w-full transform transition-transform hover:scale-[1.01] duration-700 border-x border-t border-neutral-800">
              <div className="bg-card rounded-md md:rounded-lg overflow-hidden h-full w-full relative">
                {/* Browser Header */}
                <div className="h-6 md:h-10 border-b border-border flex items-center px-4 justify-between bg-neutral-50/80">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-400/20 border border-red-400/30" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-400/20 border border-yellow-400/30" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-400/20 border border-green-400/30" />
                  </div>
                  <div className="hidden md:flex bg-card border border-border rounded text-[10px] text-muted-foreground px-32 py-1 items-center gap-2 shadow-sm">
                    <Lock className="w-2 h-2" /> dash.integra.ai
                  </div>
                  <div className="w-4" />
                </div>

                {/* Dashboard Content */}
                <div className="p-4 md:p-6 grid grid-cols-12 gap-6 bg-neutral-50/30 h-full overflow-hidden">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden md:flex flex-col gap-4 border-r border-border pr-4">
                    <div className="h-8 w-8 bg-brand-400 rounded-lg mb-4" />
                    <div className="space-y-3 opacity-50">
                      <div className="h-2 w-full bg-neutral-200 rounded" />
                      <div className="h-2 w-3/4 bg-neutral-200 rounded" />
                      <div className="h-2 w-5/6 bg-neutral-200 rounded" />
                      <div className="h-2 w-1/2 bg-neutral-200 rounded" />
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="col-span-12 md:col-span-10 flex flex-col gap-4 md:gap-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] md:text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Faturamento Total</div>
                        <div className="text-xl md:text-3xl font-bold text-foreground tracking-tight">R$ 142.302,00</div>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" /> 12% vs mês anterior
                      </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                      <div className="bg-card p-3 md:p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center mb-3">
                          <ShoppingCart className="w-4 h-4 text-brand-600" />
                        </div>
                        <div className="text-xs text-muted-foreground">Pedidos</div>
                        <div className="text-lg font-semibold text-foreground">1.240</div>
                      </div>
                      <div className="bg-card p-3 md:p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center mb-3">
                          <PackageCheck className="w-4 h-4 text-brand-600" />
                        </div>
                        <div className="text-xs text-muted-foreground">Enviados</div>
                        <div className="text-lg font-semibold text-foreground">1.185</div>
                      </div>
                      <div className="col-span-2 md:col-span-1 bg-card p-3 md:p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center mb-3">
                          <BrainCircuit className="w-4 h-4 text-brand-600" />
                        </div>
                        <div className="text-xs text-muted-foreground">Otimizados IA</div>
                        <div className="text-lg font-semibold text-foreground">842</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="flex-1 bg-card rounded-xl border border-border shadow-sm p-4 relative overflow-hidden min-h-[120px]">
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-50/30 to-transparent" />
                      <div className="flex items-end justify-between h-full gap-2 md:gap-4 mt-2 px-2">
                        <div className="w-full bg-neutral-100 rounded-t-sm h-[40%]" />
                        <div className="w-full bg-neutral-100 rounded-t-sm h-[60%]" />
                        <div className="w-full bg-neutral-100 rounded-t-sm h-[45%]" />
                        <div className="w-full bg-brand-400 rounded-t-sm h-[80%] shadow-[0_0_20px_rgba(250,204,21,0.3)] relative group cursor-pointer">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">R$ 12k</div>
                        </div>
                        <div className="w-full bg-neutral-100 rounded-t-sm h-[50%]" />
                        <div className="w-full bg-neutral-100 rounded-t-sm h-[70%]" />
                        <div className="w-full bg-neutral-100 rounded-t-sm h-[65%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating AI Notification */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/95 backdrop-blur rounded-2xl shadow-2xl border border-border p-5 w-72 animate-float text-center z-20">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-1">Oportunidade Detectada</h4>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">Baixar o preço do produto "Headphone X" em 2% pode aumentar o volume em 15%.</p>
                  <button className="bg-foreground text-background text-xs font-bold py-2 px-4 rounded-full w-full hover:bg-neutral-800 transition-colors">Aplicar Sugestão</button>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-left-12 w-32 md:w-64 bg-neutral-900 p-1.5 md:p-3 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform md:rotate-3 z-30">
            <div className="bg-card rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-full aspect-[9/19] relative border border-neutral-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-4 md:h-6 bg-neutral-900 rounded-b-xl z-20" />
              <div className="pt-8 md:pt-10 px-3 md:px-4 bg-neutral-50 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <div className="text-xs md:text-sm font-bold">Olá, João</div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-neutral-200 rounded-full" />
                </div>
                <div className="bg-card p-3 md:p-4 rounded-xl shadow-sm border border-border mb-3 md:mb-4">
                  <div className="text-[10px] md:text-xs text-muted-foreground mb-1">Vendas Hoje</div>
                  <div className="text-lg md:text-xl font-bold">R$ 4.290</div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="bg-card p-2 md:p-3 rounded-xl border border-border flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-100 rounded-lg flex items-center justify-center">
                      <Package className="w-3 h-3 md:w-4 md:h-4 text-brand-600" />
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 md:h-2 w-16 bg-neutral-100 rounded mb-1" />
                      <div className="h-1.5 md:h-2 w-8 bg-neutral-100 rounded" />
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
