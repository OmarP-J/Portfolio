/**
 * Shared Footer Component
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Portfolio</h3>
          <p>Building modern, scalable web applications with clean code and best practices.</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="mailto:your.email@example.com">Email</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Technologies</h4>
          <p class="tech-tags">
            <span>Angular</span>
            <span>Python</span>
            <span>FastAPI</span>
            <span>TypeScript</span>
          </p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Portfolio. Built with ❤️ using Angular & FastAPI.</p>
      </div>
    </footer>
  `,
    styles: [`
    .footer {
      background: #2c3e50;
      color: #ecf0f1;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .footer-section h3 {
      color: #3498db;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .footer-section h4 {
      color: #ecf0f1;
      margin-bottom: 0.8rem;
      font-size: 1.1rem;
    }

    .footer-section p {
      line-height: 1.6;
      color: #bdc3c7;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: #3498db;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tags span {
      background: #34495e;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.85rem;
      color: #ecf0f1;
    }

    .footer-bottom {
      border-top: 1px solid #34495e;
      padding: 1.5rem 2rem;
      text-align: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-bottom p {
      margin: 0;
      color: #95a5a6;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
}
