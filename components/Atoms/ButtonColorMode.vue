<template>
    <button
        class="dark:text-butterscotch-500 z-10 lg:block"
        aria-label="Toggle light and dark modes"
        @click="toggleColourMode"
    >
        <Icon name="material-symbols:sunny-rounded" class="h-5 w-5" />
    </button>
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
