import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail.component';
import { ApproachComponent } from './features/approach/approach.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Omar Polanco — Full-stack developer' },
    { path: 'about', component: AboutComponent, title: 'About · Omar Polanco' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects · Omar Polanco' },
    { path: 'projects/:id', component: ProjectDetailComponent, title: 'Project · Omar Polanco' },
    { path: 'approach', component: ApproachComponent, title: 'Approach · Omar Polanco' },
    { path: 'contact', component: ContactComponent, title: 'Contact · Omar Polanco' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
