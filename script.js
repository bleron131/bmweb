/* =========================================================
   KONFIGURATION
   Hier änderst du Texte, Preise, Projekte, Fragen und Kontakt.
   Text in [eckigen Klammern] wird auf der Seite als Platzhalter
   markiert – ersetze ihn durch deine echten Angaben.
   ========================================================= */
const CONFIG = {
  site: {
    name: 'Bleron Mustafa',
    tagline: 'Webseiten für kleine Firmen, Vereine und Selbstständige',
    year: new Date().getFullYear(),
  },

  contact: {
    email: 'hallo@example.ch',                      // deine E-Mail-Adresse
    instagram: '@dein.instagram',                    // dein Instagram-Name
    instagramUrl: 'https://www.instagram.com/',      // Link zu deinem Profil
    responseTime: 'innert 48 Stunden',
  },

  // Formspree: Ersetze FORMSPREE_ID durch deine ID (z. B. "xyzabcd").
  // Solange hier FORMSPREE_ID steht, läuft der Demo-Modus.
  formspree: {
    id: 'FORMSPREE_ID',
  },

  nav: [
    { label: 'Start', href: 'index.html', page: 'start' },
    { label: 'Über mich', href: 'ueber-mich.html', page: 'ueber-mich' },
    { label: 'Projekte', href: 'projekte.html', page: 'projekte' },
    { label: 'Angebot & Preise', href: 'angebot.html', page: 'angebot' },
    { label: 'Kontakt', href: 'kontakt.html', page: 'kontakt' },
  ],

  legalNav: [
    { label: 'Impressum', href: 'impressum.html', page: 'impressum' },
    { label: 'Datenschutz', href: 'datenschutz.html', page: 'datenschutz' },
  ],

  // Preise in CHF: coded = von Hand programmiert, cms = WordPress / Wix
  pricing: {
    modes: {
      coded: {
        label: 'Coded',
        desc: 'Von Hand programmiert. Schlank, schnell und günstiger.',
      },
      cms: {
        label: 'WordPress / Wix',
        desc: 'Etwas teurer. Dafür kannst du Texte und Bilder selbst ändern.',
      },
    },
    base: {
      id: 'base',
      label: 'Einfache Seite (One-Pager)',
      desc: 'Eine Seite mit allem Wichtigen: wer du bist, was du anbietest, wie man dich erreicht.',
      price: { coded: 390, cms: 590 },
    },
    extras: [
      { id: 'pages', label: 'Weitere Seite', desc: 'Zum Beispiel «Über uns», «Angebot» oder «Galerie».', price: { coded: 90, cms: 120 }, quantity: true, max: 10 },
      { id: 'contact', label: 'Kontaktformular', desc: 'Anfragen kommen direkt in dein Postfach.', price: { coded: 80, cms: 100 } },
      { id: 'blog', label: 'Blog', desc: 'Für News, Berichte oder Beiträge.', price: { coded: 190, cms: 240 } },
      { id: 'shop', label: 'Shop', desc: 'Produkte zeigen und online verkaufen.', price: { coded: 490, cms: 690 } },
      { id: 'language', label: 'Zweite Sprache', desc: 'Die ganze Seite zusätzlich in einer zweiten Sprache. Die Übersetzung lieferst du.', price: { coded: 150, cms: 190 } },
      { id: 'seo', label: 'SEO-Grundpaket', desc: 'Titel, Beschreibungen und Grundeinstellungen, damit Google deine Seite richtig lesen kann.', price: { coded: 120, cms: 150 } },
      { id: 'logo', label: 'Logo-Design', desc: 'Ein einfaches Logo, das auf der Seite und im Druck funktioniert.', price: { coded: 150, cms: 150 } },
    ],
    note: 'Alle Preise sind Richtpreise («ab»). Den genauen Preis besprechen wir, bevor du etwas bezahlst.',
  },

  // Beispiel-Preisblatt auf der Startseite (wird mit den echten Preisen gerechnet)
  examplePackage: {
    mode: 'coded',
    extras: { pages: 2, contact: 1, seo: 1 },
    text: 'Ein Beispiel: One-Pager mit zwei weiteren Seiten, Kontaktformular und SEO-Grundpaket, von Hand programmiert. So sieht das Preisblatt im Konfigurator aus.',
  },

  services: [
    {
      icon: 'code',
      title: 'Handgemachte Webseite',
      text: 'Ich programmiere deine Seite selbst, mit HTML, CSS und JavaScript. Kein Baukasten, nichts Überflüssiges.',
      points: ['Funktioniert auf Handy, Tablet und PC', 'Lädt schnell', 'Günstigste Variante'],
      priceFrom: () => CONFIG.pricing.base.price.coded,
    },
    {
      icon: 'cms',
      title: 'WordPress / Wix',
      text: 'Deine Seite auf einem System, das du selbst bedienen kannst. Ich richte alles ein und zeige dir, wie es geht.',
      points: ['Texte und Bilder selbst ändern', 'Einführung inklusive', 'Gut für Blog und Shop'],
      priceFrom: () => CONFIG.pricing.base.price.cms,
    },
    {
      icon: 'design',
      title: 'Gestaltung & Medien',
      text: 'Logo, Flyer, Grafiken für Social Media oder ein kurzes Video. Passend zu deiner Webseite oder einzeln.',
      points: ['Logo-Design', 'Print und Social Media', 'Kurze Videos'],
      priceFrom: () => CONFIG.pricing.extras.find((e) => e.id === 'logo').price.coded,
    },
  ],

  // Projekte – ersetze die Platzhalter durch echte Referenzen.
  // url leer lassen ('') wenn es noch keinen Link gibt.
  projectCategories: ['One-Pager', 'Webseite', 'Shop'],
  projects: [
    {
      title: '[Platzhalter] Coiffeursalon',
      category: 'One-Pager',
      year: 2026,
      text: 'Beispielprojekt. Hier kommt später eine echte Referenz hin, zum Beispiel eine Seite mit Öffnungszeiten, Preisen und Kontakt.',
      services: ['Coded', 'Kontaktformular', 'SEO-Grundpaket'],
      image: 'assets/projekte/projekt-1.svg',
      alt: 'Platzhalter-Bild: Skizze einer einfachen Webseite in einem Browserfenster',
      url: '',
    },
    {
      title: '[Platzhalter] Sportverein',
      category: 'Webseite',
      year: 2026,
      text: 'Beispielprojekt. Platz für eine Vereinsseite mit mehreren Unterseiten, Terminen und News.',
      services: ['WordPress', 'Weitere Seiten', 'Blog'],
      image: 'assets/projekte/projekt-2.svg',
      alt: 'Platzhalter-Bild: Skizze einer Webseite mit mehreren Bereichen',
      url: '',
    },
    {
      title: '[Platzhalter] Hofladen',
      category: 'Shop',
      year: 2026,
      text: 'Beispielprojekt. Platz für einen kleinen Shop mit Produkten, Warenkorb und Logo.',
      services: ['Wix', 'Shop', 'Logo-Design'],
      image: 'assets/projekte/projekt-3.svg',
      alt: 'Platzhalter-Bild: Skizze eines kleinen Online-Shops mit Produktkacheln',
      url: '',
    },
  ],

  skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Wix', 'Illustrator', 'InDesign', 'After Effects', 'CapCut', 'Responsive Design', 'SEO-Grundlagen'],

  faq: [
    { q: 'Muss ich bei der Bestellung schon bezahlen?', a: 'Nein. Die Bestellung ist eine unverbindliche Anfrage. Ich melde mich innert 48 Stunden, wir besprechen alles, und erst wenn wir uns einig sind, bekommst du eine Rechnung.' },
    { q: 'Warum steht bei allen Preisen «ab»?', a: 'Jede Seite ist etwas anders. Die Preise zeigen dir, womit du ungefähr rechnen kannst. Den genauen Preis bekommst du von mir, bevor wir starten.' },
    { q: 'Coded oder WordPress / Wix – was passt zu mir?', a: 'Coded ist günstiger und schlank, Änderungen mache dann aber ich für dich. Mit WordPress oder Wix kannst du Texte und Bilder selbst anpassen. Wenn du unsicher bist, frag mich einfach.' },
    { q: 'Sind Domain und Hosting im Preis drin?', a: 'Nein. Domain und Hosting zahlst du direkt beim Anbieter. Ich helfe dir bei der Auswahl und richte alles ein.' },
    { q: 'Wie lange dauert es?', a: 'Das hängt vom Umfang ab. Nach dem ersten Gespräch bekommst du einen Zeitplan. Weil ich in der Lehre bin, arbeite ich vor allem abends und am Wochenende.' },
    { q: 'Was brauche ich von dir?', a: 'Am besten Texte, Fotos und dein Logo, falls du eines hast. Wenn etwas fehlt, schauen wir gemeinsam, was es braucht.' },
    { q: 'Kann ich später etwas ändern lassen?', a: 'Ja. Bei WordPress oder Wix kannst du vieles selbst machen. Bei einer gecodeten Seite übernehme ich das. Was es kostet, sage ich dir vorher.' },
  ],

  // Texte der einzelnen Seiten
  pages: {
    start: {
      eyebrow: 'Bleron Mustafa · Webseiten aus der Schweiz',
      // Titel: «Webseiten für» + ein Wort, das regelmässig wechselt
      titleStart: 'Webseiten für',
      words: ['Coiffeursalons.', 'Sportvereine.', 'Hofläden.', 'Selbstständige.'],
      titleStatic: 'Webseiten für kleine Firmen, Vereine und Selbstständige.', // für Screenreader und ohne Animation
      lead: 'Ich baue Webseiten für kleine Firmen, Vereine und Selbstständige – von Hand programmiert oder mit WordPress und Wix.',
      ctaPrimary: 'Seite zusammenstellen',
      ctaSecondary: 'Meine Projekte',
      hints: [
        { icon: 'clock', text: 'Antwort innert 48 Stunden' },
        { icon: 'tag', text: 'Transparente Richtpreise' },
        { icon: 'hand', text: 'Zahlung erst nach Absprache' },
      ],
      servicesTitle: 'Was ich mache',
      servicesText: 'Drei Bereiche. Alles andere besprechen wir einfach.',
      projectsTitle: 'Projekte',
      projectsText: 'Eine Auswahl meiner Arbeiten.',
      projectsLink: 'Alle Projekte',
      previewTitle: 'So rechnest du deinen Preis aus',
      previewLink: 'Selbst zusammenstellen',
      trustTitle: 'Darauf kannst du dich verlassen',
      trust: [
        { title: 'Schnelle Antwort', text: 'Du hörst innert 48 Stunden von mir.' },
        { title: 'Klare Preise', text: 'Du kennst den Preis, bevor ich anfange.' },
        { title: 'Zahlung nach Absprache', text: 'Online bezahlst du nichts. Wir besprechen zuerst alles.' },
        { title: 'Ehrliche Einschätzung', text: 'Wenn etwas nicht zu mir passt, sage ich dir das.' },
      ],
      note: 'Ich bin im ersten Lehrjahr als Mediamatiker. Webseiten baue ich neben der Lehre und nehme nur so viele Projekte an, wie ich sauber umsetzen kann.',
      noteSignature: 'Bleron',
    },

    about: {
      eyebrow: 'Über mich',
      title: 'Hoi, ich bin Bleron.',
      text: [
        'Ich mache die Lehre als Mediamatiker EFZ und bin im ersten Lehrjahr. Neben der Lehre baue ich Webseiten für kleine Firmen, Vereine und Selbstständige.',
        'Mir ist wichtig, dass eine Seite schnell lädt, auf dem Handy funktioniert und man sofort versteht, worum es geht. Ich programmiere gerne selbst, arbeite aber auch mit WordPress und Wix, wenn du deine Inhalte selbst pflegen willst.',
        'In der Ausbildung lerne ich neben dem Web auch Gestaltung und Video. Darum kann ich dir auch bei Logo, Flyer oder einem kurzen Clip helfen.',
      ],
      factsTitle: 'Steckbrief',
      facts: [
        { label: 'Ausbildung', value: 'Mediamatiker EFZ' },
        { label: 'Lehrjahr', value: '1. Lehrjahr' },
        { label: 'Wohnort', value: '[Ort], Schweiz' },
        { label: 'Sprache', value: 'Deutsch' },
        { label: 'Antwortzeit', value: 'innert 48 Stunden' },
      ],
      toolsTitle: 'Werkzeuge',
      tools: [
        { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'Visual Studio Code'] },
        { group: 'Gestaltung', items: ['Illustrator', 'InDesign'] },
        { group: 'Video', items: ['After Effects', 'CapCut'] },
      ],
      pathTitle: 'Werdegang',
      path: [
        { when: 'Seit [Monat] 2026', title: 'Lehre als Mediamatiker EFZ', text: '1. Lehrjahr bei [Lehrbetrieb].' },
        { when: 'Nebenbei', title: 'Erste Webseiten', text: 'Eigene Projekte und erste Seiten für Bekannte und kleine Betriebe.' },
        { when: '[Jahr]', title: '[Schule / Abschluss]', text: '[Kurze Beschreibung]' },
      ],
    },

    projects: {
      eyebrow: 'Projekte',
      title: 'Was ich bisher gebaut habe.',
      lead: 'Die Projekte hier sind noch Platzhalter. Sobald meine ersten Referenzen online sind, findest du sie an dieser Stelle.',
      filterLabel: 'Nach Kategorie filtern',
      all: 'Alle',
    },

    offer: {
      eyebrow: 'Angebot & Preise',
      title: 'Stell deine Seite zusammen.',
      lead: 'Wähl aus, was du brauchst. Der Preis rechnet sich sofort aus. Am Schluss legst du das Paket in den Warenkorb und schickst mir eine unverbindliche Anfrage.',
      modeLegend: 'Umsetzung',
      modeHint: 'Wie soll deine Seite gebaut werden?',
      baseLegend: 'Basis',
      extrasLegend: 'Extras',
      extrasHint: 'Alles freiwillig. Du kannst später noch etwas ändern.',
      addButton: 'In den Warenkorb',
      updateButton: 'Paket aktualisieren',
      faqTitle: 'Häufige Fragen',
    },

    order: {
      eyebrow: 'Bestellung',
      title: 'Deine Anfrage.',
      lead: 'Schick mir deine Auswahl. Das ist unverbindlich: Ich melde mich innert 48 Stunden, wir besprechen alles, und erst danach bezahlst du etwas.',
      cartTitle: 'Deine Pakete',
      formTitle: 'Deine Angaben',
      submit: 'Unverbindlich anfragen',
      emptyCart: 'Dein Warenkorb ist leer. Stell zuerst eine Seite zusammen, dann kannst du sie hier anfragen.',
      thanksTitle: 'Danke für deine Anfrage!',
      thanksText: 'Ich habe deine Anfrage bekommen und melde mich innert 48 Stunden bei dir.',
    },

    contact: {
      eyebrow: 'Kontakt',
      title: 'Schreib mir.',
      lead: 'Du hast eine Frage oder willst zuerst einfach reden? Schreib mir per E-Mail, auf Instagram oder hier im Formular.',
      responseHint: 'Ich antworte dir innert 48 Stunden, meistens am Abend.',
      formTitle: 'Nachricht schreiben',
      submit: 'Nachricht senden',
      thanksTitle: 'Danke für deine Nachricht!',
      thanksText: 'Ich melde mich innert 48 Stunden bei dir.',
    },
  },

  footer: {
    title: 'Hast du ein Projekt im Kopf?',
    text: 'Stell deine Seite zusammen oder schreib mir einfach. Ich melde mich innert 48 Stunden.',
    about: 'Webseiten, Gestaltung und Medien für kleine Firmen, Vereine und Selbstständige.',
  },

  // Rechtliches: Vorlagen. Text in [Klammern] ersetzen. Darf einfaches HTML enthalten.
  legal: {
    impressum: {
      title: 'Impressum',
      hint: 'Vorlage: Ersetze alle markierten Platzhalter durch deine echten Angaben.',
      sections: [
        { h: 'Verantwortlich für diese Webseite', html: '<p>Bleron Mustafa<br>[Strasse und Nr.]<br>[PLZ Ort]<br>Schweiz</p>' },
        { h: 'Kontakt', html: '<p>E-Mail: <a href="mailto:{email}">{email}</a></p>' },
        { h: 'Haftung für Inhalte', html: '<p>Die Inhalte dieser Seite wurden sorgfältig erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann ich keine Gewähr übernehmen. Die angegebenen Preise sind Richtpreise und kein verbindliches Angebot.</p>' },
        { h: 'Haftung für Links', html: '<p>Für die Inhalte verlinkter, externer Seiten sind ausschliesslich deren Betreiber verantwortlich.</p>' },
        { h: 'Urheberrecht', html: '<p>Texte, Bilder und Gestaltung dieser Seite gehören mir, sofern nicht anders angegeben. Eine Verwendung ist nur mit meiner Zustimmung erlaubt.</p>' },
      ],
    },
    datenschutz: {
      title: 'Datenschutz',
      hint: 'Vorlage nach dem Schweizer Datenschutzgesetz (DSG). Ersetze die markierten Platzhalter und prüfe den Text, bevor die Seite online geht.',
      sections: [
        { h: 'Verantwortlich', html: '<p>Bleron Mustafa, [Strasse und Nr.], [PLZ Ort], Schweiz<br>E-Mail: <a href="mailto:{email}">{email}</a></p>' },
        { h: 'Welche Daten ich bearbeite', html: '<p>Wenn du mir über ein Formular schreibst, bearbeite ich die Angaben, die du eingibst: Name, E-Mail, optional Firma/Verein und Telefon, deine Nachricht und – bei einer Bestellung – die gewählten Pakete. Ich verwende diese Daten nur, um deine Anfrage zu beantworten.</p>' },
        { h: 'Formulare (Formspree)', html: '<p>Die Formulare werden über den Dienst Formspree (Formspree Inc., USA) an mich weitergeleitet. Dabei werden deine Angaben auf Servern von Formspree verarbeitet. Mehr dazu: <a href="https://formspree.io/legal/privacy-policy" rel="noopener">Datenschutzerklärung von Formspree</a>.</p>' },
        { h: 'Warenkorb im Browser', html: '<p>Der Warenkorb wird nur in deinem Browser gespeichert (localStorage). Diese Daten werden nicht an mich übertragen, bis du eine Anfrage abschickst. Du kannst sie jederzeit löschen, indem du den Warenkorb leerst oder die Browserdaten löschst. Cookies verwende ich keine.</p>' },
        { h: 'Schriften (Google Fonts)', html: '<p>Diese Seite lädt die Schrift «Be Vietnam Pro» von Google Fonts (Google LLC, USA). Dabei wird deine IP-Adresse an Google übermittelt.</p>' },
        { h: 'Programm-Bibliotheken (jsDelivr)', html: '<p>Die Animations-Bibliotheken liegen auf meinem Server. Nur falls sie dort nicht geladen werden können, holt die Seite sie vom Dienst jsDelivr. Dabei wird deine IP-Adresse an jsDelivr übermittelt.</p>' },
        { h: 'Hosting', html: '<p>Diese Seite wird bei [Hosting-Anbieter, z. B. GitHub Pages oder Netlify] gehostet. Der Anbieter speichert technisch notwendige Daten wie die IP-Adresse in Server-Logfiles.</p>' },
        { h: 'Deine Rechte', html: '<p>Du kannst jederzeit Auskunft über deine Daten verlangen, sie berichtigen oder löschen lassen. Schreib mir dafür eine E-Mail.</p>' },
        { h: 'Stand', html: '<p>[Monat Jahr]</p>' },
      ],
    },
  },
};

