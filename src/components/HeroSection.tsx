import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            II Ciclo de Palestras Rumivet Jr.
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-3xl mx-auto">
            Qualidade do Leite e Manejo de Bezerras: Fortalecendo a Pecuária Leiteira Regional
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="text-primary-foreground font-semibold text-lg">27 de Novembro</p>
              <p className="text-primary-foreground/80 text-sm">2025</p>
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="text-primary-foreground font-semibold text-sm">Sindicato dos Trabalhadores Rurais</p>
              <p className="text-primary-foreground/80 text-sm">Frederico Westphalen-RS</p>
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all">
              <Users className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="text-primary-foreground font-semibold text-sm">Produtores, Estudantes</p>
              <p className="text-primary-foreground/80 text-sm">e Profissionais da Área</p>
            </div>
          </div>

          <div className="pt-8">
            <Button
              onClick={() => scrollToSection("inscricao")}
              variant="cta"
              size="lg"
              className="text-lg px-12 py-6 h-auto"
            >
              Garanta sua vaga agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
