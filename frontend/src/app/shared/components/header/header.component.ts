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
            <button class="control-btn lang-btn" (click)="toggleLanguage()" aria-label="Switch Language">
              <div class="lang-content">
                <!-- Spain Flag (for switching to ES) -->
                <svg *ngIf="currentLang === 'en'" class="flag-icon" viewBox="0 0 36 36">
                  <rect fill="#C60B1E" width="36" height="36"/>
                  <rect fill="#FFC400" y="12" width="36" height="12"/>
                </svg>
                <!-- US Flag (for switching to EN) -->
                <svg *ngIf="currentLang === 'es'" class="flag-icon" viewBox="0 0 36 36">
                  <rect fill="#FFF" width="36" height="36"/>
                  <path fill="#C8102E" d="M0 0h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0z"/>
                  <rect fill="#012169" width="16" height="18.9"/>
                </svg>
                <span class="lang-text">{{ currentLang === 'en' ? 'ES' : 'EN' }}</span>
              </div>
            </button>

            <!-- Theme Toggle -->
            <button class="control-btn theme-btn" (click)="toggleTheme()" aria-label="Toggle Dark Mode">
              <svg *ngIf="!isDark" viewBox="0 0 24 24" fill="none" class="theme-icon">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg *ngIf="isDark" viewBox="0 0 24 24" fill="none" class="theme-icon">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>
              </svg>
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
      height: var(--header-height);
      background: var(--bg-header);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      padding: 0 2rem;
      transition: all 0.5s ease;
    }

    .nav-container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-link {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--primary);
      text-decoration: none;
      letter-spacing: -0.04em;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2.5rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-links a:hover, .nav-links a.active {
      color: var(--primary);
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: var(--bg-card);
      padding: 4px;
      border-radius: 100px;
      border: 1px solid var(--border);
    }

    .control-btn {
      background: transparent;
      border: none;
      color: var(--text-main);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }

    .control-btn:hover {
      background: var(--bg-body);
      color: var(--primary);
      transform: scale(1.05);
    }

    .lang-btn {
      width: auto !important;
      padding: 0 12px;
      min-width: 70px;
      border-radius: 100px !important;
    }
    
    .lang-content {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .lang-text {
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
    
    .flag-icon {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid var(--border);
    }

    .theme-icon {
      width: 20px;
      height: 20px;
    }

    .contact-btn {
      background: var(--primary);
      color: white !important;
      padding: 0.6rem 1.5rem !important;
      border-radius: 100px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .contact-btn:hover {
      background: var(--primary-hover);
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
      width: 22px;
      height: 2px;
      background: var(--text-main);
      position: relative;
      transition: all 0.3s ease;
    }

    .hamburger-icon::before, .hamburger-icon::after {
      content: '';
      position: absolute;
      left: 0;
      width: 22px;
      height: 2px;
      background: var(--text-main);
      transition: all 0.3s ease;
    }

    .hamburger-icon::before { top: -6px; }
    .hamburger-icon::after { top: 6px; }

    .hamburger-icon.active { background: transparent; }
    .hamburger-icon.active::before { transform: rotate(45deg) translate(4px, 4px); }
    .hamburger-icon.active::after { transform: rotate(-45deg) translate(4px, -4px); }

    @media (max-width: 900px) {
      .mobile-menu-toggle { display: block; }
      .nav-links {
        position: absolute;
        top: var(--header-height);
        left: 0;
        right: 0;
        background: var(--bg-card);
        flex-direction: column;
        padding: 0;
        max-height: 0;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-bottom: 0 solid var(--border);
      }
      .nav-links.mobile-open {
        max-height: 500px;
        padding-top: 1rem;
        padding-bottom: 2rem;
        border-bottom-width: 1px;
      }
      .nav-links li { width: 100%; text-align: center; }
      .nav-links a { display: block; padding: 1rem; font-size: 1.1rem; }
      .right-section { gap: 1rem; }
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
