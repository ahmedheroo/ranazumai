import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          
          <!-- Image Column -->
          <div class="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <div class="relative w-full max-w-[400px]">
                <div class="relative z-10 aspect-square overflow-hidden shadow-2xl rounded-2xl">
                <!-- Professional portrait -->
                <img 
                    ngSrc="https://pbs.twimg.com/profile_images/1716590802099384320/0kMFNDZL_400x400.jpg" 
                    width="400" 
                    height="400" 
                    alt="Rana Abdullah Zamai" 
                    class="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <!-- Decorative Elements -->
                <div class="absolute -bottom-6 -end-6 w-full h-full border-2 border-luxury-gold z-0 hidden lg:block rounded-2xl"></div>
                <div class="absolute -top-6 -start-6 w-32 h-32 bg-saudi-green/10 z-0 rounded-full blur-2xl"></div>
            </div>
          </div>

          <!-- Text Column -->
          <div class="w-full lg:w-1/2">
            <h4 class="text-luxury-gold font-bold tracking-widest uppercase mb-4 text-sm">{{ lang.t().about.titleSub }}</h4>
            <h2 class="font-serif text-4xl lg:text-5xl text-saudi-green-dark mb-8 leading-tight whitespace-pre-line">
              {{ lang.t().about.titleMain }}
            </h2>
            
            <div class="prose prose-lg text-gray-600 mb-8">
              <p class="mb-4">
                {{ lang.t().about.bio1 }}
              </p>
              <p class="mb-4">
                {{ lang.t().about.bio2 }}
              </p>
            </div>

            <div class="bg-slate-50 border-s-4 border-luxury-gold p-6 mb-8">
              <p class="text-xl font-serif italic text-saudi-green-dark">
                 {{ lang.t().about.mission }}
              </p>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div>
                <span class="block text-3xl font-bold text-luxury-gold mb-1">20+</span>
                <span class="text-sm uppercase tracking-wider text-gray-500">{{ lang.t().about.years }}</span>
              </div>
              <div>
                <span class="block text-3xl font-bold text-luxury-gold mb-1">100+</span>
                <span class="text-sm uppercase tracking-wider text-gray-500">{{ lang.t().about.agreements }}</span>
              </div>
            </div>
            
            <div class="mt-10">
                 <img   
                  src="/assets/signature.png" 
                  width="200" 
                  height="80" 
                  alt="Signature" 
                  class="opacity-60"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  lang = inject(LanguageService);
}