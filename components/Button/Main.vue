<template>
    <div :class="`button button--${type} button--${size} button--${color}`">
        <div class="button__content-wrapper">
            <component :is="icon" class="button__icon" v-if="hasIcon"/>
            <div class="button__text">{{ text }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    type: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'large'
    },
    hasIcon : {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: 'IconCornerUpRight',
    },
    color: {
        type: String,
        default: 'dark'
    }
})
</script>

<style lang="scss" scoped>

</style>