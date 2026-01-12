import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h4 class="text-luxury-gold font-bold tracking-widest uppercase mb-4 text-sm">{{ lang.t().impact.sub }}</h4>
          <h2 class="font-serif text-4xl text-saudi-green-dark">{{ lang.t().impact.title }}</h2>
        </div>

        <!-- Role Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          @for (item of lang.t().impact.items; track item.title) {
            <div class="bg-slate-50 p-8 rounded-lg border-t-4 border-luxury-gold hover:shadow-xl transition-all duration-300 group">
              <div class="mb-4 text-saudi-green group-hover:text-luxury-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 class="font-bold text-lg text-charcoal mb-2">{{ item.title }}</h3>
              <p class="text-gray-500 text-sm">{{ item.org }}</p>
            </div>
          }
        </div>

        <!-- Highlight: Future Minerals Forum -->
        <div class="bg-saudi-green rounded-2xl overflow-hidden shadow-2xl relative">
          <!-- Decorative BG -->
           <div class="absolute inset-0 z-0">
             <img 
               ngSrc="https://picsum.photos/id/20/1200/600" 
               width="1200" 
               height="600" 
               alt="Background" 
               class="w-full h-full object-cover opacity-10 mix-blend-overlay" 
             />
           </div>

          <div class="grid md:grid-cols-2 relative z-10">
            <div class="p-10 md:p-16 flex flex-col justify-center">
              <div class="inline-block bg-luxury-gold text-saudi-green-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-max">
                {{ lang.t().impact.key }}
              </div>
              <h3 class="font-serif text-3xl md:text-4xl text-white mb-6">{{ lang.t().impact.fmfTitle }}</h3>
              <p class="text-white/80 mb-8 leading-relaxed">
                {{ lang.t().impact.fmfDesc }}
              </p>
              
              <div class="flex flex-col space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-16 text-end font-bold text-luxury-gold text-2xl">75</div>
                  <div class="text-white/70 text-sm uppercase tracking-wide">{{ lang.t().impact.mou24 }}</div>
                </div>
                 <div class="flex items-center gap-4">
                  <div class="w-16 text-end font-bold text-luxury-gold text-2xl">60</div>
                  <div class="text-white/70 text-sm uppercase tracking-wide">{{ lang.t().impact.agr23 }}</div>
                </div>
                 <div class="flex items-center gap-4">
                  <div class="w-16 text-end font-bold text-luxury-gold text-2xl">5</div>
                  <div class="text-white/70 text-sm uppercase tracking-wide">{{ lang.t().impact.agr22 }}</div>
                </div>
              </div>
            </div>
            
            <div class="bg-saudi-green-dark p-10 md:p-16 flex flex-col justify-center border-s border-white/5">
              <h4 class="font-serif text-2xl text-white mb-6">{{ lang.t().impact.impactAreas.title }}</h4>
              <ul class="space-y-4">
                 @for (area of lang.t().impact.impactAreas.items; track area) {
                   <li class="flex items-center gap-3 text-white/90">
                      <span class="w-2 h-2 bg-luxury-gold rounded-full"></span>
                      {{ area }}
                   </li>
                 }
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ImpactComponent {
  lang = inject(LanguageService);
}