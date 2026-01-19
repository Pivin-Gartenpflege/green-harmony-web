import { CheckCircle } from "lucide-react";

const benefits = [
  "Über 10 Jahre Erfahrung",
  "Qualifiziertes Fachpersonal",
  "Termingerechte Ausführung",
  "Faire & transparente Preise",
  "Kostenlose Erstberatung",
  "Regionaler Ansprechpartner",
];

const About = () => {
  return (
    <section id="ueber-uns" className="py-20 bg-background">
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
                Wir sind ein zuverlässiger Fachbetrieb für Garten- und Landschaftspflege 
                und betreuen private sowie gewerbliche Außenanlagen in der Region.
              </p>
              <p>
                <strong className="text-foreground">Qualität, Pünktlichkeit und saubere Arbeit</strong> stehen 
                bei uns an erster Stelle. Unser erfahrenes Team sorgt dafür, dass Ihr Garten 
                in den besten Händen ist – zu jeder Jahreszeit.
              </p>
              <p>
                Ob regelmäßige Pflege oder einmalige Projekte: Wir beraten Sie gerne 
                persönlich und erstellen Ihnen ein unverbindliches Angebot.
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
    </section>
  );
};

export default About;
