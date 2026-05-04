/**
 * Project Card Component
 * Reusable card for displaying project information
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '@core/models/project.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  template: `
    <div class="project-card" *ngIf="project">
      <div class="card-image-container">
        <img [src]="'https://picsum.photos/seed/' + project.id + '/400/250'" [alt]="project.name" class="project-image">
        <div class="featured-overlay" *ngIf="project.featured">
          <span class="featured-badge">{{ 'PROJECTS.FEATURED' | translate }}</span>
        </div>
      </div>
      
      <div class="card-body">
        <h3 class="project-title">{{ 'PROJECTS.ITEMS.' + project.id + '.NAME' | translate }}</h3>
        <p class="project-description">{{ 'PROJECTS.ITEMS.' + project.id + '.DESC' | translate }}</p>
        
        <div class="tech-stack">
          <span class="tech-tag" *ngFor="let tech of project.technologies">
            <i [class]="getTechIcon(tech)" *ngIf="getTechIcon(tech)"></i>
            {{ tech }}
          </span>
        </div>
      </div>
      
      <div class="card-footer">
        <a [routerLink]="['/projects', project.id]" class="view-details-btn">
          {{ 'PROJECTS.VIEW_DETAILS' | translate }} →
        </a>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      background: var(--bg-card);
      border-radius: 20px;
      border: 1px solid var(--border);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: var(--shadow);
    }

    .project-card:hover {
      transform: translateY(-8px);
      border-color: var(--primary);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
    }

    [data-theme="dark"] .project-card:hover {
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
    }

    .card-image-container {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      background: #000;
    }

    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      opacity: 0.85;
    }

    .project-card:hover .project-image {
      transform: scale(1.05);
      opacity: 1;
    }

    .featured-overlay {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    .featured-badge {
      background: var(--primary);
      color: white;
      padding: 0.4rem 1rem;
      border-radius: 100px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }

    .card-body {
      padding: 1.8rem;
      flex: 1;
    }

    .project-title {
      color: var(--text-main);
      font-size: 1.4rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .project-description {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .tech-tag {
      background: var(--bg-body);
      color: var(--text-main);
      padding: 0.4rem 0.9rem;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      border: 1px solid var(--border);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .card-footer {
      padding: 1.2rem 1.8rem;
      border-top: 1px solid var(--border);
      background: var(--bg-body);
      opacity: 0.9;
    }

    .view-details-btn {
      color: var(--primary);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      transition: all 0.3s ease;
    }

    .view-details-btn:hover {
      color: var(--primary-hover);
      transform: translateX(5px);
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;

  getTechIcon(techName: string): string {
    if (!techName) return '';
    const tech = techName.toLowerCase();
    
    if (tech.includes('angular')) return 'devicon-angularjs-plain colored';
    if (tech.includes('spring')) return 'devicon-spring-plain colored';
    if (tech.includes('java') && !tech.includes('javascript')) return 'devicon-java-plain colored';
    if (tech.includes('mysql')) return 'devicon-mysql-plain colored';
    if (tech.includes('postgresql')) return 'devicon-postgresql-plain colored';
    if (tech.includes('sql server')) return 'devicon-microsoftsqlserver-plain colored';
    if (tech.includes('python')) return 'devicon-python-plain colored';
    if (tech.includes('fastapi')) return 'devicon-fastapi-plain colored';
    if (tech.includes('css')) return 'devicon-css3-plain colored';
    if (tech.includes('html')) return 'devicon-html5-plain colored';
    if (tech.includes('typescript')) return 'devicon-typescript-plain colored';
    if (tech.includes('docker')) return 'devicon-docker-plain colored';
    if (tech.includes('pandas')) return 'devicon-pandas-plain colored';
    if (tech.includes('redis')) return 'devicon-redis-plain colored';
    if (tech.includes('c#')) return 'devicon-csharp-plain colored';
    if (tech.includes('.net')) return 'devicon-dotnetcore-plain colored';
    if (tech.includes('javascript')) return 'devicon-javascript-plain colored';
    if (tech.includes('react')) return 'devicon-react-original colored';
    if (tech.includes('node')) return 'devicon-nodejs-plain colored';
    if (tech.includes('mongo')) return 'devicon-mongodb-plain colored';
    
    return '';
  }
}
