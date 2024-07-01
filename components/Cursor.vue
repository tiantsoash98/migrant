<template>
    <div class="cursor">
        <div class="cursor__content cursor__slider overlay">
            <IconArrowNarrowRight class="cursor__icon cursor__icon--large"/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.cursor {
    $root:&;
    position: fixed;
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s var(--alias-default-ease),
                width 0.3s var(--alias-default-ease),
                height 0.3s var(--alias-default-ease),
                opacity 0.6s var(--alias-default-ease), 
                background-color 0.3s var(--alias-default-ease);
    user-select: none;
    pointer-events: none;
    z-index: var(--z-index-cursor);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--spacing-3);
        transition: transform 0.3s var(--alias-default-ease);
        transform: scale(0);
    }

    &__icon {
        width: var(--paragraph-text);

        &--large {
            width: var(--title-h5);
        }
    }

    &--hidden {
        opacity: 0;
    }

    &--link {
        opacity: 1;
        width: 20px;
        height: 20px;
    }

    &--slider {
        opacity: 1;
        width: var(--title-h1);
        height: var(--title-h1);
        background-color: var(--color-neutral-900);
        color: var(--color-neutral-0);

        & #{$root}__slider {
            transform: scale(1);
        }
    }
}
</style>