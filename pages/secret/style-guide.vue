<template>
    <section class="section mt-20">
        <div class="container">
            <div class="header">
                <span class="title-h2">Style guide</span>
                <div class="border-item mt-8"></div>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">H1</span>
                <h1 class="title-h1">Digital playground <br> for natural solutions</h1>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">H2</span>
                <h2 class="title-h2">Digital playground <br> for natural solutions</h2>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">H3</span>
                <h3 class="title-h3">Digital playground <br> for natural solutions</h3>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">H4</span>
                <h4 class="title-h4">A clear process is the key to successful projects. <br>These five steps are what I closely follow to create high-quality products.</h4>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">H5</span>
                <h5 class="title-h5">Adoba is a 3D architectural visualization studio that offers immersive digital solutions and innovative visual experiences in the world of architecture, real estate and construction. They ambition to empower architects and real estate developers by showcasing their projects to potential clients and investors in the most captivating way.</h5>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">H6</span>
                <h6 class="title-h6">Creative exploration for client & personal projects</h6>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">Paragraph</span>
                <p class="paragraph-text">The first step is getting to know you, understand your vision and your values. This will help identify the core challenges to solve for a high-performing website</p>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">Callout</span>
                <p class="callout-text">Art Direction, Web Design</p>
            </div>
            <div class="style__wrapper mt-12">
                <span class="style__label">Footnote</span>
                <p class="footnote-text">Roles</p>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: 'Style guide',
})
definePageMeta({
  layout: 'no-loader'
})
</script>

<style lang="scss" scoped>
.style {
    &__label {
        opacity: 0.4;
    }
    &__wrapper {
        display: flex;
        flex-direction: column;
    }
}
</style>