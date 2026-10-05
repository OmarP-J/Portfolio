/**
 * Línea de tiempo de "Sobre mí", de lo más reciente a lo más antiguo.
 *
 * Para agregar algo (por ejemplo un trabajo):
 *   1. Añade un objeto aquí con el año y dos claves nuevas.
 *   2. Escribe esas claves en translation.service.ts (en "en" y en "es").
 */
export interface TimelineItem {
    year: string;
    titleKey: string;
    descKey: string;
}

export const TIMELINE: TimelineItem[] = [
    { year: '2026', titleKey: 'ABOUT.TIMELINE.Y2026', descKey: 'ABOUT.TIMELINE.Y2026_DESC' },
    { year: '2025', titleKey: 'ABOUT.TIMELINE.Y2025', descKey: 'ABOUT.TIMELINE.Y2025_DESC' },
    { year: '2023', titleKey: 'ABOUT.TIMELINE.Y2023', descKey: 'ABOUT.TIMELINE.Y2023_DESC' },
    { year: '2022', titleKey: 'ABOUT.TIMELINE.Y2022', descKey: 'ABOUT.TIMELINE.Y2022_DESC' }
];
