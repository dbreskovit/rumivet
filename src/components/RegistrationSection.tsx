import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RegistrationSection = () => {
  const registrationLink = "https://forms.gle/YOUR_GOOGLE_FORM_LINK"; // Substitua pelo link real

  return (
    <section id="inscricao" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Inscreva-se Gratuitamente!
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          As vagas são limitadas. Não perca a chance de aprimorar seus conhecimentos.
        </p>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-medium)] border border-border">
          <Button
            variant="hero"
            size="lg"
            className="text-xl px-12 py-8 h-auto w-full md:w-auto"
            asChild
          >
            <a href={registrationLink} target="_blank" rel="noopener noreferrer">
              Fazer Inscrição
              <ExternalLink className="ml-2 w-6 h-6" />
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            Você será redirecionado para o formulário de inscrição
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