/* =========================================================
   Ab hier beginnt die Logik. Für Inhalte musst du hier
   normalerweise nichts ändern.
   ========================================================= */

const STORAGE_KEY = 'bm-warenkorb-v1';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let canAnimate = false; // wird in boot() gesetzt, sobald GSAP geladen ist
const page = document.body.dataset.page || 'start';

let lenis = null;

/* ---------- Kleine Helfer ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// HTML-Zeichen entschärfen
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Text entschärfen und [Platzhalter] markieren
function t(value) {
  return esc(value).replace(/\[([^\]]+)\]/g, '<mark class="ph">[$1]</mark>');
}

// HTML aus der Konfig: {email} ersetzen und Platzhalter markieren
function richHtml(html) {
  return html
    .replace(/\{email\}/g, esc(CONFIG.contact.email))
    .replace(/\[([^\]]+)\]/g, '<mark class="ph">[$1]</mark>');
}

const chf = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 0 });
const formatPrice = (n) => `CHF ${chf.format(n)}`;
const fromPrice = (n) => `ab ${formatPrice(n)}`;

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

/* ---------- Icons (einfache Linien) ---------- */
const ICONS = {
  arrow: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h14l-1.5 9h-11z"/><path d="M6 7 5 3H2"/><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.4"/></svg>',
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h4l3 3h3a2 2 0 0 0 0-4h-2"/><path d="M8 12V8l6-3 6 3v8l-6 3-3-1.5"/></svg>',
  logo: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="9" fill="currentColor"/><path d="M9 25V15a7 7 0 0 1 14 0v10" fill="none" stroke="var(--bg)" stroke-width="2.4"/><path d="M13 25v-9a3 3 0 0 1 6 0v9" fill="none" stroke="var(--bg)" stroke-width="2.4"/></svg>',
  // Leistungs-Symbole aus flachen Flächen
  code: '<svg class="card-icon" viewBox="0 0 44 44" aria-hidden="true"><rect x="2" y="6" width="40" height="32" rx="6" class="ic-soft"/><path d="M17 16l-6 6 6 6M27 16l6 6-6 6" fill="none" stroke="var(--fg)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  cms: '<svg class="card-icon" viewBox="0 0 44 44" aria-hidden="true"><rect x="2" y="6" width="40" height="32" rx="6" class="ic-soft"/><rect x="8" y="13" width="14" height="18" rx="2" class="ic-accent"/><path d="M27 15h10M27 22h10M27 29h6" stroke="var(--fg)" stroke-width="3" stroke-linecap="round"/></svg>',
  design: '<svg class="card-icon" viewBox="0 0 44 44" aria-hidden="true"><circle cx="16" cy="22" r="13" class="ic-soft"/><rect x="22" y="9" width="19" height="26" rx="3" class="ic-accent"/><circle cx="16" cy="22" r="4" fill="var(--fg)"/></svg>',
};

