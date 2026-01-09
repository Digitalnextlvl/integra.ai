import { motion } from "framer-motion";
import escritorioInterno from "@/assets/escritorio-interno.png";
import escritorioPredio from "@/assets/escritorio-predio.png";

const Team = () => {
  return (
    <section id="equipe" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Tenha uma equipe preparada para fazer seu e-commerce crescer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nossa equipe é formada por especialistas em marketplaces, tecnologia e gestão de operações. 
              Trabalhamos como uma extensão do seu time, focados em resultados reais.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com processos estruturados e ferramentas próprias, garantimos que sua operação 
              esteja sempre um passo à frente da concorrência.
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
              <img
                src={escritorioInterno}
                alt="Escritório interno"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
              <img
                src={escritorioPredio}
                alt="Prédio do escritório"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
