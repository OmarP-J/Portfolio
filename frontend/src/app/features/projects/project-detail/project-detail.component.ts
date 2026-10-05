/**
 * Detalle de un proyecto: descripción, stack, enlaces y galería (si tiene imágenes).
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslatePipe],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
    project: Project | null = null;
    loading = true;
    error = false;
    currentImageIndex = 0;

    constructor(
        private route: ActivatedRoute,
        private projectService: ProjectService
    ) { }

    // Imágenes de la galería (lista vacía si el proyecto no tiene)
    get images(): string[] {
        return this.project?.gallery_images ?? [];
    }

    ngOnInit(): void {
        const projectId = this.route.snapshot.paramMap.get('id');
        if (projectId) {
            this.loadProject(projectId);
        }
    }

    loadProject(id: string): void {
        this.loading = true;
        this.error = false;

        this.projectService.getProjectById(id).subscribe({
            next: (project) => {
                this.project = project;
                this.loading = false;
            },
            error: () => {
                this.error = true;
                this.loading = false;
            }
        });
    }

    // Al llegar al final vuelve a la primera imagen, y al revés
    nextImage(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }

    prevImage(): void {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
}
