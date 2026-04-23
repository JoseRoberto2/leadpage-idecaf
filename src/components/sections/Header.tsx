import logo from "@/assets/logo-idecaf.jpeg";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Impacto", href: "#impacto" },
  { label: "ODS", href: "#ods" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Logo Instituto IDECAF" className="h-12 w-12 rounded-full object-cover" width={48} height={48} />
          <div className="leading-tight">
            <p className="font-display text-base font-bold text-primary">Instituto IDECAF</p>
            <p className="hidden text-xs text-muted-foreground sm:block">O nosso foco é o bem comum</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="default" className="bg-gradient-brand text-primary-foreground shadow-soft">
          <a href="#doe">Doar agora</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;