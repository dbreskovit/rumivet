import { Target, Users, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Foco Estratégico",
      description: "Qualidade do Leite e Manejo de Bezerras para produtividade",
    },
    {
      icon: Users,
      title: "Networking Profissional",
      description: "Conexão entre produtores, estudantes e veterinários",
    },
    {
      icon: TrendingUp,
      title: "Técnicas Aplicáveis",
      description: "Conteúdo prático para melhorar índices zootécnicos",
    },
    {
      icon: Award,
      title: "Profissionais Capacitados",
      description: "Palestras com especialistas da área",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Por Que Participar?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] border border-border hover:shadow-[var(--shadow-medium)] transition-all hover:scale-[1.02]"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-accent/30 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
