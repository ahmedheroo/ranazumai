import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h4 class="text-luxury-gold font-bold tracking-widest uppercase mb-4 text-sm">{{ lang.t().experience.sub }}</h4>
          <h2 class="font-serif text-4xl text-saudi-green-dark">{{ lang.t().experience.title }}</h2>
        </div>

        <div class="max-w-5xl mx-auto relative">
          <!-- Center Line (Desktop) - Physically centered for both LTR/RTL -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
          
          <!-- Mobile Line - Logical Start -->
          <div class="md:hidden absolute start-8 top-0 bottom-0 w-px bg-gray-200"></div>

          @for (role of lang.t().experience.roles; track role.title; let i = $index) {
            @let isEven = i % 2 === 0; 
            
            <div class="relative z-10 mb-12 md:flex md:items-center justify-between group">
              
              <!-- Center Dot (Desktop) - Physically centered -->
              <div class="hidden md:block absolute left-1/2 top-1/2 -mt-2 w-4 h-4 rounded-full bg-luxury-gold border-4 border-slate-50 shadow-sm z-20 transform -translate-x-1/2"></div>
              
              <!-- Mobile Dot - Logical Start -->
               <div class="md:hidden absolute start-8 top-8 w-4 h-4 rounded-full bg-luxury-gold border-4 border-slate-50 shadow-sm z-20 transform rtl:translate-x-1/2 ltr:-translate-x-1/2"></div>


              <!-- LEFT COLUMN (Start Side) -->
              <div class="md:w-5/12 mb-8 md:mb-0 relative" [class.order-1]="true">
                 @if (isEven) {
                    <!-- Content Card (Even items on Left) -->
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ms-16 md:ms-0 relative">
                        
                        <!-- Desktop Arrow (Points to Center/End) -->
                        <div class="hidden md:block absolute top-1/2 -end-2 w-4 h-4 bg-white border-t border-e border-gray-100 transform -translate-y-1/2 ltr:rotate-45 rtl:-rotate-45 z-10"></div>
                        
                        <!-- Mobile Arrow (Points to Line/Start) -->
                        <div class="md:hidden absolute top-8 -start-2 w-4 h-4 bg-white border-b border-s border-gray-100 transform ltr:rotate-45 rtl:-rotate-45 z-10"></div>

                        <div class="md:text-end">
                            <span class="inline-block md:hidden py-1 px-3 mb-3 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-saudi-green">
                                {{ role.period }}
                            </span>
                            <h3 class="font-serif text-xl font-bold text-saudi-green-dark mb-1">{{ role.title }}</h3>
                            <h4 class="text-luxury-gold font-medium mb-2 text-sm uppercase tracking-wide">{{ role.company }}</h4>
                            <p class="text-gray-600 text-sm leading-relaxed">{{ role.desc }}</p>
                        </div>
                    </div>
                 } @else {
                    <!-- Date Label (Odd items Date on Left) -->
                    <div class="hidden md:flex justify-end items-center pe-8">
                        <span class="py-1 px-4 bg-white border border-gray-100 rounded-full text-sm font-bold text-saudi-green shadow-sm">
                            {{ role.period }}
                        </span>
                    </div>
                 }
              </div>

              <!-- RIGHT COLUMN (End Side) -->
              <div class="md:w-5/12 relative" [class.order-2]="true">
                  @if (!isEven) {
                    <!-- Content Card (Odd items on Right) -->
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ms-16 md:ms-0 relative">
                         
                        <!-- Desktop Arrow (Points to Center/Start) -->
                        <div class="hidden md:block absolute top-1/2 -start-2 w-4 h-4 bg-white border-b border-s border-gray-100 transform -translate-y-1/2 ltr:rotate-45 rtl:-rotate-45 z-10"></div>
                        
                        <!-- Mobile Arrow (Points to Line/Start) -->
                        <div class="md:hidden absolute top-8 -start-2 w-4 h-4 bg-white border-b border-s border-gray-100 transform ltr:rotate-45 rtl:-rotate-45 z-10"></div>
                        
                        <div class="md:text-start">
                             <span class="inline-block md:hidden py-1 px-3 mb-3 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-saudi-green">
                                {{ role.period }}
                            </span>
                            <h3 class="font-serif text-xl font-bold text-saudi-green-dark mb-1">{{ role.title }}</h3>
                            <h4 class="text-luxury-gold font-medium mb-2 text-sm uppercase tracking-wide">{{ role.company }}</h4>
                            <p class="text-gray-600 text-sm leading-relaxed">{{ role.desc }}</p>
                        </div>
                    </div>
                  } @else {
                     <!-- Date Label (Even items Date on Right) -->
                     <div class="hidden md:flex justify-start items-center ps-8">
                        <span class="py-1 px-4 bg-white border border-gray-100 rounded-full text-sm font-bold text-saudi-green shadow-sm">
                            {{ role.period }}
                        </span>
                     </div>
                  }
              </div>

            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  lang = inject(LanguageService);
}