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
              <h4 className="font-bold text-foreground mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h4>
              <p>
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
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
                Pivin Garten- Landschaftspflege<br />
                Antoniusweg 9<br />
                54576 Hillesheim<br /><br />
                Telefon: 0160/93768260<br />
                E-Mail: gartenpflege@pivin.de
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">2. Allgemeine Hinweise zur Datenverarbeitung</h4>
              <p>
                Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen.<br /><br />
                Personenbezogene Daten werden auf dieser Website ausschließlich im Rahmen der gesetzlichen 
                Bestimmungen der Datenschutz-Grundverordnung (DSGVO) verarbeitet.<br /><br />
                Diese Datenschutzerklärung erläutert Art, Umfang und Zweck der Verarbeitung personenbezogener Daten.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">3. Domainregistrierung</h4>
              <p>
                Die Domain dieser Website ist registriert bei:<br /><br />
                STRATO AG<br />
                Otto-Ostrowski-Straße 7<br />
                10249 Berlin<br />
                Deutschland<br /><br />
                STRATO verarbeitet im Rahmen der Domainverwaltung technische Daten, insbesondere zur 
                Gewährleistung der Erreichbarkeit der Website.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">4. Hosting über GitHub Pages</h4>
              <p>
                Diese Website wird über den Dienst „GitHub Pages" bereitgestellt.<br /><br />
                Anbieter:<br />
                GitHub Inc.<br />
                88 Colin P. Kelly Jr. Street<br />
                San Francisco, CA 94107<br />
                USA<br /><br />
                Beim Aufruf der Website werden durch GitHub automatisch folgende Daten erhoben und in 
                sogenannten Server-Logfiles gespeichert:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>aufgerufene Seite</li>
                <li>Browsertyp und -version</li>
                <li>verwendetes Betriebssystem</li>
              </ul>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung und Sicherheit der Website.<br /><br />
                GitHub kann Daten in die USA übertragen. GitHub stützt sich dabei auf die Standardvertragsklauseln 
                der EU-Kommission gemäß Art. 46 DSGVO.<br /><br />
                Weitere Informationen zum Datenschutz bei GitHub finden Sie in der Datenschutzerklärung von GitHub.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">5. Kontaktformular</h4>
              <p>
                Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular 
                inklusive der angegebenen Kontaktdaten verarbeitet, um Ihre Anfrage zu bearbeiten.<br /><br />
                Erhobene Daten können sein:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Nachricht</li>
              </ul>
              <p className="mt-2">
                Die Daten werden nicht ohne Ihre Einwilligung weitergegeben.<br /><br />
                Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.<br /><br />
                Die Daten werden nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen 
                Aufbewahrungspflichten bestehen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">6. Cookies</h4>
              <p>Diese Website verwendet keine Cookies.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">7. Ihre Rechte</h4>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer personenbezogenen Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p className="mt-2">
                Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">8. SSL- bzw. TLS-Verschlüsselung</h4>
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.<br /><br />
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
