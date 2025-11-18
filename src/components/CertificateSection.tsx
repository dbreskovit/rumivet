import { Award } from "lucide-react";

const CertificateSection = () => {
  return (
    <section className="py-20 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-medium)] border-2 border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-primary/10 rounded-full p-8">
                <Award className="w-20 h-20 text-primary" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Evento com Certificado
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                    Garanta seu certificado de participação ao final do evento por apenas R$15,00.
                    Uma excelente oportunidade para enriquecer seu currículo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
