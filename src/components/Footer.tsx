import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import pivinLogo from "@/assets/pivin-logo.png";

type ModalType = "impressum" | "datenschutz" | null;

const Footer = () => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={pivinLogo} 
                alt="Pivin Garten-Landschaftspflege" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Garten- und Landschaftspflege 
              in der Region. Grün gedacht, sauber gemacht!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <a href="#leistungen" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Über mich
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setOpenModal("impressum")}
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("datenschutz")}
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Datenschutzerklärung
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Pivin Garten-Landschaftspflege. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>

      {/* Impressum Modal */}
      <Dialog open={openModal === "impressum"} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Impressum</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="font-bold text-foreground mb-2">Angaben gemäß § 5 TMG</h4>
              <p>
                Pivin Garten-Landschaftspflege<br />
                Kevin Mierlita<br />
                Antoniusweg 9<br />
                54576 Hillesheim
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Kontakt</h4>
              <p>
                Telefon: 0160/93768260<br />
                E-Mail: gartenpflege@pivin.de
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Umsatzsteuer</h4>
              <p>
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
              <p>
                Kevin Mierlita<br />
                Antoniusweg 9<br />
                54576 Hillesheim
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Streitschlichtung</h4>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                https://ec.europa.eu/consumers/odr/. Ich bin nicht bereit oder verpflichtet, an 
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Datenschutz Modal */}
      <Dialog open={openModal === "datenschutz"} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Datenschutzerklärung</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="font-bold text-foreground mb-2">1. Datenschutz auf einen Blick</h4>
              <p>
                <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick 
                darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">2. Datenerfassung auf dieser Website</h4>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum entnehmen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">3. Kontaktformular</h4>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">4. Ihre Rechte</h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">5. Kontakt</h4>
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten 
                wenden Sie sich bitte an: info@pivin.de
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
