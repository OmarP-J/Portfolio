/**
 * Home Page Component
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  template: `
    <div class="home-container">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            {{ 'HOME.HI' | translate }} <span class="highlight">Daniel</span>
          </h1>
          <h2 class="hero-subtitle">{{ 'HOME.SUBTITLE' | translate }}</h2>
          <p class="hero-description">
            {{ 'HOME.DESC' | translate }}
          </p>
          
          <div class="cta-buttons">
            <a routerLink="/projects" class="btn btn-primary">{{ 'HOME.VIEW_WORK' | translate }}</a>
            <a routerLink="/contact" class="btn btn-secondary">{{ 'HOME.GET_TOUCH' | translate }}</a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="code-window">
            <div class="window-header">
              <div class="window-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div class="code-content">
              <pre><code><span class="keyword">class</span> <span class="class-name">Developer</span> &#123;
  <span class="keyword">constructor</span>() &#123;
    <span class="keyword">this</span>.passion = <span class="string">'coding'</span>;
    <span class="keyword">this</span>.focus = <span class="string">'clean code'</span>;
  &#125;
&#125;</code></pre>
            </div>
          </div>
        </div>
      </section>
      
      <section class="highlights">
        <div class="highlight-card">
          <div class="icon">🚀</div>
          <h3>{{ 'HOME.MODERN_STACK' | translate }}</h3>
          <p>Angular, React, Python, FastAPI</p>
        </div>
        
        <div class="highlight-card">
          <div class="icon">🎯</div>
          <h3>{{ 'HOME.BEST_PRACTICES' | translate }}</h3>
          <p>Clean architecture, SOLID, testing</p>
        </div>
        
        <div class="highlight-card">
          <div class="icon">💡</div>
          <h3>{{ 'HOME.PROBLEM_SOLVER' | translate }}</h3>
          <p>Devoted to business value</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      /* Remove forced height to let content grow */
      padding-bottom: 4rem;
    }

    .hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: 6rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-title {
      font-size: 3.5rem;
      color: var(--text-main);
      margin-bottom: 1rem;
      line-height: 1.1;
      font-weight: 800;
    }

    .highlight {
      background: linear-gradient(120deg, var(--primary), #8e44ad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-subtitle {
      font-size: 1.8rem;
      color: var(--text-secondary);
      font-weight: 500;
      margin-bottom: 1.5rem;
    }

    .hero-description {
      font-size: 1.2rem;
      color: var(--text-muted);
      line-height: 1.8;
      max-width: 500px;
      margin-bottom: 2.5rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
    }

    .btn {
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn-primary {
      background: var(--primary);
      color: white;
      border: 2px solid var(--primary);
    }
    
    .btn-primary:hover {
      background: var(--primary-hover);
      border-color: var(--primary-hover);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .btn-secondary {
      background: transparent;
      color: var(--text-main);
      border: 2px solid var(--border);
    }

    .btn-secondary:hover {
      border-color: var(--text-main);
      background: var(--bg-card);
      transform: translateY(-3px);
    }

    /* Cards */
    .highlights {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .highlight-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 2.5rem;
      border-radius: 16px;
      text-align: center;
      transition: transform 0.3s, border-color 0.3s;
    }

    .highlight-card:hover {
      transform: translateY(-10px);
      border-color: var(--primary);
      box-shadow: var(--shadow);
    }

    .icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      display: inline-block;
    }

    .highlight-card h3 {
      font-size: 1.4rem;
      color: var(--text-main);
      margin-bottom: 1rem;
    }

    .highlight-card p {
      color: var(--text-secondary);
    }

    /* Code Window - Keep dark always */
    .code-window {
      background: #1e1e1e; 
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.3);
      width: 100%;
    }
    
    .window-header {
      background: #2d2d2d;
      padding: 12px 16px;
      display: flex;
      align-items: center;
    }

    .window-dots {
      display: flex;
      gap: 8px;
    }
    
    .window-dots span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    .window-dots span:nth-child(1) { background: #ff5f56; }
    .window-dots span:nth-child(2) { background: #ffbd2e; }
    .window-dots span:nth-child(3) { background: #27c93f; }

    .code-content {
      padding: 24px;
      font-family: 'Fira Code', monospace;
    }
    
    .keyword { color: #c678dd; }
    .class-name { color: #e5c07b; } 
    .string { color: #98c379; }
    code { color: #abb2bf; }

    @media (max-width: 768px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 2rem;
      }
      .cta-buttons {
        justify-content: center;
      }
      .hero-visual {
        order: -1;
      }
    }
  `]
})
export class HomeComponent { }
