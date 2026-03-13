LOGO:
/app 
    icon.ico (32png) 
    apple-icon.ico (180png) 
    icon512.ico (512png)
B   favicon.ico (32svg)

LAYOUT:
/public 
    background.svg
B    graph32.svg
B    logosm.svg
  
./layout                                       
B    <Font>    
    <Logo>                                   
    <Navigation>
    <ContactInfo>                               
    <Copyright>                                
B    <TCs>
B    <TBadges>
B    <Loading>

HOME:
/public
B    hero-1920-1080.webp < 300KiB
B    video-hero-1080-720.mp4 < 5MiB                 
./page    
B    <Section>                                         
    <Hero>
                                                                           
OFFERINGS:
    /public
        service-800.webp
    /services 
        <ServiceList>                              
        /...
            page.tsx...
        /pricing
            page.tsx

ABOUT:
    /public
        headshot-400.webp
    /about  
        <Team>
        <About>                                    
        /culture
            <Icongrid>
B           <Naritive>
        /career
            <TimeLine>
            
                             
*SEO:
    /public
B        og-1200-630.png
    ./layout
B        <SEO>

EMAIL:
    /contact                 
        <Contacts>                               
    .env.local
        NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

BLOG:    
    /blog
        page.tsx         
        /[slug]
            page.tsx
    ../content
        posts.md
    /lib
        posts.ts

*AUTH0:
    ./src
B        proxy.ts
    /lib
B        auth0.ts
    ./layout
B        <Profile>



*MONITORING:
<Monitor>

*ANALYZING
<Analizing>

*SEARCH:
<SearchBar>                                     

*THEME:
<ThemeSwitch>                                   

*LANGUAGE:
<Language>                                       

*AI:
<AIChat>                                        

*SHOPING:
<Cart>                                               


<Responsive 320, 360, 370, 380>               
<Responsive 390, 414, 480, 640 (sm)>           
<Responsive 768 (md), 800, 900, 1024 (lg)>     
<Responsive 1280 (xl), 1366, 1440, 1536 (2xl) >
<Responsive 1920, 2560>
