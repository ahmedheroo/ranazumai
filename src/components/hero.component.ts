import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative h-screen flex items-center justify-center overflow-hidden bg-saudi-green-dark">
      <!-- Background Overlay -->
      <div class="absolute inset-0 z-0">
        <img 
          ngSrc="https://picsum.photos/id/190/1920/1080" 
          width="1920" 
          height="1080" 
          alt="Riyadh Skyline" 
          class="w-full h-full object-cover opacity-20 filter grayscale"
          priority
        />
        <div class="absolute inset-0 bg-gradient-to-t from-saudi-green-dark via-saudi-green-dark/80 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="mb-6 fade-up" style="animation-delay: 0.2s">
          <span class="inline-block px-3 py-1 mb-4 text-xs tracking-[0.3em] text-white border border-white/30 rounded-full uppercase bg-white/5 backdrop-blur-sm">
            {{ lang.t().hero.profile }}
          </span>
        </div>
        
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight fade-up" style="animation-delay: 0.4s">
          @if (lang.currentLang() === 'en') {
             Rana <br class="md:hidden" />
            <span class="text-luxury-gold italic">Abdullah</span> Zamai
          } @else {
             <span class="text-luxury-gold">رنا</span> عبدالله زمعي
          }
        </h1>

        <div class="max-w-3xl mx-auto mb-10 fade-up" style="animation-delay: 0.6s">
          <div class="h-px w-24 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-xl md:text-2xl text-gray-200 font-light leading-relaxed whitespace-pre-line">
            {{ lang.t().hero.role }}
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center gap-4 fade-up" style="animation-delay: 0.8s">
          <a href="#about" class="px-8 py-3 bg-luxury-gold text-saudi-green-dark font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 min-w-[180px]">
             {{ lang.t().hero.btnView }}
          </a>
          <a href="#contact" class="px-8 py-3 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-saudi-green-dark transition-colors duration-300 min-w-[180px]">
             {{ lang.t().hero.btnContact }}
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 start-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-white/50 hover:text-luxury-gold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  `
})
export class HeroComponent {
  lang = inject(LanguageService);
}