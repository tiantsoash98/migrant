
// https://gsap.com/community/forums/topic/27739-change-marquee-direction-on-scroll/
// Marquee class : .marquee 
export default () => {
    const scrollDown = useScrollDownState()
    const marqueeTween = ref(null)

    const initMarquee = () => {
        const { gsap } = useGsap()
        var marquees = document.querySelectorAll('.marquee')
        
        if(marquees.length){
            marqueeTween.value = gsap.to(".marquee", {
                xPercent: -100, 
                repeat: -1, 
                duration: 22, 
                ease: "linear"
            }).totalProgress(0.5)
    
            toogleMarqueeDirectionOnScroll()
        }
    }

    const toogleMarqueeDirectionOnScroll = () => {
        watch(scrollDown, (newScrollDirection) => {    
            if(marqueeTween.value){
                marqueeTween.value.timeScale(newScrollDirection? 1 : -1)
            }
        })
    }

    const destroyMarquee = () => {
        if(marqueeTween.value){
            marqueeTween.value.kill()
            marqueeTween.value = null
        }
    }

    return {
        initMarquee,
        destroyMarquee
    }
}