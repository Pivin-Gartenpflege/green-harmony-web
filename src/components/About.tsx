import { CheckCircle } from "lucide-react";

const benefits = [
  "Über 10 Jahre Erfahrung",
  "Persönlicher Ansprechpartner",
  "Termingerechte Ausführung",
  "Faire & transparente Preise",
  "Kostenlose Erstberatung",
  "Direkt aus der Region",
];

const About = () => {
  return (
    <section id="ueber-uns" className="relative py-20 pb-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ihr zuverlässiger Partner für gepflegte Außenanlagen
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ich bin ein zuverlässiger Fachbetrieb für Garten- und Landschaftspflege 
                und betreue private sowie gewerbliche Außenanlagen in der Region.
              </p>
              <p>
                <strong className="text-foreground">Qualität, Pünktlichkeit und saubere Arbeit</strong> stehen 
                bei mir an erster Stelle. Als Ihr persönlicher Ansprechpartner sorge ich dafür, dass Ihr Garten 
                in den besten Händen ist – zu jeder Jahreszeit.
              </p>
              <p>
                Ob regelmäßige Pflege oder einmalige Projekte: Ich berate Sie gerne 
                persönlich und erstelle Ihnen ein unverbindliches Angebot.
              </p>
            </div>
          </div>

          {/* Benefits List */}
          <div className="bg-section-light rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Das macht uns aus:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(0, 0%, 100%)"
            d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
