/**
 * Projects List Page Component
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [];
    loading = true;
    error: string | null = null;

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects(): void {
        this.loading = true;
        this.error = null;

        this.projectService.getAllProjects().subscribe({
            next: (projects) => {
                this.projects = projects;
                this.loading = false;
            },
            error: (err) => {
                this.error = err.message || 'Failed to load projects';
                this.loading = false;
            }
        });
    }
}
