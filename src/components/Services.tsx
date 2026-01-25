import {
  Scissors,
  TreeDeciduous,
  Leaf,
  Apple,
  Sprout,
  Leaf as LeafIcon,
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
    description: "Professionelle Betreuung von Grünanlagen und gewerblichen Außenflächen.",
  },
  {
    icon: Apple,
    title: "Obstbaumschnitt",
    description: "Fachgerechter Obstbaumschnitt für alle Baumarten und Altersstufen.",
  },
  {
    icon: Leaf,
    title: "Baum- & Strauchpflege",
    description: "Fachgerechter Rückschnitt, Formschnitt und Pflege Ihrer Gehölze.",
  },
  {
    icon: Sprout,
    title: "Neupflanzung",
    description: "Von zarten Gewächsen bis zu tragenden Bäumen.",
  },
  {
    icon: LeafIcon,
    title: "Laubarbeiten",
    description: "Gründliche Laubentfernung inkl. Entsorgung.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="relative pt-20 pb-32 bg-section-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Was ich biete
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Meine Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der regelmäßigen Gartenpflege über Neupflanzungen bis hin zu kleineren Gartenumgestaltungen.
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

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(0, 0%, 100%)"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Services;
