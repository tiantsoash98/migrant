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

        if(document.querySelector('.animate__video-in'))
            tl.add(timelineVideoIn())

        if(document.querySelector('.animate__title-in'))
            tl.add(timelineTitleIn(), '-=1.6s')

        if(document.querySelector('.animate__header-in'))
            tl.add(timelineHeaderIn(), '<')

        return tl
    }

    function timelineVideoIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1.3,
                ease: "expo.out"
            },
        })  

        tl
            .to('.animate__video-in', {
                clipPath: 'inset(25% 40% round 10px)',
            })
            .to('.animate__video-in', {
                clipPath: 'inset(0% 0% round 0px)',
                duration: 2.3,
                ease: "expo.out"
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

    return { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut,
    }
}