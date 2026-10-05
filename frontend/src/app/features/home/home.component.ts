/**
 * Página de inicio: presentación con foto, números, qué hago y proyectos destacados.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';
import { CERTIFICATES } from '@features/projects/certificates.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];
  projectCount = 0;
  loading = true;
  error = false;

  // Para poner tu foto, guárdala como src/assets/profile.jpg.
  // Si no existe, se muestran las iniciales.
  photoMissing = false;

  // Números del inicio, calculados con datos reales del sitio
  certificateCount = CERTIFICATES.length;
  startYear = Math.min(...CERTIFICATES.map(cert => Number(cert.date.slice(0, 4))));

  services = [
    { titleKey: 'HOME.SERVICES.FRONTEND', descKey: 'HOME.SERVICES.FRONTEND_DESC', tech: ['Angular', 'React', 'TypeScript'] },
    { titleKey: 'HOME.SERVICES.BACKEND', descKey: 'HOME.SERVICES.BACKEND_DESC', tech: ['Spring Boot', 'FastAPI', 'Node.js'] },
    { titleKey: 'HOME.SERVICES.APIS', descKey: 'HOME.SERVICES.APIS_DESC', tech: ['REST', 'JWT', 'Postman'] },
    { titleKey: 'HOME.SERVICES.DATABASES', descKey: 'HOME.SERVICES.DATABASES_DESC', tech: ['PostgreSQL', 'MySQL', 'SQL Server'] }
  ];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (projects) => {
        this.projectCount = projects.length;
        this.featuredProjects = projects.filter(project => project.featured);
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
