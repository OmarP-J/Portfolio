/**
 * Página "Sobre mí": perfil, stack, idiomas y cómo trabajo.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { TECH_STACK } from './tech-stack.constants';
import { TIMELINE } from './timeline.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  techStack = TECH_STACK;
  timeline = TIMELINE;

  principles = [
    { titleKey: 'ABOUT.PHILOSOPHY.CLEAN_CODE', descKey: 'ABOUT.PHILOSOPHY.CLEAN_CODE_DESC' },
    { titleKey: 'ABOUT.PHILOSOPHY.USER_CENTRIC', descKey: 'ABOUT.PHILOSOPHY.USER_CENTRIC_DESC' },
    { titleKey: 'ABOUT.PHILOSOPHY.LEARNING', descKey: 'ABOUT.PHILOSOPHY.LEARNING_DESC' },
    { titleKey: 'ABOUT.PHILOSOPHY.COLLABORATION', descKey: 'ABOUT.PHILOSOPHY.COLLABORATION_DESC' }
  ];
}
