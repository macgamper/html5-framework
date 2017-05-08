# html5-framework
HTML5 &amp; CSS boilerplate für unsere Projekte bei backslash.

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
