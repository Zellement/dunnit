<template>
    <button
        v-if="!hasAnyTasks"
        class="text-2xs underline underline-offset-2"
        @click.prevent="fetchDummyData"
    >
        Generate dummy tasks
    </button>
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'
const tasksStore = useTasksStore()

const hasAnyTasks: ComputedRef<boolean> = computed(
    () => tasksStore.tasks.length > 0
)

const fetchDummyData = async () => {
    const { data } = await useFetch<Task[]>('/api/fetch-dummy-tasks')
    if (!data.value) return

    const tasksWithResetIds = data.value.map((task) => {
        task.id = uuidv4()
        return task
    })
    tasksStore.setTasks(tasksWithResetIds)
}
</script>
