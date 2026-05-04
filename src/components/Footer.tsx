import { useEffect, useState } from "react";
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
                Pivin Garten- und Landschaftspflege<br />
                Antoniusweg 9<br />
                54576 Hillesheim<br /><br />
                Telefon: 0160 93768260<br />
                E-Mail: gartenpflege@pivin.de
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">2. Allgemeine Hinweise zur Datenverarbeitung</h4>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist mir ein wichtiges Anliegen. Ihre Daten werden 
                im Rahmen der gesetzlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), 
                verarbeitet.<br /><br />
                Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung 
                personenbezogener Daten auf dieser Website.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">3. Hosting und Content Delivery (GitHub Pages)</h4>
              <p>
                Diese Website wird über „GitHub Pages" bereitgestellt, einen Dienst der GitHub Inc., 
                88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.<br /><br />
                Beim Aufruf der Website werden durch GitHub automatisch Informationen erfasst und in 
                sogenannten Server-Logfiles gespeichert. Dies sind insbesondere:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>aufgerufene Seite</li>
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
              </ul>
              <p className="mt-2">
                Die Verarbeitung erfolgt zur Sicherstellung eines störungsfreien Betriebs der Website sowie 
                zur Gewährleistung der Systemsicherheit.<br /><br />
                <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO 
                (berechtigtes Interesse an stabiler und sicherer Bereitstellung der Website)<br /><br />
                GitHub kann personenbezogene Daten in die USA übertragen. Für diese Datenübermittlung werden 
                sogenannte Standardvertragsklauseln der EU-Kommission verwendet.<br /><br />
                <strong className="text-foreground">Hinweis:</strong> Es besteht das Risiko, dass US-Behörden 
                auf personenbezogene Daten zugreifen können, ohne dass Ihnen hiergegen wirksame Rechtsbehelfe 
                zur Verfügung stehen.<br /><br />
                Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub.<br /><br />
                Mit GitHub wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">4. Domainregistrierung und Hosting (STRATO)</h4>
              <p>
                Die Domain wird über den Anbieter STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, verwaltet.<br /><br />
                STRATO verarbeitet technische Daten, die zur Bereitstellung und Aufrechterhaltung der 
                Domainfunktion erforderlich sind.<br /><br />
                <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO<br /><br />
                Mit STRATO wurde ein Vertrag zur Auftragsverarbeitung geschlossen.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">5. Kontaktformular</h4>
              <p>
                Wenn Sie mir über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Formular zur Bearbeitung Ihrer Anfrage verarbeitet.<br /><br />
                <strong className="text-foreground">Verarbeitete Daten:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name (Pflichtfeld)</li>
                <li>E-Mail-Adresse (Pflichtfeld)</li>
                <li>Telefonnummer (optional)</li>
                <li>Nachricht</li>
              </ul>
              <p className="mt-2">
                <strong className="text-foreground">Zweck der Verarbeitung:</strong> Bearbeitung Ihrer Anfrage 
                und Kontaktaufnahme<br /><br />
                <strong className="text-foreground">Rechtsgrundlage:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation)</li>
              </ul>
              <p className="mt-2">
                Die Angabe Ihrer Daten ist erforderlich, um Ihre Anfrage bearbeiten zu können. Ohne diese 
                Angaben kann keine Bearbeitung erfolgen.<br /><br />
                <strong className="text-foreground">Speicherdauer:</strong><br />
                Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde, spätestens 
                jedoch nach 6 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.<br /><br />
                Eine Weitergabe der Daten erfolgt nicht ohne Ihre Einwilligung.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">6. Cookies</h4>
              <p>Diese Website verwendet keine Cookies.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">7. SSL- bzw. TLS-Verschlüsselung</h4>
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. 
                Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">8. Ihre Rechte</h4>
              <p>Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht verstößt, 
                haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.<br /><br />
                <strong className="text-foreground">Zuständige Aufsichtsbehörde:</strong><br /><br />
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br />
                Hintere Bleiche 34<br />
                55116 Mainz
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">9. Keine automatisierte Entscheidungsfindung</h4>
              <p>
                Eine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Art. 22 DSGVO 
                findet nicht statt.
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
