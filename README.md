# html5-framework
HTML5 &amp; CSS boilerplate für unsere Projekte bei backslash.

## 16.03.2017
### application.css
Kalender-Links mit ``:link``-Pseudoklasse versehen, damit Grundfarbwerte überschrieben werden.

## 07.03.2017
### basics.css
Farbwert von Table-Header ``th`` entfernt.
``.reset``-Klasse für Tabellen definiert. Diese entspricht der ``.presentation``-Klasse, wobei letztere für reine Layouttabellen (in Kombination mit ARIA) gedacht ist, während ``.reset`` nur die visuellen Tabellenformatierungen entfernen soll.

## 01.03.2017
### basics.css
Maximalbreite bei zentrierten Bildern/Figure ``.aligncenter`` entfernt, damit alle ausgerichteten Elemente (auch ``.alignleft`` / ``.alignright``) die gleiche Breite haben.

### responsive.css
Für kleine Viewports bleibt nun die Klasse ``.aligncenter`` zentriert, behält aber die natürliche Bildgrösse bei uns ist damit nun einheitlich mit anderen platzierten Bildern (``.alignleft`` / ``.alignright``).
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

## 06.02.2017
### basics.css
Datei-Präfixe .dotx / .DOTX für Word-Vorlagen ergänzt.

## 29.12.2016
### basics.css / application.css / responsive.css
Einige Syntaxfehler korrigiert (falsche Klammern bei :not()-Wert, column-gap-Wert, Gradient-Wert), Legacy-Prefixes bei den Gradients und der Retina-MQ entfernt.

## 23.12.2016
### basics.css
Globale ``.sr-only`` Klasse für Screenreader ergänzt, wie sie FontAwesome verwendet. Wird in teils Modulen verwendet (OSM).

## 14.12.2016
### basics.css
Tabellen-Klassen für table.grid und table.presentation ergänzt.

Grid: Standard-Tabelle mit horizontalen Trennlinien bekommt auch vertikale Trennlinien.

Presentation: Für (wenn nicht zu umgehen) Layouttabellen. Linien und Innenabstände werden zurückgesetzt; Tabelle ist also unsichtbar. Darf keine thead oder th mehr enthalten. zudem sollte manuell oder per JS das Attribut role="presentation" ergänzt werden. 

## 01.12.2016
### basics.css
.box-Modifier-Klassen ergänzt:
- .box--warning
- .box--success
- .box--error
- .box--info

## 02.11.2016
### template.htm, basics.css, layout.css
- Klasse .content auf .main geändert
- .table-responsive, .media-responsive ins basics.css verschoben
- Breakpoints auf em umgestellt (Zielwert / 16) und vereinheitlicht (768 / 520)

## 20.10.2016
### normalize.css
Update auf v5.0.0

### basics.css
Optischen Fokus bei Radio- und Checkbox-Inputs entfernt.

## 04.08.2016
### basics.css
Ghost-Button Klasse .btn-ghost ergänzt. Transparenter Button mit Rahmen.

## 02.08.2016
### normalize.css
Update auf v4.2

## 01.07.2016
### application.css
Suchresultate-Styling entfernt. Soll neu über die globalen Modulklassen gemanagt werden.

## 06.06.2016
### normalize.css
Update auf v4.1.1

## 14.04.2016
### screen.css
FontAwesome 4.6.1 ist gekommen. Neu wird im Master auf die «latest»-Version verwiesen. In der Produktivumgebung muss es sowieso neu verknüpft werden.

## 06.04.2016
### basics.css / responsive
Bild-Ausrichtungsklassen vereinfach, so dass margin und max-width nur noch an je einem Ort pro CSS angepasst werden müssen.
Hier sollten idealerweise Wert aus dem Grid eingetragen werden.

## 31.03.2016
### normalize.css (1)
### basics.css (2)
1 Update auf v4.0.0
2 sup/sub-CSS gelöscht (in normalize.css vorhanden)

## 30.03.2016
### basics.css
Grundformatierungen für iFrame eingefügt, damit die veralteten HTML-Attribute weggelassen werden können.

