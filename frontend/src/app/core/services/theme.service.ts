/**
 * Theme Service
 * Manages light/dark mode
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private currentTheme = new BehaviorSubject<Theme>('light');
    public currentTheme$ = this.currentTheme.asObservable();

    constructor() {
        // Check system preference first, then local storage
        const savedTheme = localStorage.getItem('theme') as Theme;

        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setTheme('dark');
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setTheme(theme: Theme) {
        this.currentTheme.next(theme);
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }

    isDark(): boolean {
        return this.currentTheme.value === 'dark';
    }
}
