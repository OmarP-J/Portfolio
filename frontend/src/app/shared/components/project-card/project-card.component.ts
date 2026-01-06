/**
 * Project Card Component
 * Reusable card for displaying project information
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '@core/models/project.model';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="project-card" *ngIf="project">
      <div class="card-header" *ngIf="project.featured">
        <span class="featured-badge">Featured</span>
      </div>
      
      <div class="card-body">
        <h3 class="project-title">{{ project.name }}</h3>
        <p class="project-description">{{ project.description }}</p>
        
        <div class="tech-stack">
          <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
        </div>
      </div>
      
      <div class="card-footer">
        <a [routerLink]="['/projects', project.id]" class="view-details-btn">
          View Details →
        </a>
      </div>
    </div>
  `,
    styles: [`
    .project-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .card-header {
      padding: 0.8rem 1.2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .featured-badge {
      color: white;
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .card-body {
      padding: 1.5rem;
      flex: 1;
    }

    .project-title {
      color: #2c3e50;
      font-size: 1.4rem;
      margin: 0 0 0.8rem 0;
      font-weight: 600;
    }

    .project-description {
      color: #555;
      line-height: 1.6;
      margin-bottom: 1.2rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: #e8f4f8;
      color: #2980b9;
      padding: 0.4rem 0.9rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .card-footer {
      padding: 1.2rem 1.5rem;
      border-top: 1px solid #f0f0f0;
    }

    .view-details-btn {
      color: #3498db;
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      transition: all 0.3s ease;
    }

    .view-details-btn:hover {
      color: #2980b9;
      transform: translateX(5px);
    }
  `]
})
export class ProjectCardComponent {
    @Input() project!: Project;
}