## 24.03.2016
### application.css / basics.css
Klassen für File-Meta-Informationen ergänzt > [pdf, 1.2 MB]
.asset-meta.
	.asset-type
	.asset-size

## 23.03.2016
### print.css
Align-Klassen für Bildausrichtungen ergänzt. small & figcaption verbessert.

## 18.03.2016
### application.css
Magnific-Gallery etwas aufgeräumt, Media-Query als Basis integriert und Flexbox für Zentrierung der Bilder in der Höhe integriert. Firefox hat dann aber einen Bug und ignoriert den margin-bottom, zudem kann es mit Legenden und zentrierten Bildern zu unschönen Effekten kommen. Da muss noch eine bessere Lösung her…

## 16.03.2016
### application.css
Klassen für das JS-Acordion ergänzt.
Klassen für Flex-Search ergänzt.

## 03.03.2016
### application.css
Verbesserungen in der GA-Kalenderdarstellung bei «letzte Karte verfügbar».

## 13.01.2016
### basics.css
Globale Klasse .none wieder ergänzt. Wird für die verschlüsselten E-Mail in Comet verwendet.
.none {
	display: none;
	}

## 06.01.2016
### template.htm
WAI-ARIA Rolen-Attribute entfernt.


## 28.12.2015
### basics.css
Zeilenabstände bei Title-Elementen auf 1.2 verkleinert. Suchfelder explizit auf border-box umgestellt (überschreibt den Wert in normalize.css)

## 21.12.2015
### application.css
.form-builder für neue Street- und Zip/Town-Komponenten der Mustaches erweitert.

## 16.11.2015
### basics.css

Die Klassen .zebra und .hover (alternierende, respektive hervorgehobene Hintergrundfarbe bei :hover) können nun auch auf Listen (ul und ol) angewendet werden.

## 21.10.2015
### basics.css

Für Buttons nun eine Klasse .btn-secondary eingeführt. .btn:link wegen Spezifitätskonflikten ergänzt.

### application.css

rem-Schriftgrössen entfernt. Tageskarten-Legenden dynamischer Gestaltet (Umbruch nun ohne Media-Queries).

## 03.09.2015
### basics.css

Von Comet verschlüsselte E-Mail-Links in die Icon-Vergabe mit aufgenommen.

a[data-email-link]:before

## 18.08.2015 
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

## 13.08.2015

### template.htm

html5shiv-Pfad auf CDN auf «latest» umgestellt.
http://cdn-backslash.ch/lib/html5shiv/latest/html5shiv.min.js

## 15.07.2015
### application.css

Bei .form-builer Checkboxen und Radios ohne Titel (daher solche die über 100% Breite gehen), 
werden nun auch die .error-Labels über 100% Breite gehen und nicht mehr gefloatet.

div:not([class*=«form-option-lst-show-title»]) label.error {
	float: none;
	width: 100%;
	}

## 03.06.2015
### basics.css

vCard-Klassen isoliert, so dass diese nur innerhalb einer vCard greifen und 
andere Elemente mit diesen Klassen nicht tangieren.

.vcard .region, 
.vcard .country-name, 
.vcard .url {
	display: none;
	}

## 01.06.2015
### normalize.css
Update auf 3.0.3

### template.htm
Dem Such-Eingabefeld das required-Attribut mitgegeben, so dass keine leere Suche mehr abgeschickt werden kann.

### basics.css
textarea {
	resize: vertical;
	}

## 23.03.2015
### template.htm / basics.css
Accesskeys auf Empfehlung von Marco Zehe entfernt. 
Der Skip-Link «Direkt zum Inhalt» ist aber drinnen geblieben und gemäss diesem Artikel verbessert worden;
http://viget.com/inspire/skip-link-primer

## 12.03.2015
### basics.css / screen.css

Die famfamfam-Icons für Doukmente mit FontAwesome ersetzt.
Entsprechend wird die FontAwesome-Schrift vom CDN nun im screen.css geladen. 

Will man lieber die alten FamFamFam-Pixelgrafiken von vom CDN laden, kann das 
alte CSS hier wieder gefunden werden:

