/**
 * Project interface representing a portfolio project
 */
export interface Project {
    id: string;
    name: string;
    description: string;
    long_description: string;
    technologies: string[];
    repository_url?: string;
    live_url?: string;
    image_url?: string;
    featured: boolean;
    created_at: string;
}

/**
 * API Response wrapper for project list
 */
export interface ProjectListResponse {
    success: boolean;
    data: Project[];
    total: number;
}

/**
 * API Response wrapper for single project
 */
export interface ProjectDetailResponse {
    success: boolean;
    data: Project;
}
