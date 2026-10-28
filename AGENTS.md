# Projektanweisungen

## Projekt
Dieses Repository ist unsere Boilerplate für moderne Webprojekte. Es soll schlank, verständlich, wartbar und möglichst technologieagnostisch bleiben.

## Arbeitsweise
- Bestehende Projektstruktur und Konventionen zuerst prüfen, bevor neue Dateien oder Abhängigkeiten ergänzt werden.
- Änderungen klein und fokussiert halten. Keine unaufgeforderten Refactorings.
- Bestehende, nicht zum Auftrag gehörende Änderungen im Working Tree nie überschreiben oder entfernen.
- Vor dem Abschluss passende Checks ausführen, zum Beispiel Linting, Tests oder Build.
- Bei Annahmen, Risiken oder fehlenden Entscheidungen diese kurz und konkret dokumentieren.

## Codequalität
- Bediene dich beim Schreiben von HTML, CSS und JavaScript ausschließlich der Prinzipien der [Google Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance/get-started). Nutze native APIs (wie <dialog>, Popover API, CSS Anchor Positioning oder Container Queries) statt veralteter Bibliotheken und stelle plattformbasierte Barrierefreiheit sowie die Baseline-Kompatibilität sicher.
- Lesbaren, einfachen und gut wartbaren Code bevorzugen.
- Bestehende Namenskonventionen, Formatierung und Architektur respektieren.
- Keine unbenutzten Dateien, Variablen, Imports oder Abhängigkeiten hinterlassen.
- Kommentare nur dort schreiben, wo der Code nicht bereits für sich verständlich ist.
- Accessibility, Performance und responsive Darstellung bei Frontend-Änderungen mitdenken.
- CSS wo möglich immer mit Logical Properties.

## Abhängigkeiten
- Neue Pakete nur ergänzen, wenn sie einen klaren Nutzen bringen.
- Vorhandene Lösungen und Browser-APIs gegenüber zusätzlichen Abhängigkeiten bevorzugen.
- Neue Abhängigkeiten inklusive Zweck und Auswirkungen kurz begründen.

## Git
- Keine destruktiven Git-Befehle wie `git reset --hard` oder `git checkout --` ohne ausdrückliche Aufforderung ausführen.
- Commits sollen klein, logisch zusammenhängend und klar benannt sein.
- Commit-Nachrichten nach diesem Muster verfassen: `feat: Navigation ergänzen`.

## Kommunikation
- Antworten immer auf Deutsch nach Schweizer Rechtschreibung verfassen.
- Nie «ß» verwenden.
- Anführungszeichen immer so schreiben: «Beispiel».
- Ergebnisse zuerst nennen, technische Details danach kurz zusammenfassen.