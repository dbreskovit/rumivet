import { Building2, Users, MapPin, Stethoscope, GraduationCap, TrendingUp } from "lucide-react";

const AboutRumivetSection = () => {
  const features = [
    { icon: Stethoscope, text: "Serviços veterinários especializados em ruminantes" },
    { icon: GraduationCap, text: "Experiência prática para acadêmicos" },
    { icon: TrendingUp, text: "Foco em custo-benefício e avanço produtivo" },
  ];

  const stats = [
    { icon: Users, label: "Alunos Envolvidos", value: "36+" },
    { icon: Building2, label: "Propriedades Atendidas", value: "30+" },
    { icon: MapPin, label: "Municípios", value: "10" },
  ];

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Quem Somos
        </h2>

        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-[var(--shadow-medium)] border border-border mb-8">
          <p className="text-lg text-center text-foreground mb-8">
            <img src="/rumivet-logo.png" alt="Rumivet Jr." className="mx-auto mb-4" />
            <strong>Rumivet Jr.</strong> - Empresa Júnior de Medicina Veterinária<br />
            Instituto Federal Farroupilha - Campus Frederico Westphalen
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-3 bg-accent/20 rounded-lg p-4">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-sm">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-accent/30 rounded-xl p-6 text-center border border-primary/20 hover:scale-105 transition-all"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutRumivetSection;
