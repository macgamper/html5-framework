# html5-framework
HTML & CSS-Boilerplate für Projekte bei backslash.

## [2.4.4] - 2025-04-11

### Added
- basics.css: Die `.sticky`-Klasse wurde erweitert. Optional kann neu mit dem Modifier `.sticky--container` und dem Kindelement `.sticky__child` ein Progressive Enhancement mit *State queries* gemacht werden. Damit kann der Sticky-Status mit nativem CSS angesprochen werden.

```html
<div class="sticky sticky--container">
	<div class="sticky__child">
		<p>Inhalt</p>
	</div>
</div>
```

## [2.4.3] - 2025-04-09

### Added
- basics.css: Der meist auf der Datenschutzseite zu integrierende Button für die Cookie-Consent-Settings hat eine Klasse `.cookie-consent-settings` bekommen. In Kombination mit einem Template mit deaktiviertem Cookie Consent (= `html.js-cc-disable`), wird dort der Button ausgeblendet.
- default.html: Konsistente BEM-Klassen bei der Suche ergänzt.

## [2.4.2] - 2025-04-07

### Added
- default.html: Die Suche wurde in das `<search>`-Element gepackt, vorläufig noch ergänzt durch `role="search"`.

## [2.4.1] - 2025-04-01

### Added
- application.css: Formular-Styles für File-Upload verbessert.
- basics.css: Formular-Styles für File-Upload verbessert.

## [2.4] - 2025-03-31

### Added
- application.css: Zusätzliche Styles für Tags (mit/ohne Links).

## [2.3.9] - 2025-03-28

