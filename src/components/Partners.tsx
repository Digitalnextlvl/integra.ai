import parceiroMagalu from "@/assets/parceiro-magalu.png";
import parceiroMercadoLivre from "@/assets/parceiro-mercadolivre.png";
import parceiroShopee from "@/assets/parceiro-shopee.png";
import parceiroAmazon from "@/assets/parceiro-amazon.png";

const partners = [
  { name: "Mercado Livre", logo: parceiroMercadoLivre },
  { name: "Amazon", logo: parceiroAmazon },
  { name: "Shopee", logo: parceiroShopee },
  { name: "Magalu", logo: parceiroMagalu },
];

const Partners = () => {
  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="border-y border-border bg-card py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-10">
          Empresas parceiras da Integra AI
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-16">
            {duplicatedPartners.map((partner, index) => (
              <img
                key={`${partner.name}-${index}`}
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
