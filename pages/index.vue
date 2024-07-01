<template>
    <div class="page" id="top">
        <Hero/>
    </div>
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