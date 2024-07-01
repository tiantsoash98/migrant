<template>
    <header class="header pt-4 pt-md-6 pb-4 pb-md-6 animate__header-in">
        <div class="header__content-wrapper container">
            <div class="row">
                <div class="header__logo header__links col-4 col-md-4 col-lg-6">
                    <NuxtLink :to="{ path: '/' }">
                        <IconLogoHorizontal/>
                    </NuxtLink>
                </div>
                <div class="col-full col-md-5 col-lg-4 col-start-md-5 col-start-lg-7">
                    <ul class="header__links header__links--center-verticaly">
                        <li class="header__animate-link-in"><NuxtLink to="/" class="link">Sustainability</NuxtLink></li>
                        <li class="ml-8 header__animate-link-in"><NuxtLink to="/" class="link">Technology</NuxtLink></li>
                        <li class="ml-8 header__animate-link-in"><NuxtLink to="/" class="link">Mission</NuxtLink></li>
                    </ul>
                </div>
                <div class="col-full col-md-4 col-lg-2">
                    <ul class="header__links header__links--center-verticaly header__links--align-end">
                        <li class="header__animate-link-in"><NuxtLink to="/" class="link"><ButtonMain text="Contact" color="white" :has-icon="true"/></NuxtLink></li>
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
    left: 0;
    right: 0;
    color: var(--color-neutral-0);

    &__logo{
        z-index: var(--z-index-nav);
        display: flex;
        align-items: center;
    }
    &__links {
        display: flex;
        height: 100%;

        &--center-verticaly {            
            align-items: center;
        }
        &--align-end {
            justify-content: flex-end;
        }
    }
}
</style>