Teams/Design/Snippets/CSS-Snippets/Dokumente-Icons FamFamFam.css

## 09.01.2015
### template.htm

ID #volltextsuche gemäss Mustache ersetzt mit #search-form

## 08.01.2015
### basics.css

legend {
	display: table;
	}

Behebt einen Bug, der verhindert dass lange Legenden im IE umbrochen werden können.
http://thatemil.com/blog/2015/01/03/reset-your-fieldset/

## 06.01.2015
**template.htm**

Footer: Created-Zeile geändert

## 23.12.2014
### template.htm

Metatags und Links für Mobilgeräteunterstützung ergänzt:

Meta: apple-mobile-web-app-titleName des Desktop-Icons auf iOS
Link: apple-touch-iconDesktop-Icon iOS, Android
Link: iconIcon für Android 5 Lollipop

## 17.12.2014
### template.htm

Metatag für Theme-Color-ergänzt. 
Wird in Android 5 (Lollipop) beim Blättern zwischen den offenen Fenstern verwendet.
Hier sollte eine markante Farbe aus dem UI eingesetzt werden. Alternative ganz rausnehmen.

<meta name=«theme-color» content=«#e2001a»>

## 13.11.2014
### print.css

.reset im print.css ergänzt

## 11.11.2014
### template.htm

Modernizr standardmässig eingebunden. Muss für die Produktiv-Umgebung angepasst werden.

## 06.11.2014
### print.css

Einige Optimierungen (Seitenumbruch nach Titeln und innerhalb Listen verhindern), .box ergänzt.

## 05.11.2014
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

## 24.10.2014
### normalize.css

Update auf 3.0.2

## 15.10.2014
### template.htm

Formular durch ein Comet .form-builde-Form ausgewechselt.

.wrapper auch wieder mit ID #wrapper versehen (damit gotop-Link weiterhin funktioniert)

## 29.09.2014
### template.htm / basics.css

Comet .form-builder Styles ergänzt.

## 18.08.2014
### template.htm / basics.css

Span .optimale-zeilenlaenge ergänzt, der im Inhalt die optimale Zeilenlänge im Bereich 45-75 Zeichen hervorhebt.

## 25.25.2014
### template.htm, layout.css, responsive.css

ID’s wo möglich durch Klassen ersetzt. 
Dort wo Anker (zb. Accesskeys) darauf zeigen sind sie geblieben.

## 11.07.2014
### ie.css

.clearfix-Klasse entfernt. Wird für IE8+ nicht mehr benötigt.

## 05.06.2014
### template.htm

Comet-Print-Links integriert (href=«print» und href=«printpdf»)

## 26.05.2014
**basics.css**

Listen-Reset .reset ist nun neutral (nicht mehr ul.reset / ol.reset) und hat dadurch kleinere Spezifität. 

## 21.05.2014
### basics.css

Alle gelisteten Datei-Suffixe auch in einer UPPERCASE-Version ergänzt. 

.docx, .DOCX usw.

## 27.03.2014
### normalize.css

Update auf 3.0.1
## 07.03.2014
### basics.css

listen-resets: margin-bottom entfernt, damit Standard-Abstand beibehalten wird

## 07.02.2014
### template.htm, basics.css

Bild mit Figure/Figcaption ergänzt.

## 30.01.2014
### normalize.css

Version 3

## 29.01.2014
### basics.css

ergänzt:

*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	}

## 01.11.2013
### normalize.css

Version 2.1.3.

## 11.10.2013
### template.htm

rev-Attribut entfernt (nicht mehr supportet in HTML5) 
http://goo.gl/E9dgRb

## 03.10.2013
### template.htm

In den IE < 9 CC’s den HTML5 Shiv ergänzt

<!—[if lt IE 9]>
	<link href=«css/ie.css» rel=«stylesheet» type=«text/css» media=«screen» />
	<script src=«http://cdn-backslash.ch/lib/html5shiv/html5shiv.js» type=«text/javascript»></script>
<![endif]—>

## 26.09.2013
### template.htm

erstellt
