export default () => {
    const { gsap, CustomEase } = useGsap()
    const defaultEase = ref("")
    const defaultDuration = ref(0)
    const defaultDurationSlow = ref(0)
    const defaultStagger = ref(0)

    const initScrollAnimations = () => { 
        defaultDuration.value = 1
        defaultDurationSlow.value = 2
        defaultStagger.value = 0.09
        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "ease.out"
        CustomEase.create("default-ease", defaultEase.value)

        // Reveal text
        document.querySelectorAll('.section-reveal__text')
            .forEach(function(triggerElement){
                let targetLines = triggerElement.querySelectorAll('.split-type--line')

                if(targetLines.length){
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "top 90%",
                            end: "top top",
                            toggleActions: "play none none none",
                        }
                    }) 
              
                    tl.from(targetLines, {
                        yPercent: 100,
                        ease: "default-ease",
                        duration: defaultDuration.value,
                        stagger: defaultStagger.value
                    })
                }
            })


        // Reveal block
        document.querySelectorAll('.section-reveal__block')
            .forEach(function(triggerElement){
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "top 90%",
                        end: "top top",
                        toggleActions: "play none none none",
                    }
                }) 
            
                tl.from(triggerElement, {
                    y: '8vh',
                    opacity: 0,
                    ease: "default-ease",
                    duration: defaultDurationSlow.value,
                }, +0.3)
            })


        // Swiper
        document.querySelectorAll('.swiper')
            .forEach(function(triggerElement){
                let targetSlides = triggerElement.querySelectorAll('.swiper-slide')

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "top 90%",
                        end: "top top",
                        toggleActions: "play none none none",
                    }
                }) 
            
                // tl.fromTo(targetSlides, {
                    
                // }, {
                //     opacity: 0,
                //     scale: 0,
                //     stagger: defaultStagger.value,
                //     ease: "default-ease",
                //     duration: defaultDurationSlow.value,
                // })
                // tl.fromTo(targetSlides, {
                //     clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                // }, {
                //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                //     stagger: defaultStagger.value,
                //     ease: "default-ease",
                //     duration: defaultDurationSlow.value,
                // })
                tl.from(targetSlides, {
                    opacity: 0,
                    stagger: defaultStagger.value,
                    ease: "default-ease",
                    duration: defaultDuration.value,
                })
            })


        // Img Parallax
        document.querySelectorAll('.parallax')
            .forEach(function(triggerElement){
                let targetElement = triggerElement.querySelectorAll('.parallax__img')

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }) 
            
                tl.fromTo(targetElement, { 
                    yPercent: -8
                }, {
                    yPercent: 8,
                    ease: "none"
                })
            })
    }

    const destroyScrollAnimations = () => { 

    }

    return { 
        initScrollAnimations,
        destroyScrollAnimations
    }
}