import dentistImg from "@/assets/dentist-care.jpg";
import { Target, Eye, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Promover atendimento igualitário, sem distinção de classe, raça ou religião — a odontologia para todos.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Atingir o máximo de pessoas possível para erradicar a cárie dentária no município de atuação.",
  },
  {
    icon: Sparkles,
    title: "Valores",
    text: "Ética no atendimento e garantia de acesso a uma saúde digna a todos que procuram a instituição.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-secondary/20 blur-2xl" />
          <img
            src={dentistImg}
            alt="Dentista atendendo criança em consultório do IDECAF"
            className="relative rounded-3xl object-cover shadow-elegant"
            loading="lazy"
            width={1200}
            height={900}
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Quem somos</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Uma OSC que transforma vidas através de sorrisos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Localizado em Natal/RN, o IDECAF — Instituto de Desenvolvimento e
            Cidadania Anita Francisca — é uma Organização da Sociedade Civil
            dedicada a promover o bem-estar social, com foco especial em
            <strong className="text-foreground"> saúde bucal gratuita</strong>.
          </p>
          <div className="mt-10 grid gap-5">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-soft"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;