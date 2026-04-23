import logo from "@/assets/logo-idecaf.jpeg";
import { Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo IDECAF" className="h-12 w-12 rounded-full object-cover" width={48} height={48} />
              <div>
                <p className="font-display text-lg font-bold">Instituto IDECAF</p>
                <p className="text-xs text-primary-foreground/70">O nosso foco é o bem comum</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Instituto de Desenvolvimento e Cidadania Anita Francisca —
              promovendo saúde bucal gratuita e dignidade em Natal/RN.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-glow" />
                Natal — Rio Grande do Norte, Brasil
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary-glow" />
                institutoidecafbj@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary-glow" />
                <a
                  href="https://wa.me/5584996225568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Fale conosco: +55 84 99622-5568
                </a>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/institutoidecaf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-secondary to-secondary-glow px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-elegant"
            >
              <Instagram className="h-4 w-4" />
              Siga-nos no Instagram
            </a>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Institucional
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#sobre">Sobre o Instituto</a></li>
              <li><a href="#atuacao">Nossa atuação</a></li>
              <li><a href="#impacto">Impacto social</a></li>
              <li><a href="#doe">Como ajudar</a></li>
            </ul>
            <div className="mt-6 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-primary-foreground/80">
              <p className="font-semibold text-primary-foreground">CNPJ</p>
              <p className="mt-1 font-mono">46.285.603/0001-88</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Instituto IDECAF. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;