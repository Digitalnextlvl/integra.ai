import { motion } from "framer-motion";
import { Layers, Rocket, Crown, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Start",
    description: "Para quem quer começar ou organizar a operação nos marketplaces.",
    icon: Layers,
    features: [
      "Criação e otimização de anúncios",
      "Organização de catálogo e estoque",
      "Integração ERP + marketplaces",
      "Análise básica de preço, custo e imposto",
      "Relatório mensal de performance",
    ],
    cta: "Falar com especialista",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "Para operações que querem crescer com controle e lucro.",
    icon: Rocket,
    badge: "Mais escolhido",
    features: [
      "Tudo do Start",
      "Gestão ativa de performance",
      "Otimização contínua de anúncios",
      "IA analisando preços e margem",
      "Reuniões mensais",
      "Responsável pela conta",
    ],
    cta: "Solicitar Proposta",
    highlighted: true,
  },
  {
    name: "Scale",
    description: "Para empresas que querem escalar a operação de verdade.",
    icon: Crown,
    features: [
      "Tudo do Growth",
      "Estratégia de crescimento",
      "Gestão avançada de catálogo",
      "Foco em margem e escala",
      "Atendimento prioritário",
      "Projetos sob medida",
    ],
    cta: "Falar com vendas",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-24 px-6 relative pricing-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4"
          >
            Não somos uma agência genérica.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Assumimos sua operação e crescemos junto com você.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border flex flex-col relative ${
                plan.highlighted
                  ? "bg-neutral-900 border-neutral-800 shadow-2xl transform md:-translate-y-4 z-10"
                  : "bg-card border-border hover:border-neutral-300 hover:shadow-2xl transition-all duration-300 group"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-400 text-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-300 shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  plan.highlighted ? "bg-neutral-800" : "bg-brand-50"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.highlighted ? "text-brand-400" : "text-brand-600"}`} />
                </div>
                <h3 className={`text-2xl font-bold tracking-tight mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-neutral-400" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className={`space-y-4 text-sm font-medium mb-8 flex-1 ${plan.highlighted ? "text-neutral-300" : "text-muted-foreground"}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-brand-400" : "text-neutral-400"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "accent" : "outline"}
                className={`w-full ${plan.highlighted ? "font-bold py-3.5" : ""}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-brand-400 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
              Ainda com dúvida sobre qual o ideal?
            </h3>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto font-medium">
              Nossa equipe de especialistas analisa sua loja atual e monta o plano perfeito para você escalar sem desperdício.
            </p>
            <Button variant="hero" size="lg" className="inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> Agendar conversa rápida
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
