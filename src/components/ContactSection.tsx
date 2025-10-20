import { Instagram, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Fale Conosco
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://www.instagram.com/rumivet.jr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-all group"
          >
            <Instagram className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-lg mb-1">Instagram</p>
            <p className="text-primary-foreground/80">@rumivet.jr</p>
          </a>

          <a
            href="mailto:rumivet.jr@aluno.iffar.edu.br"
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-all group"
          >
            <Mail className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-lg mb-1">Email</p>
            <p className="text-primary-foreground/80 text-sm">rumivet.jr@aluno.iffar.edu.br</p>
          </a>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Phone className="w-10 h-10 mx-auto mb-4" />
            <p className="font-semibold text-lg mb-3">Comissão Organizadora</p>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                Maiara Stormoski<br />
                <span className="font-semibold">(46) 93300-1503</span>
              </p>
              <p className="text-primary-foreground/80">
                Luiza Picolotto<br />
                <span className="font-semibold">(55) 99202-0992</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-primary-foreground/60 text-sm border-t border-primary-foreground/20 pt-8">
          <p>&copy; 2025 Rumivet Jr. - Todos os direitos reservados.</p>
          <p className="mt-2">
            Instituto Federal Farroupilha - Campus Frederico Westphalen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
