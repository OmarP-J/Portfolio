import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <!-- Main Info -->
        <div class="footer-main">
          <div class="header-info">
            <h2 class="name">{{ 'FOOTER.NAME_ROLE' | translate }}</h2>
            <p class="location-availability">{{ 'FOOTER.LOCATION' | translate }}</p>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a href="https://github.com/OmarP-J" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/jarolyomarpolanco" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:j.omar.polanco.j@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://wa.me/18299225649" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>

        <div class="footer-divider"></div>

        <!-- Copyright Line -->
        <div class="footer-bottom">
          <p class="copyright">{{ 'FOOTER.COPYRIGHT' | translate }}</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-card);
      border-top: 1px solid var(--border);
      padding: 4rem 2rem 3rem;
      transition: all 0.5s ease;
      margin-top: 4rem;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footer-main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
      margin-bottom: 2.5rem;
    }

    .header-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .name {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      letter-spacing: -0.02em;
    }

    .location-availability {
      font-size: 0.95rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    .social-links {
      display: flex;
      gap: 1.5rem;
    }

    .social-links a {
      color: var(--text-secondary);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--bg-body);
      border: 1px solid var(--border);
    }

    .social-links a:hover {
      color: var(--primary);
      border-color: var(--primary);
      transform: translateY(-4px);
      background: var(--bg-card);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .social-icon {
      width: 20px;
      height: 20px;
    }

    .footer-divider {
      width: 100%;
      max-width: 60px;
      height: 1px;
      background: var(--border);
      margin-bottom: 2rem;
    }

    .footer-bottom {
      width: 100%;
    }

    .copyright {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    @media (max-width: 600px) {
      .footer {
        padding: 3rem 1.5rem 2rem;
      }
      
      .social-links {
        gap: 1rem;
      }
      
      .social-links a {
        width: 42px;
        height: 42px;
      }
      
      .name {
        font-size: 1.1rem;
      }
      
      .location-availability {
        font-size: 0.85rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
