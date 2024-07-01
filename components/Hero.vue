<template>
    <div class="hero container">
        <div class="hero__content-wrapper">
            <h1 class="title-h2 split-type animate__title-in">Naturally comforting.<br>Timelessly modern.</h1>
            <p class="hero__description split-type animate__subtitle-in mt-8">We pride ourselves on creating furniture that is not only visually stunning but also built to last. Each piece meticulously crafted by artisans who bring generations of expertise to their work.</p>
        </div>
        <div class="hero__bottom-wrapper pb-4 pb-md-16">
            <ButtonMain  class="title-h5 animate__scroll-down-in" text="Scroll down" :has-icon="true" icon="IconArrowNarrowDown"/>
        </div>
        <div class="hero__img-container container animate__cards-in pt-4 pt-md-6 pb-4 pb-md-16">
            <div class="hero__card animate__card hero__card--1">
                <nuxt-img
                    src="/migrant-9.jpg"
                    class="img" 
                    sizes="sm:30vw md:30vw lg:20vw 30vwv"
                    role="presentation"
                    loading="lazy"
                />
            </div>
            <div class="hero__card animate__card hero__card--2">
                <nuxt-img
                    src="/migrant-2.jpg"
                    class="img" 
                    sizes="sm:30vw md:30vw lg:20vw 30vwv"
                    role="presentation"
                    loading="lazy"
                />
            </div>
            <div class="hero__card animate__card hero__card--3">
                <nuxt-img
                    src="/migrant-4.jpg"
                    class="img" 
                    sizes="sm:30vw md:30vw lg:20vw 30vwv"
                    role="presentation"
                    loading="lazy"
                />
            </div>
            <div class="hero__card animate__card hero__card--4">
                <nuxt-img
                    src="/migrant-6.jpg"
                    class="img" 
                    sizes="sm:30vw md:30vw lg:20vw 30vwv"
                    role="presentation"
                    loading="lazy"
                />
            </div>
        </div>

    </div>
    
</template>

<script setup>

</script>

<style lang="scss">
:root {
    --img-card-1-x: 10;
    --img-card-1-y: 10;
    --img-card-1-width: 20vw;
    --img-card-1-aspect-ratio: 16/9;
    --img-card-2-x: 82;
    --img-card-2-y: 18;
    --img-card-2-width: 15vw;
    --img-card-2-aspect-ratio: 9/9;
    --img-card-3-x: 4;
    --img-card-3-y: 64;
    --img-card-3-width: 15vw;
    --img-card-3-aspect-ratio: 9/9;
    --img-card-4-x: 64;
    --img-card-4-y: 72;
    --img-card-4-width: 20vw;
    --img-card-4-aspect-ratio: 9/12;
}

.hero {
    height: 100lvh;

    &__content-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    &__description {
        max-width: 50ch;
    }
    &__bottom-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    &__img-container {
        position: absolute;
        inset: 0;
        z-index: -1;
    }
    &__card {
        position: absolute;
        transform: translate(0%, 0%);

        &--1 {
            left: calc(1% * var(--img-card-1-x));
            top: calc(1% * var(--img-card-1-y));
            width: var(--img-card-1-width);
            aspect-ratio: var(--img-card-1-aspect-ratio);
        }
        &--2 {
            left: calc(1% * var(--img-card-2-x));
            top: calc(1% * var(--img-card-2-y));
            width: var(--img-card-2-width);
            aspect-ratio: var(--img-card-2-aspect-ratio);
        }
        &--3 {
            left: calc(1% * var(--img-card-3-x));
            top: calc(1% * var(--img-card-3-y));
            width: var(--img-card-3-width);
            aspect-ratio: var(--img-card-3-aspect-ratio);
        }
        &--4 {
            left: calc(1% * var(--img-card-4-x));
            top: calc(1% * var(--img-card-4-y));
            width: var(--img-card-4-width);
            aspect-ratio: var(--img-card-4-aspect-ratio);
        }
    }
}
</style>