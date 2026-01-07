/**
 * Translate Pipe
 * Usage: {{ 'HOME.TITLE' | translate }}
 */
import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslationService } from '@core/services/translation.service';
import { Subscription } from 'rxjs';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false // Impure to update when language changes
})
export class TranslatePipe implements PipeTransform, OnDestroy {
    private subscription: Subscription | null = null;
    private lastValue: string = '';

    constructor(private translationService: TranslationService) { }

    transform(key: string): string {
        // If we haven't subscribed to language changes yet, do so
        if (!this.subscription) {
            this.subscription = this.translationService.currentLang$.subscribe(() => {
                // This will trigger re-evaluation because pipe is impure
            });
        }

        return this.translationService.translate(key);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
