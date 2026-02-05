import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
    selector: 'app-approach',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './approach.component.html',
    styleUrl: './approach.component.css'
})
export class ApproachComponent {
    principles = [
        {
            icon: '🧩',
            titleKey: 'APPROACH.QUALITY_QA.STANDARDS',
            descKey: 'APPROACH.QUALITY_QA.STANDARDS_ITEMS'
        },
        // We will simplify this to use keys from service
    ];

    constructor(private translationService: TranslationService) { }
}
