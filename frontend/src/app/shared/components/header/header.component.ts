/**
 * Header: nombre, navegación, idioma y tema.
 * En celular la navegación se abre con el botón "Menú".
 */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';
import { TranslationService, Language } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  currentLang: Language = 'en';

  constructor(
    private themeService: ThemeService,
    private translationService: TranslationService
  ) {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    const newLang = this.currentLang === 'en' ? 'es' : 'en';
    this.translationService.setLanguage(newLang);
  }
}
