import { motion } from "framer-motion";

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
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop"
                  alt="Equipe colaborando em projeto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop"
                  alt="Escritório moderno"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop"
                  alt="Reunião de equipe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=750&fit=crop"
                  alt="Ambiente de trabalho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
