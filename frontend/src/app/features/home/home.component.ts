/**
 * Home Page Component
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="home-container">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Hi, I'm <span class="highlight">Your Name</span>
          </h1>
          <h2 class="hero-subtitle">Full-Stack Software Developer</h2>
          <p class="hero-description">
            I build modern, scalable web applications with clean architecture,
            best practices, and a focus on delivering exceptional user experiences.
          </p>
          
          <div class="cta-buttons">
            <a routerLink="/projects" class="btn btn-primary">View My Work</a>
            <a routerLink="/contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="code-window">
            <div class="window-header">
              <div class="window-dots">
                <span></span>
                <span></span>
                <span></span>
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
          <h3>Modern Stack</h3>
          <p>Angular, React, Python, FastAPI, and more</p>
        </div>
        
        <div class="highlight-card">
          <div class="icon">🎯</div>
          <h3>Best Practices</h3>
          <p>Clean architecture, SOLID principles, testing</p>
        </div>
        
        <div class="highlight-card">
          <div class="icon">💡</div>
          <h3>Problem Solver</h3>
          <p>Focused on delivering real business value</p>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .home-container {
      min-height: calc(100vh - 200px);
    }

    .hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-title {
      font-size: 3rem;
      color: #2c3e50;
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .highlight {
      color: #3498db;
      position: relative;
    }

    .hero-subtitle {
      font-size: 1.8rem;
      color: #555;
      font-weight: 400;
      margin: 0 0 1.5rem 0;
    }

    .hero-description {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 0.9rem 2rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-primary {
      background: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background: #2980b9;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
    }

    .btn-secondary {
      background: white;
      color: #3498db;
      border: 2px solid #3498db;
    }

    .btn-secondary:hover {
      background: #3498db;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(52, 152, 219, 0.2);
    }

    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .code-window {
      background: #1e1e1e;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width: 500px;
    }

    .window-header {
      background: #323232;
      padding: 0.8rem 1rem;
    }

    .window-dots {
      display: flex;
      gap: 0.5rem;
    }

    .window-dots span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: block;
    }

    .window-dots span:nth-child(1) { background: #ff5f56; }
    .window-dots span:nth-child(2) { background: #ffbd2e; }
    .window-dots span:nth-child(3) { background: #27c93f; }

    .code-content {
      padding: 1.5rem;
      font-family: 'Courier New', monospace;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .code-content code {
      color: #d4d4d4;
    }

    .keyword { color: #569cd6; }
    .class-name { color: #4ec9b0; }
    .string { color: #ce9178; }

    .highlights {
      max-width: 1200px;
      margin: 4rem auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .highlight-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .highlight-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .highlight-card h3 {
      color: #2c3e50;
      font-size: 1.3rem;
      margin: 0 0 0.8rem 0;
    }

    .highlight-card p {
      color: #666;
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 968px) {
      .hero {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.5rem;
      }

      .hero-visual {
        order: -1;
      }
    }

    @media (max-width: 576px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.3rem;
      }

      .cta-buttons {
        flex-direction: column;
      }

      .btn {
        text-align: center;
      }
    }
  `]
})
export class HomeComponent { }
