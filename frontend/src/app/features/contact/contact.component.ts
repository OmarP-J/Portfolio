import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '@core/services/contact.service';
import { TranslationService } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    contactForm: FormGroup;
    submitted = false;
    loading = false;
    successMessage: string | null = null;
    errorMessage: string | null = null;

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService,
        private translationService: TranslationService
    ) {
        this.contactForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
            correo: ['', [Validators.required, Validators.email]],
            asunto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
            mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]]
        });
    }

    get f() {
        return this.contactForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;
        this.successMessage = null;
        this.errorMessage = null;

        if (this.contactForm.invalid) {
            return;
        }

        this.loading = true;

        this.contactService.submitContactForm(this.contactForm.value).subscribe({
            next: (response) => {
                if (response.success) {
                    this.successMessage = 'CONTACT.SUCCESS';
                    this.contactForm.reset();
                    this.submitted = false;
                } else {
                    this.errorMessage = 'CONTACT.ERROR';
                }
                this.loading = false;
            },
            error: () => {
                this.errorMessage = 'CONTACT.ERROR';
                this.loading = false;
            }
        });
    }
}
