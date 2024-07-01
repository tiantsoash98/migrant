export default defineNuxtRouteMiddleware((to, from) => {
    const pageTransition = usePageTransitionState()

    if(to.path != from.path){
        pageTransition.value = true
    }
})
  