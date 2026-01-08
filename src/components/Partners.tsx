const partners = [
  { name: "Mercado Livre", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Mercado_Livre_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" },
  { name: "Magalu", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Logo_Magalu.svg" },
  { name: "Vtex", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Vtex_logo.svg" },
  { name: "Nuvemshop", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Nuvemshop_logo.svg" },
];

const Partners = () => {
  return (
    <div className="border-y border-border bg-card py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-10">
          Empresas parceiras da Integra AI
        </p>
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="h-7 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
