import { useState } from "react";
import speakerTaiani from "@/assets/speaker-taiani.jpg";
import speakerBruna from "@/assets/speaker-bruna.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SpeakersSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null);

  const speakers = [
    {
      name: "Taiani Ourique Gayer",
      title: "Médica veterinária",
      topic: "Qualidade do leite",
      image: speakerTaiani,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Bruna Brandão",
      title: "Médica veterinária",
      topic: "Manejo de bezerras",
      image: speakerBruna,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section id="palestrantes" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Conheça Nossos Palestrantes
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              onClick={() => setSelectedSpeaker(index)}
              className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-border hover:scale-105 transition-all cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-accent/10">
                <h3 className="text-2xl font-bold text-primary mb-2">{speaker.name}</h3>
                <p className="text-lg text-muted-foreground">
                  Palestrante do tema: <span className="font-semibold text-foreground">"{speaker.topic}"</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedSpeaker !== null} onOpenChange={() => setSelectedSpeaker(null)}>
          <DialogContent className="max-w-2xl">
            {selectedSpeaker !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-primary">
                    {speakers[selectedSpeaker].name}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-foreground">
                      {speakers[selectedSpeaker].title}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      Tema da palestra: {speakers[selectedSpeaker].topic}
                    </h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Formação Acadêmica:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {speakers[selectedSpeaker].description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SpeakersSection;