### Changed
- basics.css: Aktive Radios [type=radio]:checked` (Kreisauswahl) und Formfelder-Fokusrahmen skalieren nun abhängig von der Schriftgrösse mit.
- basics.css: `textarea` respektieren eine im `rows`-Attribut explizit definierte Zeilenanzahl. Ist dieses nicht angegeben, tritt die im CSS definierte Mindesthöhe (3lh) in Kraft.

## [2.3.8] - 2025-03-11

### Changed
- default.html: `blockquote` mit mehr Inhalt (mehrzeilig).
- basics.css: Verbessertes Grundstyling für `blockquote`-Elemente.
- basics.css: Aufeinanderfolgende `details`-Elemente haben nun einen kleineren Abstand zueinander.

## [2.3.7] - 2025-02-19

### Changed
- basics.css: `> *:last-child ` Selektoren alphabetisch gelistet.
- print.css: `> *:last-child ` Selektoren konsolidiert und fehlende ergänzt.

## [2.3.6] - 2025-02-11

### Added
- basics.css: Basis-Styling für `mark` ergänzt.
- print.css: Ausblenden von Cookie-Consent-Elementen optimiert.

### Changed
- application.css: Tag-Klasse `.tag` optimiert. Einzüge harmonisiert.

## [2.3.5] - 2025-01-15

### Added
- default.html: Zusätzliche Elemente für Tests aufgenommen: `<mark>` (Hervorhebung von Suchbegriffen), `<code>` (Inline-Code), `kbd` (Keyboard-Eingaben), `.lead` (Lead-Absatztext, zb. für Newsmeldungen).
- basics.css: `font-size-adjust: from-font;` ergänzt zur Angleichung der Schriftgrössen (zb. bei Inline-Elementen mit anderer Schriftart oder Fallback-Fonts).

### Removed
- basics.css: Die Klasse `.optimale-zeilenlaenge ` wurde entfernt und im HTML durch das `<mark>` Element ersetzt.

## [2.3.4] - 2025-01-14

### Changed
- basics.css: «Reduzierte Bewegung» (A11Y) berücksichtigt nun auch das neu animierte Details/Summary-Element.
- print.css: Verbesserte Darstellung des Details/Summary-Elements.

## [2.3.3] - 2024-11-29

### Changed
- basics.css: Animiertes Details/Summary-Element (Chrome). Scroll-Margins auch für die Suchtreffer-Hervorhebung mit `mark.highlight`. [Hängende Interpunktionen](https://css-tricks.com/almanac/properties/h/hanging-punctuation/) für Safari im Bereich `main :where(p, blockquote)`. Semantischer Hambuger-Zustand via `.hamburger[aria-expanded="true"]`.
- print.css: Tablesorter-Icons und -Filter werden im Druck ausgeblendet.

## [2.3.2] - 2024-09-09

### Changed
- basics.css: Clearfix für Details/Summary-Widget im Editor ergänzt, das sich mit geloateten Elementen – meist Bilder – nicht vertragen hat.

## [2.3.1] - 2024-09-04

### Changed
- package.json: Aktualisierte Konfiguration.
- basics.css: Tabelle mit `.reset` vom Basis-Tabellenstyling ausgeschlossen.
- application.css: Korrekturen Akkordeon-Styling.

## [2.3] - 2024-08-12

### Added
- basics.css: Styling für via `name`-Attribut gruppierte, aufeinanderfolgende Details-Elemente ergänzt.
- application.css: Basis-Styling für das neue Bürgerkonto-Menü-Modul ergänzt.

### Changed
- application.css: Akkordeon-Styling auf neue Klassen und funktionierend mit Grid angepasst.

## [2.3] - 2024-08-08

### Added
- application.css: Basis-Styling für das neue Bürgerkonto-Menü-Modul ergänzt.

### Changed
- application.css: Fix für Sticky-Index, wo in A-Z-Kontaktlisten die Inhalte der Tabellen überlagert wurden.

## [2.2.9] - 2024-08-06

### Changed
- basic.css: Kleine Verbesserungen bei Spezifität, Custom Properties und vereinfachten Selektoren.
- application.css: Gallery-Variablen haben mit eigenem Namespace, um nicht mit den Grid-Variablen verwechselt zu werden. Aspect-Ratio für die Gallery-Bilder. Weniger Spezifität.

## [2.2.8] - 2024-07-23

### Changed
- default.html: Pfad des helper.js umgestellt auf comet11.

## [2.2.7] - 2024-07-18

### Changed
- basics.css: Textausrichtung in Tabellen neu mit Logical Properties.

## [2.2.6] - 2024-07-12

### Added
- basics.css: Basis-Styling für Dialog Popover API.

### Changed
- basics.css: Rahmenfarbe von Tabellen neu über eine zentrale Variable anpassbar.

## [2.2.5] - 2024-05-29

### Added
- basics.css: Für Googles reCAPTCHA-Badges, die via iFrame in die Seite geschrieben werden, war ein iFrame-Fix nötig.

```css
.grecaptcha-logo iframe { /* Google reCAPTCHA-Badge */
	aspect-ratio: auto;
	margin: 0;
}
```

## [2.2.4] - 2024-05-16

### Fixed
- basics.css: Ungültige Werte bei den Logical Properties von `h5`/`h6` korrigiert.

## [2.2.3] - 2024-05-13

### Added
- basics.css / layout.css / responsive.css: In den Section-Kommentaren `MARK:` ergänzt, damit diese in der Minimap hervorgehoben werden.

## [2.2.2] - 2024-05-06

### Added
- default.html: Beim der Switch-Checkbox `role="switch"` ergänzt.
- basics.css: Die Hilfsformatierungen für den Akkordeon-Container im Editor `.editor .accordion` wurden fix integriert, damit die jeweils nicht vergessen gehen.

### Removed
- application.css: Form-Wizzard neu ohne `.btn + .btn ` – Abstände werden nun über die `gap` Eigenschaft gelöst.

## [2.2.1] - 2024-03-15

### Added
- basics.css / application.css: CSS logical properties bei `float`’s ergänzt. Wegen durchwachsenem Browsersupport wurden die physischen Werte aber ebenfalls noch belassen. Entsprechende Klassen wurden wo sinnvoll ebenfalls ergänzt.

```css
.alignleft, .align-inline-start {
	float: left;
	float: inline-start; /* not best support yet  */
	margin-block-start: 0;
	margin-inline-start: 0;
}
```

## [2.2] - 2024-03-11

### Changed
- basics.css / layout.css / application.css / responsive-css: Umstellung auf [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values). Es gibt noch einige Stellen (zb. Icon-Ausrichtungen), die zu bereinigen sind.

## [2.1] - 2024-03-07

### Changed
- screen.css: FontAwesome Update auf 6.5.1
- basics.css / application.css: Global wurden alle Schriftgrössen durch Variablen nach dem Schema `--fontsize-400` ersetzt. 
- basics.css / application.css: Für Farbdefinitionen wurden ebenfalls Variablen ergänzt. Kundenspezifische CD-Farben werden nach dem Schema `--clr-primary`, `--clr-secondary` … ergänzt. Abstufungen davon können mit den Suffixes `-dark` und `-bright` ergänzt werden, also `--clr-secondary-dark`.\
	Weiss `--clr-neutral-100 ` und Schwarz `--clr-neutral-900 ` sind dabei die Fixwerte einer neutralen Skala. Abstufungen dazwischen werden je nach Bedarf ergänzt.
	An vielen Orten sind nach wie vor noch Inline-Farbwerte definiert, die vorerst noch so bleiben. Ersetzt wurden lediglich die reinen schwarz/weiss-Werte.
- basics.css: Eine `accent-color` wurde definiert. Im Standard ist dies die Primärfarbe `--clr-primary`.
- basics.css: Für Border-Radius gibt es ebenfalls eine Variable `--radius-sm` (derzeit Buttons, Form-Inputs).
- application.css: Lokal gescopte Component-Variablen haben nun  konsequent einen Underscore vorangestellt; zb. `--_toggle-width: 3.5em;`.
- basics.css: Der Standard-Fontstack basiert nun auf Systemschriften:

```css
body {
	font: var(--fontsize-400)/1.5 system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```
	
## [2.0.41] - 2024-02-19

### Changed
- application.css: Farbkontraste von Form-Fehlermeldungen verbessert zusammen mit den Form-Hints zur einfacheren Anpassung in Variablen ausgelagert.

## [2.0.40] - 2024-01-31

### Added
- application.css: Styling von des Upload-Panels `.form-builder .js-simple-uploader-dropzone` ergänzt.

### Removed
- application.css: Webkit-Prefixes von `position: -webkit-sticky;` entfernt.

## [2.0.39] - 2023-12-22

### Changed
- basics.css: Abstand `details` / `summary` gefixt. FB-Icon mit den anderen Social-Media-Icons harmonisiert (Square-Icon). `table.grid` ist neu `.tbl-grid` um Einflüsse der Grid-Layoutklasse zu verhindern. Weitere kleine Bugfixes.
- application.css: Tabelle der Vereinsliste nach Kategorien bekommen Spaltenbreiten, um sie untereinander auszurichten, wenn genügend Platz da ist.

### Removed
- basics.css: `details` / `summary` Fallback für IE11/Edge ≤ 18 entfernt.

## [2.0.38] - 2023-09-26

### Added
- application.css: eGov-Personenlisten mit A–Z-Index bekommen nun einheitliche Spaltenbreiten über die einzelnen Tabellen hinweg.

```css
.mod-egov-contact .mod-index-box th:is(.contact-name, .contact-department, .contact-contact) {
	width: 33.333333333333333%;
}
```

### Changed
- default.html: Update auf jQuery 3.7.1, `.row` auf `.grid` umgestellt.
- basics.css: Die Spalten-Grundlagen von Float- auf Grid-Layout umgestellt. Die `.row` Klasse wird nun durch `.grid` abgelöst. Variablen *Spaltenanzahl* und *Spaltenabstand* für flexibleren Einsatz eingeführt.

### Removed
- application.css: Webkit-Prefixes bei Animationen entfernt.

## [2.0.37] - 2023-06-29

### Added
- default.html: Details/Summary mit zusätzlichem Inhalts-Container `.details-content` gemäss Comet.

### Changed
- default.html: Update auf jQuery 3.7.0
- basics.css: Weniger Code und Spezifität durch Zusammenfassungen mit `:is()`-Selektoren, besonders bei Tabellen.
- application.css: Spalten-Verhalten der Magnific-Gallery mit Variabel `--_column-count` steuern.

## [2.0.36] - 2023-05-31

### Added
- basics.css: Im `prefers-reduced-motion` wurde die Eigenschaft `view-transition-name` der neuen *View Transitions API* ergänzt.
- basics.css: iFrames bekommen standardmässig ein `aspect-ratio: 16 / 9;`. Bei Google-Maps-URL’s von `1 / 1`. Zusätzliche URL’s und Seitenverhältnisse können ergänzt werden – auch via Inline-CSS. Beispielsweise `style="--aspect-ratio: 3 / 2"`. Damit ist der Container `.media-responsive` nicht mehr zwingend nötig für das korrekte Resize der iFrames, wird aber vorläufig noch im Framework belassen.

### Changed
- basics.css: Diverse Blockelemente wie Bilder, Boxen, Deails/Summary, Videos, Tabellen oder Zitatblöcke bekommen nun die doppelten vertikalen Abstände, damit auch der Inhalt dem Weissraumbedarf moderner Layouts gerechter wird. Hier sind sicher noch weitere Anpassungen – insbesondere für Ausnahmen – nötig.
- basics.css: Für alle Überschriften wurde `text-wrap: balance;` integriert.

### Deprecated
- basics.css: Der Container `.media-responsive` für das iFrame-Resizing wird künftig entfernt, wenn sich die `aspect-ratio`-Lösung bewährt.

### Removed
- application.css: Float-Layout aus der *Magnific-Gallery* entfernt. Diese basiert damit nun ausschliesslich auf CSS-Grid.

## [2.0.35] - 2023-05-02

### Changed
- default.html: Update jQuery auf 3.6.4.
- screen.css: Update FontAwesome Subset auf 6.4.0.
- basics.css: Fokus-Klassen von Buttons haben nun keine eigene Hintergrundfarbe mehr, sondern dunklen die bestehende Buttonfarbe um 20% ab.
- application.css: `.mod-nav` ist neu ein Flex-Objekt, wodurch alte Deklarationen entfernt werden konnten.

## [2.0.34] - 2023-02-22

### Changed
- basics.css: Select-Menü-Texte wurden in iOS mit der Systemfarbe eingefärbt. Das wird nun mit `color: inherit;` verhindert.
- application.css: Code-Cleanup bei den Switch-Button-Icons, zusätzliche Custom Properties für Icon-Stärke und Border-Radius.

## [2.0.33] - 2023-02-21

### Added
- default.html: Checkbox-Switch-Button musste wegen Mobile-Problemen in einen zusätzlichen Container verschoben werden. In diesem Zuge wurden zusätzliche Elemente ergänze, die für bessere visuelle Accessibility sorgen, indem sie dem Button neben dem Farbwechsel auch entsprechende Icons zuweisen.
- application.css: Das Styling der oben genannten Switch-Button-Icons wurde ergänzt. Zudem ist der Switch mit Custom-Properties nun einfacher anpassbar.
- application.css: Formular-Buttons in der Gruppe ` .form-builder-btn-group` werden nun via Flex gelayoutet.

### Changed
- basics.css: Die graue Standardfarbe von Reset- oder Secondary-Buttons erreicht nun das vorgeschriebene Kontrastverhältnis von > 1:4.5.

## [2.0.32] - 2023-02-10

### Added
- default.html: Listen, auf denen `.reset` und damit auch `list-style: none` angewendet wird, werden mit VoiceOver in Safari nicht mehr als solche vorgelesen [Quelle](https://web.dev/website-navigation/#announce-the-number-of-items). Dem soll das ARIA-Attribut `role="list"` auf entsprechenden Listenobjekten – primär in Navigationen – entgegenwirken. In den aktuellen Handelbars-Files für Navigationen (menu.hbs und menu_entire_ajax.hbs) wurde das ergänzt.

### Changed
- basics.css / print.css: Schreibfehler beim generischer Font `monospace` korrigiert und entsprechende Klasse `.monospace` ergänzt.
- application.css: Abstand oberhalb des optionalen `.mod-entry-desc` ergänzt und beim `.mod-title` entfernt.
- application.css: Z-Index `.cookie-alert` erhöht.

### Removed

- basics.css: Durch das Ergänzen von `role="list"` kann auf den unschönen, in 1.8.1 eingeführten CSS-Workaround verzichtet werden.

## [2.0.31] - 2022-11-18

### Added
- basics.ss: Deklaration für fette Texte ergänzt. Damit können auch die in Safari vielfach problematischen Fettschriften einfacher auf alternative Schnitte umgestellt werden.

```css
strong, b,
.strong, .lead {
	font-weight: bold;
}
```

### Changed
- print.css: Pageturner `.mod-pageturner ` wird beim Druck ausgeblendet.
- application.css: Darstellung FE-Editor gefixt, der nicht mehr die ganze Breite ausgenutzt hatte bei einem umgebenden `display: flex`.

## [2.0.3] - 2022-11-10

### Changed
- screen.css: FontAwesome aktualisiert auf 6.2.0.

## [2.0.26] - 2022-11-02

### Added
- application.css: Verbesserung in der Darstellung der Matrix im Form-Builder.

### Changed
- default.html: jQuery aktualisiert auf 3.6.1.

## [2.0.25] - 2022-10-20

### Added
- application.css: Klasse `.btn-group-grid` für Button-Gruppen erstellt, die Button-Childelements nebeneinander anordnet und der Abstand regelt.

## [2.0.24] - 2022-10-04

### Added
- basics.css: Icon-Support für geschützte Dateien integriert

## [2.0.23] - 2022-08-23

### Added
- application.css: Für die Crawler-Suchresultate wurden Styles ergänzt, die primär die Dokumente-Resultate besser darstellen.

### Changed
- basics.css: Fehler korrigiert, der das ausgeblendete, zumeist leere Element `.box` (zb. für Eingabe-Feedback im Einsatz) durch `display: flow-root;` standardmässig wieder eingeblendet hatte. Dies sollte nun nur noch passieren, wenn die Boxen nicht leer und nicht ausgeblendet sind:

```css
details:not(:empty):not([hidden]),
.box:not(:empty):not([hidden]) {
	display: flow-root;
}
```

## [2.0.22] - 2022-08-09

### Added
- default.hml: Input `[type=range]` ergänzt im Musterformular. Checkbox-Toggle (Switch-Button) ergänzt.
- application.css/basics.css: Form-Builder: Fix für Anzeige der Passwortstärke nachgetragen.
- application.css: Form-Builder: Checkbox-Toggle (Switch-Button) ergänzt.

### Changed
- application.css: Form-Builder: Fix für Anzeige der Passwortstärke nachgetragen.
- application.css: Form-Builder: Clearfix-Alternative `.form-builder__item` ergänzt.
- application.css: Input `[type=range]` vertikal zentriert.

## [2.0.21] - 2022-07-12

### Changed
- application.css: Form-Builder: Fix für `form-builder-container` (Editorinhalte): Clearfix muss weiterhin funktionieren, kein Flex-Layout.

## [2.0.20] - 2022-07-08

### Added
- print.css: Diverse kleine Verbesserungen in der Printdarstellung.
- basics.css: Input `[type=range]` aufgenommen.
- application.css: Input `[type=range]` und Basisformatierungen für das FAQ-Modul aufgenommen.

### Changed
- application.css: Form-Builder: Layout basiert neu auf Flex anstatt Floats.

## [2.0.19] - 2022-06-20

### Added
- print.css: Seitengrösse in der `@page`-Regel ergänzt, Verbesserungen für Bildergalerien und Cookie-Law.

## [2.0.18] - 2022-06-15

### Changed
- custom.js: Tab in Mobile-Nav berücksichtigt nun alle fokussierbaren Elemente
- application.css: Dropdown-Komponente kompatibel mit FA6 gemacht, wo Inline-SVG’s anstatt die `.fa`-Klassen verwendet werden.

## [2.0.17] - 2022-06-01

### Added
default.html: SVG-Favicon aufgenommen.

### Changed
- basics.css: Kleine Schriftgrösse angepasst, damit der Unterschied deutlicher ist zu normalem Grundtext.
- responsive.css: Legenden von zentriert ausgerichteter Bilder waren bei kleinen Viewports nur sehr schmal, da die nötigen Angaben auf den umgebenden `div` anstatt das `figure`-Element angewendet wurden.

```css
.aligncenter > figure {
		display: table;
		width: auto;
	}
```

## [2.0.16] - 2022-04-20

### Added
- basics.css: Listen-Einträge bekommen etwas Zusatzabstand
- print.css: Listen-Einträge bekommen etwas Zusatzabstand

### Changed
- basics.css: Legenden erben ihre Farbe.

## [2.0.15] - 2022-04-07

### Added
- default.html: Neues FontAwesome 6-Kit-JS ergänzt
- screen.css: FontAwesome 5-Subset ergänzt

### Removed
- screen.css: FontAwesome 4.7 entfernt

## [2.0.14] - 2022-04-05

### Changed
- basics.css: Für die Umstellung auf [FontAwesome 6](https://fontawesome.com/icons) stehen neu Font-Subsets für die bestehenden Icons bereit, die in CSS via Pseudo-Element und Webfont eingefügt werden. Die Subsets enthalten nur noch die wichtigsten Basic-Icons. Andere Layout-Icons sollten künftig via FontAwesome 6-Kit geladen werden. Da wir von FA4.7 updaten, haben die Unicodes einiger Icons geändert.

## [2.0.13] - 2022-03-23

### Changed
- basics.css: Kleine Verbesserungen für einfacheres Überschreiben von Custom-Outline-Styles.
- basics.css: Vorbereitung für neue FontAwesome-Iconsfonts für Links. 

## [2.0.12] - 2022-03-16

### Added
- application.css: Nummern-Inputfeld «Nice Number» mit Grundstyling versehen.

### Removed
- application.css: Breite von Radios und Checkboxen in Kampagnen-Anmeldungen gefixt.

## [2.0.11] - 2022-02-15

### Added
- basics.css: Den vielfach störenden, sichtbaren Fokus bei `summary` entfernt, wenn es nicht per Tastatur bedient wird.

 ```css
summary:focus:not(:focus-visible) {
	outline: none;
	box-shadow: none;
}
```

## [2.0.10] - 2022-02-10

### Added
- basics.css: Akkordeons mit gefloateten Elementen (zB. Bilder) konnten im Frontend und Backend Probleme machen. Entsprechende Clearfixes wurden ergänzt.

```css
.js-accordion-content::after {
	content: "";
	display: table;
	clear: both;
}
.editor .accordion > *:is(h2, h3, h4, h5, h6) {
	clear: both;
}
```

### Changed
- application.css: Akkordeon-Handle etwas vereinfacht: Standard-Icon ist nun das «Angle-Up», das in offenem Zustand nun gespiegelt anstatt ersetzt wird.

## [2.0.9] - 2022-01-19

### Added
- application.css: CSS-Grundstyling für die barrierefreie Dropdown-Komponente ergänzt.

## [2.0.8] - 2022-01-19

### Removed
- basics.css: `scroll-snap-margin-top: 2ex;` (Safari < 14.1) entfernt.

## [2.0.7] - 2021-12-06

### Changed
- basics.css: `.visuallyhidden` neu mit transparentem Hintergrund um in Firefox einen weissen Pixel auf farbigem Grund zu verhindern.

## [2.0.6] - 2021-11-18

### Changed
- basics.css: Attribut-Selektoren für Icon-Links angepasst, damit sie mit den neuen URL-Parametern aus Comet zurechtkommen. Neu sind sie zudem *case insensitiv* und unterstützen damit IE11 nicht mehr.

## [2.0.5] - 2021-11-09

### Changed
- basics.css: `.link-expanded` hinter die Icon-Links verschoben, damit diese das Pseudo-Element nicht reseten bei internen Links.

## [2.0.4] - 2021-11-04

### Changed
- application.css: Form-Fix für Mobile-Grössen.

## [2.0.3] - 2021-10-28

### Added
- basics.css: Neue Klasse `.crisp` ergänzt, um die Bildglättung des Browsers gezielt zu deaktivieren (beispielsweise bei QR-Codes).

```css
.crisp {
	image-rendering: crisp-edges;
	image-rendering: pixelated;
}
```

## [2.0.2] - 2021-10-18

### Changed
- application.css: Breadcrumb-Trenner mit `position: static` versehen, damit der A11Y-Listen-Fix (1.8.1) deren Positionierung nicht mehr beeinflusst.

## [2.0.1] - 2021-10-15

### Added
- custom.js: Ergänzung in der Mobilenav, dass man mit Shift-Tab beim fokussierten Button, bei geöffnetem Menu, auf den letzten Menueintrag springt

### Changed
- custom.js: Veraltete Funktion `keyCode` mit `key` ersetzt.
- custom.js: Abfrage, dass Shift nicht gedrückt wird, bei dem normalen Tab-Listener ergänzt

## [2.0] - 2021-10-12

### Added
- default.html: Inaktive Form-Inputs (`disabled`) ergänzt.
- default.html: Der globale `.wrapper` um die ganze Seite wurde entfernt. Stattdessen befinden sich neue `.wrapper`-Elemente innerhalb jedes Hauptelements, damit die meist üblichen Hintergrundfarben die Viewportbreite ohne Umbau füllen können.
- default.html: Bei Bildern wurden die Attribute `width` und `height` ergänzt.
- basics.css: Die Inputs für Checkboxen und Radios können in modernen Browsern nativ gestylt werden. Entsprechendes CSS wurde ergänzt. Diese Typen können damit nun wie die anderen Inputs bei Bedarf farblich angepasst werden. Zudem haben damit nun auch alle Form-Inputs einen konsistenten `:focus`-Style. [Weiterführende Infos](https://www.scottohara.me/blog/2021/09/24/custom-radio-checkbox-again.html). Für Edge Legacy musste ein Reset als Fallback eingebaut werden.
- basics.css: Die Kontraste der Input-Rahmen wurden erhöht, um dem Mindeskontrastverhältnis von 4.5:1 zu entsprechen.
- basics.css: Die Spaltenbreiten der `.col-` Klassen wurden auf eine Gesamtbreite von 1410 Pixel angepasst, was in vielen Fällen dann bereits stimmt.
- application.css: Anpassungen für das native Styling von Checkboxen und Radios.
- layout.css: Alle Elemente werden konsistent nur noch via Klassen angesprochen.
- layout.css: Floats entfernt und durch Flexbox ersetzt.
- layout.css: `.wrapper`-Breite auf 1410 Pixel erhöht.
- responsive.css: Resets für Floats entfernt.

## [1.9.3] - 2021-08-19

### Added
- application.css: Neue Regel erzwingt den Umbruch von indexierten PDF-Inhalten ohne Wortabstände auf der Suchresultatseite.

```css
.search-result-desc {
	overflow-wrap: break-word; /* umbricht auch PDF-Inhalte  */
}
```

## [1.9.2] - 2021-08-12

### Added
- basics.css: Klassen für die File-Upload-Hints `.form-hint-complex` in Formularen ergänzt
- application.css: Klassen für die File-Upload-Hints `.form-hint-complex` in Formularen ergänzt

## [1.9.1] - 2021-07-26

### Added
- application.css: Styles für die Accessible-Date-Komponente ergänzt.
- basics.css: Lange Select-Beschriftungen werden nun standardmässig gekürzt mit `text-overflow: ellipsis;`. Dies war insbesondere bei der Accessible-Date-Komponente nötig, wo Tag, Monat und Jahr jeweils eigene Selects nebeneinander bekommen.
- default.html: Klassen für Navigations-Level `.level-x` ergänzt.

## [1.9] - 2021-05-04

### Added
- custom.js: Initialisierung  `responsiveTable` ergänzt.
- basics.css: Custom Properties für «natürlichere» Box-Shadows in verschiedenen Grössen ergänzt.
- application.css: `.flex-search` mit `select` ergänzt (z.B. für Rubrikenauswahl im OS), Resizing des `.flex-search button` auf Mobile verhindert.

### Removed
- default.html: `.table-responsive` entfernt (wird neu per JS gesetzt).

## [1.8.9] - 2021-04-07

### Added
- print.css: Ausgerichtete Bilder in generierten PDF’s verstehen `max-width` nicht. Darum bekommen diese Bilder nun zusätzlich eine `width`.

```css
.cms-print-pdf .alignleft,
.cms-print-pdf .aligncenter,
.cms-print-pdf .alignright {
	width: 33%; /* PDF max-width-bug */
}
```

### Changed
- jQuery auf 3.6.0 aktualisiert

## [1.8.8] - 2021-03-08

### Added
- application.css: Basic-Styles für den Online-Schalter Checkout ergänzt.

### Changed
- basics.css: `details` und `summary` vereinfacht.
- default.html: Alt-Text bei Bildern ergänzt (ergab beim verlinkten Bild neu einen Abzug im aktualisierten Lighthouse-Score).

## [1.8.7] - 2021-02-01

### Added
- basics.css: Potenziell anspringbaren Elementen – daher alle Elemente mit ID’s – wird nun ein genereller `scroll-margin-top`-Wert mitgegeben. Der verhindert, dass ein angesprungenes Element direkt am Viewport-Rand zu stehen kommt und bei Elementen die `sticky` oder `fixed` sind, kann der Wert entsprechend erhöht werden. [Quelle](https://piccalil.li/quick-tip/add-scroll-margin-to-all-elements-which-can-be-targeted).

```css
[id] {
	scroll-snap-margin-top: 2ex;
	scroll-margin-top: 2ex;
}
```

### Changed
- basics.css: Utility-Klassen, die mit Links in Verbindung stehen werden neu direkt nach den Links aufgeführt.

## [1.8.6] - 2021-01-27

### Added
- basics.css: kleinere Optimierungen
  - `details` / `.box`: `clear` ergänzt
  - `.link-expanded`: `z-index` ergänzt
  - `.tag` ergänzt bei kleinen Schriftgrössen
- application.css: kleinere Optimierungen
  - Basis für `.tags` ergänzt
  - Basis für `.cards` (Layout) und `.cards` (Content) ergänzt

## [1.8.5] - 2021-01-18

### Changed
- basics.css: `details` und `summary` Erweiterungen:
  - sind nun mit einem Custom-Pfeil gestylt und `summary` ist ganzflächig klickbar. Weil diese Elemente IE11 und Edge ≤18 noch nicht bekannt sind, wurden diese Anweisungen in eine entsprechende Support-Mediaquery gestellt. In den Legacy Browsern erscheint das `details` Element damit einfach offen, wie eine Element `.box`. 
  - Die Modifier-Klassen für Boxen lassen sich nun bei Bedarf ebenfalls auf das `details`-Element anwenden.
  - Das `:focus`-Handling von `summary` wurde dem der Form-Elemente angeglichen.
  - Ein bekanntest Problem ist noch die fehlerhafte Darstellung des Custom-Pfeils in Safari. Hier muss noch eine Lösung – wahrscheinlich via JS – gefunden werden.

### Added
- print.css: Grosse Bilder wurden in PDF’s nicht verkleinert, da `max-width` scheinbar ignoriert wird. Eine Breitenangabe soll nun zumindest die Skalierung des Bildes auf Layoutbreite erzwingen.

```css
.cms-print-pdf img {
    width: 100%;
}
```

### Removed
- default.html: [Modernizr](https://modernizr.com/) wird standardmässig nicht mehr eingebunden. Die noch genutzten Abfragen (primär für die Input-Attribute) sind nun im `helper.js` integriert. Falls weitere Features abgefragt werden sollen, kann Modernizr projektspezifisch ergänzt werden.

## [1.8.4] - 2021-01-14

### Added
- application.css: Bildergalerien erhalten ein Grid-Progressive enhancement, womit sich Galerien mit verschieden grossen Bildern besser steuern lassen. Noch im Detail zu testen.

## [1.8.3] - 2021-01-07

### Removed
- custom.js: Einige Teile wurden ins den globale helper.js ausgelagert:
  - toggleAriaExpanded-Funktion
  - TochDevice-Abfrage
  - Role `presentation` für Tabellen mit gleichnamiger Klasse
  - Submit-Methode von Suchen

## [1.8.2] - 2020-12-09

### Changed
- basics.css: Bei einigen Tabellen-Formatierungen werden die `.calendar` Tabellen ausgeschlossen um fehlende Linien und falsch formatierte `th` zu verhindern.
- basics.css: Formular-Anpassungen
  - `textarea`Elemente haben eine Mindesthöhe, da das `row` Attribut meist nicht gesetzt wird.
  - Date-Inputs in Mobile Safari haben eine Mindesthöhe, da sie ohne Inhalt zusammengestaucht werden.
  - Dropdown-Icon bei `select` gefixt, das in IE11 ohne Breitenangabe verzogen wurde.

```css
::-webkit-date-and-time-value {
	min-height: 1.25em;
}
```

## [1.8.1] - 2020-11-11

### Changed
- basics.css: Der mit 1.8 eingeführte Listen-Fix beansprucht mit dem Pseudo-Zeichen (zero-width space) in den Skiplinks, aber auch mit Block-Links zusätzliche Höhe. Er muss darum zusätzlich absolut positioniert werden. Diese Lösung ist in der Praxis weiter zu beobachten.\
	Alternativ kann das VoiceOver-Problem bei Listen mit `list-style-type: none;` auch direkt im HTML gefixt werden via `role="list"` auf dem Listen-Element. Quelle: [Fixing Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)

```css
nav li::before {
	content: "\200B"; /* fixes VoiceOver Issue */
	position: absolute;
}
```

## [1.8] - 2020-11-09

### Added
- basics.css: Fixt einen VoiceOver-Bug, der verhindert, dass Listen mit deaktivierten Listenpunkten `list-style-type: none;` als Listen vorgelesen werden. Quelle: [Accessibility issues when removing list markers](https://www.tempertemper.net/blog/accessibility-issues-when-removing-list-markers)

```css
nav li::before {
	content: "\200B"; /* fixes VoiceOver Issue */
}
```

## [1.7.9] - 2020-10-29

### Added
- application.css: `.hamburger` neu mit `display: block;`.

## [1.7.8] - 2020-10-23

### Added
- basics.css: In Browsern, welche die neue Pseudo-Klasse `:focus-visible` verstehen, wird bei Mouse-Eingaben die Outline standardmässig entfernt. [Mehr Infos](https://css-tricks.com/the-focus-visible-trick/).

```css
:focus:not(:focus-visible) {
	outline: none;
}
```

## [1.7.7] - 2020-09-16

### Added
- basics.css: Grundstyles für Inputs mit den Attributen `disabled` und `readonly` ergänzt.

### Removed
- application.css: Form-Builder-Grundstyle für Inputs mit dem Attribut `disabled` entfernt, da es neu – weniger spezifisch – im basics.css abgedeckt ist.

## [1.7.6] - 2020-09-08

### Added
- basics.css: Letztes Element in Tabellenzellen hat keinen Margin.

```css
…
th > *:last-child, td > *:last-child … {
	margin-bottom: 0;
}
```

## [1.7.5] - 2020-08-24

### Changed
- application.css: Reservations-Kalender neu mit optionaler `.cal-available` Klasse, falls nur die Zustände «ausgebucht» und «verfügbar» unterscheiden werden.\
	Breadcrumb-Trenner nun im Standard verfügbar, ebenso wie Basic-Styles für das Breadcrumb-Dropdown-Menü, wie es [der Kanton Glarus](https://www.gl.ch/services/datenschutzerklaerung.html/18) einsetzt.

## [1.7.4] - 2020-08-20

### Changed
- application.css: Kontrast der `.mod-entry-meta` Farbe hat nun den nötigen Mindestkontrast auf weissem Hintergrund.\
	Der Kalender bekommt bei Viewports unter 37.5em (600px) nun 100% Breite (diese Anweisung kam bis anhin noch aus dem Handlebars-CSS).\
	Der Breadcrumb-Liste funktioniert neu mit Flex, was einige Folgedeklarationen auf den Listenelementen erspart.

## [1.7.3] - 2020-08-11

### Changed
- basics.css: Bei Form-Elementen, wo wir den Outline-Focus durch einen `box-shadow` ersetzen, ist die Outline neu transparent definiert. So wird sichergestellt, dass die Outline im [Windows High Contrast Mode](https://benmyers.dev/blog/whcm-outlines/) dargestellt wird.

```css
…
[type="submit"]:focus {
	outline: 3px solid transparent;
	border-color: #0074a9;
	box-shadow: 0 0 0 5px rgba(21, 156, 228, 0.4);
}
```

## [1.7.2] - 2020-08-06

### Changed
- default.html: Die Grundtabelle enthält realistischere Daten, damit auch das vertikale Scrollen besser getestet werden kann.\
	Die `scope` Attribute und das `tfoot` Element wurden ergänzt.\
	Doppelpunkte bei den Form-Labels entfernt, damit es der Darstellung des Comet-Updates 1.8.7 entspricht.
- basics.css: Spaces durchgängig durch Tabs ersetzt.\
	In Tabellen werden die möglichen Kombinationen aus vertikalen und/oder horizontalen Headern sowie `thead`, `tbody` und `tfoot` besser abgedeckt.\
	Neu steht die Tabellen-Klasse `table.no-pad` zur Verfügung, die Paddings in der ersten und letzten Spalte entfernt.\
	Die Zeilen-Hintergrundfarben der `.zebra` und `.hover` Klassen sind neu RGBA-Werte, so dass sie besser mit verschiedenen Hintergrundfarben klarkommen.
- application.css: Spaces durchgängig durch Tabs ersetzt. `-webkit` Prefixes bei `transform` ausgemustert. 

### Removed
- Die Table `.vertical` Klasse konnte entfernt werden; das wird nun durch den Tabellenaufbau selber abgedeckt.

## [1.7.1] - 2020-07-27

### Added
- default.html: Die Mobile-Navigation samt Hamburger ist nun im Template integriert. Ergänzend muss nun auch das entsprechende JavaScript und jQuery geladen werden.
- application.css: Der `.hamburger` wurde fix aufgenommen.
- application.css: Eine Media-Query für das grundlegende Ein-/Ausblenden der Elemente `.mainnav` und `.mobilenav` wurde ergänzt und muss pro Website dann entsprechend angepasst werden.
- custom.js: Die Mobile-Nav-Funktionalität wurde integriert.

### Changed
- application.css: Die `.mobilenav` wird nun nicht mehr direkt gestylt, sondern ein `.mobilenav__container` darin. Damit muss die Mobile-Nav nicht mehr ausgeblendet werden, was  erlaubt den Hamburger-Button auch innerhalb der Navigation `.mobilenav` zu verwenden, [wie es für die bessere Accessibility empfohlen wird](https://www.a11ymatters.com/pattern/mobile-nav/#3--dont-hide-the-nav-element). Auch eine Media-Query für das grundlegende Ein-/Ausblenden der Elemente `.mainnav` und `.mobilenav` wurde ergänzt und muss pro Website dann entsprechend angepasst werden.

## [1.7] - 2020-07-24

### Changed
- basics.css: Die in 1.6.9 ergänzten Scrollbar-Erweiterungen in einen eigenen Abschnitt überführt, wo auch weitere Elemente, die sichtbare Scollbars haben sollen ergänzt werden können. Eine entsprechende Helper-Class `.visible-scrollbar` wurde auch eingeführt.

```css
/*=scrollbars
-------------------------------------- */
pre,
.table-responsive, .visible-scrollbar {
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
```

- application.css: Die Klasse `.error` im Formbuilder wurde entfernt. Einerseits hatte sie an der Stelle einen anderen Scope und mit den jüngsten Anpassungen wurde damit alles rot eingefärbt, nicht nur die Fehlermeldung selber. Neu darum nur noch:

```css
.form-builder input.error,
.form-builder label.error {
	color: red;
}
```

## [1.6.9] - 2020-07-16

### Changed
- basics.css: Mangels Mobilebrowser-Kompatibilität und Problemen mit den `.zebra` und `.hover` Klassen die Schatten (v 1.3.4) von Tabellen mit Overflow entfernt und stattdessen [mit gestylten Scrollbars versehen](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar), die beim Mac auch angezeigt werden, wenn man die Scrollbar-Anzeige auf «beim Scrollen» beschränkt hat.

## [1.6.8] - 2020-06-09

### Added
- basics.css: Neuer Helper um Links um ihre Elternelemente aufzuspannen.

```css
.link-expanded {
	position: relative;
}
.link-expanded a::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
```

## [1.6.7] - 2020-06-08

### Added
- application.css: Styles für das Mobile-AJAX-Menü übernommen aus den Handlebars-Templates, damit der Rest vom Master kommen kann.
- application.css: Abstand-Reset bei aufeinanderfolgenden `label.error` Elementen.

## [1.6.6] - 2020-05-22

### Added
- basics.css: `fieldset` neu mit `.reset`.
- basics.css: `fieldset` neu mit `min-width: 0;`. Stellt sicher, dass der Overflow bei zu breiten Inhalten funktioniert.
- application.css: Im `.form-builder` Klassen für `legend` ergänzt, die es erlauben Radio- oder Checkboxlisten nun wie für die Accessibility empfohlen in einem `fieldset` zu gruppieren.

### Changed
- basics.css: Farbkontraste der `.box`-Modifier wurden leicht erhöht, damit diese mindestens ein Kontrastverhältnis von 1:4.5 aufweisen (WCAG Level AA).
- basics.css: Auf Bildern wurde `display: block;` entfernt und stattdessen `vertical-align: middle;` ergänzt, das in den meisten Fällen den gleichen optischen Effekt hat und den Unterlängen-Abstand unten entfernt.

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