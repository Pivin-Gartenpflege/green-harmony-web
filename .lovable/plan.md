
# Pfeil mittig zentrieren

## Problem
Der Scroll-Pfeil im Hero-Bereich ist auf mobilen Geräten leicht nach rechts versetzt. Dies liegt daran, dass `left-1/2` sich auf die gesamte Seitenbreite bezieht, aber nicht die tatsächliche visuelle Mitte des Viewports berücksichtigt.

## Lösung
Anstatt den Pfeil mit `left-1/2 -translate-x-1/2` zu positionieren, nutzen wir einen Wrapper-Container, der die volle Breite einnimmt und Flexbox mit `justify-center` verwendet. Diese Methode ist robuster und garantiert eine exakte Zentrierung.

## Technische Änderung

**Datei:** `src/components/Hero.tsx`

Der Scroll-Indikator-Button wird in einen Wrapper mit voller Breite und Flexbox-Zentrierung eingebettet:

```tsx
{/* Scroll Indicator */}
<div className="absolute bottom-24 left-0 right-0 z-10 flex justify-center">
  <button
    onClick={scrollToServices}
    className="animate-float text-muted-foreground hover:text-primary transition-colors"
    aria-label="Nach unten scrollen"
  >
    <ArrowDown className="w-8 h-8" />
  </button>
</div>
```

**Vorteile:**
- `left-0 right-0` spannt den Container über die gesamte Breite
- `flex justify-center` zentriert den Button exakt in der Mitte
- Funktioniert unabhängig von Scrollbars oder Viewport-Unterschieden
