/**
 * Theme Service
 * Manages light/dark mode. Dark is the default; the visitor's choice is saved.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private currentTheme = new BehaviorSubject<Theme>('dark');
    public currentTheme$ = this.currentTheme.asObservable();

    constructor() {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        this.setTheme(savedTheme ?? 'dark');
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
