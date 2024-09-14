<template>
    <ul class="flex flex-col gap-4">
        <li v-for="task in allTasks" :key="task.id">
            <single-task :task="task" />
        </li>
    </ul>
</template>

<script lang="ts" setup>
const tasksStore = useTasksStore()

const allTasks: ComputedRef<Task[]> = computed(() => {
    return tasksStore.tasks
})
</script>
