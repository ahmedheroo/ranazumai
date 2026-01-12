import { Component, ChangeDetectionStrategy, input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav 
      class="fixed top-0 start-0 end-0 z-50 transition-all duration-300 border-b border-white/10"
      [class.bg-saudi-green-dark]="isScrolled() || mobileMenuOpen()"
      [class.py-2]="isScrolled()"
      [class.py-6]="!isScrolled()"
      [class.shadow-xl]="isScrolled()"
      [class.backdrop-blur-md]="!isScrolled() && !mobileMenuOpen()"
      [class.bg-gradient-to-r]="!isScrolled() && !mobileMenuOpen()"
      [class.from-saudi-green]="!isScrolled() && !mobileMenuOpen()"
      [class.to-saudi-green-dark]="!isScrolled() && !mobileMenuOpen()"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo / Name -->
        <a href="#" class="text-white font-serif text-2xl tracking-widest uppercase hover:text-luxury-gold transition-colors">
          Rana<span class="text-luxury-gold">.</span>Zamai
        </a>

        <!-- Desktop Menu (Hidden on Mobile/Tablet, visible on Large screens) -->
        <div class="hidden lg:flex gap-8 items-center">
          <a href="#about" class="text-white/80 hover:text-luxury-gold text-sm tracking-widest uppercase font-medium transition-colors">
             {{ lang.t().nav.about }}
          </a>
          <a href="#experience" class="text-white/80 hover:text-luxury-gold text-sm tracking-widest uppercase font-medium transition-colors">
             {{ lang.t().nav.experience }}
          </a>
          <a href="#education" class="text-white/80 hover:text-luxury-gold text-sm tracking-widest uppercase font-medium transition-colors">
             {{ lang.t().nav.education }}
          </a>
          <a href="#impact" class="text-white/80 hover:text-luxury-gold text-sm tracking-widest uppercase font-medium transition-colors">
             {{ lang.t().nav.impact }}
          </a>
           <a href="#media" class="text-white/80 hover:text-luxury-gold text-sm tracking-widest uppercase font-medium transition-colors">
             {{ lang.t().nav.media }}
          </a>
          
          <a href="#contact" class="px-5 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300 text-sm tracking-widest uppercase">
            {{ lang.t().nav.contact }}
          </a>

          <!-- Lang Switcher -->
          <button (click)="lang.toggle()" class="text-white hover:text-luxury-gold font-serif border-s border-white/20 ps-6">
            {{ lang.currentLang() === 'en' ? 'العربية' : 'English' }}
          </button>
        </div>

        <!-- Mobile/Tablet Toggle (Visible up to Large screens) -->
        <div class="lg:hidden flex items-center gap-4">
           <button (click)="lang.toggle()" class="text-white hover:text-luxury-gold font-serif text-sm">
            {{ lang.currentLang() === 'en' ? 'AR' : 'EN' }}
          </button>

          <button (click)="toggleMobileMenu()" class="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (mobileMenuOpen()) {
        <div class="lg:hidden bg-saudi-green-dark absolute top-full start-0 w-full border-t border-white/10 shadow-lg fade-up">
          <div class="flex flex-col p-6 space-y-4">
            <a href="#about" (click)="toggleMobileMenu()" class="text-white/80 hover:text-luxury-gold text-lg font-serif">{{ lang.t().nav.about }}</a>
            <a href="#experience" (click)="toggleMobileMenu()" class="text-white/80 hover:text-luxury-gold text-lg font-serif">{{ lang.t().nav.experience }}</a>
            <a href="#education" (click)="toggleMobileMenu()" class="text-white/80 hover:text-luxury-gold text-lg font-serif">{{ lang.t().nav.education }}</a>
            <a href="#impact" (click)="toggleMobileMenu()" class="text-white/80 hover:text-luxury-gold text-lg font-serif">{{ lang.t().nav.impact }}</a>
            <a href="#media" (click)="toggleMobileMenu()" class="text-white/80 hover:text-luxury-gold text-lg font-serif">{{ lang.t().nav.media }}</a>
            <a href="#contact" (click)="toggleMobileMenu()" class="text-luxury-gold text-lg font-serif">{{ lang.t().nav.contact }}</a>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  lang = inject(LanguageService);
  isScrolled = input(false);
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}