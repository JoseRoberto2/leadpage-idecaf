import { Activity, HeartPulse, Target, Users, GraduationCap } from "lucide-react";

const goalCards = [
  {
    icon: HeartPulse,
    title: "Vida saudável",
    text: "Promover saúde bucal de qualidade como pilar essencial do bem-estar das comunidades atendidas.",
  },
  {
    icon: Users,
    title: "Para todas as idades",
    text: "Atendimento que abrange crianças, adultos, idosos e pessoas com necessidades especiais.",
  },
  {
    icon: GraduationCap,
    title: "Formação e cuidado",
    text: "Apoio à formação e retenção de profissionais de saúde para ampliar o acesso digno.",
  },
];

const SDG = () => {
  return (
    <section id="ods" className="bg-gradient-soft py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Agenda 2030 da ONU
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Nosso compromisso com o ODS 3
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O trabalho do Instituto IDECAF está alinhado aos Objetivos de
            Desenvolvimento Sustentável da ONU, contribuindo diretamente com a
            saúde e o bem-estar da população.
          </p>
        </div>

        {/* ODS 3 Banner Card */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-gradient-to-br from-secondary to-secondary-glow text-secondary-foreground shadow-elegant">
          <div className="relative grid gap-8 p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12 md:p-12">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-secondary-foreground/90">
                Objetivo de Desenvolvimento Sustentável
              </p>
              <p className="mt-2 font-display text-7xl font-light leading-none md:text-8xl">3</p>
              <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Saúde e Bem-Estar
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-foreground/95">
                Assegurar uma vida saudável e promover o bem-estar para todos,
                em todas as idades.
              </p>
            </div>
            <div className="hidden md:block" />
            <div className="flex justify-center md:justify-end">
              <div className="flex h-44 w-44 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm md:h-56 md:w-56">
                <HeartPulse className="h-24 w-24 text-secondary-foreground md:h-32 md:w-32" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Cards de objetivos */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goalCards.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-secondary">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mt-5 font-display text-lg font-semibold text-foreground">
                {title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>

        {/* Meta 3.27 destaque */}
        <div className="mt-10 grid gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:grid-cols-[auto_1fr]">
          <div className="flex flex-col items-center justify-center bg-gradient-brand p-8 text-primary-foreground md:w-64">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <Target className="h-7 w-7" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
              Meta
            </p>
            <p className="font-display text-5xl font-extrabold leading-none">3.27</p>
          </div>
          <div className="p-8 md:p-10">
            <h4 className="font-display text-xl font-bold text-foreground md:text-2xl">
              Mais investimento e profissionais para a saúde
            </h4>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Aumentar substancialmente o financiamento da saúde e o
              recrutamento, desenvolvimento, formação e retenção do pessoal de
              saúde nos países em desenvolvimento, especialmente nos países
              menos desenvolvidos e nos pequenos Estados insulares em
              desenvolvimento.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              <Activity className="h-3.5 w-3.5" /> Como o IDECAF contribui
              diretamente
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDG;