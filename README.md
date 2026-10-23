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

## Verwendete Bibliotheken und Effekte

Leitidee: **Pixel für Pixel**. Webseiten bestehen aus Pixeln, darum bauen sich auch die Effekte aus kleinen Quadraten auf.

- **[GSAP](https://github.com/greensock/GSAP)** (ScrollTrigger, SplitText, ScrambleText):
  - Überschriften erscheinen Wort für Wort.
  - Inhalte blenden beim Scrollen ein.
  - Das Wort im Titel und die kleinen Titel «entschlüsseln» sich.
  - Projektbilder fahren wie ein Vorhang auf.
- **[Lenis](https://github.com/darkroomengineering/lenis)**: sanftes Scrollen. Die Scroll-Geschwindigkeit steuert auch das Pixel-Feld und die Skill-Linie.
- **[React Bits](https://github.com/DavidHDev/react-bits)**: Vorlage für die Effekte, mit GSAP ohne React nachgebaut:
  - *Curved Loop*: Skills auf einer geschwungenen Linie, mit der Maus ziehbar.
  - *Decrypted Text*: Text «entschlüsselt» sich.
  - *Pixel Transition*: Projektbilder und Seitenwechsel aus Pixel-Blöcken.
  - *Text Pressure*: Der Footer-Titel dehnt sich zur Maus hin.
  - *Magnet*: Buttons ziehen leicht zur Maus.

**Startseite:** Ein Pixel-Feld (Canvas) setzt sich zu einem Symbol zusammen, passend zum Wort im Titel: Schere → Coiffeursalons, Ball → Sportvereine, Tasche → Hofläden, Browserfenster → Selbstständige. Die Pixel weichen der Maus aus. Wörter und Symbole änderst du in `script.js` unter `CONFIG.pages.start.words`. Die Symbole selbst stehen in `PIXEL_ICONS`.

Wer in den Systemeinstellungen «Bewegung reduzieren» eingeschaltet hat (unter Windows: *Animationseffekte* aus), bekommt keine Animationen und kein Lenis. Dann steht ein ruhiges Pixel-Symbol da.

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
