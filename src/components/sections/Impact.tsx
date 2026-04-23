import elderlyImg from "@/assets/elderly-care.jpg";
import { Users, HeartHandshake, Smile } from "lucide-react";

const stats = [
  { icon: Users, value: "+3.000", label: "Pessoas atendidas" },
  { icon: Smile, value: "100%", label: "Atendimento gratuito" },
  { icon: HeartHandshake, value: "Todas", label: "Idades e públicos" },
];

const Impact = () => {
  return (
    <section id="impacto" className="py-24">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-hero shadow-elegant">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-10 text-primary-foreground md:p-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                Nosso impacto
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Mais de 3.000 sorrisos transformados
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                Cada atendimento é um passo a mais na missão de erradicar a cárie
                dentária e levar dignidade a quem mais precisa.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
                  >
                    <Icon className="h-6 w-6 text-primary-foreground" />
                    <p className="mt-3 font-display text-2xl font-bold">{value}</p>
                    <p className="text-xs text-primary-foreground/85">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px]">
              <img
                src={elderlyImg}
                alt="Idosa sendo atendida com carinho no consultório odontológico"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width={1000}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;