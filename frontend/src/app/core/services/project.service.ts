/**
 * Project Service
 * Handles all project-related API calls
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Project, ProjectListResponse, ProjectDetailResponse } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private readonly apiUrl = `${environment.apiUrl}/projects`;

    constructor(private http: HttpClient) { }

    /**
     * Get all projects from the API
     */
    getAllProjects(): Observable<Project[]> {
        return this.http.get<ProjectListResponse>(this.apiUrl).pipe(
            map(response => response.data),
            catchError(this.handleError)
        );
    }

    /**
     * Get featured projects only
     */
    getFeaturedProjects(): Observable<Project[]> {
        return this.http.get<ProjectListResponse>(`${this.apiUrl}/featured`).pipe(
            map(response => response.data),
            catchError(this.handleError)
        );
    }

    /**
     * Get a specific project by ID
     */
    getProjectById(id: string): Observable<Project> {
        return this.http.get<ProjectDetailResponse>(`${this.apiUrl}/${id}`).pipe(
            map(response => response.data),
            catchError(this.handleError)
        );
    }

    /**
     * Handle HTTP errors
     */
    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'An error occurred while fetching data';

        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = error.error?.error?.message || errorMessage;
        }

        console.error('ProjectService Error:', errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}
