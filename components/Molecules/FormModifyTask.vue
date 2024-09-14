<template>
    <form
        class="form flex w-full flex-col gap-5 transition-all"
        :class="formClasses"
    >
        <label>
            <span class="title">Title *</span>
            <input
                v-model="taskTitle"
                type="text"
                name="title"
                placeholder="I need to..."
            />
        </label>
        <input v-model="taskId" type="hidden" name="status" />
        <label>
            <span class="title">Description</span>
            <textarea
                v-model="taskDescription"
                placeholder="...and this is some extra info."
                name="description"
            ></textarea>
        </label>
        <template v-if="isUpdate">
            <button type="submit" class="btn" @click.prevent="updateTask()">
                Update task
            </button>
            <button type="submit" class="btn" @click.prevent="resetFields()">
                Cancel
            </button>
        </template>
        <button v-else type="submit" class="btn" @click.prevent="createTask()">
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

const taskId = computed<string | null>({
    get: () => tasksStore.formFields.id,
    set: (value: string | null) => (tasksStore.formFields.id = value)
})

const taskTitle = computed<string>({
    get: () => tasksStore.formFields.title,
    set: (value: string) => (tasksStore.formFields.title = value)
})

const taskDescription = computed<string>({
    get: () => tasksStore.formFields.body,
    set: (value: string) => (tasksStore.formFields.body = value)
})

const formIsValid: ComputedRef<boolean> = computed(() => {
    return taskTitle.value.length > 0
})

const showFormError: Ref<boolean> = ref(false)

// Methods

const resetFields: () => void = () => {
    taskTitle.value = ''
    taskDescription.value = ''
    taskId.value = null
    showFormError.value = false
}

const isUpdate: ComputedRef<boolean> = computed(() => {
    return taskId.value !== null
})

const formClasses: ComputedRef<string> = computed(() => {
    return isUpdate.value ? 'bg-mint-200 dark:bg-mint-950 p-4 rounded-xl' : ''
})

const createTask = (): void => {
    if (!formIsValid.value) {
        showFormError.value = true
        return
    }
    tasksStore.createTask({
        title: taskTitle.value,
        body: taskDescription.value
    })
    tasksStore.resetFormFields()
}

const updateTask = (): void => {
    if (!formIsValid.value) {
        showFormError.value = true
        return
    }
    if (taskId.value === null) return
    tasksStore.updateTask({
        title: taskTitle.value,
        body: taskDescription.value,
        id: taskId.value,
        completed: false
    })
    tasksStore.resetFormFields()
}
</script>
