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
