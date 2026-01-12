import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ExperienceComponent } from './components/experience.component';
import { EducationComponent } from './components/education.component';
import { ImpactComponent } from './components/impact.component';
import { MediaComponent } from './components/media.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ImpactComponent,
    MediaComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  scrolled = signal(false);

  constructor() {
    // Listen for scroll events to toggle navbar style if needed
    window.addEventListener('scroll', () => {
      this.scrolled.set(window.scrollY > 50);
    });
  }
}