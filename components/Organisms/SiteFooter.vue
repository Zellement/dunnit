<template>
    <footer role="contentinfo" class="flex flex-col gap-2">
        <p class="text-2xs">
            &copy;
            {{ date }} Zellement. Credit to ChatGPT for the stupid graphics and
            Copilot for the general assist.
        </p>
        <p class="text-2xs">
            Additional packages:
            <nuxt-link class="underline" to="https://github.com/uuidjs/uuid"
                >uuid</nuxt-link
            >
            for generating IDs,
            <nuxt-link
                class="underline"
                to="https://github.com/prazdevs/pinia-plugin-persistedstate"
                >pinia-plugin-persistedstate</nuxt-link
            >
        </p>
    </footer>
</template>

<script lang="ts" setup>
const date: ComputedRef<number> = computed(() => {
    return new Date().getFullYear()
})
</script>
