import {
  Scissors,
  TreeDeciduous,
  Flower2,
  Shovel,
  Leaf,
  Sun,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Gartenpflege",
    description: "Rasen mähen, Heckenschnitt, Unkrautentfernung und regelmäßige Pflege Ihrer Grünflächen.",
  },
  {
    icon: TreeDeciduous,
    title: "Landschaftspflege",
    description: "Professionelle Betreuung von Grünanlagen, Parks und gewerblichen Außenflächen.",
  },
  {
    icon: Leaf,
    title: "Baum- & Strauchschnitt",
    description: "Fachgerechter Rückschnitt, Formschnitt und Pflege Ihrer Gehölze.",
  },
  {
    icon: Flower2,
    title: "Neuanlagen & Umgestaltungen",
    description: "Planung und Umsetzung Ihrer Traumgärten – von der Idee bis zur Fertigstellung.",
  },
  {
    icon: Shovel,
    title: "Pflaster- & Terrassenarbeiten",
    description: "Wege, Terrassen und Einfahrten – professionell verlegt und langlebig.",
  },
  {
    icon: Sun,
    title: "Saisonarbeiten",
    description: "Frühjahrsputz, Herbstlaub, Winterdienst – wir sind das ganze Jahr für Sie da.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="py-20 bg-section-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Was wir bieten
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der regelmäßigen Gartenpflege bis zur kompletten Neugestaltung – 
            wir bieten Ihnen alle Leistungen rund um Ihren Garten.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group card-hover bg-card border-0 shadow-soft overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative mt-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(0, 0%, 100%)"
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Services;
