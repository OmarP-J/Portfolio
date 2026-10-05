/**
 * Página de proyectos: dos pestañas, "Proyectos" (desde la API) y "Certificados" (datos locales).
 */
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';
import { Certificate } from '@core/models/certificate.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';
import { CERTIFICATES } from './certificates.data';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent, TranslatePipe],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {
    projects: Project[] = [];
    certificates = CERTIFICATES;

    currentTab: 'projects' | 'certificates' = 'projects';
    selectedCertificate: Certificate | null = null;
    loading = true;
    error = false;

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.loadProjects();
    }

    ngOnDestroy(): void {
        // Si se sale de la página con el certificado abierto, devolvemos el scroll
        document.body.style.overflow = '';
    }

    loadProjects(): void {
        this.loading = true;
        this.error = false;

        this.projectService.getAllProjects().subscribe({
            next: (projects) => {
                this.projects = projects;
                this.loading = false;
            },
            error: () => {
                this.error = true;
                this.loading = false;
            }
        });
    }

    setTab(tab: 'projects' | 'certificates'): void {
        this.currentTab = tab;
    }

    openCertificate(cert: Certificate): void {
        this.selectedCertificate = cert;
        document.body.style.overflow = 'hidden'; // Evita que la página haga scroll detrás
    }

    // También se cierra con la tecla Escape
    @HostListener('document:keydown.escape')
    closeCertificate(): void {
        this.selectedCertificate = null;
        document.body.style.overflow = '';
    }
}
