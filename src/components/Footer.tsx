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
              <h4 className="font-bold text-foreground mb-2">1. Verantwortlicher</h4>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Kevin Mierlita<br />
                Pivin Garten- & Landschaftspflege<br />
                Antoniusweg 9<br />
                54576 Hillesheim<br /><br />
                Telefon: 016093768260<br />
                E-Mail: gartenpflege@pivin.de
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">2. Allgemeine Hinweise zur Datenverarbeitung</h4>
              <p>
                Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen.<br /><br />
                Personenbezogene Daten werden auf dieser Website ausschließlich im Rahmen der gesetzlichen 
                Bestimmungen der Datenschutz-Grundverordnung (DSGVO) verarbeitet.<br /><br />
                Diese Datenschutzerklärung informiert darüber, welche Daten erfasst werden und zu welchem Zweck dies geschieht.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">3. Hosting</h4>
              <p>
                Diese Website wird bei folgendem Anbieter gehostet:<br /><br />
                STRATO AG<br />
                Otto-Ostrowski-Straße 7<br />
                10249 Berlin<br />
                Deutschland<br /><br />
                Beim Besuch der Website erhebt STRATO automatisch Informationen in sogenannten Server-Logfiles. 
                Diese Daten können unter anderem umfassen:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="mt-2">
                Die Erhebung dieser Daten erfolgt zur Sicherstellung eines störungsfreien Betriebs der Website 
                sowie zur Verbesserung des Angebots.<br />
                Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">4. Kontaktformular</h4>
              <p>
                Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten gespeichert, um Ihre Anfrage zu bearbeiten 
                und für den Fall von Anschlussfragen.<br /><br />
                Folgende Daten können erhoben werden:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (falls angegeben)</li>
                <li>Nachrichtentext</li>
              </ul>
              <p className="mt-2">
                Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.<br /><br />
                Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).<br /><br />
                Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen 
                Aufbewahrungspflichten bestehen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">5. Cookies</h4>
              <p>Diese Website verwendet keine Cookies.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">6. Ihre Rechte</h4>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Löschung Ihrer Daten zu verlangen</li>
                <li>Einschränkung der Verarbeitung zu verlangen</li>
                <li>der Verarbeitung zu widersprechen</li>
                <li>Ihre Einwilligung jederzeit zu widerrufen</li>
              </ul>
              <p className="mt-2">
                Zudem haben Sie das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">7. SSL- bzw. TLS-Verschlüsselung</h4>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                eine SSL- bzw. TLS-Verschlüsselung.<br /><br />
                Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm">Stand: 01/2026</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
