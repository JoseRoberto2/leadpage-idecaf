import { Copy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const PIX_KEY = "institutoidecafbj@gmail.com";

const Donate = () => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    toast({ title: "Chave PIX copiada!", description: "Obrigado por espalhar sorrisos." });
  };

  return (
    <section id="doe" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-secondary/30 bg-gradient-card p-10 text-center shadow-elegant md:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
            <Heart className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Doe e espalhe mais sorrisos!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sua contribuição mantém o atendimento gratuito a centenas de famílias.
            Faça parte dessa corrente do bem.
          </p>
          <div className="mt-8 inline-flex max-w-full flex-col items-center gap-3 rounded-2xl border border-border bg-background p-5 shadow-soft sm:flex-row">
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">Chave PIX (e-mail)</p>
              <p className="font-mono text-sm font-medium text-foreground sm:text-base">{PIX_KEY}</p>
            </div>
            <Button onClick={handleCopy} className="bg-gradient-brand text-primary-foreground">
              <Copy className="mr-2 h-4 w-4" /> Copiar chave
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;