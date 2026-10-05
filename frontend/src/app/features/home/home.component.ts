/**
 * Página de inicio: presentación corta + proyectos destacados.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { ProjectRowComponent } from '@shared/components/project-row/project-row.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, ProjectRowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];
  loading = true;
  error = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getFeaturedProjects().subscribe({
      next: (projects) => {
        this.featuredProjects = projects;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
