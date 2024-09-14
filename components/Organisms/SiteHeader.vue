<template>
    <header role="banner" class="">
        <div class="flex flex-col">
            <div class="flex py-4">
                <site-brand class="mx-auto h-full w-full max-w-40" />
            </div>
            <div class="flex w-full flex-row justify-center gap-2">
                <button
                    :class="darkModeIconClasses"
                    class="flex transition-transform hover:-translate-y-0.5"
                    aria-label="Use light mode"
                    @click="toggleColorMode('light')"
                >
                    <Icon
                        name="material-symbols:sunny-rounded"
                        class="m-auto h-4 w-4 lg:h-6 lg:w-6"
                    />
                </button>
                <button
                    class="flex transition-transform hover:-translate-y-0.5"
                    :class="lightModeIconClasses"
                    aria-label="Use dark mode"
                    @click="toggleColorMode('dark')"
                >
                    <Icon
                        name="material-symbols-light:nightlight"
                        class="m-auto h-4 w-4 lg:h-6 lg:w-6"
                    />
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = (value) => {
    colorMode.preference = value
}

const isLightMode = computed(() => {
    return colorMode.preference === 'light'
})
const lightModeIconClasses = computed(() => {
    return isLightMode.value ? 'opacity-100' : 'opacity-50 '
})

const darkModeIconClasses = computed(() => {
    return isLightMode.value ? 'opacity-50 ' : 'opacity-100'
})
</script>