/* ---------- Preise berechnen ---------- */
// Ein Paket: { id, mode: 'coded' | 'cms', extras: { pages: 2, contact: 1, ... } }
function calcPackage(pkg) {
  const { base, extras, modes } = CONFIG.pricing;
  const mode = modes[pkg.mode] ? pkg.mode : 'coded';
  const lines = [{ label: base.label, price: base.price[mode] }];

  extras.forEach((extra) => {
    const qty = Number(pkg.extras?.[extra.id]) || 0;
    if (qty > 0) {
      lines.push({
        label: extra.quantity ? `${extra.label} × ${qty}` : extra.label,
        price: extra.price[mode] * qty,
      });
    }
  });

  return { mode, modeLabel: modes[mode].label, lines, total: lines.reduce((sum, l) => sum + l.price, 0) };
}

/* ---------- Warenkorb (bleibt im localStorage) ---------- */
const Cart = {
  items: [],
  listeners: [],

  load() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      this.items = Array.isArray(data) ? data.filter((i) => i && i.id && i.mode) : [];
    } catch (e) {
      this.items = [];
    }
  },
  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      /* Speichern nicht möglich (z. B. privater Modus) – Warenkorb gilt dann nur für diese Seite */
    }
    this.listeners.forEach((fn) => fn());
  },
  onChange(fn) { this.listeners.push(fn); },
  get(id) { return this.items.find((i) => i.id === id); },
  add(pkg) { this.items.push({ ...pkg, id: uid() }); this.save(); },
  update(id, pkg) {
    const index = this.items.findIndex((i) => i.id === id);
    if (index > -1) { this.items[index] = { ...pkg, id }; this.save(); }
  },
  remove(id) { this.items = this.items.filter((i) => i.id !== id); this.save(); },
  clear() { this.items = []; this.save(); },
  total() { return this.items.reduce((sum, item) => sum + calcPackage(item).total, 0); },
};

// Änderungen aus einem anderen Tab übernehmen
window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) { Cart.load(); Cart.listeners.forEach((fn) => fn()); }
});

/* ---------- Header, Menü, Warenkorb-Leiste, Footer ---------- */
function navLinks(items, cls = 'nav-link') {
  return items.map((item) => `
    <li><a class="${cls}" href="${item.href}"${item.page === page ? ' aria-current="page"' : ''}>${esc(item.label)}${cls === 'menu-link' ? ICONS.arrow : ''}</a></li>`).join('');
}

function renderLayout() {
  const { site, contact, footer, nav, legalNav } = CONFIG;

  $('#site-header').outerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html">${ICONS.logo}<span>${esc(site.name)}</span></a>
        <nav class="nav-desktop" aria-label="Hauptnavigation"><ul>${navLinks(nav)}</ul></nav>
        <div class="header-actions">
          <button class="icon-btn cart-toggle" type="button" aria-haspopup="dialog" aria-controls="cart-drawer">
            ${ICONS.cart}<span class="cart-badge" data-count="0" aria-hidden="true">0</span>
            <span class="visually-hidden cart-label">Warenkorb öffnen</span>
          </button>
          <a class="btn btn--primary btn--sm header-cta" href="angebot.html" data-magnet>Seite anfragen ${ICONS.arrow}</a>
          <button class="icon-btn menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
            ${ICONS.menu}<span class="visually-hidden">Menü öffnen</span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menü" hidden>
      <div class="container mobile-menu-top">
        <a class="brand" href="index.html">${ICONS.logo}<span>${esc(site.name)}</span></a>
        <button class="icon-btn menu-close" type="button">${ICONS.close}<span class="visually-hidden">Menü schliessen</span></button>
      </div>
      <nav class="container" aria-label="Hauptnavigation mobil"><ul>${navLinks(nav, 'menu-link')}</ul></nav>
      <div class="container mobile-menu-foot">
        <a class="btn btn--primary btn--block" href="angebot.html">Seite anfragen ${ICONS.arrow}</a>
        <p><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a> · Antwort ${esc(contact.responseTime)}</p>
      </div>
    </div>

    <div class="drawer-root" id="cart-drawer" hidden>
      <div class="drawer-overlay" data-close-drawer></div>
      <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" data-lenis-prevent>
        <div class="drawer-head">
          <h2 id="drawer-title" tabindex="-1">Warenkorb</h2>
          <button class="icon-btn" type="button" data-close-drawer>${ICONS.close}<span class="visually-hidden">Warenkorb schliessen</span></button>
        </div>
        <div class="drawer-body" id="drawer-body"></div>
        <div class="drawer-foot" id="drawer-foot"></div>
      </aside>
    </div>

    <div class="toast" role="status" aria-live="polite"></div>`;

  $('#site-footer').outerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-cta">
          <h2 data-stretch>${esc(footer.title)}</h2>
          <p>${esc(footer.text)}</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="angebot.html" data-magnet>Seite zusammenstellen ${ICONS.arrow}</a>
            <a class="btn btn--ghost" href="kontakt.html">Schreib mir</a>
          </div>
        </div>
        <div class="footer-cols">
          <div class="about-col">
            <a class="brand" href="index.html">${ICONS.logo}<span>${esc(site.name)}</span></a>
            <p style="margin-top:12px">${esc(footer.about)}</p>
          </div>
          <div>
            <h2>Seiten</h2>
            <ul>${nav.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h2>Kontakt</h2>
            <ul>
              <li><a href="mailto:${esc(contact.email)}">E-Mail</a></li>
              <li><a href="${esc(contact.instagramUrl)}" rel="noopener">Instagram</a></li>
              <li><a href="kontakt.html">Formular</a></li>
            </ul>
          </div>
          <div>
            <h2>Rechtliches</h2>
            <ul>${legalNav.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('')}</ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${site.year} ${esc(site.name)}</p>
          <p>Gebaut mit HTML, CSS und JavaScript</p>
        </div>
      </div>
    </footer>`;

  // Rahmenlinie unter dem Header beim Scrollen
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Ebenen (Menü, Warenkorb): Fokus halten, Esc schliesst ---------- */
const Layer = {
  active: null,

  open(el, { onClose, focus } = {}) {
    if (this.active) this.close();
    this.active = { el, onClose, returnFocus: document.activeElement };
    el.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    lenis?.stop();
    (focus || el.querySelector('a, button, [tabindex="-1"]'))?.focus();
  },

  close() {
    if (!this.active) return;
    const { el, onClose, returnFocus } = this.active;
    this.active = null;
    el.hidden = true;
    document.documentElement.style.overflow = '';
    lenis?.start();
    onClose?.();
    returnFocus?.focus?.();
  },
};

document.addEventListener('keydown', (e) => {
  if (!Layer.active) return;
  if (e.key === 'Escape') { e.preventDefault(); Layer.close(); return; }
  if (e.key !== 'Tab') return;

  // Fokus in der offenen Ebene halten
  const focusables = $$('a[href], button:not([disabled]), input, textarea, [tabindex="0"]', Layer.active.el)
    .filter((n) => n.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

function initMenu() {
  const toggle = $('.menu-toggle');
  const menu = $('#mobile-menu');

  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'true');
    Layer.open(menu, { onClose: () => toggle.setAttribute('aria-expanded', 'false') });
    if (canAnimate) {
      gsap.fromTo(menu, { yPercent: -4, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.35, ease: 'power3.out' });
      gsap.from($$('.menu-link', menu), { y: 24, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out', delay: 0.05 });
    }
  });
  $('.menu-close', menu).addEventListener('click', () => Layer.close());

  // Menü schliessen, wenn der Bildschirm breit genug wird
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches && Layer.active?.el === menu) Layer.close();
  });
}

