import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-charcoal text-white py-12 border-t border-white/10">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div class="mb-6 md:mb-0 text-center md:text-start">
          <h4 class="font-serif text-2xl tracking-widest uppercase mb-2">Rana<span class="text-luxury-gold">.</span>Zamai</h4>
          <p class="text-white/40 text-sm">Leadership with Purpose.</p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12">
           <nav class="flex gap-6 flex-wrap justify-center">
             <a href="#about" class="text-white/60 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors">{{ lang.t().nav.about }}</a>
             <a href="#experience" class="text-white/60 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors">{{ lang.t().nav.experience }}</a>
             <a href="#impact" class="text-white/60 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors">{{ lang.t().nav.impact }}</a>
             <a href="#media" class="text-white/60 hover:text-luxury-gold text-sm uppercase tracking-wider transition-colors">{{ lang.t().nav.media }}</a>
           </nav>
           
           <div class="text-white/20 text-xs">
             &copy; {{ currentYear }} Rana Abdullah Zamai. {{ lang.t().footer.rights }}
           </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  lang = inject(LanguageService);
  currentYear = new Date().getFullYear();
}