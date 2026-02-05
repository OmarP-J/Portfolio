import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@core/services/project.service';
import { Project } from '@core/models/project.model';
import { Certificate } from '@core/models/certificate.model';
import { TranslationService } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent, TranslatePipe],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [];
    certificates: Certificate[] = [
        {
            id: '1',
            name: 'AWS Certified Solutions Architect – Associate',
            issuer: 'Amazon Web Services (AWS)',
            date: '2025-06',
            credential_id: 'AWS-ASA-12345',
            url: 'https://github.com/JarolyP'
        },
        {
            id: '2',
            name: 'Google Cloud Professional Cloud Architect',
            issuer: 'Google Cloud',
            date: '2025-01',
            credential_id: 'GCP-PCA-67890',
            url: 'https://github.com/JarolyP'
        },
        {
            id: '3',
            name: 'Meta Front-End Developer Professional Certificate',
            issuer: 'Meta / Coursera',
            date: '2024-11',
            credential_id: 'META-FE-54321',
            url: 'https://github.com/JarolyP'
        },
        {
            id: '4',
            name: 'Azure Developer Associate (AZ-204)',
            issuer: 'Microsoft',
            date: '2024-05',
            credential_id: 'MS-AZ-98765',
            url: 'https://github.com/JarolyP'
        }
    ];

    currentTab: 'projects' | 'certificates' = 'projects';
    loading = true;
    error: string | null = null;

    constructor(
        private projectService: ProjectService,
        private translationService: TranslationService
    ) { }

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

    setTab(tab: 'projects' | 'certificates'): void {
        this.currentTab = tab;
    }
}
