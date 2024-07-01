import imagesLoaded from "imagesloaded";

// Img loaded class : .img-load
export default () => {
    const imgLoad = ref(null)
    const imgs = ref(null)

    const initImgLoaded = () => { 
        imgs.value = document.querySelectorAll('.img-load')
        imgLoad.value = imagesLoaded(imgs.value)
        imgLoad.value.on('progress', onProgress)
    }

    const destroyImgLoaded = () => {
        imgLoad.value = null
        imgs.value = null
    }

    function onProgress( instance, image ){
        if(image.isLoaded) {
            image.img.classList.add('img-load--loaded')
        } 
    }

    return { 
        initImgLoaded,
        destroyImgLoaded
    }
}