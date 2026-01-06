/**
 * Shared Header Component
 * Navigation header displayed across all pages
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <a routerLink="/" class="logo-link">Portfolio</a>
        </div>
        
        <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" aria-label="Toggle menu">
          <span class="hamburger-icon" [class.active]="mobileMenuOpen"></span>
        </button>
        
        <ul class="nav-links" [class.mobile-open]="mobileMenuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">About</a></li>
          <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMobileMenu()">Projects</a></li>
          <li><a routerLink="/approach" routerLinkActive="active" (click)="closeMobileMenu()">Approach</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" class="contact-btn" (click)="closeMobileMenu()">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
    styles: [`
    .header {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-link {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2c3e50;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .logo-link:hover {
      color: #3498db;
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .hamburger-icon {
      display: block;
      width: 25px;
      height: 2px;
      background: #2c3e50;
      position: relative;
      transition: background 0.3s ease;
    }

    .hamburger-icon::before,
    .hamburger-icon::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 2px;
      background: #2c3e50;
      transition: transform 0.3s ease;
    }

    .hamburger-icon::before {
      top: -8px;
    }

    .hamburger-icon::after {
      top: 8px;
    }

    .hamburger-icon.active {
      background: transparent;
    }

    .hamburger-icon.active::before {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger-icon.active::after {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      text-decoration: none;
      color: #555;
      font-weight: 500;
      transition: color 0.3s ease;
      padding: 0.5rem 0;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #3498db;
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #3498db;
    }

    .contact-btn {
      background: #3498db;
      color: white !important;
      padding: 0.6rem 1.5rem !important;
      border-radius: 25px;
      transition: all 0.3s ease;
    }

    .contact-btn::after {
      display: none;
    }

    .contact-btn:hover {
      background: #2980b9;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    }

    @media (max-width: 768px) {
      .mobile-menu-toggle {
        display: block;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        gap: 0;
        padding: 1rem 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      .nav-links.mobile-open {
        max-height: 400px;
      }

      .nav-links li {
        padding: 0.8rem 0;
        border-bottom: 1px solid #f0f0f0;
      }

      .nav-links li:last-child {
        border-bottom: none;
      }

      .contact-btn {
        display: inline-block;
        text-align: center;
      }
    }
  `]
})
export class HeaderComponent {
    mobileMenuOpen = false;

    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu(): void {
        this.mobileMenuOpen = false;
    }
}
