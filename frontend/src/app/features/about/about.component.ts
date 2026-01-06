/**
 * About Page Component
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="about-container">
      <section class="about-hero">
        <h1>About Me</h1>
        <p class="subtitle">Full-Stack Developer | Clean Code Advocate | Problem Solver</p>
      </section>
      
      <section class="content-section">
        <div class="profile-section">
          <h2>Professional Profile</h2>
          <p>
            I'm a passionate full-stack software developer with a strong focus on building
            scalable, maintainable web applications. With expertise in modern technologies
            like Angular, React, Python, and FastAPI, I create solutions that not only work
            well but are also a pleasure to maintain and extend.
          </p>
          <p>
            My approach combines technical excellence with business understanding, ensuring
            that every line of code contributes to real user value and business objectives.
          </p>
        </div>
        
        <div class="skills-section">
          <h2>Technical Expertise</h2>
          
          <div class="skill-category">
            <h3>Frontend</h3>
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
            <h3>Backend</h3>
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
            <h3>Tools & Practices</h3>
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
          <h2>Development Philosophy</h2>
          <div class="philosophy-grid">
            <div class="philosophy-card">
              <h4>Clean Code</h4>
              <p>
                Code should be readable, maintainable, and self-documenting.
                I follow SOLID principles and design patterns.
              </p>
            </div>
            
            <div class="philosophy-card">
              <h4>User-Centric</h4>
              <p>
                Every technical decision should ultimately serve the end user
                and deliver real business value.
              </p>
            </div>
            
            <div class="philosophy-card">
              <h4>Continuous Learning</h4>
              <p>
                Technology evolves rapidly. I stay current with industry trends
                and continuously refine my skills.
              </p>
            </div>
            
            <div class="philosophy-card">
              <h4>Collaboration</h4>
              <p>
                Great software is built by great teams. Clear communication
                and knowledge sharing are essential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .about-container {
      min-height: calc(100vh - 200px);
    }

    .about-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }

    .about-hero h1 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
    }

    .subtitle {
      font-size: 1.3rem;
      opacity: 0.95;
      margin: 0;
    }

    .content-section {
      max-width: 1000px;
      margin: 0 auto;
      padding: 3rem 2rem;
    }

    .profile-section {
      margin-bottom: 3rem;
    }

    .content-section h2 {
      color: #2c3e50;
      font-size: 2rem;
      margin: 0 0 1.5rem 0;
      padding-bottom: 0.8rem;
      border-bottom: 3px solid #3498db;
    }

    .content-section p {
      color: #555;
      line-height: 1.8;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .skills-section {
      margin-bottom: 3rem;
    }

    .skill-category {
      margin-bottom: 2rem;
    }

    .skill-category h3 {
      color: #34495e;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
    }

    .tech-item {
      background: #e8f4f8;
      color: #2980b9;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      text-align: center;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .tech-item:hover {
      background: #3498db;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    }

    .philosophy-section {
      margin-top: 3rem;
    }

    .philosophy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .philosophy-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      border-left: 4px solid #3498db;
      transition: all 0.3s ease;
    }

    .philosophy-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .philosophy-card h4 {
      color: #2c3e50;
      margin: 0 0 0.8rem 0;
      font-size: 1.2rem;
    }

    .philosophy-card p {
      color: #666;
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      .about-hero h1 {
        font-size: 2.2rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }

      .tech-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      }
    }
  `]
})
export class AboutComponent { }
