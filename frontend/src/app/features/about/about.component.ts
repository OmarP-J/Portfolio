/**
 * About Page Component
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { TECH_STACK } from './tech-icons.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="about-container">
      <section class="about-hero">
        <h1>{{ 'ABOUT.TITLE' | translate }}</h1>
        <p class="subtitle">{{ 'ABOUT.SUBTITLE' | translate }}</p>
      </section>
      
      <section class="content-section">
        <div class="profile-section">
          <h2>{{ 'ABOUT.PROFILE_TITLE' | translate }}</h2>
          <p>
            {{ 'ABOUT.PROFILE_DESC' | translate }}
          </p>
          <p>
            {{ 'ABOUT.PROFILE_DESC_2' | translate }}
          </p>
        </div>
        
        <div class="skills-section">
          <h2>{{ 'ABOUT.SKILLS_TITLE' | translate }}</h2>
          
          <div *ngFor="let category of techStack" class="skill-category">
            <h3>{{ category.titleKey | translate }}</h3>
            <div class="tech-grid">
              <div *ngFor="let tech of category.items" class="tech-card">
                <div class="icon-wrapper">
                  <i [class]="tech.iconClass"></i>
                </div>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <!-- Languages section -->
          <div class="skill-category">
            <h3>{{ 'ABOUT.CAT_IDIOMAS' | translate }}</h3>
            <div class="languages-grid">
              <div class="lang-item">
                <svg class="lang-flag" viewBox="0 0 36 36">
                  <rect fill="#C60B1E" width="36" height="36"/>
                  <rect fill="#FFC400" y="12" width="36" height="12"/>
                </svg>
                <span class="lang-label">{{ 'ABOUT.LANG_ES' | translate }}</span>
              </div>
              <div class="lang-item">
                <svg class="lang-flag" viewBox="0 0 36 36">
                  <rect fill="#FFF" width="36" height="36"/>
                  <path fill="#C8102E" d="M0 0h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0zm0 5.4h36v2.7H0z"/>
                  <rect fill="#012169" width="16" height="18.9"/>
                </svg>
                <span class="lang-label">{{ 'ABOUT.LANG_EN' | translate }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="philosophy-section">
          <h2>{{ 'ABOUT.PHILOSOPHY_TITLE' | translate }}</h2>
          <div class="philosophy-grid">
            <div class="philosophy-card">
              <div class="philosophy-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4>{{ 'ABOUT.PHILOSOPHY.CLEAN_CODE' | translate }}</h4>
              <p>
                {{ 'ABOUT.PHILOSOPHY.CLEAN_CODE_DESC' | translate }}
              </p>
            </div>
            
            <div class="philosophy-card">
              <div class="philosophy-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>{{ 'ABOUT.PHILOSOPHY.USER_CENTRIC' | translate }}</h4>
              <p>
                {{ 'ABOUT.PHILOSOPHY.USER_CENTRIC_DESC' | translate }}
              </p>
            </div>
            
            <div class="philosophy-card">
              <div class="philosophy-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h4>{{ 'ABOUT.PHILOSOPHY.LEARNING' | translate }}</h4>
              <p>
                {{ 'ABOUT.PHILOSOPHY.LEARNING_DESC' | translate }}
              </p>
            </div>
            
            <div class="philosophy-card">
              <div class="philosophy-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h4>{{ 'ABOUT.PHILOSOPHY.COLLABORATION' | translate }}</h4>
              <p>
                {{ 'ABOUT.PHILOSOPHY.COLLABORATION_DESC' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
      padding-bottom: 4rem;
    }

    .about-hero {
      background: var(--bg-card);
      border-bottom: 1px solid var(--border);
      padding: clamp(4rem, 8vh, 8rem) 2rem;
      text-align: center;
    }

    .about-hero h1 {
      font-size: clamp(2.5rem, 4vw, 3.5rem);
      color: var(--text-main);
      margin-bottom: 1.2rem;
      font-weight: 800;
      letter-spacing: -0.04em;
    }

    .subtitle {
      font-size: clamp(1.1rem, 1.5vw, 1.4rem);
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
      font-weight: 500;
    }

    .content-section {
      max-width: 1000px;
      margin: 0 auto;
      padding: clamp(3rem, 6vh, 6rem) 2rem;
    }

    .profile-section {
      margin-bottom: 5rem;
    }

    .content-section h2 {
      color: var(--text-main);
      font-size: clamp(1.5rem, 2.5vw, 2.2rem);
      margin-bottom: 2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .content-section h2::after {
      content: '';
      height: 2px;
      flex: 1;
      background: var(--border);
    }

    .content-section p {
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: clamp(1rem, 1.2vw, 1.15rem);
      margin-bottom: 1.5rem;
    }

    .skills-section {
      margin-bottom: 5rem;
    }

    .skill-category {
      margin-bottom: 4rem;
    }

    .skill-category h3 {
      color: var(--text-main);
      font-size: 0.9rem;
      margin-bottom: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      opacity: 0.6;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1.5rem;
    }

    .tech-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 1.5rem;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: default;
      text-align: center;
    }

    .icon-wrapper {
      font-size: 2.5rem;
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
    }

    .tech-card span {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-secondary);
      transition: color 0.3s ease;
    }

    .tech-card:hover {
      border-color: var(--primary);
      transform: translateY(-8px);
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
      background: var(--bg-body);
    }

    .tech-card:hover .icon-wrapper {
      transform: scale(1.15) rotate(5deg);
    }

    .tech-card:hover span {
      color: var(--primary);
    }

    .languages-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .lang-item {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 0.8rem 1.8rem;
      border-radius: 100px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .lang-flag {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid var(--border);
    }

    .lang-item:hover {
      border-color: var(--primary);
      transform: translateY(-4px);
      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
      background: var(--bg-body);
    }

    .lang-label {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-main);
    }

    .philosophy-section {
      margin-top: 5rem;
    }

    .philosophy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .philosophy-card {
      background: var(--bg-card);
      padding: 3rem 2.5rem;
      border-radius: 20px;
      border: 1px solid var(--border);
      transition: all 0.4s ease;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .philosophy-icon-wrapper {
      width: 48px;
      height: 48px;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    .philosophy-icon-wrapper svg {
      width: 100%;
      height: 100%;
    }

    .philosophy-card:hover {
      transform: translateY(-8px);
      border-color: var(--primary);
      box-shadow: var(--shadow);
    }

    .philosophy-card h4 {
      color: var(--text-main);
      margin-bottom: 1rem;
      font-size: 1.25rem;
      font-weight: 700;
    }

    .philosophy-card p {
      color: var(--text-muted);
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 600px) {
      .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
      .tech-card {
        padding: 1.2rem;
      }
      .icon-wrapper {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {
  techStack = TECH_STACK;
  constructor(private translationService: TranslationService) { }
}
