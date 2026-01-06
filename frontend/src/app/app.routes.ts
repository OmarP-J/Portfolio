import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail.component';
import { ApproachComponent } from './features/approach/approach.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home | Portfolio' },
    { path: 'about', component: AboutComponent, title: 'About Me | Portfolio' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects | Portfolio' },
    { path: 'projects/:id', component: ProjectDetailComponent, title: 'Project Detail | Portfolio' },
    { path: 'approach', component: ApproachComponent, title: 'My Approach | Portfolio' },
    { path: 'contact', component: ContactComponent, title: 'Contact | Portfolio' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
