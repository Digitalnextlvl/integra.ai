import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import equipeEscritorio from "@/assets/equipe-escritorio.png";
import predioEmpresa from "@/assets/predio-empresa.png";
import lobbyEmpresa from "@/assets/lobby-empresa.png";

const images = [
  { src: equipeEscritorio, alt: "Equipe trabalhando no escritório" },
  { src: predioEmpresa, alt: "Prédio da empresa" },
  { src: lobbyEmpresa, alt: "Lobby do prédio da empresa" },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
