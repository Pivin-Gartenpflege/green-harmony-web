import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b418f39b-a24c-49e6-9fe9-8df6778620cb",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "Neue Anfrage von der Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Anfrage gesendet!",
          description: "Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Fehler",
          description: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="relative py-20 pb-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Jetzt unverbindlich anfragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder wünschen ein Angebot? 
            Kontaktieren Sie uns – wir beraten Sie gerne!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Schreiben Sie uns
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre@email.de"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefonnummer
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ihre Telefonnummer"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Anfrage senden
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                So erreichen Sie uns
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+4912345678900"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <p className="text-muted-foreground">+49 123 456 789 00</p>
                  </div>
                </a>

                <a
                  href="mailto:info@gruene-oase.de"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-Mail</p>
                    <p className="text-muted-foreground">info@gruene-oase.de</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Einsatzgebiet</p>
                    <p className="text-muted-foreground">
                      Musterstadt und Umgebung<br />
                      (ca. 30 km Radius)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-heading font-bold text-foreground mb-3">
                Kostenlose Erstberatung
              </h4>
              <p className="text-muted-foreground">
                Wir kommen gerne zu Ihnen für eine unverbindliche Beratung vor Ort. 
                Rufen Sie uns an oder schreiben Sie uns – wir melden uns zeitnah!
              </p>
            </div>
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
            fill="hsl(90, 40%, 25%)"
            d="M0,80L80,74.7C160,69,320,59,480,53.3C640,48,800,48,960,58.7C1120,69,1280,91,1360,101.3L1440,112L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
