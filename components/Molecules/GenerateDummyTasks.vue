<template>
    <button
        class="text-2xs underline underline-offset-2"
        @click.prevent="fetchDummyData"
    >
        Generate dummy tasks
    </button>
</template>

<script lang="ts" setup>
const tasksStore = useTasksStore()

const fetchDummyData = async () => {
    const { data } = await useFetch<Task[]>('/api/fetch-dummy-tasks')
    if (!data.value) return
    tasksStore.setTasks(data.value)
}
</script>
