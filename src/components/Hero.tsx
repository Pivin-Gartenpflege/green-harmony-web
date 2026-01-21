import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import pivinLogo from "@/assets/pivin-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.querySelector("#leistungen");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-secondary"
    >
      {/* Content */}
      <div className="container relative z-10 pt-24 pb-32 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <img 
            src={pivinLogo} 
            alt="Pivin Garten-Landschaftspflege" 
            className="h-24 md:h-32 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Professionelle Garten- &{" "}
            <span className="text-gradient">Landschaftspflege</span>{" "}
            aus einer Hand
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Zuverlässig · Sauber · Regional
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
              Jetzt unverbindlich anfragen
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="text-lg px-8 py-6"
            >
              Meine Leistungen
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground hover:text-primary transition-colors"
          aria-label="Nach unten scrollen"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(90, 25%, 97%)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
