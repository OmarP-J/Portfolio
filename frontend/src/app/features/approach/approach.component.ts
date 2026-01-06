/**
 * Approach Page Component
 * Describes development methodology and practices
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-approach',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './approach.component.html',
    styleUrl: './approach.component.css'
})
export class ApproachComponent {
    principles = [
        {
            icon: '🧩',
            title: 'Clean Architecture',
            description: 'Layered architecture with clear separation of concerns. Business logic independent of frameworks and UI.'
        },
        {
            icon: '📐',
            title: 'SOLID Principles',
            description: 'Following SOLID principles for maintainable, extensible code that\'s easy to understand and modify.'
        },
        {
            icon: '🔍',
            title: 'Code Review',
            description: 'All code is reviewed for quality, security, and adherence to team standards before merging.'
        },
        {
            icon: '🧪',
            title: 'Testing',
            description: 'Comprehensive testing strategy including unit, integration, and end-to-end tests.'
        },
        {
            icon: '📝',
            title: 'Documentation',
            description: 'Clear documentation for APIs, architecture decisions, and complex business logic.'
        },
        {
            icon: '⚡',
            title: 'Performance',
            description: 'Optimization for speed and scalability, with monitoring and continuous improvement.'
        }
    ];
}
