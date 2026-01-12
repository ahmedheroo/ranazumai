import { Component, ChangeDetectionStrategy, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 bg-slate-50 border-t border-gray-200">
      <div class="container mx-auto px-6">
        
        <!-- Header + Nav Buttons -->
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div class="text-start">
            <h4 class="text-luxury-gold font-bold tracking-widest uppercase mb-4 text-sm">{{ lang.t().media.sub }}</h4>
            <h2 class="font-serif text-4xl text-saudi-green-dark">{{ lang.t().media.title }}</h2>
          </div>
          
          <!-- Navigation Buttons -->
          <div class="flex gap-4">
            <button (click)="scroll('left')" class="w-12 h-12 rounded-full border border-saudi-green text-saudi-green hover:bg-saudi-green hover:text-white transition-all flex items-center justify-center focus:outline-none" aria-label="Previous Slide">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 rtl:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button (click)="scroll('right')" class="w-12 h-12 rounded-full bg-saudi-green text-white border border-saudi-green hover:bg-saudi-green-dark transition-all flex items-center justify-center focus:outline-none" aria-label="Next Slide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 rtl:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Carousel Container -->
        <div class="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            #scrollContainer
            class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [&::-webkit-scrollbar]:hidden"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            @for (item of lang.t().media.items; track item.id) {
              <!-- Card Item -->
              <div class="snap-center shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div class="relative overflow-hidden aspect-video">
                    <img 
                      [src]="item.img"
                      width="800" 
                      height="600" 
                      [alt]="item.title"
                      class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div class="absolute inset-0 bg-saudi-green-dark/0 group-hover:bg-saudi-green-dark/20 transition-colors duration-300"></div>
                  </div>
                  <div class="p-6 flex flex-col flex-grow">
                    <h3 class="font-serif text-xl font-bold text-saudi-green-dark mb-2 group-hover:text-luxury-gold transition-colors line-clamp-2">{{ item.title }}</h3>
                    <div class="w-12 h-px bg-luxury-gold/50 mb-3"></div>
                    <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">{{ item.caption }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class MediaComponent {
  lang = inject(LanguageService);
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  scroll(direction: 'left' | 'right') {
    if (!this.scrollContainer) return;
    
    const container = this.scrollContainer.nativeElement;
    const itemWidth = container.firstElementChild?.clientWidth || 300;
    const gap = 24; 
    
    const isRtl = this.lang.isRtl();
    const scrollAmount = itemWidth + gap;
    
    let leftDelta = 0;

    if (direction === 'left') {
        leftDelta = isRtl ? scrollAmount : -scrollAmount;
    } else {
        leftDelta = isRtl ? -scrollAmount : scrollAmount;
    }

    container.scrollBy({ left: leftDelta, behavior: 'smooth' });
  }
}