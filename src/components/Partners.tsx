import { type SVGProps } from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Mercado Livre Icon
function MercadoLivreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 70c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30zm-8-45c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm16 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-8 24c-8.3 0-15-4-15-9h30c0 5-6.7 9-15 9z"/>
    </svg>
  );
}

// Amazon Icon
function AmazonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M59.8 67.6c-15.4 11.3-37.7 17.4-56.9 17.4-26.9 0-51.2-10-69.5-26.5-1.4-1.3-.2-3 1.6-2 20.4 11.9 45.6 19 71.6 19 17.6 0 36.9-3.6 54.6-11.2 2.7-1.1 4.9 1.8 2.3 3.3h-.7zM67 59.5c-2-2.5-13-1.2-18-.6-1.5.2-1.7-1.1-.4-2.1 8.8-6.2 23.2-4.4 24.9-2.3 1.7 2.1-.5 16.6-8.7 23.5-1.3 1.1-2.5.5-1.9-1 1.8-4.6 6-14.9 4.1-17.5z" transform="translate(33, 10)"/>
      <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"/>
    </svg>
  );
}

// Shopee Icon
function ShopeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M50 15c-8.3 0-15.3 6.3-16.2 14.4C22.5 31.8 15 40.7 15 51.3v20c0 8.8 7.2 16 16 16h38c8.8 0 16-7.2 16-16v-20c0-10.6-7.5-19.5-18.8-21.9C65.3 21.3 58.3 15 50 15zm0 8c4.4 0 8 3.6 8 8h-16c0-4.4 3.6-8 8-8zm0 20c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"/>
    </svg>
  );
}

// Magalu Icon
function MagaluIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm15 55h-30v-30h10v20h20v10zm5-20h-10v-20h-20v-10h30v30z"/>
    </svg>
  );
}

const allLogos = [
  { name: "Mercado Livre", id: 1, img: MercadoLivreIcon },
  { name: "Amazon", id: 2, img: AmazonIcon },
  { name: "Shopee", id: 3, img: ShopeeIcon },
  { name: "Magalu", id: 4, img: MagaluIcon },
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
