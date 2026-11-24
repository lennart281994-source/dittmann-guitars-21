import { useEffect, useState } from "react";
import { OPEN_LEGAL_EVENT } from "@/lib/consent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImpressumContent } from "@/components/ImpressumContent";

type DialogKey = "impressum" | "datenschutz" | null;

export const LegalDialogs = () => {
  const [open, setOpen] = useState<DialogKey>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setOpen((e as CustomEvent<DialogKey>).detail);
    window.addEventListener(OPEN_LEGAL_EVENT, onOpen);
    const h = window.location.hash.slice(1);
    if (h === "datenschutz" || h === "impressum") setOpen(h);
    return () => window.removeEventListener(OPEN_LEGAL_EVENT, onOpen);
  }, []);

  return (
    <>
      <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <button
          type="button"
          onClick={() => setOpen("impressum")}
          className="hover:text-foreground transition-soft"
        >
          Impressum
        </button>
        <button
          type="button"
          onClick={() => setOpen("datenschutz")}
          className="hover:text-foreground transition-soft"
        >
          Datenschutz
        </button>
      </div>

      <Dialog open={open === "impressum"} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Impressum</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] pr-4">
            <ImpressumContent />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={open === "datenschutz"} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Datenschutzerklärung</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] pr-4">
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <section>
                <h3 className="font-display text-base text-foreground mb-2">1. Datenschutz auf einen Blick</h3>
                <h4 className="font-medium text-foreground mt-3">Allgemeine Hinweise</h4>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

                <h4 className="font-medium text-foreground mt-3">Datenerfassung auf dieser Website</h4>
                <p className="font-medium text-foreground/80">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>

                <p className="font-medium text-foreground/80 mt-3">Wie erfassen wir Ihre Daten?</p>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                <p className="font-medium text-foreground/80 mt-3">Wofür nutzen wir Ihre Daten?</p>
                <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>

                <p className="font-medium text-foreground/80 mt-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

                <h4 className="font-medium text-foreground mt-3">Analyse-Tools und Tools von Drittanbietern</h4>
                <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
                <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
              </section>

              <section>
                <h3 className="font-display text-base text-foreground mb-2">2. Hosting</h3>
                <p>Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (ein Unternehmen der Microsoft Corporation).</p>
                <p>Beim Aufruf der Website verarbeitet GitHub technisch notwendige Zugriffsdaten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, die aufgerufene Seite sowie Browser- und Systeminformationen. Nach Angaben von GitHub werden diese Daten u. a. zur Sicherheit und zum Schutz des Dienstes protokolliert. Auf Art und Dauer dieser Speicherung haben wir keinen Einfluss.</p>
                <p>Eine Übermittlung in die USA ist möglich. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement.</p>
                <p>Die Schriftarten dieser Website werden direkt von unserem Hosting ausgeliefert; es besteht dafür keine Verbindung zu Google oder anderen Schriftanbietern.</p>
              </section>

              <section>
                <h3 className="font-display text-base text-foreground mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <h4 className="font-medium text-foreground mt-3">Datenschutz</h4>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

                <h4 className="font-medium text-foreground mt-3">Hinweis zur verantwortlichen Stelle</h4>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p>Michael-Lennart Dittmann<br />Am Mühlenberg 1<br />19294 Malliß</p>
                <p>Telefon: +49 1784159440<br />E-Mail: mail@michaeldittmann.com</p>
                <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

                <h4 className="font-medium text-foreground mt-3">Speicherdauer</h4>
                <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>

                <h4 className="font-medium text-foreground mt-3">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
                <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>

                <h4 className="font-medium text-foreground mt-3">Empfänger von personenbezogenen Daten</h4>
                <p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>

                <h4 className="font-medium text-foreground mt-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

                <h4 className="font-medium text-foreground mt-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
                <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>

                <h4 className="font-medium text-foreground mt-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

                <h4 className="font-medium text-foreground mt-3">Recht auf Datenübertragbarkeit</h4>
                <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

                <h4 className="font-medium text-foreground mt-3">Auskunft, Berichtigung und Löschung</h4>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>

                <h4 className="font-medium text-foreground mt-3">Recht auf Einschränkung der Verarbeitung</h4>
                <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>
                <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>

                <h4 className="font-medium text-foreground mt-3">SSL- bzw. TLS-Verschlüsselung</h4>
                <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>

                <h4 className="font-medium text-foreground mt-3">Widerspruch gegen Werbe-E-Mails</h4>
                <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
              </section>

              <section>
                <h3 className="font-display text-base text-foreground mb-2">4. Datenerfassung auf dieser Website</h3>
                <h4 className="font-medium text-foreground mt-3">Cookies und Speicherung im Browser</h4>
                <p>Diese Website selbst setzt keine Cookies. Im lokalen Speicher Ihres Browsers wird lediglich Ihre Entscheidung zu Google Analytics gespeichert, damit wir Sie nicht bei jedem Besuch erneut fragen (§ 25 Abs. 2 Nr. 2 TDDDG). Cookies können durch die unten beschriebenen Dienste gesetzt werden – Google Analytics nur nach Ihrer Einwilligung.</p>
                <h4 className="font-medium text-foreground mt-3">Anfrage per E-Mail oder Telefon (Zoho Mail)</h4>
                <p>Wenn Sie uns per E-Mail (z. B. an mail@michaeldittmann.com oder atelierkonzerte@michaeldittmann.com) oder telefonisch kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse, Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, im Übrigen unser berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).</p>
                <p>Für unsere E-Mail-Kommunikation nutzen wir Zoho Mail. Anbieter für Kunden in der EU ist nach unserer Kenntnis die Zoho Corporation B.V., Beneluxlaan 4B, 3527 HT Utrecht, Niederlande. E-Mails werden auf den Servern von Zoho gespeichert. Ein Zugriff durch Unternehmen der Zoho-Gruppe außerhalb der EU (z. B. für Support) kann nicht ausgeschlossen werden. Weitere Informationen: https://www.zoho.com/privacy.html.</p>
                <p>Ihre Anfragen speichern wir, bis der Zweck entfällt (z. B. nach abgeschlossener Bearbeitung), sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
                <h4 className="font-medium text-foreground mt-3">Google Analytics (nur mit Einwilligung)</h4>
                <p>Mit Ihrer Einwilligung nutzen wir Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dabei werden Cookies gesetzt und Informationen über Ihre Nutzung (z. B. aufgerufene Seiten, Verweildauer, Gerät, Browser, ungefährer Standort) an Google übertragen und ausgewertet. IP-Adressen werden von Google Analytics 4 nach Angaben von Google nicht gespeichert. Eine Übermittlung in die USA ist möglich.</p>
                <p>Google Analytics wird erst geladen, nachdem Sie im Hinweisfenster „Zustimmen“ gewählt haben. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ im Seitenfuß widerrufen. Weitere Informationen: https://policies.google.com/privacy.</p>
              </section>

              <section>
                <h3 className="font-display text-base text-foreground mb-2">5. Atelierkonzerte</h3>
                <h4 className="font-medium text-foreground mt-3">Platzreservierung über pretix</h4>
                <p>Für die kostenlose Reservierung von Konzertplätzen und die Warteliste nutzen wir das Ticketsystem pretix der rami.io GmbH, Berliner Freiheit 2, 10785 Berlin. Das Reservierungsformular ist auf der Seite „Atelierkonzerte“ eingebunden und wird beim Aufruf dieser Seite von den Servern von pretix geladen; dabei wird Ihre IP-Adresse an pretix übermittelt.</p>
                <p>Bei einer Reservierung verarbeiten wir die von Ihnen eingegebenen Daten (insbesondere Name, E-Mail-Adresse, Anzahl der Plätze) sowie den Zeitpunkt der Reservierung, um Ihren Platz zu verwalten, die Gästeliste zu führen, Sie über das Konzert bzw. Änderungen zu informieren und bei Freiwerden eines Platzes über die Warteliste zu benachrichtigen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung der von Ihnen gewünschten Reservierung).</p>
                <p>Nach der Dokumentation von pretix setzt das Widget beim bloßen Anzeigen keine Cookies; sobald Sie den Reservierungsvorgang starten, werden technisch notwendige Sitzungs-Cookies gesetzt, ohne die eine Reservierung nicht möglich ist (§ 25 Abs. 2 Nr. 2 TDDDG).</p>
                <p>pretix verarbeitet die Daten in unserem Auftrag. Reservierungsdaten löschen wir, sobald sie für die Durchführung des Konzerts nicht mehr benötigt werden, spätestens nach Ablauf gesetzlicher Aufbewahrungspflichten, soweit solche bestehen. Weitere Informationen: https://pretix.eu/about/de/privacy.</p>
                <h4 className="font-medium text-foreground mt-3">Newsletter über Brevo</h4>
                <p>Sie können sich freiwillig und unabhängig von einer Reservierung für unseren Newsletter „Atelierkonzerte – Konzertankündigungen“ anmelden. Dafür ist nur Ihre E-Mail-Adresse erforderlich. Für den Versand nutzen wir Brevo (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin).</p>
                <p>Die Anmeldung erfolgt im Double-Opt-in-Verfahren: Nach der Eintragung erhalten Sie eine E-Mail, in der Sie die Anmeldung bestätigen. Zum Nachweis Ihrer Einwilligung speichern wir Zeitpunkt der Anmeldung und Bestätigung sowie die dabei verwendete IP-Adresse. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können sie jederzeit über den Abmeldelink in jeder E-Mail oder per Nachricht an uns widerrufen.</p>
                <p>Brevo kann auswerten, ob ein Newsletter geöffnet und welche Links angeklickt wurden. Nach Ihrer Abmeldung wird Ihre E-Mail-Adresse aus dem Verteiler gelöscht; zum Nachweis einer früheren Einwilligung kann sie bis zu drei Jahre in einer Sperrliste gespeichert werden (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: https://www.brevo.com/de/legal/privacypolicy/.</p>
                <p>Das Anmeldeformular wird erst geladen, wenn Sie auf „Anmeldeformular laden“ klicken. Erst dann werden Inhalte von Brevo geladen und Ihre IP-Adresse an Brevo übermittelt.</p>
                <h4 className="font-medium text-foreground mt-3">Google reCAPTCHA im Anmeldeformular</h4>
                <p>Das Anmeldeformular von Brevo enthält zum Schutz vor Spam Google reCAPTCHA (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). reCAPTCHA prüft anhand verschiedener Merkmale (z. B. IP-Adresse, Verweildauer, Mausbewegungen, Browserinformationen), ob die Eingabe von einem Menschen stammt, und kann dazu Informationen in Ihrem Browser speichern oder auslesen. Eine Übermittlung in die USA ist möglich.</p>
                <p>reCAPTCHA wird erst geladen, nachdem Sie das Anmeldeformular durch Klick bewusst geladen haben. Rechtsgrundlage ist Ihre Einwilligung durch diesen Klick (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG); unabhängig davon besteht unser berechtigtes Interesse am Schutz vor missbräuchlichen Anmeldungen (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: https://policies.google.com/privacy.</p>
                <h4 className="font-medium text-foreground mt-3">Bild- und Tonaufnahmen bei den Konzerten</h4>
                <p>Die Atelierkonzerte werden gefilmt und können live auf YouTube übertragen sowie später veröffentlicht werden. Dabei können auch Gäste im Bild zu sehen sein.</p>
              </section>

              <section>
                <h3 className="font-display text-base text-foreground mb-2">6. Videos und Links zu sozialen Netzwerken</h3>
                <h4 className="font-medium text-foreground mt-3">YouTube-Videos (erst nach Klick)</h4>
                <p>Auf einigen Seiten binden wir Videos von YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) im erweiterten Datenschutzmodus (youtube-nocookie.com) ein. Das Video wird erst geladen, wenn Sie auf „Video laden“ klicken. Erst dann wird eine Verbindung zu YouTube hergestellt; dabei werden u. a. Ihre IP-Adresse und die besuchte Seite übertragen, und YouTube kann Informationen in Ihrem Browser speichern. Eine Übermittlung in die USA ist möglich.</p>
                <p>Rechtsgrundlage ist Ihre Einwilligung durch den Klick (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Weitere Informationen: https://policies.google.com/privacy.</p>
                <h4 className="font-medium text-foreground mt-3">Links zu YouTube und Instagram</h4>
                <p>Unseren YouTube-Livestream und unseren Instagram-Kanal (Meta Platforms Ireland Limited) verlinken wir lediglich. Es werden keine Inhalte dieser Dienste beim Aufruf unserer Seiten geladen. Erst wenn Sie einen Link anklicken, gelangen Sie auf die Seite des jeweiligen Anbieters; dort gelten dessen Datenschutzbestimmungen.</p>
              </section>

              <p className="pt-4 text-xs">Stand: November 2026. Teile der allgemeinen Hinweise basieren auf einer Vorlage von https://www.e-recht24.de.</p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};
