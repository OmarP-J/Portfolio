/**
 * Shared Header Component
 * Navigation header with Theme Toggle and Language Selector
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';
import { TranslationService, Language } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <a routerLink="/" class="logo-link">Portfolio</a>
        </div>
        
        <div class="right-section">
          <!-- Desktop Menu -->
          <ul class="nav-links" [class.mobile-open]="mobileMenuOpen">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">{{ 'NAV.HOME' | translate }}</a></li>
            <li><a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">{{ 'NAV.ABOUT' | translate }}</a></li>
            <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMobileMenu()">{{ 'NAV.PROJECTS' | translate }}</a></li>
            <li><a routerLink="/approach" routerLinkActive="active" (click)="closeMobileMenu()">{{ 'NAV.APPROACH' | translate }}</a></li>
            <li><a routerLink="/contact" routerLinkActive="active" class="contact-btn" (click)="closeMobileMenu()">{{ 'NAV.CONTACT' | translate }}</a></li>
          </ul>

          <!-- Controls (Theme & Lang) -->
          <div class="controls">
            <!-- Language Switcher -->
            <button class="lang-btn" (click)="toggleLanguage()" aria-label="Switch Language">
              {{ currentLang === 'en' ? 'ES' : 'EN' }}
            </button>

            <!-- Theme Toggle -->
            <button class="theme-btn" (click)="toggleTheme()" aria-label="Toggle Dark Mode">
              <span class="icon">{{ isDark ? '☀️' : '🌙' }}</span>
            </button>

            <!-- Mobile Hamburger -->
            <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" aria-label="Toggle menu">
              <span class="hamburger-icon" [class.active]="mobileMenuOpen"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: var(--header-bg);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
      transition: background 0.3s ease;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .logo-link {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .logo-link:hover {
      color: var(--primary-color);
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
      position: relative;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary-color);
    }

    .contact-btn {
      background: var(--primary-color);
      color: white !important;
      padding: 0.6rem 1.5rem !important;
      border-radius: 25px;
    }

    /* Buttons Styles */
    .theme-btn, .lang-btn {
      background: transparent;
      border: 2px solid var(--border-color);
      color: var(--text-primary);
      cursor: pointer;
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }

    .theme-btn:hover, .lang-btn:hover {
      background: var(--bg-secondary);
      border-color: var(--primary-color);
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .hamburger-icon {
      display: block;
      width: 25px;
      height: 2px;
      background: var(--text-primary);
      position: relative;
      transition: background 0.3s ease;
    }

    .hamburger-icon::before,
    .hamburger-icon::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 2px;
      background: var(--text-primary);
      transition: transform 0.3s ease;
    }

    .hamburger-icon::before { top: -8px; }
    .hamburger-icon::after { top: 8px; }

    .hamburger-icon.active { background: transparent; }
    .hamburger-icon.active::before { transform: rotate(45deg) translate(5px, 5px); }
    .hamburger-icon.active::after { transform: rotate(-45deg) translate(6px, -6px); }

    @media (max-width: 900px) {
      .mobile-menu-toggle { display: block; }
      
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        flex-direction: column;
        gap: 0;
        padding: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }

      .nav-links.mobile-open {
        max-height: 400px;
        padding: 1rem 2rem;
      }

      .nav-links li {
        padding: 0.8rem 0;
        border-bottom: 1px solid var(--border-color);
      }
      
      .right-section {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;
  isDark = false;
  currentLang: Language = 'en';

  constructor(
    private themeService: ThemeService,
    private translationService: TranslationService
  ) {
    this.themeService.currentTheme$.subscribe(theme => {
      this.isDark = theme === 'dark';
    });

    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'es' : 'en';
    this.translationService.setLanguage(newLang);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
