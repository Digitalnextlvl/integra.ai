import parceiroBling from "@/assets/parceiro-bling.png";
import parceiroMercadoLivre from "@/assets/parceiro-mercadolivre.png";
import parceiroShopee from "@/assets/parceiro-shopee.png";
import parceiroTiny from "@/assets/parceiro-tiny.png";
import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel";

const allLogos: Logo[] = [
  { name: "Bling", id: 1, src: parceiroBling },
  { name: "Mercado Livre", id: 2, src: parceiroMercadoLivre },
  { name: "Shopee", id: 3, src: parceiroShopee },
  { name: "Tiny", id: 4, src: parceiroTiny },
];

const Partners = () => {
  return (
    <div className="border-y border-border bg-card py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-10">
          Empresas parceiras da Integra AI
        </p>
        <LogoCarousel logos={allLogos} columnCount={4} />
      </div>
    </div>
  );
};

export default Partners;