/* ---------- Warenkorb-Leiste ---------- */
function cartItemHtml(item, index) {
  const calc = calcPackage(item);
  return `
    <li class="cart-item" data-id="${esc(item.id)}">
      <div class="cart-item-head">
        <h3>Paket ${index + 1} · ${esc(calc.modeLabel)}</h3>
        <strong>${fromPrice(calc.total)}</strong>
      </div>
      <ul class="cart-lines">
        ${calc.lines.map((l) => `<li><span>${esc(l.label)}</span><span>${fromPrice(l.price)}</span></li>`).join('')}
      </ul>
      <div class="cart-item-actions">
        <a class="link-btn" href="angebot.html?bearbeiten=${encodeURIComponent(item.id)}">Ändern<span class="visually-hidden"> (Paket ${index + 1})</span></a>
        <button class="link-btn" type="button" data-remove="${esc(item.id)}">Entfernen<span class="visually-hidden"> (Paket ${index + 1})</span></button>
      </div>
    </li>`;
}

function cartListHtml() {
  if (!Cart.items.length) {
    return `<div class="cart-empty"><p>Dein Warenkorb ist noch leer.</p>
      <a class="btn btn--primary" href="angebot.html">Seite zusammenstellen ${ICONS.arrow}</a></div>`;
  }
  return `<ul class="cart-list">${Cart.items.map(cartItemHtml).join('')}</ul>`;
}

function renderCartUi() {
  const count = Cart.items.length;
  const badge = $('.cart-badge');
  badge.textContent = count;
  badge.dataset.count = count;
  $('.cart-label').textContent = `Warenkorb öffnen, ${count} ${count === 1 ? 'Paket' : 'Pakete'}`;

  $('#drawer-body').innerHTML = cartListHtml();
  $('#drawer-foot').innerHTML = count
    ? `<div class="cart-total"><span>Total</span><strong>${fromPrice(Cart.total())}</strong></div>
       <a class="btn btn--primary btn--block" href="bestellung.html">Zur Bestellung ${ICONS.arrow}</a>
       <a class="btn btn--ghost btn--block" href="angebot.html">Weiteres Paket zusammenstellen</a>`
    : '';
  $('#drawer-foot').hidden = !count;
}

function openDrawer() {
  const root = $('#cart-drawer');
  Layer.open(root, { focus: $('#drawer-title') });
  if (canAnimate) {
    gsap.fromTo($('.drawer', root), { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: 'power3.out' });
    gsap.fromTo($('.drawer-overlay', root), { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }
}

function initCart() {
  renderCartUi();
  Cart.onChange(renderCartUi);

  $('.cart-toggle').addEventListener('click', openDrawer);
  $$('[data-close-drawer]').forEach((el) => el.addEventListener('click', () => Layer.close()));

  // Entfernen (gilt für Leiste und Bestellseite)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove]');
    if (!btn) return;
    Cart.remove(btn.dataset.remove);
    showToast('Paket entfernt.');
    // Fokus an einen sinnvollen Ort setzen
    if (Layer.active) $('#drawer-title').focus();
    else $('#order-cart-title')?.focus();
  });
}

let toastTimer;
function showToast(message) {
  const toast = $('.toast');
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.textContent = ''; }, 3200);
}

/* ---------- Bausteine für mehrere Seiten ---------- */
function pageHead({ eyebrow, title, lead }) {
  return `
    <section class="container page-head">
      <span class="eyebrow" data-reveal data-scramble>${esc(eyebrow)}</span>
      <h1 data-split>${t(title)}</h1>
      ${lead ? `<p class="lead" data-reveal>${t(lead)}</p>` : ''}
    </section>`;
}

function projectCard(p, headingLevel = 'h3') {
  return `
    <article class="project-card" data-category="${esc(p.category)}" data-reveal>
      <div class="project-media" data-curtain data-pixel-cover>
        <img src="${esc(p.image)}" alt="${esc(p.alt)}" width="800" height="600" loading="lazy">
        <div class="pixel-cover" aria-hidden="true">
          <div class="pixel-cover-grid"></div>
          <span class="pixel-cover-label">${p.url ? 'Projekt ansehen' : 'Link folgt'}</span>
        </div>
      </div>
      <div class="project-meta"><span>${esc(p.category)}</span><span aria-hidden="true">·</span><span>${esc(p.year)}</span></div>
      <${headingLevel}>${t(p.title)}</${headingLevel}>
      <p>${t(p.text)}</p>
      <ul class="tag-list" aria-label="Leistungen">${p.services.map((s) => `<li class="tag">${esc(s)}</li>`).join('')}</ul>
      ${p.url
        ? `<a class="link-btn" href="${esc(p.url)}" rel="noopener">Projekt ansehen ${ICONS.arrow}</a>`
        : '<span class="link-pending">Link folgt</span>'}
    </article>`;
}

// Preisblatt (wird im Konfigurator und auf der Startseite verwendet)
function sheetHtml(pkg, { withButton = false, buttonLabel = '' } = {}) {
  const calc = calcPackage(pkg);
  return `
    <div class="sheet-head"><span>Preisblatt · Richtpreise</span><strong data-sheet-mode>${esc(calc.modeLabel)}</strong></div>
    <ul class="sheet-lines" data-sheet-lines>
      ${calc.lines.map((l) => `<li><span>${esc(l.label)}</span><span>${fromPrice(l.price)}</span></li>`).join('')}
    </ul>
    <div class="sheet-total"><span>Total</span><strong data-sheet-total aria-live="polite">${fromPrice(calc.total)}</strong></div>
    ${withButton ? `<button class="btn btn--primary btn--block" type="button" data-add-to-cart data-magnet>${esc(buttonLabel)} ${ICONS.arrow}</button>` : ''}
    <p class="sheet-note">${esc(CONFIG.pricing.note)}</p>`;
}

