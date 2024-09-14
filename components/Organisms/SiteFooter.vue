<template>
    <footer class="w-full pt-16" role="contentinfo">
        <div class="flex flex-row gap-4 text-center">
            <p class="text-xs">
                &copy;
                {{ date }} Zellement. Credit to ChatGPT for the stupid graphics
                and Copilot for the general assist.
            </p>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const date: ComputedRef<number> = computed(() => {
    return new Date().getFullYear()
})
</script>
