/**
 * Contact Service
 * Handles contact form submission to the API
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { ContactForm, ContactResponse } from '../models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private readonly apiUrl = `${environment.apiUrl}/contact`;

    constructor(private http: HttpClient) { }

    /**
     * Submit contact form to the API
     */
    submitContactForm(formData: ContactForm): Observable<ContactResponse> {
        return this.http.post<ContactResponse>(this.apiUrl, formData).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * Handle HTTP errors
     */
    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'Failed to send message. Please try again later.';

        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = error.error?.error || errorMessage;
        }

        console.error('ContactService Error:', errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}
