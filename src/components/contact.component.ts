import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto bg-saudi-green-dark text-white rounded-2xl shadow-xl overflow-hidden p-10 md:p-16 text-center relative">
          
          <!-- Decorative Background Element -->
          <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
             <div class="absolute -top-24 -right-24 w-64 h-64 bg-luxury-gold rounded-full blur-3xl"></div>
             <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-luxury-gold rounded-full blur-3xl"></div>
          </div>

          <div class="relative z-10">
            <h3 class="font-serif text-3xl md:text-4xl mb-6">{{ lang.t().contact.title }}</h3>
            <p class="text-white/70 mb-12 leading-relaxed max-w-xl mx-auto">
               {{ lang.t().contact.desc }}
            </p>
            
            <div class="grid md:grid-cols-2 gap-8 mb-12">
              <!-- Email -->
              <div class="flex flex-col items-center group">
                <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h5 class="font-bold text-sm uppercase tracking-wide text-luxury-gold mb-2">{{ lang.t().contact.lblEmail }}</h5>
                <a href="mailto:ranagtr0@gmail.com" class="text-white/90 hover:text-white transition-colors text-lg border-b border-white/20 hover:border-white pb-1">ranagtr0@gmail.com</a>
              </div>

              <!-- Location -->
              <div class="flex flex-col items-center group">
                <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h5 class="font-bold text-sm uppercase tracking-wide text-luxury-gold mb-2">{{ lang.t().contact.lblLoc }}</h5>
                <p class="text-white/90 text-lg">{{ lang.t().contact.valLoc }}</p>
              </div>
            </div>

            <div class="border-t border-white/10 pt-10 max-w-sm mx-auto">
               <h5 class="font-bold text-sm uppercase tracking-wide text-luxury-gold mb-6">{{ lang.t().contact.lblConnect }}</h5>
               <div class="flex justify-center gap-6">
                 <a href="https://linkedin.com/in/ranazumai" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all duration-300 group">
                   <span class="sr-only">LinkedIn</span>
                   <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </a>
                 <a href="https://x.com/ZumaiRana" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all duration-300 group">
                   <span class="sr-only">X (Twitter)</span>
                   <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                 </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  lang = inject(LanguageService);
}