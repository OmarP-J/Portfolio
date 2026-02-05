/**
 * About Page Component
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

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
          
          <div class="skill-category">
            <h3>{{ 'ABOUT.FRONTEND' | translate }}</h3>
            <div class="tech-grid">
              <span class="tech-item">Angular</span>
              <span class="tech-item">React</span>
              <span class="tech-item">TypeScript</span>
              <span class="tech-item">JavaScript</span>
              <span class="tech-item">HTML5 & CSS3</span>
              <span class="tech-item">RxJS</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>{{ 'ABOUT.BACKEND' | translate }}</h3>
            <div class="tech-grid">
              <span class="tech-item">Python</span>
              <span class="tech-item">FastAPI</span>
              <span class="tech-item">Django</span>
              <span class="tech-item">Node.js</span>
              <span class="tech-item">PostgreSQL</span>
              <span class="tech-item">MongoDB</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>{{ 'ABOUT.TOOLS' | translate }}</h3>
            <div class="tech-grid">
              <span class="tech-item">Git</span>
              <span class="tech-item">Docker</span>
              <span class="tech-item">CI/CD</span>
              <span class="tech-item">Testing</span>
              <span class="tech-item">Agile</span>
              <span class="tech-item">Clean Architecture</span>
            </div>
          </div>
        </div>
        
        <div class="philosophy-section">
          <h2>{{ 'ABOUT.PHILOSOPHY_TITLE' | translate }}</h2>
          <div class="philosophy-grid">
            <div class="philosophy-card">
              <h4>{{ 'ABOUT.PHILOSOPHY.CLEAN_CODE' | translate }}</h4>
              <p>
                {{ 'ABOUT.PHILOSOPHY.CLEAN_CODE_DESC' | translate }}
              </p>
            </div>
            
            <div class="philosophy-card">
              <h4>{{ 'ABOUT.PHILOSOPHY.USER_CENTRIC' | translate }}</h4>
              <p>
                {{ 'ABOUT.PHILOSOPHY.USER_CENTRIC_DESC' | translate }}
              </p>
            </div>
            
            <div class="philosophy-card">
              <h4>{{ 'ABOUT.PHILOSOPHY.LEARNING' | translate }}</h4>
              <p>
                {{ 'ABOUT.PHILOSOPHY.LEARNING_DESC' | translate }}
              </p>
            </div>
            
            <div class="philosophy-card">
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
      margin-bottom: 3rem;
    }

    .skill-category h3 {
      color: var(--text-main);
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    .tech-item {
      background: var(--bg-card);
      color: var(--text-secondary);
      border: 1px solid var(--border);
      padding: 0.6rem 1.4rem;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 500;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .tech-item:hover {
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-4px);
      box-shadow: var(--shadow);
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
      padding: 2.5rem;
      border-radius: 20px;
      border: 1px solid var(--border);
      transition: all 0.4s ease;
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
      .content-section {
        padding: 3rem 1.5rem;
      }
      .philosophy-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  constructor(private translationService: TranslationService) { }
}
