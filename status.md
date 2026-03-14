LOGO:
/app 
icon.ico (32png) 
apple-icon.ico (180png) 
icon512.ico (512png)
*favicon.ico (32svg)

LAYOUT:
/public/background.svg
*/public/icons/graph32.svg
*/public/logosm.svg
  
/layout.tsx <Logo> <Navigation> <ContactInfo> <Copyright> 
/layout.tsx *<TCs> *<TBadges> 

LOADING:
?

HOME:
*/public/hero-1920-1080.webp < 300KiB
*/public/video-hero-1080-720.mp4 < 5MiB                 
/page.tsx <Section>                                         
    
                                                                           
OFFERINGS:
/public/service-800.webp
/services <Section> <CardList>                              
*/services/[]/page.tsx
*/services/pricing/page.tsx

ABOUT:
/public/people/[]headshot-400.webp
/about <Team> <About>                                    
/about/culture <Icongrid> <Naritive>
/about/career <TimeLine>
            
                             
SEO:
*/public/og-1200-630.png
/layout.tsx 
/lib/metadata.ts
/manifest.ts
/sitemap.ts
        
EMAIL:
/contact <Contacts>                               
./.env.local [NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY]

BLOG:    
/blog/page.tsx         
/blog/[slug]/page.tsx
./content/posts.md
/lib/posts.ts

AUTH0:
./proxy.ts
/lib/auth0.ts
/layout.tsx <Profile>

*MONITORING:
?

*ANALYZING
?

*SEARCH:
?

*THEME:
?

*LANGUAGE:
?

*AI:
?

*SHOPING:
?


<Responsive 320, 360, 370, 380>               
<Responsive 390, 414, 480, 640 (sm)>           
<Responsive 768 (md), 800, 900, 1024 (lg)>     
<Responsive 1280 (xl), 1366, 1440, 1536 (2xl) >
<Responsive 1920, 2560>
