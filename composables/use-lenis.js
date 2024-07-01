import Lenis from '@studio-freight/lenis'

export default () => {
    const lenisOptions = {
        duration: 1.3,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
        direction: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    }

    const initLenis = () => {
        const lenis = new Lenis(lenisOptions)
        window.lenis = lenis
    
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
        initScrollToAnchorOnClick(lenis)
    }

    const destroyLenis = () => {

    }
    
    const initScrollToAnchorOnClick = (lenis) => {
        document.querySelectorAll('a[href*="#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
                const hashIndex = el.getAttribute('href').indexOf('#')
                const id = el.getAttribute('href')?.slice(hashIndex)
                if (!id) return
                
                const target = document.getElementById(id.slice(1))
                if (target) {
                    e.preventDefault()

                    lenis.scrollTo(id, { 
                        offset: -40, 
                        duration: 2,
                    })            
                }
            })
        })
    }

    return {
        initLenis,
        destroyLenis
    }
}