import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { TECH_STACK } from '@features/about/tech-icons.constants';

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
    error: string | null = null;
    currentImageIndex = 0;
    private autoPlayInterval: any;

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

    ngOnDestroy(): void {
        this.stopAutoPlay();
    }

    loadProject(id: string): void {
        this.loading = true;
        this.error = null;

        this.projectService.getProjectById(id).subscribe({
            next: (project) => {
                this.project = project;
                if (project.gallery_images) {
                    this.preloadImages(project.gallery_images);
                }
                this.loading = false;
                this.startAutoPlay();
            },
            error: (err) => {
                this.error = err.message || 'Failed to load project';
                this.loading = false;
            }
        });
    }

    nextImage(): void {
        if (!this.project?.gallery_images?.length) return;
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project.gallery_images.length;
    }

    prevImage(): void {
        if (!this.project?.gallery_images?.length) return;
        this.currentImageIndex = (this.currentImageIndex - 1 + this.project.gallery_images.length) % this.project.gallery_images.length;
    }

    setCurrentImage(index: number): void {
        this.currentImageIndex = index;
        this.resetAutoPlay();
    }

    private startAutoPlay(): void {
        if (!this.project?.gallery_images || this.project.gallery_images.length <= 1) return;
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextImage();
        }, 5000);
    }

    private stopAutoPlay(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    private resetAutoPlay(): void {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    private preloadImages(images: string[]): void {
        images.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    getTechIcon(techName: string): string {
        for (const category of TECH_STACK) {
            const item = category.items.find(i => i.name.toLowerCase() === techName.toLowerCase());
            if (item) return item.iconClass;
        }
        return '';
    }
}
