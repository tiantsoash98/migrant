<template>
    <header class="header pt-4 pt-md-6 pb-4 pb-md-6 animate__header-in">
        <div class="header__content-wrapper container">
            <div class="row">
                <div class="header__logo header__links col-4 col-md-4 col-lg-6">
                    <NuxtLink to="/">
                        <IconLogoHorizontal/>
                    </NuxtLink>
                </div>
                <div class="col-full col-md-6 col-lg-4 col-start-lg-9">
                    <ul class="header__links header__links--center-verticaly">
                        <li class="header__animate-link-in title-h6"><NuxtLink to="/" class="link"><ButtonMain text="Works" :has-icon="true" icon="IconPlus"/></NuxtLink></li>
                        <li class="ml-8 header__animate-link-in title-h6"><NuxtLink to="/" class="link">Archive</NuxtLink></li>
                        <li class="ml-8 header__animate-link-in title-h6"><NuxtLink to="/" class="link">About</NuxtLink></li>
                        <li class="ml-8 header__animate-link-in title-h6"><NuxtLink to="/" class="link font-feature--normal">Contact</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: var(--z-index-nav);
    top: 0;
    width: 100%;

    &__logo{
        z-index: var(--z-index-nav);
        display: flex;
        align-items: center;
    }
    &__links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
}
</style>