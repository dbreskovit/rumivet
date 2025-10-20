import { Clock, Presentation, Coffee } from "lucide-react";

const ScheduleSection = () => {
  const scheduleItems = [
    {
      time: "19:00",
      title: "Início do evento",
      icon: Clock,
      color: "bg-primary/10 text-primary",
    },
    {
      time: "19:40",
      title: "Palestra 1: Qualidade do leite",
      icon: Presentation,
      color: "bg-accent/30 text-primary",
    },
    {
      time: "20:30",
      title: "Palestra 2: Manejo de bezerras",
      icon: Presentation,
      color: "bg-accent/30 text-primary",
    },
    {
      time: "21:20",
      title: "Finalização do evento",
      icon: Clock,
      color: "bg-primary/10 text-primary",
    },
    {
      time: "21:30",
      title: "Coffee Break de Confraternização",
      icon: Coffee,
      color: "bg-secondary/50 text-primary",
    },
  ];

  return (
    <section id="programacao" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Programação do Evento
        </h2>

        <div className="space-y-4">
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] border border-border hover:shadow-[var(--shadow-medium)] transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-6">
                  <div className={`${item.color} rounded-lg p-4 flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="text-2xl font-bold text-primary">{item.time}</p>
                      <p className="text-lg text-foreground font-medium">{item.title}</p>
                    </div>
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

export default ScheduleSection;
