<template>
    <form class="form flex w-full flex-col gap-5">
        <label>
            <span class="title">Title *</span>
            <input
                v-model="taskTitle"
                type="text"
                name="title"
                placeholder="I need to..."
            />
        </label>
        <label>
            <span class="title">Description *</span>
            <textarea
                v-model="taskDescription"
                placeholder="...and this is some extra info."
                name="description"
            ></textarea>
        </label>
        <button type="submit" class="btn" @click.prevent="createTask()">
            Create task
        </button>
        <div
            v-if="!formIsValid && showFormError"
            class="flex items-center gap-1 rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-2 text-2xs text-white dark:from-red-700 dark:to-red-800"
        >
            <Icon name="ri:error-warning-line" class="icons" />
            Sorry, please complete both fields.
        </div>
    </form>
</template>

<script setup lang="ts">
const tasksStore = useTasksStore()

const taskTitle: Ref<string> = ref('')
const taskDescription: Ref<string> = ref('')

const formIsValid: ComputedRef<boolean> = computed(() => {
    return taskTitle.value.length > 0 && taskDescription.value.length > 0
})

const showFormError: Ref<boolean> = ref(false)

// Methods

const resetFields: () => void = () => {
    taskTitle.value = ''
    taskDescription.value = ''
    showFormError.value = false
}

const createTask = (): void => {
    if (!formIsValid.value) {
        showFormError.value = true
        return
    }
    tasksStore.createTask({
        title: taskTitle.value,
        body: taskDescription.value
    })
    resetFields()
}
</script>
