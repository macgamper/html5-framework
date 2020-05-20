# html5-framework
HTML & CSS-Boilerplate für Projekte bei backslash.

## [1.6.5] - 2020-05-20

### Changed
- default.html: Verknüpfungen der HTML-Grundstruktur mit Ihren zugehörigen Titeln von `aria-describedby` durch `aria-labelledby` ersetzt. Das validiert nun auch im *Total Validator*-Test.

## [1.6.4] - 2020-05-18

### Added
- application.css: Die Styles aus den AJAX-Menüs sind nun nicht mehr im Theme-Ordner abgelegt, sondern nun fix im Applikations-CSS. Damit sollte das Kopieren des Template-Ordners nicht mehr nötig sein.
- custom.js: Bild/Link-Selektor angepasst, der Bilder in der Galerie wegen eines anderen HTML-Aufbaus nicht berücksichtigt hatte.

## [1.6.3] - 2020-05-15

### Added
- basics.css: Helferklasse `.reverse` ergänzt, die die Reihenfolge von gewissen Elementen visuell umkehrt, damit beispielsweise Titel auch mit vorangestelltem Daum an erster Stelle stehen können.

## [1.6.2] - 2020-05-13

### Added
- custom.js: Änderung der Formular-Methode bei Suchformularen `form.js-mod-search` in alten IE‘s, um sicherzustellen, dass  die Zurück-Navigation funktioniert.
- basics.css: Eine Helferklasse `.block` ergänzt, um Inline-Elemente bei Bedarf auf Block umzustellen.

## [1.6.1] - 2020-05-08

### Added
- basics.css: Standardformatierungen für `audio` und `video` Elemente.

## [1.6] - 2020-04-30

### Changed
- basics.css: Spezifität bei den Link-Selektoren reduziert.

## [1.5.9] - 2020-04-24

### Changed
- package.json / gulpfile.js: Aktualisiert auf Gulp 4 um Node 12-Kompatibilität wieder herzustellen.

## [1.5.8] - 2020-04-20

### Changed
- layout.css: `outline` ersetzt `border`, damit es keinen Einfluss auf das Layout haben kann.

## [1.5.7] - 2020-03-05

### Added
- application.css: Basic-Styling für KataBox ergänzt.

## [1.5.6] - 2020-03-03

