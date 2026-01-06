/**
 * Project Detail Component
 * Displays full project information
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
    project: Project | null = null;
    loading = true;
    error: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        const projectId = this.route.snapshot.paramMap.get('id');
        if (projectId) {
            this.loadProject(projectId);
        }
    }

    loadProject(id: string): void {
        this.loading = true;
        this.error = null;

        this.projectService.getProjectById(id).subscribe({
            next: (project) => {
                this.project = project;
                this.loading = false;
            },
            error: (err) => {
                this.error = err.message || 'Failed to load project';
                this.loading = false;
            }
        });
    }
}
