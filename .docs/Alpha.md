Media:
/app 
    icon.ico (32png) 
    apple-icon.ico (180png) 
    icon512.ico (512png)
    favicon.ico (32svg)
/public/people/headshot-400.webp[]
/public/background.svg
/public/hero-1920-1080.webp < 300KiB
/public/service-800.webp
/public/og-1200-630.png

Pages:
/layout.tsx <Logo> <Navigation> <ContactInfo> <Copyright> 
/page.tsx <Section>                                                

/services <Section> <CardList>                              
/about <Team> <About>
/contact <Contacts>                               
    ./.env.local [NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY]

SEO:
/lib/metadata.ts
app/manifest.ts
app/sitemap.ts

Styles:
/1 Color Pallet
/2 Base Styles: body, background, 
/3 Interactive nav-link, nav-item, btn-primary, btn-secondary, cards
/4 Typography text-primary, text-secondary, text-lead, text-body, text-quote, text-card-primary, text-card-secondary, text-error, text-success
/5 Input Defs. form-label, form-input
/6 2x animations

<Responsive 320, 360, 370, 380>               
<Responsive 390, 414, 480, 640 (sm)>           
<Responsive 768 (md), 800, 900, 1024 (lg)>     
<Responsive 1280 (xl), 1366, 1440, 1536 (2xl) >
<Responsive 1920, 2560>
