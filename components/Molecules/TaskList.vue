<template>
    <div class="flex h-full w-full flex-col gap-8 py-4">
        <div
            v-if="hasZeroTasks"
            class="m-auto max-w-64 animate-pulse overflow-clip rounded-full bg-tangerine p-8"
        >
            <nuxt-picture
                src="/img/no-tasks.webp"
                alt="No tasks"
                class="m-auto overflow-clip rounded-2xl"
            />
        </div>
        <div v-else class="flex flex-col gap-16">
            <div
                v-if="hasTasksOutstanding"
                class="flex flex-col gap-4 transition-opacity"
            >
                <h2 class="font-display">Go get 'em!</h2>
                <ul class="flex flex-col gap-4">
                    <li v-for="task in tasksOutstanding" :key="task.id">
                        <single-task :task="task" />
                    </li>
                </ul>
            </div>
            <div
                v-if="hasTasksComplete"
                class="flex flex-col gap-4 transition-opacity"
                :class="completedTasksWrapper"
            >
                <div class="flex justify-between">
                    <h2 class="font-display">You've Dunnit!</h2>
                    <button
                        class="btn btn-primary"
                        @click="tasksStore.clearCompletedTasks"
                    >
                        Clear Completed
                    </button>
                </div>
                <ul class="flex flex-col gap-4">
                    <li v-for="task in tasksComplete" :key="task.id">
                        <single-task :task="task" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const tasksStore = useTasksStore()

const completedTasksWrapper: ComputedRef<string> = computed(() =>
    tasksStore.clearingCompletedTasks ? 'opacity-0 pointer-events-none' : ''
)

const tasksOutstanding: ComputedRef<Task[]> = computed(() => {
    return tasksStore.getTasksOutstanding
})

const tasksComplete: ComputedRef<Task[]> = computed(() => {
    return tasksStore.getTasksComplete
})

const hasTasksOutstanding: ComputedRef<boolean> = computed(() => {
    return tasksOutstanding.value.length > 0
})

const hasTasksComplete: ComputedRef<boolean> = computed(() => {
    return tasksComplete.value.length > 0
})

const hasZeroTasks: ComputedRef<boolean> = computed(() => {
    return !hasTasksOutstanding.value && !hasTasksComplete.value
})
</script>
