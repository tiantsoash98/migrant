<template>
    <main class="page" id="top">
        
    </main>
</template>

<script setup>
const { init, destroy } = useInitScript()

useHead({
    title: 'Title',
})


onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    destroy()
})
</script>

<style lang="scss" scoped>

</style>