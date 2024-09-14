<template>
    <header role="banner" class="">
        <div class="flex flex-col">
            <div class="flex py-4">
                <site-brand class="mx-auto h-full w-full max-w-40" />
            </div>
            <div class="flex w-full flex-row justify-center gap-2">
                <button
                    class="dark:text-butterscotch-500 z-10 lg:block"
                    aria-label="Toggle light and dark modes"
                    @click="toggleColourMode"
                >
                    <Icon
                        name="material-symbols:sunny-rounded"
                        class="h-5 w-5"
                    />
                </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const toggleColourMode = (): void => {
    if (colorMode.preference === 'system' || colorMode.preference === 'dark') {
        colorMode.preference = 'light'
    } else {
        colorMode.preference = 'dark'
    }
}
</script>
