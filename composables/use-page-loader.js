export default () => {
    const { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut
    } = usePageLoaderAnimate()
    const pageLoaderState = usePageLoaderState()

    // Init page loader behavior
    const initPageLoader = () => {
        // Init page loader animate on mounted
        // Only execute when page load hasn't been called yet
        if(pageLoaderState.value != "loaded"){
            initPageLoaderAnimate()
            pageLoaderState.value = "loading"

            // Start page loader out animation
            playPageLoaderOut().then(() => {
                pageLoaderState.value = "loaded"
            })
        }
    }

    const destroyPageLoader = () => {
        destroyPageLoaderAnimate()
    }


    return {
        initPageLoader,
        destroyPageLoader
    }
}