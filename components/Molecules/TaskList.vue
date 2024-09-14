<template>
    <div class="flex flex-col gap-8">
        <template v-if="hasTasksOutstanding">
            <h2 class="font-display">Go get 'em!</h2>
            <ul class="flex flex-col gap-4">
                <li v-for="task in tasksOutstanding" :key="task.id">
                    <single-task :task="task" />
                </li>
            </ul>
        </template>
        <template v-if="hasTasksComplete">
            <h2 class="font-display">You've Dunnit!</h2>
            <ul class="flex flex-col gap-4">
                <li v-for="task in tasksComplete" :key="task.id">
                    <single-task :task="task" />
                </li>
            </ul>
        </template>
    </div>
</template>

<script lang="ts" setup>
const tasksStore = useTasksStore()

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
</script>
