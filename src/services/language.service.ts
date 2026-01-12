import { Injectable, signal, computed, effect } from '@angular/core';

export type Language = 'en' | 'ar';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<Language>('en');
  isRtl = computed(() => this.currentLang() === 'ar');

  private en = {
    nav: { about: 'About', experience: 'Experience', education: 'Education', impact: 'Impact', media: 'Media', contact: 'Contact' },
    hero: {
      profile: 'Executive Profile',
      role: 'Chairwoman, Women in Mining Saudi Arabia\nStrategic Leader in Corporate Communications',
      btnView: 'View Profile',
      btnContact: 'Contact'
    },
    about: {
      titleSub: 'About Rana',
      titleMain: 'Leadership with Purpose.\nCommunication with Impact.',
      bio1: 'An influential figure in Saudi Arabia\'s rapidly evolving corporate landscape, Rana Abdullah Zamai combines strategic vision with a deep passion for community development.',
      bio2: 'With extensive expertise in Corporate & Marketing Communications, she serves as a bridge between private sector innovation and government objectives.',
      mission: '"My mission is to use my passion and experience to develop our national services across private and government sectors in Saudi Arabia 🇸🇦."',
      years: 'Years Experience',
      agreements: 'Agreements Led'
    },
    experience: {
      sub: 'Professional Journey',
      title: 'Experience & Leadership',
      roles: [
        { title: 'Chairwoman of the Board', company: 'Women in Mining Saudi Arabia', period: 'May 2025 – Present', desc: 'Leading strategic initiatives to empower women in the mining sector within the Kingdom.' },
        { title: 'Editor in Chief', company: 'Ardhona Journal (Saudi Geological Survey)', period: 'Dec 2021 – Present', desc: 'Head of Corporate Communications & Knowledge, driving scientific and industrial discourse.' },
        { title: 'Deputy Chairman of the Board', company: 'Professional Fashion Association', period: 'Jan 2022 – Present', desc: 'Shaping the future of professional fashion standards and industry growth in KSA.' },
        { title: 'Head of Corporate Communications', company: 'Nesma Group', period: 'May 2018 – Nov 2021', desc: 'Executive Manager overseeing group-wide communication strategies and brand alignment.' },
        { title: 'General Manager', company: 'Nesma Embroidery', period: 'Jan 2013 – May 2018', desc: 'Managed 4 factories, led strategic planning, training, and partnerships across KSA.' }
      ]
    },
    education: {
      title: 'Education',
      certTitle: 'Certifications & Boards',
      degrees: [
        { year: '2019 – 2021', title: 'Master’s Degree', field: 'Business / Corporate & Marketing Communications', uni: 'IE University' },
        { year: '2000 – 2004', title: 'Bachelor’s Degree', field: 'Science (Microbiology)', uni: 'King AbdulAziz University' }
      ],
      basket: 'Former Basketball Team Member – Fostering teamwork and resilience early on.',
      certs: [
        { title: 'Certified Member (CM)', org: 'Qiyadat Global Georgetown Program' },
        { title: 'Consultant Board Member', org: 'Textile & Fashion (KAAU)' },
        { title: 'Board Member', org: 'Technical & Vocational Training Corporation' },
        { title: 'Training of Trainers', org: 'Entrepreneurship' }
      ]
    },
    impact: {
      sub: 'Giving Back',
      title: 'Volunteering & Social Impact',
      items: [
        { title: 'Consultant Specialist', org: 'MonshaatSA' },
        { title: 'Business Consultant', org: 'Business Clinics' },
        { title: 'Diamond Member', org: 'Majid Society' },
        { title: 'Ambassador', org: 'QaderoonSA' },
        { title: 'Expert Writer', org: 'ALYAUM Holding Group' },
      ],
      key: 'Key Achievement',
      fmfTitle: 'Business Agreements Lead',
      fmfDesc: 'Driving economic empowerment through the Future Minerals Forum (FMF). Orchestrating significant international agreements and MOUs to strengthen the sector.',
      mou24: 'MOUs in FMF 2024',
      agr23: 'Agreements in FMF 2023',
      agr22: 'Agreements in FMF 2022',
      impactAreas: {
        title: 'Impact Areas',
        items: ['Economic Empowerment', 'Community Development', 'National Initiatives', 'Cross-Sector Partnerships']
      }
    },
    media: {
      sub: 'Gallery & Highlights',
      title: 'Media Presence',
      items: [
        { title: 'GEOMIN 2025', caption: 'Leveraging DATA and AI in exploration processes.', img: '/assets/media1.jfif', id: 10 },
        { title: 'GEOMIN 2025', caption: 'Women in mining first panel.', img: '/assets/media2.jfif', id: 20 },
        { title: 'The institute of World Politics', caption: 'Fellowship Women in Diplomacy.', img: '/assets/media3.jfif', id: 30 },
        { title: 'PDAC 2025', caption: 'Women in Mining Saudi representation.', img: '/assets/media4.jfif', id: 40 },
        { title: 'International Women’s day', caption: 'represented Saudi Women’s 2023.', img: '/assets/media5.jfif', id: 50 },
        { title: 'FMF23 Forum', caption: 'Saudi workforce of the future!.', img: '/assets/media6.jfif', id: 60 },
        { title: 'Women in mining WIM 🇸🇦 team', caption: 'Looking forward to achieve real impact in creating opportunities for the women in the remote areas in mining sector.', img: '/assets/media7.jfif', id: 70 },
        { title: 'SGS', caption: 'Our digital printing section.', img: '/assets/media8.jfif', id: 80 },
        { title: 'SRDA', caption: 'International Women’s day.', img: '/assets/media9.jfif', id: 90 },
        { title: 'Madrid April 2021', caption: 'Master Graduation.', img: '/assets/media10.jfif', id: 100 }
      ]
    },
    contact: {
      title: 'Get in Touch',
      desc: 'For speaking engagements, board consultations, or press inquiries, please reach out directly or through my office.',
      lblEmail: 'Email',
      lblLoc: 'Location',
      valLoc: 'Riyadh, Saudi Arabia',
      lblConnect: 'Connect',
      formName: 'Name',
      formEmail: 'Email',
      formSub: 'Subject',
      formMsg: 'Message',
      formBtn: 'Send Message',
      sentTitle: 'Message Sent',
      sentDesc: 'Thank you for reaching out. We will get back to you shortly.',
      sentBtn: 'Send Another',
      subs: [
        { val: 'speaking', lbl: 'Speaking Engagement' },
        { val: 'press', lbl: 'Media & Press' },
        { val: 'consultation', lbl: 'Consultation' },
        { val: 'other', lbl: 'Other' }
      ]
    },
    footer: {
      rights: 'All Rights Reserved.'
    }
  };

  private ar = {
    nav: { about: 'نبذة عني', experience: 'الخبرات', education: 'التعليم', impact: 'الأثر الاجتماعي', media: 'الإعلام', contact: 'تواصل' },
    hero: {
      profile: 'ملف تنفيذي',
      role: 'رئيسة مجلس الإدارة، جمعية نساء التعدين في السعودية\nقائدة استراتيجية في الاتصالات المؤسسية',
      btnView: 'عرض الملف',
      btnContact: 'تواصل معي'
    },
    about: {
      titleSub: 'عن رنا',
      titleMain: 'قيادة هادفة.\nتواصل ذو أثر.',
      bio1: 'شخصية مؤثرة في المشهد المؤسسي المتطور بسرعة في المملكة العربية السعودية، تجمع رنا عبدالله زمعي بين الرؤية الاستراتيجية وشغف عميق بتنمية المجتمع.',
      bio2: 'بفضل خبرتها الواسعة في الاتصالات المؤسسية والتسويقية، تعمل كجسر بين ابتكارات القطاع الخاص والأهداف الحكومية.',
      mission: '"مهمتي هي استخدام شغفي وخبرتي لتطوير خدماتنا الوطنية عبر القطاعين الخاص والحكومي في المملكة العربية السعودية 🇸🇦."',
      years: 'سنوات خبرة',
      agreements: 'اتفاقية ناجحة'
    },
    experience: {
      sub: 'المسيرة المهنية',
      title: 'الخبرات والقيادة',
      roles: [
        { title: 'رئيسة مجلس الإدارة', company: 'جمعية نساء التعدين', period: 'مايو 2025 – الآن', desc: 'قيادة المبادرات الاستراتيجية لتمكين المرأة في قطاع التعدين داخل المملكة.' },
        { title: 'رئيسة التحرير', company: 'مجلة أرضنا (هيئة المساحة الجيولوجية)', period: 'ديسمبر 2021 – الآن', desc: 'رئيس الاتصالات المؤسسية والمعرفة، وقيادة الخطاب العلمي والصناعي.' },
        { title: 'نائب رئيس مجلس الإدارة', company: 'الجمعية المهنية للأزياء', period: 'يناير 2022 – الآن', desc: 'تشكيل مستقبل المعايير المهنية للأزياء ونمو الصناعة في المملكة.' },
        { title: 'رئيس الاتصالات المؤسسية', company: 'مجموعة نسما', period: 'مايو 2018 – نوفمبر 2021', desc: 'مدير تنفيذي يشرف على استراتيجيات الاتصال ومواءمة العلامة التجارية للمجموعة.' },
        { title: 'مدير عام', company: 'نسما للتطريز', period: 'يناير 2013 – مايو 2018', desc: 'إدارة 4 مصانع، وقيادة التخطيط الاستراتيجي والتدريب والشراكات في جميع أنحاء المملكة.' }
      ]
    },
    education: {
      title: 'التعليم',
      certTitle: 'الشهادات والعضويات',
      degrees: [
        { year: '2019 – 2021', title: 'درجة الماجستير', field: 'الأعمال / الاتصالات المؤسسية والتسويقية', uni: 'جامعة IE' },
        { year: '2000 – 2004', title: 'درجة البكالوريوس', field: 'العلوم (ميكروبيولوجي)', uni: 'جامعة الملك عبدالعزيز' }
      ],
      basket: 'عضو سابق في فريق كرة السلة – تعزيز العمل الجماعي والمرونة في وقت مبكر.',
      certs: [
        { title: 'عضو معتمد (CM)', org: 'برنامج قيادات العالمي - جورج تاون' },
        { title: 'عضو مجلس استشاري', org: 'الأزياء والنسيج (جامعة الملك عبدالعزيز)' },
        { title: 'عضو مجلس إدارة', org: 'المؤسسة العامة للتدريب التقني والمهني' },
        { title: 'تدريب المدربين', org: 'ريادة الأعمال' }
      ]
    },
    impact: {
      sub: 'العطاء المجتمع',
      title: 'التطوع والأثر الاجتماعي',
      items: [
        { title: 'أخصائي استشاري', org: 'منشآت' },
        { title: 'مستشار أعمال', org: 'عيادات الأعمال' },
        { title: 'عضو ماسي', org: 'جمعية ماجد' },
        { title: 'سفير', org: 'قادرون' },
        { title: 'كاتب خبير', org: 'مجموعة اليوم القابضة' },
      ],
      key: 'إنجاز رئيسي',
      fmfTitle: 'قائد الاتفاقيات التجارية',
      fmfDesc: 'قيادة التمكين الاقتصادي من خلال منتدى المعادن المستقبلي (FMF). تنسيق اتفاقيات دولية ومذكرات تفاهم هامة لتعزيز القطاع.',
      mou24: 'مذكرة تفاهم في FMF 2024',
      agr23: 'اتفاقية في FMF 2023',
      agr22: 'اتفاقية في FMF 2022',
      impactAreas: {
        title: 'مجالات التأثير',
        items: ['التمكين الاقتصادي', 'تنمية المجتمع', 'المبادرات الوطنية', 'الشراكات عبر القطاعات']
      }
    },
    media: {
      sub: 'معرض الصور',
      title: 'الإعلام والصحافة',
      items: [
        { title: 'GEOMIN 2025', caption: 'الاستفادة من البيانات والذكاء الاصطناعي في عمليات الاستكشاف.', img: '/assets/media1.jfif', id: 10 },
        { title: 'GEOMIN 2025', caption: 'اللجنة الأولى المعنية بالمرأة في مجال التعدين.', img: '/assets/media2.jfif', id: 20 },
        { title: 'معهد السياسة العالمية', caption: 'زمالة النساء في الدبلوماسية.', img: '/assets/media3.jfif', id: 30 },
        { title: 'PDAC 2025', caption: 'تمثيل المرأة في قطاع التعدين في المملكة العربية السعودية.', img: '/assets/media4.jfif', id: 40 },
        { title: 'اليوم العالمي للمرأة.', caption: 'تمثيل المرأة السعودية في عام 2023.', img: '/assets/media5.jfif', id: 50 },
        { title: 'FMF23 Forum', caption: 'القوى العاملة السعودية في المستقبل!', img: '/assets/media6.jfif', id: 60 },
        { title: 'فريق النساء في مجال التعدين WIM 🇸🇦', caption: 'نتطلع إلى تحقيق تأثير حقيقي في خلق فرص للنساء في المناطق النائية في قطاع التعدين.', img: '/assets/media7.jfif', id: 70 },
        { title: 'SGS', caption: 'قسم الطباعة الرقمية لدينا.', img: '/assets/media8.jfif', id: 80 },
        { title: 'جمعية تنمية وتطوير المسؤولية الاجتماعية', caption: 'اليوم العالمي للمرأة.', img: '/assets/media9.jfif', id: 90 },
        { title: 'مدريد أبريل 2021', caption: 'تخرج الماجستير.', img: '/assets/media10.jfif', id: 100 }
      ]
    },
    contact: {
      title: 'تواصل معنا',
      desc: 'للمشاركة في التحدث، أو استشارات مجالس الإدارة، أو الاستفسارات الصحفية، يرجى التواصل مباشرة أو من خلال مكتبي.',
      lblEmail: 'البريد الإلكتروني',
      lblLoc: 'الموقع',
      valLoc: 'الرياض، المملكة العربية السعودية',
      lblConnect: 'تواصل',
      formName: 'الاسم',
      formEmail: 'البريد الإلكتروني',
      formSub: 'الموضوع',
      formMsg: 'الرسالة',
      formBtn: 'إرسال الرسالة',
      sentTitle: 'تم الإرسال',
      sentDesc: 'شكراً لتواصلك. سنعود إليك قريباً.',
      sentBtn: 'إرسال أخرى',
      subs: [
        { val: 'speaking', lbl: 'مشاركة تحدث' },
        { val: 'press', lbl: 'إعلام وصحافة' },
        { val: 'consultation', lbl: 'استشارة' },
        { val: 'other', lbl: 'آخر' }
      ]
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.'
    }
  };

  t = computed(() => this.currentLang() === 'en' ? this.en : this.ar);

  constructor() {
    effect(() => {
      const dir = this.isRtl() ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = this.currentLang();
    });
  }

  toggle() {
    this.currentLang.update(l => l === 'en' ? 'ar' : 'en');
  }
}