/* ---------- Seiten ---------- */
const Pages = {
  start() {
    const c = CONFIG.pages.start;
    return `
      <section class="container hero">
        <span class="eyebrow" data-reveal data-scramble>${esc(c.eyebrow)}</span>
        <h1 class="hero-title">
          <span class="visually-hidden">${esc(c.titleStatic)}</span>
          <span aria-hidden="true">
            ${canAnimate
              ? `<span class="hero-line" data-split>${esc(c.titleStart)}</span>
                 <span class="hero-word"><span class="hero-word-text">${esc(c.words[0])}</span></span>`
              : `<span class="hero-line">${esc(c.titleStatic)}</span>`}
          </span>
        </h1>
        <div class="hero-bottom">
          <div>
            <p class="lead" data-reveal>${esc(c.lead)}</p>
            <div class="btn-row" data-reveal>
              <a class="btn btn--primary" href="angebot.html" data-magnet>${esc(c.ctaPrimary)} ${ICONS.arrow}</a>
              <a class="btn btn--ghost" href="projekte.html">${esc(c.ctaSecondary)}</a>
            </div>
          </div>
          <ul class="hero-hints" data-reveal>
            ${c.hints.map((h) => `<li>${ICONS[h.icon]}<span>${esc(h.text)}</span></li>`).join('')}
          </ul>
        </div>
      </section>

      ${curvedLoopHtml()}

      <section class="container section" aria-labelledby="services-title">
        <div class="section-head">
          <h2 id="services-title" data-split>${esc(c.servicesTitle)}</h2>
          <p data-reveal>${esc(c.servicesText)}</p>
        </div>
        <div class="card-grid">
          ${CONFIG.services.map((s) => `
            <article class="card" data-reveal>
              ${ICONS[s.icon]}
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.text)}</p>
              <ul>${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
              <div class="price-tag"><span>Richtpreis</span><strong>${fromPrice(s.priceFrom())}</strong></div>
            </article>`).join('')}
        </div>
      </section>

      <section class="container section section--tight" aria-labelledby="projects-title">
        <div class="section-head">
          <h2 id="projects-title" data-split>${esc(c.projectsTitle)}</h2>
          <a class="btn btn--ghost" href="projekte.html">${esc(c.projectsLink)} ${ICONS.arrow}</a>
        </div>
        <div class="project-grid project-grid--three">
          ${CONFIG.projects.slice(0, 3).map((p) => projectCard(p)).join('')}
        </div>
      </section>

      <section class="container section" aria-labelledby="preview-title">
        <div class="preview-grid">
          <div>
            <h2 id="preview-title" data-split>${esc(c.previewTitle)}</h2>
            <p class="lead" data-reveal>${esc(CONFIG.examplePackage.text)}</p>
            <div data-reveal><a class="btn btn--primary" href="angebot.html" data-magnet>${esc(c.previewLink)} ${ICONS.arrow}</a></div>
          </div>
          <div class="sheet" data-reveal aria-label="Beispiel-Preisblatt">${sheetHtml(CONFIG.examplePackage)}</div>
        </div>
      </section>

      <section class="container section section--tight" aria-labelledby="trust-title">
        <div class="trust">
          <div>
            <h2 id="trust-title" data-split>${esc(c.trustTitle)}</h2>
            <ul class="trust-list">
              ${c.trust.map((i) => `<li data-reveal><strong>${esc(i.title)}</strong><span>${esc(i.text)}</span></li>`).join('')}
            </ul>
          </div>
          <aside class="note" data-reveal aria-label="Persönliche Notiz">
            <p>${esc(c.note)}</p>
            <p class="signature">– ${esc(c.noteSignature)}</p>
          </aside>
        </div>
      </section>`;
  },

  'ueber-mich'() {
    const c = CONFIG.pages.about;
    return `
      ${pageHead({ eyebrow: c.eyebrow, title: c.title })}

      <section class="container section section--tight">
        <div class="about-grid">
          <div class="about-text">${c.text.map((p) => `<p data-reveal>${t(p)}</p>`).join('')}</div>
          <div data-reveal>
            <h2 class="h3" style="font-size:1.2rem">${esc(c.factsTitle)}</h2>
            <dl class="facts">${c.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${t(f.value)}</dd></div>`).join('')}</dl>
          </div>
        </div>
      </section>

      ${curvedLoopHtml()}

      <section class="container section" aria-labelledby="tools-title">
        <div class="section-head"><h2 id="tools-title" data-split>${esc(c.toolsTitle)}</h2></div>
        <div class="tool-groups">
          ${c.tools.map((g) => `
            <div class="tool-group card" data-reveal>
              <h3>${esc(g.group)}</h3>
              <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </section>

      <section class="container section section--tight" aria-labelledby="path-title">
        <div class="section-head"><h2 id="path-title" data-split>${esc(c.pathTitle)}</h2></div>
        <ul class="timeline">
          ${c.path.map((p) => `
            <li data-reveal>
              <span class="when">${t(p.when)}</span>
              <strong>${t(p.title)}</strong>
              <p>${t(p.text)}</p>
            </li>`).join('')}
        </ul>
      </section>`;
  },

  projekte() {
    const c = CONFIG.pages.projects;
    const cats = [c.all, ...CONFIG.projectCategories];
    return `
      ${pageHead(c)}
      <section class="container section section--tight" style="padding-top:0">
        <div class="filter-bar" role="group" aria-label="${esc(c.filterLabel)}" data-reveal>
          ${cats.map((cat, i) => `<button class="filter-btn" type="button" data-filter="${i === 0 ? '*' : esc(cat)}" aria-pressed="${i === 0}">${esc(cat)}</button>`).join('')}
        </div>
        <p class="visually-hidden" id="filter-status" role="status" aria-live="polite"></p>
        <div class="project-grid" id="project-grid">
          ${CONFIG.projects.map((p) => projectCard(p, 'h2')).join('')}
        </div>
        <p class="muted" id="project-empty" hidden>In dieser Kategorie gibt es noch keine Projekte.</p>
      </section>`;
  },

  angebot() {
    const c = CONFIG.pages.offer;
    return `
      ${pageHead(c)}
      <section class="container section section--tight" style="padding-top:0" aria-label="Konfigurator">
        <div id="edit-banner"></div>
        <form class="config" id="configurator" novalidate>
          <div class="config-options">${configOptionsHtml()}</div>
          <aside class="sheet" id="config-sheet" aria-label="Zusammenfassung"></aside>
        </form>
      </section>

      <section class="container section" aria-labelledby="faq-title">
        <div class="section-head"><h2 id="faq-title" data-split>${esc(c.faqTitle)}</h2></div>
        <div class="faq">
          ${CONFIG.faq.map((f) => `
            <details data-reveal>
              <summary>${esc(f.q)}</summary>
              <div class="faq-body"><p>${esc(f.a)}</p></div>
            </details>`).join('')}
        </div>
      </section>`;
  },

  bestellung() {
    const c = CONFIG.pages.order;
    return `
      ${pageHead(c)}
      <section class="container section section--tight" style="padding-top:0">
        <div class="order-grid">
          <div data-reveal>
            <h2 id="order-cart-title" tabindex="-1">${esc(c.cartTitle)}</h2>
            <div id="order-cart"></div>
          </div>
          <div class="form-panel" id="order-panel" data-reveal>
            <h2>${esc(c.formTitle)}</h2>
            <form class="form" id="order-form" novalidate>
              <div class="form-row">
                ${field({ name: 'name', label: 'Name', autocomplete: 'name', required: true })}
                ${field({ name: 'firma', label: 'Firma / Verein', autocomplete: 'organization' })}
              </div>
              <div class="form-row">
                ${field({ name: 'email', label: 'E-Mail', type: 'email', autocomplete: 'email', required: true })}
                ${field({ name: 'telefon', label: 'Telefon', type: 'tel', autocomplete: 'tel' })}
              </div>
              ${field({ name: 'nachricht', label: 'Nachricht', textarea: true, required: true, placeholder: 'Worum geht es? Gibt es schon Texte, Bilder oder eine Domain?' })}
              ${honeypot()}
              <p class="form-status" id="order-status" role="status" aria-live="polite"></p>
              <button class="btn btn--primary btn--block" type="submit" data-magnet>${esc(c.submit)} ${ICONS.arrow}</button>
              <p class="muted" style="font-size:0.88rem;margin:0">Mit dem Absenden ist noch nichts verbindlich. Mehr im <a href="datenschutz.html">Datenschutz</a>.</p>
            </form>
          </div>
        </div>
      </section>`;
  },

  kontakt() {
    const c = CONFIG.pages.contact;
    const { contact } = CONFIG;
    return `
      ${pageHead(c)}
      <section class="container section section--tight" style="padding-top:0">
        <div class="contact-grid">
          <div data-reveal>
            <ul class="contact-list">
              <li><span>E-Mail</span><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></li>
              <li><span>Instagram</span><a href="${esc(contact.instagramUrl)}" rel="noopener">${esc(contact.instagram)}</a></li>
            </ul>
            <p class="muted">${esc(c.responseHint)}</p>
          </div>
          <div class="form-panel" id="contact-panel" data-reveal>
            <h2 style="font-size:1.5rem">${esc(c.formTitle)}</h2>
            <form class="form" id="contact-form" novalidate>
              ${field({ name: 'name', label: 'Name', autocomplete: 'name', required: true })}
              ${field({ name: 'email', label: 'E-Mail', type: 'email', autocomplete: 'email', required: true })}
              ${field({ name: 'nachricht', label: 'Nachricht', textarea: true, required: true })}
              ${honeypot()}
              <p class="form-status" id="contact-status" role="status" aria-live="polite"></p>
              <button class="btn btn--primary btn--block" type="submit" data-magnet>${esc(c.submit)} ${ICONS.arrow}</button>
            </form>
          </div>
        </div>
      </section>`;
  },

  impressum() { return legalPage(CONFIG.legal.impressum); },
  datenschutz() { return legalPage(CONFIG.legal.datenschutz); },
};

function legalPage(doc) {
  return `
    ${pageHead({ eyebrow: 'Rechtliches', title: doc.title })}
    <section class="container section section--tight" style="padding-top:0">
      <div class="prose">
        <p class="legal-hint">${t(doc.hint)}</p>
        ${doc.sections.map((s) => `<h2>${esc(s.h)}</h2>${richHtml(s.html)}`).join('')}
      </div>
    </section>`;
}

/* ---------- Formular-Bausteine ---------- */
function field({ name, label, type = 'text', textarea = false, required = false, autocomplete = '', placeholder = '' }) {
  const id = `f-${name}`;
  const attrs = `id="${id}" name="${name}"${required ? ' required aria-required="true"' : ''}${autocomplete ? ` autocomplete="${autocomplete}"` : ''}${placeholder ? ` placeholder="${esc(placeholder)}"` : ''} aria-describedby="${id}-error"`;
  return `
    <div class="field">
      <label for="${id}">${esc(label)}${required ? '' : ' <span class="optional">(optional)</span>'}</label>
      ${textarea ? `<textarea ${attrs} rows="5"></textarea>` : `<input type="${type}" ${attrs}>`}
      <p class="field-error" id="${id}-error"></p>
    </div>`;
}

// Unsichtbares Feld gegen Spam-Bots
function honeypot() {
  return '<div class="hp-field" aria-hidden="true"><label for="f-gotcha">Nicht ausfüllen</label><input type="text" id="f-gotcha" name="_gotcha" tabindex="-1" autocomplete="off"></div>';
}

