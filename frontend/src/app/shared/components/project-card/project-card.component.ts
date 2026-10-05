/**
 * Tarjeta de proyecto: captura, número, año, nombre, descripción y tecnologías.
 * Se usa en Inicio y en Proyectos.
 *
 * La captura sale de project.image_url (por ejemplo "assets/projects/ecommerce.jpg").
 * Si el archivo todavía no existe, se muestra un recuadro con el número del proyecto.
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '@core/models/project.model';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() index = 1;

  imageMissing = false;
}
