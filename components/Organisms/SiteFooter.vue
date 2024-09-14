<template>
    <footer role="contentinfo">
        <p class="text-2xs">
            &copy;
            {{ date }} Zellement. Credit to ChatGPT for the stupid graphics and
            Copilot for the general assist.
        </p>
    </footer>
</template>

<script lang="ts" setup>
const date: ComputedRef<number> = computed(() => {
    return new Date().getFullYear()
})
</script>
