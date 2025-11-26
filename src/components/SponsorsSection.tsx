const SponsorsSection = () => {
  const sponsors = {
    gold: [
      { name: "COTRIJAL", logo: "/sponsors/COTRIJAL.png" },
      { name: "Scire", logo: "/sponsors/SCIRE.png" },
      { name: "Conceito Studio", logo: "/sponsors/CONCEITO.png" },
      { name: "Creluz", logo: "/sponsors/creluz.png" },
      { name: "JA saude animal", logo: "/sponsors/JA SAÚDE ANIMAL.jpg" },
      { name: "ADM nutrição animal", logo: "/sponsors/ADM.jpg" },
      { name: "Suifarma", logo: "/sponsors/SUIFARMA.jpg" },
      { name: "Forseed", logo: "/sponsors/FORSEED.jpg" },
      { name: "CRV lago", logo: "/sponsors/CRV LAGOA.jpg" },
      { name: "Alessi", logo: "/sponsors/ALESSI.png" },
    ],
    silver: [
      { name: "Padaria Doce e vida", logo: "/sponsors/PADARIA DOCE E VIDA.jpg" },
      { name: "Provet", logo: "/sponsors/PROVET.png" },
      { name: "Alta genética", logo: "/sponsors/ALTA GENÉTICA.jpg" },
      { name: "MIG-PLUS", logo: "/sponsors/MIG-PLUS.png" }
    ],
    bronze: [
      { name: "Mercado Bertoleti", logo: "/sponsors/BERTOLETI.PNG" },
      { name: "Mercado Barril", logo: "/sponsors/BARRIL.jpg" },
      { name: "Bom negócio", logo: "/sponsors/BOM NEGÓCIO.jpg" },
      { name: "Albarello", logo: "/sponsors/ALBARELLO.jpg" },
      { name: "Coletto máquinas", logo: "/sponsors/LS TRACTOR COLETTO.png" },
      { name: "Sicoob", logo: "/sponsors/sicoob.png" },
      { name: "NATURAL", logo: "/sponsors/NATURAL.png" },
      {name: "ORGANICA", logo: "/sponsors/ORGANICA.png" },
    ],
    apoiadores: [
      { name: "COTRIJAL", logo: "/sponsors/COTRIJAL.png" },
      { name: "COOPER", logo: "/sponsors/COOPER.jpg" },
    ],
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          Patrocinadores
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Agradecemos o apoio de nossos parceiros que tornam este evento possível
        </p>

        {/* Ouro */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Ouro</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-[var(--shadow-medium)] border border-border hover:scale-105 transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-[300px] h-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prata */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Prata</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-xl shadow-[var(--shadow-medium)] border border-border hover:scale-105 transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-[250px] h-[125px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bronze */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Bronze</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.bronze.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-3 rounded-xl shadow-[var(--shadow-medium)] border border-border hover:scale-105 transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-[250px] h-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Apoiadores */}
        <div>
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Apoiadores</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.apoiadores.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-3 rounded-xl shadow-[var(--shadow-medium)] border border-border hover:scale-105 transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-[250px] h-[125px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
