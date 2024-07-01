<template>
    <div class="hero container">
        <div class="hero__content-wrapper">
            <h1 class="title-h3 split-type animate__title-in">Naturally comforting.<br>Timelessly modern.</h1>
            <p class="hero__description split-type animate__subtitle-in mt-8">We pride ourselves on creating furniture that is not only visually stunning but also built to last. Each piece meticulously crafted by artisans who bring generations of expertise to their work.</p>
        </div>
        <div class="hero__bottom-wrapper pb-4 pb-md-16">
            <ButtonMain  class="title-h5" text="Scroll down" :has-icon="true" icon="IconArrowNarrowDown"/>
        </div>
        <div class="hero__img-container container pt-4 pt-md-6 pb-4 pb-md-16">
            <nuxt-img
                src="/migrant-9.jpg"
                class="hero__img--1 img" 
                sizes="sm:30vw md:30vw lg:30vw 30vwv"
                role="presentation"
                loading="lazy"
            />
            <nuxt-img
                src="/migrant-2.jpg"
                class="hero__img--2 img" 
                sizes="sm:30vw md:30vw lg:30vw 30vwv"
                role="presentation"
                loading="lazy"
            />
            <nuxt-img
                src="/migrant-4.jpg"
                class="hero__img--3 img" 
                sizes="sm:30vw md:30vw lg:30vw 30vwv"
                role="presentation"
                loading="lazy"
            />
            <nuxt-img
                src="/migrant-6.jpg"
                class="hero__img--4 img" 
                sizes="sm:30vw md:30vw lg:30vw 30vwv"
                role="presentation"
                loading="lazy"
            />
        </div>

    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
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
        display: grid;
        grid-template-rows: repeat(var(--grid-columns), minmax(0, 1fr));
        grid-template-columns: repeat(var(--grid-columns), minmax(0, 1fr));
        grid-gap: var(--column-gap);
    }
    &__img {
        &--1 {
            grid-column: 2 / span 3;
            grid-row: 2 / span 3;
        }
        &--2 {
            grid-column: 11 / span 2;
            grid-row: 3 / span 3;
        }
        &--3 {
            grid-column: 1 / span 2;
            grid-row: 9 / span 2;
        }
        &--4 {
            grid-column: 9/ span 3;
            grid-row: 10 / span 3;
        }
    }
}
</style>