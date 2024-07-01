// Page loader animations
export default () => {
    let timelineLoaderOut = null
    const defaultEase = ref("")
    const { gsap, CustomEase } = useGsap()

    // Init animate on mounted
    const initPageLoaderAnimate = () => {
        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "power2.inOut"

        // Init open timeline
        timelineLoaderOut = gsap.timeline()
        timelineLoaderOut.add(timelineLoaderOutAnimations())
        timelineLoaderOut.pause()
    }

    const destroyPageLoaderAnimate = () => {
        // Dispose here
    }
        
    // Play loader animation out
    const playPageLoaderOut = () => {
        if(timelineLoaderOut)
            return timelineLoaderOut.restart()  
    }


    function timelineLoaderOutAnimations () {
        const tl = gsap.timeline()  

        if(document.querySelector('.animate__cards-in'))
            tl.add(timelineCardsIn(), '+=2')

        if(document.querySelector('.animate__title-in'))
            tl.add(timelineTitleIn(), '-=1.1')

        if(document.querySelector('.animate__subtitle-in'))
            tl.add(timelineSubtitleIn(), '-=1.6')

        if(document.querySelector('.animate__header-in'))
            tl.add(timelineHeaderIn(), '<')

        if(document.querySelector('.animate__scroll-down-in'))
            tl.add(timelineScrollDownIn(), '<')

        return tl
    }

    // Animate cards
    function timelineCardsIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 3,
                ease: 'expo.inOut'
            },
        })  

        tl.fromTo('.animate__cards-in .animate__card img', { 
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            scale: 1.2
        }, {
            scale: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.3,
            stagger: 0.8,
            ease: "expo.out",
        })


        tl.from('.animate__cards-in .animate__card', { 
            '--img-card-1-x': '50',
            '--img-card-1-y': '50',
            '--img-card-1-width': '18vw',
            '--img-card-1-aspect-ratio': '9/12',
            '--img-card-2-y': '50',    
            '--img-card-2-x': '50',
            '--img-card-2-width': '19vw',
            '--img-card-2-aspect-ratio': '9/12',
            '--img-card-3-y': '50',  
            '--img-card-3-x': '50',
            '--img-card-3-width': '20vw',
            '--img-card-3-aspect-ratio': '9/12',
            '--img-card-4-y': '50',  
            '--img-card-4-x': '50', 
            '--img-card-4-width': '21vw',
            '--img-card-4-aspect-ratio': '9/12',
            
            yPercent: -50,
            xPercent: -50,  
        })
        

        return tl
    }

    // Animate title reveal
    function timelineHeaderIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power2.out"
            },
        })  

        tl
        .from('.animate__header-in .header__animate-link-in', { 
            yPercent: -100,
            opacity: 0,
            stagger: 0.1,
            
        })

        return tl
    }

    function timelineTitleIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: "power2.out"
            },
        })  

        tl
            .from('.animate__title-in .split-type--word', { 
                yPercent: 100,
                rotate: 0.1,
                stagger: 0.04,
            })

        return tl
    }

    function timelineSubtitleIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 0.6,
                ease: "expo.in"
            },
        })  

        tl
            .from('.animate__subtitle-in ', { 
                opacity: 0
            })

        return tl
    }

    function timelineScrollDownIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: "power2.out"
            },
        })  

        tl
            .from('.animate__scroll-down-in', { 
                opacity: 0
            })

        return tl
    }

    return { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut,
    }
}