/* ---------- Konfigurator ---------- */
function configOptionsHtml() {
  const c = CONFIG.pages.offer;
  const { modes, base, extras } = CONFIG.pricing;
  return `
    <fieldset>
      <legend>${esc(c.modeLegend)}</legend>
      <p class="fieldset-hint">${esc(c.modeHint)}</p>
      <div class="mode-group">
        ${Object.entries(modes).map(([key, m]) => `
          <label class="option">
            <input type="radio" name="mode" value="${key}">
            <span class="mark mark--radio"></span>
            <span class="option-body">
              <span class="option-title">${esc(m.label)}</span>
              <span class="option-desc">${esc(m.desc)}</span>
              <span class="option-desc" style="color:var(--fg);font-weight:600;margin-top:8px">Basis ${fromPrice(base.price[key])}</span>
            </span>
          </label>`).join('')}
      </div>
    </fieldset>

    <fieldset>
      <legend>${esc(c.baseLegend)}</legend>
      <div class="base-item">
        <span class="option-body">
          <span class="option-title">${esc(base.label)}</span>
          <span class="option-desc">${esc(base.desc)}</span>
        </span>
        <span class="option-price" data-price-base></span>
      </div>
    </fieldset>

    <fieldset>
      <legend>${esc(c.extrasLegend)}</legend>
      <p class="fieldset-hint">${esc(c.extrasHint)}</p>
      <ul class="extra-list">
        ${extras.map((ex) => `
          <li class="option" data-extra-row="${ex.id}">
            <label class="option-main">
              <input type="checkbox" name="extra" value="${ex.id}">
              <span class="mark mark--check">${ICONS.check}</span>
              <span class="option-body">
                <span class="option-title">${esc(ex.label)}</span>
                <span class="option-desc">${esc(ex.desc)}</span>
              </span>
              <span class="option-price" data-price-extra="${ex.id}"></span>
            </label>
            ${ex.quantity ? `
              <div class="stepper-row" data-stepper-row hidden>
                <span id="qty-label-${ex.id}">Anzahl Seiten</span>
                <div class="stepper" role="group" aria-labelledby="qty-label-${ex.id}">
                  <button type="button" data-step="-1" aria-label="Eine Seite weniger">−</button>
                  <output data-qty aria-live="polite">1</output>
                  <button type="button" data-step="1" aria-label="Eine Seite mehr">+</button>
                </div>
              </div>` : ''}
          </li>`).join('')}
      </ul>
    </fieldset>`;
}

function initConfigurator() {
  const form = $('#configurator');
  if (!form) return;
  const c = CONFIG.pages.offer;
  const { base, extras } = CONFIG.pricing;

  // Bearbeiten eines bestehenden Pakets? (angebot.html?bearbeiten=ID)
  const editId = new URLSearchParams(location.search).get('bearbeiten');
  const editing = editId ? Cart.get(editId) : null;

  const state = editing
    ? { mode: editing.mode, extras: { ...editing.extras } }
    : { mode: 'coded', extras: {} };

  if (editing) {
    const index = Cart.items.indexOf(editing) + 1;
    $('#edit-banner').innerHTML = `
      <div class="edit-banner"><span>Du bearbeitest Paket ${index} aus deinem Warenkorb.</span>
      <a class="link-btn" href="angebot.html">Abbrechen und neu starten</a></div>`;
  }

  const sheet = $('#config-sheet');
  sheet.innerHTML = sheetHtml(state, { withButton: true, buttonLabel: editing ? c.updateButton : c.addButton });

  // Formular mit dem Zustand füllen
  $$('input[name="mode"]', form).forEach((r) => { r.checked = r.value === state.mode; });
  extras.forEach((ex) => {
    const qty = Number(state.extras[ex.id]) || 0;
    const row = $(`[data-extra-row="${ex.id}"]`, form);
    $('input', row).checked = qty > 0;
    if (ex.quantity) $('[data-qty]', row).textContent = Math.max(qty, 1);
  });

  let shownTotal = calcPackage(state).total;

  function update() {
    const mode = state.mode;
    $('[data-price-base]', form).textContent = fromPrice(base.price[mode]);

    extras.forEach((ex) => {
      const row = $(`[data-extra-row="${ex.id}"]`, form);
      const qty = Number(state.extras[ex.id]) || 0;
      $(`[data-price-extra="${ex.id}"]`, row).textContent = `${fromPrice(ex.price[mode])}${ex.quantity ? ' / Seite' : ''}`;
      if (ex.quantity) {
        const stepRow = $('[data-stepper-row]', row);
        stepRow.hidden = qty === 0;
        $('[data-qty]', row).textContent = Math.max(qty, 1);
        $('[data-step="-1"]', row).disabled = qty <= 1;
        $('[data-step="1"]', row).disabled = qty >= ex.max;
      }
    });

    // Preisblatt aktualisieren
    const calc = calcPackage(state);
    $('[data-sheet-mode]', sheet).textContent = calc.modeLabel;
    $('[data-sheet-lines]', sheet).innerHTML = calc.lines
      .map((l) => `<li><span>${esc(l.label)}</span><span>${fromPrice(l.price)}</span></li>`).join('');

    const totalEl = $('[data-sheet-total]', sheet);
    if (canAnimate) {
      // Zahl kurz hochzählen lassen
      const counter = { value: shownTotal };
      gsap.to(counter, {
        value: calc.total,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => { totalEl.textContent = fromPrice(Math.round(counter.value)); },
      });
    } else {
      totalEl.textContent = fromPrice(calc.total);
    }
    shownTotal = calc.total;
  }

  form.addEventListener('change', (e) => {
    const input = e.target;
    if (input.name === 'mode') state.mode = input.value;
    if (input.name === 'extra') {
      const ex = extras.find((x) => x.id === input.value);
      const current = Number($(`[data-extra-row="${ex.id}"] [data-qty]`, form)?.textContent) || 1;
      state.extras[ex.id] = input.checked ? (ex.quantity ? current : 1) : 0;
    }
    update();
  });

  // Mengenauswahl + / −
  form.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-step]');
    if (!btn) return;
    const row = btn.closest('[data-extra-row]');
    const ex = extras.find((x) => x.id === row.dataset.extraRow);
    const next = (Number(state.extras[ex.id]) || 1) + Number(btn.dataset.step);
    state.extras[ex.id] = Math.min(Math.max(next, 1), ex.max);
    update();
  });

  form.addEventListener('submit', (e) => e.preventDefault());

  // In den Warenkorb / Paket aktualisieren
  $('[data-add-to-cart]', sheet).addEventListener('click', () => {
    const pkg = { mode: state.mode, extras: Object.fromEntries(Object.entries(state.extras).filter(([, v]) => v > 0)) };
    if (editing) {
      Cart.update(editing.id, pkg);
      showToast('Paket aktualisiert.');
      history.replaceState(null, '', 'angebot.html');
    } else {
      Cart.add(pkg);
      showToast('Paket liegt im Warenkorb.');
    }
    openDrawer();
  });

  update();
}

/* ---------- Projekte filtern ---------- */
function initProjectFilter() {
  const grid = $('#project-grid');
  if (!grid) return;
  const buttons = $$('[data-filter]');
  const status = $('#filter-status');

  buttons.forEach((btn) => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));

    let visible = 0;
    $$('.project-card', grid).forEach((card) => {
      const show = filter === '*' || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });

    $('#project-empty').hidden = visible > 0;
    status.textContent = `${visible} ${visible === 1 ? 'Projekt' : 'Projekte'} angezeigt`;

    if (canAnimate) {
      const cards = $$('.project-card:not([hidden])', grid);
      // Karten sofort zeigen (falls sie noch auf das Einblenden warten)
      gsap.fromTo(cards, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out', overwrite: true });
      cards.forEach((card) => gsap.set($('img', card), { clipPath: 'inset(0% 0 0 0)', scale: 1 }));
      ScrollTrigger.refresh();
    }
  }));
}

/* ---------- Bestellseite ---------- */
function renderOrderCart() {
  const box = $('#order-cart');
  if (!box) return;
  const c = CONFIG.pages.order;

  if (!Cart.items.length) {
    box.innerHTML = `<div class="cart-empty"><p>${esc(c.emptyCart)}</p>
      <a class="btn btn--primary" href="angebot.html">Seite zusammenstellen ${ICONS.arrow}</a></div>`;
  } else {
    box.innerHTML = `${cartListHtml()}
      <div class="cart-total" style="margin-top:18px;padding-top:16px;border-top:2px solid var(--fg)">
        <span>Total</span><strong>${fromPrice(Cart.total())}</strong>
      </div>
      <p class="muted" style="margin-top:10px;font-size:0.9rem">${esc(CONFIG.pricing.note)}</p>
      <a class="link-btn" href="angebot.html">Weiteres Paket hinzufügen</a>`;
  }

  // Ohne Pakete kann man nicht bestellen
  const submit = $('#order-form button[type="submit"]');
  if (submit) {
    submit.disabled = !Cart.items.length;
    const statusEl = $('#order-status');
    if (!Cart.items.length && !statusEl.classList.contains('is-error')) {
      statusEl.textContent = 'Lege zuerst ein Paket in den Warenkorb.';
    } else if (Cart.items.length && statusEl.textContent === 'Lege zuerst ein Paket in den Warenkorb.') {
      statusEl.textContent = '';
    }
  }
}

// Bestellung als gut lesbarer Text für die E-Mail
function orderSummaryText() {
  return Cart.items.map((item, i) => {
    const calc = calcPackage(item);
    const lines = calc.lines.map((l) => `  - ${l.label}: ${fromPrice(l.price)}`).join('\n');
    return `Paket ${i + 1} – ${calc.modeLabel}\n${lines}\n  Total Paket: ${fromPrice(calc.total)}`;
  }).join('\n\n');
}

