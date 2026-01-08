import { motion } from "framer-motion";
import { Wand2, PieChart, Zap, LayoutDashboard, Check } from "lucide-react";

const Solutions = () => {
  return (
    <section id="solucao" className="py-24 px-6 relative bg-neutral-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6"
          >
            Um cérebro digital para o seu e-commerce.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl"
          >
            Centralize Mercado Livre, Shopee, Amazon e loja própria em um único lugar, potencializado por inteligência artificial real.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-card p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-border card-shadow hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                  <Wand2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-foreground font-bold mb-3 tracking-tight">Criação Automática de Anúncios</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">Deixe a IA escrever títulos persuasivos, descrições técnicas e escolher as melhores palavras-chave para SEO em cada marketplace.</p>
              </div>
              <div className="w-full bg-neutral-50 rounded-xl border border-border p-4 flex gap-3 items-center group-hover:bg-brand-50 transition-colors">
                <div className="bg-green-500 rounded-full p-1"><Check className="text-card w-3 h-3" /></div>
                <span className="text-sm text-muted-foreground font-medium">Anúncios criados 10x mais rápido</span>
              </div>
            </div>
          </motion.div>

          {/* Analysis Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-border card-shadow hover:shadow-xl transition-all duration-500"
          >
            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
              <PieChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl text-foreground font-bold mb-3 tracking-tight">Precificação Inteligente</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">Calculamos taxas, impostos e custos automaticamente para garantir sua margem.</p>
            
            <div className="relative pt-4">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>Margem Atual</span>
                <span className="text-green-600">28%</span>
              </div>
              <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 w-[28%] group-hover:w-[45%] transition-all duration-1000 ease-out" />
              </div>
            </div>
          </motion.div>

          {/* Sync Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-border card-shadow hover:shadow-xl transition-all duration-500"
          >
            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl text-foreground font-bold mb-3 tracking-tight">Sincronização Real</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Vendeu no Shopee? O estoque baixa no Mercado Livre e na Amazon em segundos. Fim do "furo de estoque".</p>
          </motion.div>

          {/* Dashboard Feature Dark */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-neutral-900 text-primary-foreground p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full filter blur-[120px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity" />

            <div className="flex-1 relative z-10">
              <div className="w-12 h-12 bg-neutral-800/50 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-neutral-700/50">
                <LayoutDashboard className="text-brand-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Hub de Controle</h3>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">Visualize o desempenho de todos os canais em um único painel limpo, rápido e focado em tomada de decisão.</p>
              <div className="mt-6 flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">4+</div>
                  <div className="text-xs text-neutral-500">Marketplaces</div>
                </div>
                <div className="w-px bg-neutral-700/50" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-400">100%</div>
                  <div className="text-xs text-neutral-500">Controle</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full relative z-10 transform group-hover:scale-105 transition-transform duration-700">
              <div className="bg-neutral-800/50 backdrop-blur-md rounded-xl border border-neutral-700/50 p-6 aspect-video flex flex-col justify-center gap-4 relative shadow-2xl">
                <div className="absolute top-4 right-4 flex gap-1">
                  <div className="w-2 h-2 bg-neutral-700 rounded-full" />
                  <div className="w-2 h-2 bg-neutral-700 rounded-full" />
                </div>
                <div className="h-2 w-1/3 bg-neutral-600/50 rounded" />
                <div className="h-2 w-2/3 bg-neutral-700/50 rounded" />
                <div className="mt-auto flex gap-2 items-end h-24">
                  <div className="bg-brand-500/20 h-[40%] rounded w-full" />
                  <div className="bg-brand-500/40 h-[70%] rounded w-full" />
                  <div className="bg-brand-400 h-[90%] rounded w-full shadow-[0_0_15px_rgba(250,204,21,0.4)]" />
                  <div className="bg-brand-500/30 h-[50%] rounded w-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
