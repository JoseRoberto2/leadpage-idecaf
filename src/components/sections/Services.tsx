import { Baby, Accessibility, UserRound, Stethoscope, Smile, ShieldCheck } from "lucide-react";

const services = [
  { icon: Smile, title: "Orientações de higiene bucal", desc: "Educação preventiva para criar hábitos saudáveis desde cedo." },
  { icon: Stethoscope, title: "Tratamentos odontológicos", desc: "Procedimentos restauradores e curativos com qualidade." },
  { icon: ShieldCheck, title: "Cirurgias e procedimentos", desc: "Atendimentos mais complexos realizados com segurança." },
  { icon: Baby, title: "Atendimento infantil", desc: "Cuidado especializado e acolhedor para crianças." },
  { icon: UserRound, title: "Atendimento ao idoso", desc: "Saúde bucal com dignidade na terceira idade." },
  { icon: Accessibility, title: "Necessidades especiais", desc: "Atendimento humanizado e adaptado a cada paciente." },
];

const Services = () => {
  return (
    <section id="atuacao" className="bg-gradient-soft py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Nossa atuação</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Da prevenção aos tratamentos especializados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Atuamos em toda a jornada da saúde bucal, com olhar especial para
            crianças, idosos e portadores de necessidades especiais.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-secondary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;