/* ---------- Formulare prüfen und senden ---------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+0-9 ()/.-]{7,20}$/;

function validateField(input) {
  const value = input.value.trim();
  const requiredMessages = {
    name: 'Bitte gib deinen Namen ein.',
    email: 'Bitte gib deine E-Mail-Adresse ein.',
    nachricht: 'Bitte schreib mir kurz, worum es geht.',
  };
  let message = '';

  if (input.required && !value) {
    message = requiredMessages[input.name] || 'Bitte füll dieses Feld aus.';
  } else if (value && input.type === 'email' && !EMAIL_RE.test(value)) {
    message = 'Diese E-Mail-Adresse sieht nicht richtig aus. Beispiel: name@beispiel.ch';
  } else if (value && input.type === 'tel' && !PHONE_RE.test(value)) {
    message = 'Bitte gib eine gültige Telefonnummer ein, zum Beispiel 079 123 45 67.';
  }

  input.setAttribute('aria-invalid', message ? 'true' : 'false');
  $(`#${input.id}-error`).textContent = message;
  return !message;
}

function validateForm(form) {
  const inputs = $$('input:not([name="_gotcha"]), textarea', form);
  const invalid = inputs.filter((input) => !validateField(input));
  if (invalid.length) invalid[0].focus();
  return invalid.length === 0;
}

// Nach dem ersten Fehler direkt beim Tippen neu prüfen
function liveValidation(form) {
  form.addEventListener('input', (e) => {
    if (e.target.getAttribute('aria-invalid') === 'true') validateField(e.target);
  });
  form.addEventListener('focusout', (e) => {
    if (e.target.matches('input, textarea') && e.target.value.trim() && e.target.name !== '_gotcha') validateField(e.target);
  });
}

const isDemo = () => !CONFIG.formspree.id || CONFIG.formspree.id === 'FORMSPREE_ID';

async function sendToFormspree(data) {
  if (isDemo()) {
    // Demo-Modus: nichts wird verschickt
    console.info('[Demo-Modus] Diese Daten würden an Formspree gehen:', data);
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { demo: true };
  }
  const res = await fetch(`https://formspree.io/f/${encodeURIComponent(CONFIG.formspree.id)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Formspree antwortet mit ${res.status}`);
  return { demo: false };
}

function showThanks(panel, { title, text, name, email, demo }) {
  panel.innerHTML = `
    <div class="thanks" tabindex="-1">
      <h2>${esc(title)}</h2>
      <p>${esc(name ? `Hoi ${name}. ` : '')}${esc(text)} Antwort kommt an <strong>${esc(email)}</strong>.</p>
      ${demo ? '<p class="demo-note">Demo-Modus: Es wurde nichts verschickt, weil in script.js noch keine Formspree-ID eingetragen ist.</p>' : ''}
      <a class="btn btn--ghost" href="index.html">Zur Startseite</a>
    </div>`;
  $('.thanks', panel).focus();
  lenis?.scrollTo(panel, { offset: -100 });
}

function initForm({ formId, statusId, panelId, buildData, thanks, canSubmit, onSuccess }) {
  const form = $(`#${formId}`);
  if (!form) return;
  const status = $(`#${statusId}`);
  liveValidation(form);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.classList.remove('is-error');

    if (canSubmit && !canSubmit()) {
      status.textContent = 'Dein Warenkorb ist leer. Lege zuerst ein Paket hinein.';
      status.classList.add('is-error');
      return;
    }
    if (!validateForm(form)) {
      status.textContent = 'Bitte prüf die markierten Felder.';
      status.classList.add('is-error');
      return;
    }
    // Spam-Bot hat das unsichtbare Feld ausgefüllt
    if ($('[name="_gotcha"]', form).value) return;

    const values = Object.fromEntries(new FormData(form).entries());
    Object.keys(values).forEach((k) => { values[k] = String(values[k]).trim(); });

    const button = $('button[type="submit"]', form);
    const buttonHtml = button.innerHTML;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    button.textContent = 'Wird gesendet …';
    status.textContent = '';

    try {
      const result = await sendToFormspree(buildData(values));
      onSuccess?.();
      showThanks($(`#${panelId}`), { ...thanks, name: values.name, email: values.email, demo: result.demo });
    } catch (err) {
      console.error(err);
      status.textContent = `Das hat leider nicht geklappt. Versuch es nochmals oder schreib mir direkt an ${CONFIG.contact.email}.`;
      status.classList.add('is-error');
      button.disabled = false;
      button.removeAttribute('aria-busy');
      button.innerHTML = buttonHtml;
    }
  });
}

function initForms() {
  // Bestellformular
  initForm({
    formId: 'order-form',
    statusId: 'order-status',
    panelId: 'order-panel',
    canSubmit: () => Cart.items.length > 0,
    thanks: { title: CONFIG.pages.order.thanksTitle, text: CONFIG.pages.order.thanksText },
    buildData: (v) => {
      const total = fromPrice(Cart.total());
      return {
        _subject: `Neue Anfrage von ${v.name}: ${Cart.items.length} ${Cart.items.length === 1 ? 'Paket' : 'Pakete'}, ${total}`,
        Name: v.name,
        'Firma / Verein': v.firma || '–',
        email: v.email,
        Telefon: v.telefon || '–',
        Pakete: orderSummaryText(),
        Gesamtpreis: total,
        Nachricht: v.nachricht,
      };
    },
    onSuccess: () => Cart.clear(),
  });

  // Kontaktformular
  initForm({
    formId: 'contact-form',
    statusId: 'contact-status',
    panelId: 'contact-panel',
    thanks: { title: CONFIG.pages.contact.thanksTitle, text: CONFIG.pages.contact.thanksText },
    buildData: (v) => ({
      _subject: `Neue Nachricht von ${v.name}`,
      Name: v.name,
      email: v.email,
      Nachricht: v.nachricht,
    }),
  });
}

/* ---------- Startseite: Wort im Titel wechselt (Decrypted Text) ---------- */
function initHeroWords() {
  const wordEl = $('.hero-word-text');
  if (!wordEl || !canAnimate) return;
  const { words } = CONFIG.pages.start;
  let index = 0;

  gsap.from(wordEl, { duration: 1.2, delay: 0.3, ease: 'none', scrambleText: { text: '', chars: 'lowerCase', speed: 0.5 } });

  const next = () => {
    index = (index + 1) % words.length;
    gsap.to(wordEl, { duration: 1, ease: 'none', scrambleText: { text: words[index], chars: 'lowerCase', speed: 0.5, revealDelay: 0.3 } });
  };
  const timer = setInterval(() => { if (!document.hidden) next(); }, 3600);
  window.addEventListener('pagehide', () => clearInterval(timer));
}

/* ---------- Skills auf einer geschwungenen Linie (Curved Loop) ---------- */
function curvedLoopHtml() {
  return `
    <section class="curved-loop" data-curved aria-label="Skills">
      <p class="visually-hidden">${CONFIG.skills.map(esc).join(', ')}</p>
      <svg class="curved-svg" aria-hidden="true" focusable="false">
        <defs><path id="curve-path"/></defs>
        <use href="#curve-path" class="curved-guide"/>
        <text class="curved-measure"></text>
        <text class="curved-text"><textPath href="#curve-path"></textPath></text>
      </svg>
    </section>`;
}

function initCurvedLoop() {
  $$('[data-curved]').forEach((wrap) => {
    const svg = $('svg', wrap);
    const path = $('path', svg);
    const guide = $('.curved-guide', svg);
    const measure = $('.curved-measure', svg);
    const textPath = $('textPath', svg);
    const segment = CONFIG.skills
      .map((s) => `<tspan>${esc(s)}</tspan><tspan class="curved-sep">  /  </tspan>`)
      .join('');

    let segLen = 1, offset = 0, dir = -1, boost = 0, dragging = false, lastX = 0, dragVel = 0;

    const wrapOffset = () => {
      while (offset <= -segLen) offset += segLen;
      while (offset > 0) offset -= segLen;
    };
    const render = () => textPath.setAttribute('startOffset', offset.toFixed(1));

    // Linie und Text an die Breite anpassen
    function layout() {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      const d = `M ${-w * 0.08} ${h * 0.62} C ${w * 0.28} ${h * 0.98}, ${w * 0.68} ${h * 0.2}, ${w * 1.08} ${h * 0.6}`;
      path.setAttribute('d', d);
      guide.setAttribute('transform', `translate(0 ${Math.round(h * 0.09)})`);
      measure.innerHTML = segment;
      segLen = measure.getComputedTextLength() || 1;
      const copies = Math.ceil(path.getTotalLength() / segLen) + 2;
      textPath.innerHTML = segment.repeat(copies);
      wrapOffset();
      render();
    }

    layout();
    (document.fonts?.ready || Promise.resolve()).then(layout);
    new ResizeObserver(layout).observe(wrap);

    // Ziehen mit Maus oder Finger
    wrap.addEventListener('pointerdown', (e) => {
      dragging = true; lastX = e.clientX; dragVel = 0;
      wrap.setPointerCapture(e.pointerId);
    });
    wrap.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      dragVel = e.clientX - lastX; lastX = e.clientX;
      offset += dragVel; wrapOffset(); render();
    });
    const release = () => {
      if (!dragging) return;
      dragging = false;
      if (Math.abs(dragVel) > 0.5) { dir = dragVel < 0 ? -1 : 1; boost = Math.min(Math.abs(dragVel), 16); }
    };
    wrap.addEventListener('pointerup', release);
    wrap.addEventListener('pointercancel', release);

    if (!canAnimate) return; // ohne Bewegung: steht still, lässt sich aber ziehen

    // Läuft von selbst, wird beim Scrollen schneller (Scroll Velocity)
    let visible = true;
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(wrap);
    gsap.ticker.add((time, deltaTime) => {
      if (!visible || dragging) return;
      offset += dir * (1 + boost) * deltaTime * 0.06;
      boost *= 0.94;
      wrapOffset();
      render();
    });
    lenis?.on('scroll', ({ velocity }) => {
      if (Math.abs(velocity) < 0.2) return;
      dir = velocity > 0 ? -1 : 1;
      boost = Math.min(Math.abs(velocity) * 0.8, 14);
    });
  });
}

/* =========================================================
   Bewegung: Lenis (sanftes Scrollen) + GSAP
   Effekte nach Ideen aus React Bits (Split Text, Scroll Reveal,
   Scroll Velocity, Magnet), hier ohne React umgesetzt.
   ========================================================= */
