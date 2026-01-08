import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Solutions from "@/components/Solutions";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-20">
      <Header />
      <Hero />
      <Partners />
      <Solutions />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
