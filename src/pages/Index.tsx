import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Donate from "@/components/sections/Donate";
import SDG from "@/components/sections/SDG";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Impact />
        <Donate />
        <SDG />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