function initSmoothScroll() {
  if (!canAnimate || typeof window.Lenis === 'undefined') return;
  lenis = new Lenis({ lerp: 0.1, allowNestedScroll: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Überschriften Wort für Wort (Split Text)
function initSplitHeadings() {
  const els = $$('[data-split]');
  if (!canAnimate || typeof window.SplitText === 'undefined') {
    els.forEach((el) => { el.style.visibility = 'visible'; });
    return;
  }
  els.forEach((el) => {
    try {
      SplitText.create(el, {
        type: 'words',
        mask: 'words',
        autoSplit: true,
        onSplit(self) {
          el.style.visibility = 'visible';
          return gsap.from(self.words, {
            yPercent: 110,
            duration: 0.9,
            ease: 'power4.out',
            stagger: 0.06,
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          });
        },
      });
    } catch (err) {
      el.style.visibility = 'visible';
    }
  });
}

// Inhalte beim Scrollen einblenden (Scroll Reveal)
function initReveals() {
  if (!canAnimate) return;
  const els = $$('[data-reveal]');
  gsap.set(els, { opacity: 0, y: 28 });
  ScrollTrigger.batch(els, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, overwrite: 'auto' }),
  });
}

// Projektbilder fahren wie ein Vorhang auf
function initCurtains() {
  if (!canAnimate) return;
  $$('[data-curtain]').forEach((box) => {
    const img = $('img', box);
    gsap.fromTo(img,
      { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.15 },
      { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.3, ease: 'power4.inOut', scrollTrigger: { trigger: box, start: 'top 88%', once: true } });
  });
}

// Buttons ziehen leicht zur Maus (Magnet)
function initMagnet() {
  if (!canAnimate || !window.matchMedia('(pointer: fine)').matches) return;
  $$('[data-magnet]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.2);
      y((e.clientY - r.top - r.height / 2) * 0.3);
    });
    el.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

/* ---------- Seitenwechsel aus Pixel-Blöcken ---------- */
const TRANSITION_KEY = 'bm-seitenwechsel';

function initPageTransitions() {
  if (!canAnimate) return;

  let cameWithTransition = false;
  try { cameWithTransition = sessionStorage.getItem(TRANSITION_KEY) === '1'; sessionStorage.removeItem(TRANSITION_KEY); } catch (e) { /* egal */ }

  const overlay = document.createElement('div');
  overlay.className = 'pixel-transition';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  // Raster aus Blöcken passend zum Bildschirm bauen
  function buildCells() {
    const size = window.innerWidth < 600 ? 56 : 88;
    const cols = Math.ceil(window.innerWidth / size);
    const rows = Math.ceil(window.innerHeight / size);
    overlay.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    overlay.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    overlay.innerHTML = Array.from({ length: cols * rows }, () => `<span${Math.random() < 0.12 ? ' class="is-accent"' : ''}></span>`).join('');
    return $$('span', overlay);
  }
  const hide = () => gsap.set(overlay, { autoAlpha: 0 });

  if (cameWithTransition) {
    const cells = buildCells();
    gsap.set(overlay, { autoAlpha: 1 });
    gsap.fromTo(cells, { scale: 1.02 }, { scale: 0, duration: 0.3, ease: 'power2.in', stagger: { amount: 0.5, from: 'random' }, delay: 0.05, onComplete: hide });
  } else {
    hide();
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search) return; // gleiche Seite / Anker

    e.preventDefault();
    try { sessionStorage.setItem(TRANSITION_KEY, '1'); } catch (err) { /* egal */ }
    if (Layer.active) { Layer.active.el.hidden = true; }
    const cells = buildCells();
    gsap.set(overlay, { autoAlpha: 1 });
    gsap.fromTo(cells, { scale: 0 }, {
      scale: 1.02,
      duration: 0.25,
      ease: 'power2.out',
      stagger: { amount: 0.45, from: 'random' },
      onComplete: () => { location.href = url.href; },
    });
  });

  // Zurück-Taste: Seite aus dem Cache ohne Blöcke zeigen
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      hide();
      document.documentElement.style.overflow = '';
      lenis?.start();
    }
  });
}

/* ---------- Projektbild: Pixel decken das Bild ab (Pixel Transition) ---------- */
function initPixelCovers() {
  if (!canAnimate || !window.matchMedia('(pointer: fine)').matches) return;
  $$('[data-pixel-cover]').forEach((media) => {
    const grid = $('.pixel-cover-grid', media);
    const label = $('.pixel-cover-label', media);
    grid.innerHTML = Array.from({ length: 10 * 8 }, () => `<span${Math.random() < 0.14 ? ' class="is-accent"' : ''}></span>`).join('');
    const cells = $$('span', grid);
    gsap.set(cells, { opacity: 0 });
    gsap.set(label, { opacity: 0 });
    const card = media.closest('.project-card');

    const show = () => {
      gsap.to(cells, { opacity: 1, duration: 0.01, stagger: { amount: 0.3, from: 'random' }, overwrite: true });
      gsap.to(label, { opacity: 1, duration: 0.2, delay: 0.25, overwrite: true });
    };
    const hideCover = () => {
      gsap.to(label, { opacity: 0, duration: 0.15, overwrite: true });
      gsap.to(cells, { opacity: 0, duration: 0.01, stagger: { amount: 0.3, from: 'random' }, overwrite: true });
    };
    card.addEventListener('pointerenter', show);
    card.addEventListener('pointerleave', hideCover);
  });
}

/* ---------- Kleine Titel «entschlüsseln» sich (Decrypted Text) ---------- */
function initScramble() {
  if (!canAnimate) return;
  $$('[data-scramble]').forEach((el) => {
    const text = el.textContent;
    gsap.to(el, {
      duration: 1.1,
      ease: 'none',
      scrambleText: { text, chars: 'lowerCase', speed: 0.6, revealDelay: 0.2 },
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    });
  });
}

/* ---------- Footer-Titel dehnt sich zur Maus hin (Text Pressure) ---------- */
function initStretchTitle() {
  const el = $('[data-stretch]');
  if (!el || !canAnimate) return;
  const split = SplitText.create(el, { type: 'words,chars' });
  gsap.from(split.chars, {
    yPercent: 60, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.025,
    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  });
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const area = el.closest('.footer-cta');
  const chars = split.chars.map((c) => ({
    el: c,
    scale: gsap.quickTo(c, 'scaleY', { duration: 0.35, ease: 'power3.out' }),
  }));
  gsap.set(split.chars, { transformOrigin: '50% 100%', display: 'inline-block' });

  area.addEventListener('pointermove', (e) => {
    chars.forEach((c) => {
      const r = c.el.getBoundingClientRect();
      const dist = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
      c.scale(1 + Math.max(0, 1 - dist / 170) * 0.55);
    });
  });
  area.addEventListener('pointerleave', () => chars.forEach((c) => c.scale(1)));
}

/* ---------- Skip-Link: Fokus auf den Inhalt setzen ---------- */
function initSkipLink() {
  $('.skip-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    const main = $('#main');
    main.focus();
    if (lenis) lenis.scrollTo(main, { immediate: true });
    else main.scrollIntoView();
  });
}

/* ---------- Start ---------- */
function init() {
  Cart.load();
  if (canAnimate) {
    document.documentElement.classList.add('motion');
    gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);
  }

  renderLayout();
  const render = Pages[page] || Pages.start;
  $('#main').innerHTML = render();

  initSmoothScroll();
  initPageTransitions();
  initMenu();
  initCart();
  initSkipLink();
  initHeroWords();
  initConfigurator();
  initProjectFilter();
  renderOrderCart();
  Cart.onChange(renderOrderCart);
  initForms();
  initMagnet();
  initCurvedLoop();
  initPixelCovers();
  initScramble();
  initStretchTitle();
  initCurtains();
  initReveals();

  // Überschriften erst aufteilen, wenn die Schrift geladen ist
  const fontsReady = document.fonts?.ready || Promise.resolve();
  Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(() => {
    initSplitHeadings();
    if (canAnimate) ScrollTrigger.refresh();
  });
}

/* ---------- Bibliotheken laden ---------- */
// Zuerst aus dem Ordner vendor/, falls der fehlt von jsDelivr (gleiche Versionen).
const LIBS = [
  { name: 'gsap', file: 'gsap.min.js', pkg: 'gsap@3.15.0', ready: () => window.gsap },
  { name: 'ScrollTrigger', file: 'ScrollTrigger.min.js', pkg: 'gsap@3.15.0', ready: () => window.ScrollTrigger },
  { name: 'SplitText', file: 'SplitText.min.js', pkg: 'gsap@3.15.0', ready: () => window.SplitText },
  { name: 'ScrambleText', file: 'ScrambleTextPlugin.min.js', pkg: 'gsap@3.15.0', ready: () => window.ScrambleTextPlugin },
  { name: 'Lenis', file: 'lenis.min.js', pkg: 'lenis@1.3.27', ready: () => window.Lenis },
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.onload = resolve;
    el.onerror = () => { el.remove(); reject(new Error(src)); };
    document.head.appendChild(el);
  });
}

async function loadLibs() {
  for (const lib of LIBS) {
    if (lib.ready()) continue;
    try {
      await loadScript(`vendor/${lib.file}`);
    } catch (e) {
      try {
        await loadScript(`https://cdn.jsdelivr.net/npm/${lib.pkg}/dist/${lib.file}`);
      } catch (err) {
        console.warn(`${lib.name} konnte nicht geladen werden – die Seite läuft ohne Animationen.`);
      }
    }
  }
}

async function boot() {
  if (!prefersReducedMotion) {
    // Höchstens 5 Sekunden warten, dann ohne Animationen weiter
    await Promise.race([loadLibs(), new Promise((r) => setTimeout(r, 5000))]);
  }
  canAnimate = !prefersReducedMotion && LIBS.slice(0, 4).every((lib) => lib.ready());
  init();
}

boot();
