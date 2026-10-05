/**
 * Página "Enfoque": cómo trabajo, paso a paso, y qué reviso para la calidad.
 * Los textos vienen de las traducciones; aquí solo están las claves en orden.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
    selector: 'app-approach',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './approach.component.html',
    styleUrl: './approach.component.css'
})
export class ApproachComponent {
    steps = [
        { titleKey: 'APPROACH.STEPS.UNDERSTAND', descKey: 'APPROACH.STEPS.UNDERSTAND_DESC' },
        { titleKey: 'APPROACH.STEPS.DESIGN', descKey: 'APPROACH.STEPS.DESIGN_DESC' },
        { titleKey: 'APPROACH.STEPS.BUILD', descKey: 'APPROACH.STEPS.BUILD_DESC' },
        { titleKey: 'APPROACH.STEPS.REVIEW', descKey: 'APPROACH.STEPS.REVIEW_DESC' },
        { titleKey: 'APPROACH.STEPS.DEPLOY', descKey: 'APPROACH.STEPS.DEPLOY_DESC' }
    ];

    // itemsKey apunta a una lista (array) dentro de las traducciones
    qualityGroups = [
        { titleKey: 'APPROACH.QUALITY_QA.STANDARDS', itemsKey: 'APPROACH.QUALITY_QA.STANDARDS_ITEMS' },
        { titleKey: 'APPROACH.QUALITY_QA.VCS', itemsKey: 'APPROACH.QUALITY_QA.VCS_ITEMS' },
        { titleKey: 'APPROACH.QUALITY_QA.TESTING', itemsKey: 'APPROACH.QUALITY_QA.TESTING_ITEMS' },
        { titleKey: 'APPROACH.QUALITY_QA.SECURITY', itemsKey: 'APPROACH.QUALITY_QA.SECURITY_ITEMS' }
    ];
}
