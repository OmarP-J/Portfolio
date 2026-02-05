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
            {{ 'HOME.HI' | translate }} <span class="highlight">Omar Polanco</span>
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
      padding-bottom: 6rem;
    }

    .hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: clamp(4rem, 10vh, 10rem) 2rem;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      color: var(--text-main);
      margin-bottom: 1.5rem;
      line-height: 1.05;
      font-weight: 800;
      letter-spacing: -0.04em;
    }

    .highlight {
      background: linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    .hero-subtitle {
      font-size: clamp(1.2rem, 2vw, 1.8rem);
      color: var(--text-secondary);
      font-weight: 500;
      margin-bottom: 2rem;
      letter-spacing: -0.01em;
    }

    .hero-description {
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      color: var(--text-muted);
      line-height: 1.7;
      max-width: 540px;
      margin-bottom: 3rem;
    }

    .cta-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
    }

    .btn {
      padding: 1rem 2.8rem;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn-primary {
      background: var(--primary);
      color: #fff;
      box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.3);
    }
    
    .btn-primary:hover {
      background: var(--primary-hover);
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.2);
    }

    .btn-secondary {
      background: var(--bg-card);
      color: var(--text-main);
      border: 1px solid var(--border);
    }

    .btn-secondary:hover {
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-4px);
      background: var(--bg-body);
    }

    /* Cards Section */
    .highlights {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem 4rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }

    .highlight-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 3.5rem 2.5rem;
      border-radius: 24px;
      text-align: left;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .highlight-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }

    .highlight-card:hover {
      transform: translateY(-12px);
      border-color: var(--primary);
      box-shadow: var(--shadow);
    }

    .highlight-card:hover::before {
      transform: scaleX(1);
    }

    .icon {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: var(--bg-body);
      border-radius: 16px;
    }

    .highlight-card h3 {
      font-size: 1.5rem;
      color: var(--text-main);
      margin-bottom: 1.2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .highlight-card p {
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: 1.05rem;
    }

    /* Code Window - Dark always, but themed borders */
    .code-window {
      background: #0f172a; 
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 30px 60px -12px rgba(0,0,0,0.4);
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .window-header {
      background: rgba(30, 41, 59, 0.5);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .window-dots {
      display: flex;
      gap: 10px;
    }
    
    .window-dots span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    
    .window-dots span:nth-child(1) { background: #ff5f56; }
    .window-dots span:nth-child(2) { background: #ffbd2e; }
    .window-dots span:nth-child(3) { background: #27c93f; }

    .code-content {
      padding: 32px;
      font-family: 'Fira Code', 'Monaco', monospace;
      font-size: 0.95rem;
    }
    
    .keyword { color: #c678dd; }
    .class-name { color: #e5c07b; } 
    .string { color: #98c379; }
    code { color: #abb2bf; line-height: 1.8; }

    @media (max-width: 992px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 5rem;
      }
      .hero-description {
        margin-left: auto;
        margin-right: auto;
      }
      .cta-buttons {
        justify-content: center;
      }
      .hero-visual {
        max-width: 600px;
        margin: 0 auto;
      }
    }

    @media (max-width: 576px) {
      .hero {
        padding: 4rem 1.5rem;
      }
      .cta-buttons .btn {
        width: 100%;
      }
      .highlights {
        padding: 0 1.5rem 2rem;
      }
    }
  `]
})
export class HomeComponent { }
