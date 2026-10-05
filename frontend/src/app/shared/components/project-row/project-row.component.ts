/**
 * Una fila de la lista de proyectos: número, nombre, descripción, tecnologías y año.
 * Se usa en Inicio y en Proyectos.
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '@core/models/project.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-project-row',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './project-row.component.html',
  styleUrl: './project-row.component.css'
})
export class ProjectRowComponent {
  @Input() project!: Project;
  @Input() index = 1;
}
