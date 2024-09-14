<template>
    <div class="flex w-full flex-row items-start">
        <div
            class="flex items-center after:flex after:h-px after:w-4 after:bg-mint-50 after:content-[''] dark:after:bg-mint-900"
        >
            <button
                class="group flex h-10 w-10 flex-shrink-0 rounded-full bg-mint-50 transition-all hover:scale-105 hover:shadow dark:bg-mint-900"
            >
                <Icon
                    name="mingcute:check-2-fill"
                    class="m-auto h-5 w-5 opacity-20 transition-opacity group-hover:opacity-100"
                />
            </button>
        </div>
        <span
            class="relative flex min-h-10 flex-grow flex-col gap-2 rounded-xl bg-mint-50 px-3 py-2 dark:bg-mint-900"
        >
            <span class="">{{ task.title }}</span>
            <span class="">{{ task.body }}</span>

            <div
                class="absolute right-3 top-0 flex -translate-y-1.5 gap-1 rounded-xl bg-mint-100 px-2 shadow dark:bg-mint-950"
            >
                <button aria-label="Edit task">
                    <Icon name="heroicons-solid:pencil" class="icons" />
                </button>
                <button aria-label="Delete task">
                    <Icon name="weui:delete-on-filled" class="icons" />
                </button>
            </div>
        </span>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    task: Task
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.icons {
    @apply h-4 w-4 transition-colors hover:text-orange-500 dark:hover:text-orange-400;
}
</style>
