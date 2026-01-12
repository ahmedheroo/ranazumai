import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 bg-saudi-green-dark text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid md:grid-cols-2 gap-16">
          
          <!-- Education Column -->
          <div>
            <h3 class="text-3xl font-serif mb-10 border-b border-luxury-gold/30 pb-4 inline-block">{{ lang.t().education.title }}</h3>
            
            <div class="space-y-8">
              @for (deg of lang.t().education.degrees; track deg.title) {
                <div class="group">
                  <span class="text-luxury-gold text-sm font-bold tracking-widest uppercase mb-1 block">{{ deg.year }}</span>
                  <h4 class="text-2xl font-serif font-medium group-hover:text-luxury-gold transition-colors">{{ deg.title }}</h4>
                  <p class="text-lg text-white/90">{{ deg.field }}</p>
                  <p class="text-white/60">{{ deg.uni }}</p>
                </div>
              }
            </div>
            
             <div class="mt-8 p-4 bg-white/5 rounded border border-white/10">
               <p class="text-sm italic text-white/80">
                 <span class="text-luxury-gold me-2">✦</span> 
                 {{ lang.t().education.basket }}
               </p>
             </div>
          </div>

          <!-- Certifications & Boards -->
          <div>
            <h3 class="text-3xl font-serif mb-10 border-b border-luxury-gold/30 pb-4 inline-block">{{ lang.t().education.certTitle }}</h3>
            
            <ul class="space-y-6">
              @for (cert of lang.t().education.certs; track cert.title) {
                <li class="flex items-start gap-4">
                  <div class="mt-1 min-w-[24px] text-luxury-gold">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h5 class="text-lg font-bold text-white">{{ cert.title }}</h5>
                    <p class="text-white/60">{{ cert.org }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  `
})
export class EducationComponent {
  lang = inject(LanguageService);
}