### Added
- default.html: Bei den Tabellen-Containern `.table-responsive` noch `role="region"` und `tabindex="0"` nachgerüstet, dass die Tabellen auch mit der Tastatur zugänglicher und scrollbar macht. [Keyboard-Friendly Scroll](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html#ResponsiveScrollingKeyboard).
- basics.css: iFrames haben nun den üblichen vertikalen Abstand von Blockelementen.
- application.css: Im Form-Builder-Part Klassen für die Anzeige von Passwortstärken ergänzt.

### Removed
- application.css: Legacy Flex-Prefixes entfernt.

## [1.5.5] - 2020-02-05

### Changed
- basics.css: Einheitlicheres Basic-Styling von Forms mit besser sichtbarem `:focus`, der gleichzeitig weniger Spezifität hat und neu berücksichtigtem `select` Element.
- print.css: Codeblöcke erhalten einen Monospace-Font.

## [1.5.4] - 2020-01-30

### Added
- default.html: `details` / `summary` Element ergänzt im Inhalt.
- basics.css: Basic-Styling für `details` / `summary` Elemente ergänzt.

```html
<details>
	<summary>Risus Fermentum Mollis Nibh.</summary>
	<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
</details>
```

### Changed
- basics.css: (noch) leere Selektoren kompakt auf eine Zeile genommen
- basics.css: `prefers-reduced-motion` greift nun auch bei Pseudo-Elementen.

## [1.5.3] - 2020-01-17

### Changed
- application.css: Farbkonstrast der Form-Hints erhöht, so dass auch der Standardwert einen A11Y-Check besteht.

### Added
- basics.css: Bei Input-Elementen die Browser `appearance` zurückgesetzt, um insbesondere in Mobil-Browsern ein konsistenteres Erscheinungsbild zu haben.

```css
…
[type=week],
textarea {
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	…
}
```

## [1.5.2] - 2020-01-16

### Changed
- application.css: Mehrspaltigen Kalender-Legende optimiert, damit die Einträge auch bei unregelmässiger Anzahl auf der gleichen Baseline dargestellt werden.
- `.mod-wrapper` Abstand wird nun wie die anderen Grundabstände im `basics.css` geregelt.

## [1.5.1] - 2020-01-09

### Added
- basics.css: Falls das `scroll-behavior: smooth;` aktiviert wurde, wird dieses nun ebenfalls in `prefers-reduced-motion` deaktiviert.

```css
/* =animations
--------------------------------------------------------------- */
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
	* {
		…
		scroll-behavior: auto !important;
	}
}
```

## [1.5] - 2019-11-20

### Removed
- basics.css: FontAwesome-File-Icons wurden bei backslash-Domains versehentlich zurückgesetzt. `a[href*=".backslash.ch"]::before` 

## [1.4.9] - 2019-10-18

### Added
- print.css: Basis-Styling für die Print-Fussnoten ergänzt.

## [1.4.8] - 2019-10-08

### Added
- basics.css: Animationen können mit der `prefers-reduced-motion` Media Query nun deaktiviert werden. [Quelle](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/).

```css
/* =animations
--------------------------------------------------------------- */
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
	* {
		animation-duration: 0.001ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.001ms !important;
	}
}
```

## [1.4.7] - 2019-09-23

### Changed
- application.css: Kleine Fehlerkorrektur
- basics.css: Margins beim `hr` eingefügt

## [1.4.6] - 2019-09-10

### Added
- print.css: `type="hidden"` wird neu ausgeblendet, als Workaround für einen Bug, der in PDF-Ausgabe das Generieren des Outputs bei Seiten mit Hidden-Inputfeldern verhinderte.

```css
[type="hidden"] {
	visibility: hidden; /* used for PDF-print */
}
```

## [1.4.5] - 2019-08-23

### Added
- basics.css: Bildergalerien-Links ohne Bild-Dateiicon.

```css
…
.mod-dam--gallery a::before {
	content: none;
	padding: 0;
}
```

## [1.4.4] - 2019-07-25

### Added
- basics.css: Webkit-Prefix für die `clip-path`-Eigenschaft `.visuallyhidden` ergänzt. 

## [1.4.3] - 2019-07-23

### Removed
- default.html: `tabindex="-1"` vom `main` Element entfernt. Dies wurde in einigen Browsern benötigt, damit der Inhalt bei Skiplinks einen Fokus bekommen konnte und wird laut [knowbility.org](https://knowbility.org/blog/2019/skip-links/) nicht mehr benötigt.
- basics.css: Aus dem gleichen Grund konnte der zugehörige CSS-Part entfernt werden: 
```css
#main:focus {
	outline: none; /* entfernt :focus des Skiplinks */
}
```

## [1.4.2] - 2019-07-01

### Changed
- print.css: Links sind nun auch schwarz. `figure`-Elemente vom Seitenumbruch ausgeschlossen.

## [1.4.1] - 2019-05-02

### Added
- default.html: Code für [Schema.org-Logo](https://developers.google.com/search/docs/data-types/logo) ergänzt. 

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "logo": "http://www.example.com/images/logo.png"
}
</script>
```

Hier kann üblicherweise das bestehende Touch-Icon eingebunden werden, sofern es dem Logo entspricht und folgenden Vorgaben einhält:
- Das Bild muss mindestens 112 × 112 Pixel groß sein.
- Die Bild-URL muss gecrawlt und indexiert werden können.
- Das Bild muss im Format JPG, PNG oder GIF vorliegen.

## [1.4.0] - 2019-04-16

### Changed
- basics.css: Skiplinks mit `z-index: 10` versehen, Helferklassen `.zebra` und `.hover` sprechen nur noch direkte Kind-Elemente an.
- print.css: geschlossene Akkordeons werden beim Print geöffnet

## [1.3.9] - 2019-04-10

### Changed
- basics.css: Helferklassen `.zebra` und `.hover` sprechen nur noch direkte Kind-Elemente an.

## [1.3.8] - 2019-04-02

### Added
- basics.css: Google-Maps-Short-URL (https://goo.gl/maps/) bei den FontAwesome-Icons ergänzt.

### Changed
- Cleanup

## [1.3.7] - 2019-03-29

### Removed
- basics.css: Bei visuell versteckten Elementen `clip: rect(0 0 0 0);` entfernt, das bei aktuellen Google Audits als A11Y-Fehler deklariert wird. Dieses wurde sowieso nur noch von IE 6/7 genutzt.

### Changed
- Cleanup

## [1.3.6] - 2019-03-13

### Changed
- Struktur: pictures-Folder in img umbenannt
- default.html: Bild-Pfade angepasst
- basics.css: Root-Element für Custom-Properties ergänzt
- basics.css: HTML-Schriftgrösse deklariert für einfache Definitionen in `rem`-Einheiten und IE < 11-Fallback.

```css
:root {
	
}
html {
	font-size: 62.5%; /* 10/16 */
}
body {
	font-size: 16px; /* IE < 11 fallback */
	font: 1.6rem/1.5 Helvetica, Arial, Geneva, sans-serif;
}
```

## [1.3.5] - 2019-02-20

### Changed
- print.css: Elemente, die nicht gedruckt werden sollten, sind nun zusammengefasst.

## [1.3.4] - 2019-01-30

### Changed
- basics.css: Der Wrapper ``.table-responsive`` bekommt nun – sobald er überfliessenden Inhalt hat – links und/oder rechts einen Schatten.

```css
.table-responsive {
	overflow-x: auto;
	overflow-y: hidden;
	width: 100%;
	max-width: 100%;
	background:
		linear-gradient(to right, #9f9 30%, rgba(255,255,255,0)), /* needs matching background-color */
		linear-gradient(to right, rgba(255,255,255,0), #9f9 70%) 0 100%, /* needs matching background-color */
		radial-gradient(farthest-side at 0% 50%, rgba(0,0,0,.2), rgba(0,0,0,0)),
		radial-gradient(farthest-side at 100% 50%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
	background-repeat: no-repeat;
	background-color: #9f9; /* needs matching background-color */
	background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
  	background-position: 0 0, 100%, 0 0, 100%;
	background-attachment: local, local, scroll, scroll;
	-webkit-overflow-scrolling: touch;
}
```

## [1.3.3] - 2019-01-24

### Changed
- basics.css / print.css: Falsches Komma gefixt

## [1.3.3] - 2018-12-28

### Added
- basics.css / print.css: Neue Helferklassen zum Ein-/Ausblenden von Elementen auf dem Medium Screen oder Print.

```css
[hidden],
.none, .screenhidden, .printvisible {
	display: none;
}
.screenvisible, .printhidden,  {
	display: block;
}
```

## [1.3.2] - 2018-12-28

### Changed
Accessibility-Verbesserungen:
- default.html: Bessere Überschriftenstruktur, neue Skiplinks
- entsprechende CSS-Anpassungen
- Platzhalter-File für touch-icon.png (anstatt 404)

## [1.3.1] - 2018-12-27

### Changed
- normalize.css: Update auf 8.0.1.

## [1.3.0] - 2018-12-19

### Added
- application.css: Neuen Reservations-Tageszustand «letzte Karte(n)» ``.cal-almostsoldout`` ergänzt.

## [1.2.9] - 2018-12-13

### Added
- application.css: Styles für Multistep-Forms ergänzt.

## [1.2.8] - 2018-12-06

### Added
- application.css: Basis-Styling für Breadcrumb-Pfade nach BEM ergänzt. Primär für Mobilgeräte mit Overflow.

### Changed
- Global die Einzüge bei allen CSS-Files harmonisiert.

## [1.2.7] - 2018-11-15

### Changed
- application.css: Radios bei der Kreditkartenauswahl werden nicht mehr vertikal aus dem Viewport geschoben, da Browser sonst den Viewport verschieben.
- mail.css: Hintergrundfarbe für Tabellenzeilen, die den Form-Legenden entsprechen ergänzt.

## [1.2.6] - 2018-11-01

### Changed
- basics.css: HR-Element mit `clear: both` ergänzt.
- mail.css: Fixes, damit Tabellen-Zeilen in Outlook Win kleinere/gleiche Abstände wie in anderen Mail-Clients haben.

## [1.2.5] - 2018-10-11

### Changed
- default.html: Suche dem Handlebars-Template angeglichen.

```html
<form class="search-form" role="search" method="post" action="#" >
	<label class="invis" for="search-input">Suche</label>
	<input type="search" id="search-input" placeholder="Suchbegriff" required />
	<button type="submit">suchen</button>
</form>
```

## [1.2.4] - 2018-09-27

### Added
- application.css: Styles für Form-Builder Multisteps ergänzt

```css
/* =form-builder multistep
--------------------------------------------------------------- */
.form-to-wizard-commands .btn + .btn {
	margin-left: 1.5em;
	}
```

### Changed
- basics.css: Zeilenabstand bei Buttons gefixt.

```css
.btn, .btn:link, .btn:visited {
	line-height: inherit;
	}
```

### Removed
- default.html: IE Conditional Comments und HTML5-Shiv entfernt.

```html
<!--[if lt IE 9]>
	<link href="css/ie.css" rel="stylesheet" type="text/css" media="screen">
	<script src="https://ext.cdn-backslash.ch/lib/html5shiv/latest/html5shiv.min.js" type="text/javascript"></script>
<![endif]-->
```

## [1.2.3] - 2018-09-13

### Added
- basics.css: Helferklasse für fixe Table-Layouts ergänzt.

```css
.tbl-fixed {
	table-layout: fixed;
	}
```

## [1.2.2] - 2018-09-12

### Added
- basics.css: Formatierungen für Tastatureingaben ergänzt ``<kbd>``.

```css
kbd {
	border-style: solid;
	border-width: 1px 2px 2px 1px;
	padding: 0 2px;
	border-radius: 3px;
	background-color: #ededed;
	}
```

## [1.2.1] - 2018-07-25

### Added
- basics.css: Links mit dem Protokoll ``tel:`` werden nun wie andere Links automatisch mit einem FontAwesome-Icon (Telefonhörer) versehen.

## [1.2.0] - 2018-05-17

### Added
- mail.css: Neues CSS für die Message-Templates (nicht im Website-CSS-Set zu verwenden)
- application.css: Styling für das neue Cookie-Law-Modul ergänzt.

```css
/* =cookie law
--------------------------------------------------------------- */
.cookie-alert {
	position: fixed;
	z-index: 1;
	bottom: 0;
	left: 0;
	width: 100%;
	border-top-style: solid;
	border-top-width: 1px;
	padding: 1em 0;
	}
.btn-row {
	text-align: center;
	}
.btn-row button + button {
	margin-left: 1em;
	}
```

- basics.css: Neue ``.btn``-Modifier ergänzt

```css
.btn--reject {
	background-color: red;
	}
.btn--accept {
	background-color: green;
	}
```

### Changed
- basics.css: Die oben genannten Regeln basieren teils auf Ergänzungen bei bestehenden Regeln. Dort wurde ``.cookie-alert`` bei den kleinen Schriftgrössen und der Warnungs-Box ergänzt.

## [1.1.9] - 2018-05-15

### Changed
- basics.css: Spezifität verkleinert auch Entfernen von überflüssigen Element-Selektoren bei den Forms.

## [1.1.8] - 2018-05-14

### Changed
- basics.css: Webkit-Styling von Suchfeldern zurücksetzen, weil es in normalize.css v8 nicht mehr enthalten ist.
```css
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
	}
```

## [1.1.7] - 2018-04-30

### Changed
- application.css: unschönen Abstand bei Bildlegenden von Magnific-Popups entfernt 
```css
.mfp-content figcaption {
	margin-top: 0;
	}
```
- basics.css: top/bottom Margins bei ``.row`` entfernt und bei der ``[class*="col-"]`` ergänzt. So muss bei einem späteren Umbruch der Cols kein Margin mehr ergänzt werden und es kommt auch nicht zu einer Verdoppelung der Margins.
```css
.row {
	clear: both;
	}
[class*="col-"] {
	position: relative;
	float: left;
	margin-bottom: 1.5em;
	margin-left: 0; /* muss aufgrund der breite berechnet werden */
	min-height: 1px;
	}
```

## [1.1.6] - 2018-04-24

### Removed
- basics.css: Bild-Breite ``auto`` entfernt, da sie sich mit dem neuen Editor-Plugin des CMS nicht verstanden haben.

```css
img {
	width: auto;
	}
```

## [1.1.5] - 2018-04-19

### Added
- basics.css: DOTX/dotx fontsome icons ergänzt

## [1.1.4] - 2018-04-05

### Added
- basics.css: .col-half ergänzt (halbe Inhaltsbreite)

### Changed
- Test-Bilder durch 16 hochauflösende und frei verwendbare Bilder ausgetauscht, die sich auch für den CMS-Test eignen.

### Removed
- custom.js: Responsive-Tabellen entfernt

## [1.1.3] - 2018-04-03

### Added
Files für Browsersync:
- gulpfile.js
- package.json

### Changed
Umbenennung des HTML-Files in default.html (Standard für Browsersync).

## [1.1.2] - 2018-02-26

### Changed
- normalize.css: Version 8.0

## [1.1.1] - 2017-11-17

### Added
- basics.css: Vorlage für im Editor besonders ausgezeichnete Bereiche integriert. Kann beispielsweise zur Kennzeichnung eines Akkordeon-Bereichs verwendet werden. ``.element``-Klasse und der  Pseudo-Content müssen je nach Fall angepasst werden. 

```css
/* =editor styles (backend)
--------------------------------------------------------------- */
.editor .element {
	position: relative;
	border: 1px dotted red;
	}
.editor .element::before {
	content: 'Container';
	position: absolute;
	top: 0;
	right: 0;
	padding: 3px;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: #fff;
	background-color: red;
	}
```

## [1.1.0] - 2017-10-04

### Removed
- print.css: Die alten Dokument-Icon-Klassen entfernt, deren Pfade sowieso nicht mehr aktuell waren.

## [1.0.9] - 2017-08-25

### Changed
- basics.css: Die .invis (aka «Screenreader-only») Klassen gemäss Artikel «[2017 edition of .visuallyhidden](https://allyjs.io/tutorials/hiding-elements.html#2017-edition-of-visuallyhidden)» angepasst. Ausgeblendete Sprunglinks werden so bei :focus/:active sichtbar in den Viewport geschoben. 

```css
.invis:not(:focus):not(:active),
.sr:not(:focus):not(:active),
.sr-only:not(:focus):not(:active) {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
	}
```

## [1.0.8] - 2017-08-23

### Added
- application.css: Form-Builder-Komponente für «Terms & Conditions» ergänzt.

```css
.form-builder .form-builder-tac {
	position: relative;
	}
.form-builder .form-builder-tac label {
	float: none;
	width: 100%;
	padding-top: 0;
	padding-right: 0;
	padding-left: 1.5em;
	font-weight: normal;
	}
.form-builder .form-builder-tac input[type=checkbox] {
	float: none;
	width: auto;
	position: absolute;
	left: 0;
	top: 0.3em;
	}
```

## [1.0.7] - 2017-08-14

### Added
- print.css: Hoch-/Tiefstellen korrekt Formatieren_ ``sub`` und ``sup`` von normalize.css übernommen.

```css
sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
	}
sub {
    bottom: -0.25em;
    }
sup {
    top: -0.5em;
    }
```

## [1.0.6] - 2017-08-09

### Added
- basics.css: Helfer-Klasse für Sticky-Elemente.

```css
.sticky {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	}
```

### Changed
- application.css: Mehrzeilige Texteinzüge bei Checkbox- und Radio-Listen korrigiert.

```css
.form-builder .form-option-lst li label {
	…
	padding-left: 1.5em;
	}
.form-builder .form-option-lst li label > input {
	…
	margin-left: -1.5em;
	}
```

## [1.0.5] - 2017-07-26

### Added
- basics.css: Helfer-Klasse für fixe Tabellenbreiten integriert
- Helfer-Klasse für Margin-Bottom ergänzt.

```css
table.fixed {
	table-layout: fixed;
	}
```

### Changed
- basics.css / application.css / print.css: Margin-Bottom-Abstände vereinheitlicht (1.5em).

## [1.0.4] - 2017-06-20

### Added
- application.css: Kalender-Klassen für einfachere Schriftschnitt und -farbenregelung ergänzt. 

## [1.0.3] - 2017-06-15

### Added
- basics.css: ``.p`` Klasse ergänzt, die Überschriften optisch in Grundtext zurücksetzt. Kann mit ``.nmb`` ergänzt werden, um auch den Margin zu entfernen.
```css
.p {
	font-size: 1em;
	font-weight: normal;
	}
	
.nmb {
	margin-bottom: 0;
	}
```

## [1.0.2] - 2017-06-08

### Added
- basics.css & application.css: Forms mit Reset-Buttons bekommen Abstände:
```css
button + button[type=reset] {
	margin-left: 1em;
	}
```

## [1.0.1] - 2017-05-23

### Changed
- screen.css: [FontAwesome-Pfad] (https://ext.cdn-backslash.ch/lib/font-awesome/latest/css/font-awesome.min.css) auf aktuellen CDN-URL umgestellt 

## [1.0.0] - 2017-05-08
### Added
- Versionierung eingeführt gemäss [Semantic Versioning 2.0.0](http://semver.org/lang/de/)
### Changed
- [normalize.css](https://github.com/necolas/normalize.css/) auf Version 7.0.0 aktualisiert
- Beginn der Umstellung des Changelog gemäss [Keep a Changelog](http://keepachangelog.com/)

## 2017-03-22
### basics.css / print.css
Print-CSS optimiert

## 2017-03-17
### application.css
Kreditkartenauswahl im OSM-Bestellprozess ergänzt.

## 2017-03-16
### application.css
Kalender-Links mit ``:link``-Pseudoklasse versehen, damit Grundfarbwerte überschrieben werden.

## 2017-03-07
### basics.css
Farbwert von Table-Header ``th`` entfernt.
``.reset``-Klasse für Tabellen definiert. Diese entspricht der ``.presentation``-Klasse, wobei letztere für reine Layouttabellen (in Kombination mit ARIA) gedacht ist, während ``.reset`` nur die visuellen Tabellenformatierungen entfernen soll.

## 2017-03-01
### basics.css
Maximalbreite bei zentrierten Bildern/Figure ``.aligncenter`` entfernt, damit alle ausgerichteten Elemente (auch ``.alignleft`` / ``.alignright``) die gleiche Breite haben.

### responsive.css
Für kleine Viewports bleibt nun die Klasse ``.aligncenter`` zentriert, behält aber die natürliche Bildgrösse bei und ist damit nun einheitlich mit anderen platzierten Bildern (``.alignleft`` / ``.alignright``).
```css
.aligncenter {
	display: table;
	width: auto;
	max-width: none;
	}
.aligncenter figcaption {
	display: table-caption;
	caption-side: bottom;
	}
```
### application.css
FlexBox-Anweisungen bei ``ul.gallery-magnific`` entfernt und damit Darstellungsprobleme in FF umgegangen, der keine %-Werte bei FlexBox-Margins akzeptierte.

## 2017-02-06
### basics.css
Datei-Präfixe .dotx / .DOTX für Word-Vorlagen ergänzt.

## 2016-12-29
### basics.css / application.css / responsive.css
Einige Syntaxfehler korrigiert (falsche Klammern bei :not()-Wert, column-gap-Wert, Gradient-Wert), Legacy-Prefixes bei den Gradients und der Retina-MQ entfernt.

## 2016-12-23
### basics.css
Globale ``.sr-only`` Klasse für Screenreader ergänzt, wie sie FontAwesome verwendet. Wird in teils Modulen verwendet (OSM).

## 2016-12-14
### basics.css
Tabellen-Klassen für table.grid und table.presentation ergänzt.

Grid: Standard-Tabelle mit horizontalen Trennlinien bekommt auch vertikale Trennlinien.

Presentation: Für (wenn nicht zu umgehen) Layouttabellen. Linien und Innenabstände werden zurückgesetzt; Tabelle ist also unsichtbar. Darf keine thead oder th mehr enthalten. zudem sollte manuell oder per JS das Attribut role="presentation" ergänzt werden. 

## 2016-12-01
### basics.css
.box-Modifier-Klassen ergänzt:
- .box--warning
- .box--success
- .box--error
- .box--info

## 2016-11-02
### template.htm, basics.css, layout.css
- Klasse .content auf .main geändert
- .table-responsive, .media-responsive ins basics.css verschoben
- Breakpoints auf em umgestellt (Zielwert / 16) und vereinheitlicht (768 / 520)

## 2016-10-20
### normalize.css
Update auf v5.0.0

### basics.css
Optischen Fokus bei Radio- und Checkbox-Inputs entfernt.

## 2016-08-04
### basics.css
Ghost-Button Klasse .btn-ghost ergänzt. Transparenter Button mit Rahmen.

## 2016-08-02
### normalize.css
Update auf v4.2

## 2016-07-01
### application.css
Suchresultate-Styling entfernt. Soll neu über die globalen Modulklassen gemanagt werden.

## 2016-06-06
### normalize.css
Update auf v4.1.1

## 2016-04-14
### screen.css
FontAwesome 4.6.1 ist gekommen. Neu wird im Master auf die «latest»-Version verwiesen. In der Produktivumgebung muss es sowieso neu verknüpft werden.

## 2016-04-06
### basics.css / responsive
Bild-Ausrichtungsklassen vereinfach, so dass margin und max-width nur noch an je einem Ort pro CSS angepasst werden müssen.
Hier sollten idealerweise Wert aus dem Grid eingetragen werden.

## 2016-03-31
### normalize.css (1)
### basics.css (2)
1 Update auf v4.0.0
2 sup/sub-CSS gelöscht (in normalize.css vorhanden)

## 2016-03-30
### basics.css
Grundformatierungen für iFrame eingefügt, damit die veralteten HTML-Attribute weggelassen werden können.

## 2016-03-24
### application.css / basics.css
Klassen für File-Meta-Informationen ergänzt > [pdf, 1.2 MB]
.asset-meta.
	.asset-type
	.asset-size

## 2016-03-23
### print.css
Align-Klassen für Bildausrichtungen ergänzt. small & figcaption verbessert.

## 2016-03-18
### application.css
Magnific-Gallery etwas aufgeräumt, Media-Query als Basis integriert und Flexbox für Zentrierung der Bilder in der Höhe integriert. Firefox hat dann aber einen Bug und ignoriert den margin-bottom, zudem kann es mit Legenden und zentrierten Bildern zu unschönen Effekten kommen. Da muss noch eine bessere Lösung her…

## 2016-03-16
### application.css
Klassen für das JS-Acordion ergänzt.
Klassen für Flex-Search ergänzt.

## 2016-03-03
### application.css
Verbesserungen in der GA-Kalenderdarstellung bei «letzte Karte verfügbar».

## 2016-01-13
### basics.css
Globale Klasse .none wieder ergänzt. Wird für die verschlüsselten E-Mail in Comet verwendet.
.none {
	display: none;
	}

## 2016-01-06
### template.htm
WAI-ARIA Rolen-Attribute entfernt, da inzwischen überall native HTML5-Elemente im Einsatz. Validator sollte dadurch keinen Fehler mehr bringen.

## 2015-12-08
### basics.css
Zeilenabstände bei Title-Elementen auf 1.2 verkleinert. Suchfelder explizit auf border-box umgestellt (überschreibt den Wert in normalize.css)

## 2015-12-21
### application.css
.form-builder für neue Street- und Zip/Town-Komponenten der Mustaches erweitert.

## 2015-11-16
### basics.css

Die Klassen .zebra und .hover (alternierende, respektive hervorgehobene Hintergrundfarbe bei :hover) können nun auch auf Listen (ul und ol) angewendet werden.

## 2015-10-21
### basics.css

Für Buttons nun eine Klasse .btn-secondary eingeführt. .btn:link wegen Spezifitätskonflikten ergänzt.

### application.css

rem-Schriftgrössen entfernt. Tageskarten-Legenden dynamischer Gestaltet (Umbruch nun ohne Media-Queries).

## 2015-09-03
### basics.css

Von Comet verschlüsselte E-Mail-Links in die Icon-Vergabe mit aufgenommen.

a[data-email-link]:before

## 2015-08-18 
### basics.css

Klassen für Bildausrichtungen im WYSIWYG-Editor ergänzt.

.alignleft {
	float: left;
	margin: 0 1.5em 1.5em 0;
	}
.aligncenter {
	clear: both;
	display: block;
	margin: 1.5em auto;
	}
.alignright {
	float: right;
	margin: 0 0 1.5em 1.5em;
	}

## 2015-08-13

### template.htm

html5shiv-Pfad auf CDN auf «latest» umgestellt.
http://cdn-backslash.ch/lib/html5shiv/latest/html5shiv.min.js

## 2015-07-15
### application.css

Bei .form-builer Checkboxen und Radios ohne Titel (daher solche die über 100% Breite gehen), 
werden nun auch die .error-Labels über 100% Breite gehen und nicht mehr gefloatet.

div:not([class*=«form-option-lst-show-title»]) label.error {
	float: none;
	width: 100%;
	}

## 2015-06-03
### basics.css

vCard-Klassen isoliert, so dass diese nur innerhalb einer vCard greifen und 
andere Elemente mit diesen Klassen nicht tangieren.

.vcard .region, 
.vcard .country-name, 
.vcard .url {
	display: none;
	}

## 2015-06-01
### normalize.css
Update auf 3.0.3

### template.htm
Dem Such-Eingabefeld das required-Attribut mitgegeben, so dass keine leere Suche mehr abgeschickt werden kann.

### basics.css
textarea {
	resize: vertical;
	}

## 2015-03-23
### template.htm / basics.css
Accesskeys auf Empfehlung von Marco Zehe entfernt. 
Der Skip-Link «Direkt zum Inhalt» ist aber drinnen geblieben und gemäss diesem Artikel verbessert worden;
http://viget.com/inspire/skip-link-primer

## 2015-03.12
### basics.css / screen.css

Die famfamfam-Icons für Doukmente mit FontAwesome ersetzt.
Entsprechend wird die FontAwesome-Schrift vom CDN nun im screen.css geladen. 

Will man lieber die alten FamFamFam-Pixelgrafiken von vom CDN laden, kann das 
alte CSS hier wieder gefunden werden:

Teams/Design/Snippets/CSS-Snippets/Dokumente-Icons FamFamFam.css

## 2015-01-09
### template.htm

ID #volltextsuche gemäss Mustache ersetzt mit #search-form

## 2015-01-08
### basics.css

legend {
	display: table;
	}

Behebt einen Bug, der verhindert dass lange Legenden im IE umbrochen werden können.
http://thatemil.com/blog/2015/01/03/reset-your-fieldset/

## 2015-01-06
**template.htm**

Footer: Created-Zeile geändert

## 2014-12-23
### template.htm

Metatags und Links für Mobilgeräteunterstützung ergänzt:

Meta: apple-mobile-web-app-titleName des Desktop-Icons auf iOS
Link: apple-touch-iconDesktop-Icon iOS, Android
Link: iconIcon für Android 5 Lollipop

## 2014-12-17
### template.htm

Metatag für Theme-Color-ergänzt. 
Wird in Android 5 (Lollipop) beim Blättern zwischen den offenen Fenstern verwendet.
Hier sollte eine markante Farbe aus dem UI eingesetzt werden. Alternative ganz rausnehmen.

<meta name=«theme-color» content=«#e2001a»>

## 2014-11-13
### print.css

.reset im print.css ergänzt

## 2014-11-11
### template.htm

Modernizr standardmässig eingebunden. Muss für die Produktiv-Umgebung angepasst werden.

## 2014-11-06
### print.css

Einige Optimierungen (Seitenumbruch nach Titeln und innerhalb Listen verhindern), .box ergänzt.

## 2014-11-05
### basics.css

Den margin-Reset von Modul-Elementen universeller gelöst. Anstatt

.box > p:last-child, 
.box > ul:last-child, 
.box > ol:last-child,
.box > dl:last-child {
	margin-bottom: 0;
	}

#### Neu:

.box > *:last-child,
fieldset > *:last-child {
	margin-bottom: 0;
	}

Idee: http://css-tricks.com/spacing-the-bottom-of-modules/

Der Ansatz «Axiomatic CSS and Lobotomized Owls» ist auch interessant, zumal er auch verschachtelt funktioniert.
Problem: Er funktioniert nicht als Reset, sondern vergibt den Margin.
http://alistapart.com/article/axiomatic-css-and-lobotomized-owls

## 2014-10-24
### normalize.css

Update auf 3.0.2

## 2014-10-15
### template.htm

Formular durch ein Comet .form-builde-Form ausgewechselt.

.wrapper auch wieder mit ID #wrapper versehen (damit gotop-Link weiterhin funktioniert)

## 2014-09-29
### template.htm / basics.css

Comet .form-builder Styles ergänzt.

## 2014-08-18
### template.htm / basics.css

Span .optimale-zeilenlaenge ergänzt, der im Inhalt die optimale Zeilenlänge im Bereich 45-75 Zeichen hervorhebt.

## 2014-07-25
### template.htm, layout.css, responsive.css

ID’s wo möglich durch Klassen ersetzt. 
Dort wo Anker (zb. Accesskeys) darauf zeigen sind sie geblieben.

## 2014-07-11
### ie.css

.clearfix-Klasse entfernt. Wird für IE8+ nicht mehr benötigt.

## 2014-06-05
### template.htm

Comet-Print-Links integriert (href=«print» und href=«printpdf»)

## 2014-05-26
**basics.css**

Listen-Reset .reset ist nun neutral (nicht mehr ul.reset / ol.reset) und hat dadurch kleinere Spezifität. 

## 2014-05-21
### basics.css

Alle gelisteten Datei-Suffixe auch in einer UPPERCASE-Version ergänzt. 

.docx, .DOCX usw.

## 2014-03-27
### normalize.css

Update auf 3.0.1
## 2014-03-07
### basics.css

listen-resets: margin-bottom entfernt, damit Standard-Abstand beibehalten wird

## 2014-02-07
### template.htm, basics.css

Bild mit Figure/Figcaption ergänzt.

## 2014-01-30
### normalize.css

Version 3

## 2014-01-29
### basics.css

ergänzt:

*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	}

## 2013-11-01
### normalize.css

Version 2.1.3.

## 2013-10-11
### template.htm

rev-Attribut entfernt (nicht mehr supportet in HTML5) 
http://goo.gl/E9dgRb

## 2013-10-03
### template.htm

In den IE < 9 CC’s den HTML5 Shiv ergänzt

<!—[if lt IE 9]>
	<link href=«css/ie.css» rel=«stylesheet» type=«text/css» media=«screen» />
	<script src=«http://cdn-backslash.ch/lib/html5shiv/html5shiv.js» type=«text/javascript»></script>
<![endif]—>

## 2013-09-26
### template.htm

erstellt