import heroImage from "@/assets/hero-smiles.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
      </div>
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <Heart className="h-4 w-4" /> Organização da Sociedade Civil — Natal/RN
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Odontologia <span className="bg-gradient-brand bg-clip-text text-transparent">para todos</span>, sem distinção.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            O Instituto de Desenvolvimento e Cidadania Anita Francisca promove
            saúde bucal gratuita e digna a quem mais precisa — espalhando sorrisos
            por todo o município.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground shadow-elegant">
              <a href="#doe">
                Quero ajudar <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary">
              <a href="#sobre">Conheça o Instituto</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <p className="font-display text-3xl font-bold text-primary">+3.000</p>
              <p>pessoas atendidas</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-bold text-secondary">100%</p>
              <p>gratuito</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-20 blur-2xl" />
          <img
            src={heroImage}
            alt="Pessoas de várias idades sorrindo após atendimento odontológico"
            className="relative w-full rounded-[2rem] object-cover shadow-elegant"
            width={1600}
            height={1100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;