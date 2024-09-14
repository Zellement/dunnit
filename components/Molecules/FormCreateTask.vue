<template>
    <form class="form flex w-full flex-col gap-5">
        <label>
            <span class="title">Title</span>
            <input
                v-model="taskTitle"
                type="text"
                name="title"
                placeholder="Title"
            />
        </label>
        <label>
            <span class="title">Description</span>
            <textarea v-model="taskDescription" name="description"></textarea>
        </label>
        <button type="submit" class="btn" @click.prevent="createTask()">
            Create task
        </button>
    </form>
</template>

<script setup lang="ts">
const tasksStore = useTasksStore()

const createTask = (): void => {
    tasksStore.createTask({
        title: taskTitle.value,
        body: taskDescription.value
    })
}

const taskTitle: Ref<string> = ref('')
const taskDescription: Ref<string> = ref('')
</script>
