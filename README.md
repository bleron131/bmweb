# bmweb – Webseite von Bleron Mustafa

Persönliche Webseite mit mehreren Unterseiten, Konfigurator, Warenkorb und Anfrageformular.
Reines HTML, CSS und JavaScript – kein Framework, kein Build-Tool.

## Dateien

| Datei / Ordner | Inhalt |
| --- | --- |
| `index.html` … `datenschutz.html` | Eine HTML-Datei pro Seite |
| `style.css` | Gemeinsames Design (hell/dunkel, Handy bis PC) |
| `script.js` | **Oben die Konfig-Liste** (Texte, Preise, Projekte, Fragen, Kontakt), darunter die Logik |
| `assets/` | Favicon und Projektbilder (Platzhalter) |
| `vendor/` | GSAP 3.15 (mit ScrollTrigger und SplitText) und Lenis 1.3.27, lokal abgelegt |

## Verwendete Bibliotheken

- **[GSAP](https://github.com/greensock/GSAP)**: Animationen. Überschriften erscheinen Wort für Wort (SplitText), Inhalte blenden beim Scrollen ein (ScrollTrigger), die 3D-Szene schwebt.
- **[Lenis](https://github.com/darkroomengineering/lenis)**: sanftes Scrollen, mit ScrollTrigger verbunden, so wie es im Lenis-README beschrieben ist.
- **[React Bits](https://github.com/DavidHDev/react-bits)**: Ideen für die Effekte (Split Text, Scroll Reveal, Scroll Velocity für das Laufband, Magnet für die Buttons). React Bits ist für React gebaut. Darum sind die Effekte hier mit GSAP in normalem JavaScript nachgebaut.

Wer in den Systemeinstellungen «Bewegung reduzieren» eingeschaltet hat, bekommt keine Animationen und kein Lenis.

## Lokal öffnen

Doppelklick auf `index.html` funktioniert. Der Warenkorb wird dann aber je nach Browser nicht zwischen den Seiten gespeichert. Besser ist ein kleiner lokaler Server:

- **VS Code:** Erweiterung «Live Server» installieren, Rechtsklick auf `index.html` und dann «Open with Live Server».
- **oder im Terminal** im Projektordner: `python3 -m http.server 8000` und danach http://localhost:8000 im Browser öffnen.

## Formspree einrichten

1. Auf https://formspree.io ein Konto erstellen und ein neues Formular anlegen.
2. Du bekommst eine ID, zum Beispiel `xyzabcd` (aus `https://formspree.io/f/xyzabcd`).
3. In `script.js` ganz oben ersetzt du in `formspree: { id: 'FORMSPREE_ID' }` den Text `FORMSPREE_ID` durch deine ID.

Solange dort `FORMSPREE_ID` steht, läuft der **Demo-Modus**: Die Formulare funktionieren, es wird aber nichts verschickt. Die Danke-Meldung zeigt einen Hinweis dazu.

## Online stellen

**GitHub Pages**
1. Alle Dateien ins Repository hochladen (pushen).
2. Auf GitHub: *Settings → Pages → Branch: `main`, Ordner `/ (root)` → Save*.
3. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/bmweb/` erreichbar.

**Netlify**
1. Auf https://app.netlify.com «Add new site → Import an existing project» wählen und das GitHub-Repository verbinden. Build-Befehl leer lassen, Publish-Ordner `/`.
2. Oder einfacher: den ganzen Projektordner per Drag & Drop auf https://app.netlify.com/drop ziehen.

## Vor dem Livegang ersetzen

Alles in `[eckigen Klammern]` erscheint auf der Seite markiert und muss ersetzt werden:

- E-Mail und Instagram (`CONFIG.contact`)
- Wohnort, Werdegang und Lehrbetrieb (`CONFIG.pages.about`)
- Adresse, Hosting-Anbieter und Datum in Impressum und Datenschutz (`CONFIG.legal`)
- Die drei Platzhalter-Projekte (`CONFIG.projects`, Bilder in `assets/projekte/`)
