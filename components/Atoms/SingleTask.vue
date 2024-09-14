<template>
    <div class="task" :class="[taskClassesCompleted, taskClassesDeleting]">
        <div class="task__aside">
            <button
                class="task__aside-btn group"
                @click.prevent="toggleCompleteTask"
            >
                <Icon
                    name="mingcute:check-2-fill"
                    class="task__aside-btn-icon group-hover:opacity-100"
                />
            </button>
        </div>
        <span class="task__body">
            <span class="font-display">{{ task.title }}</span>
            <span class="whitespace-pre-wrap text-xs">{{ task.body }}</span>

            <div
                class="absolute right-3 top-0 flex -translate-y-1.5 gap-1 rounded-xl bg-mint-100 px-2 shadow dark:bg-mint-950"
            >
                <button aria-label="Edit task">
                    <Icon name="heroicons-solid:pencil" class="icons" />
                </button>
                <button aria-label="Delete task" @click.prevent="deleteTask">
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

const tasksStore = useTasksStore()
const props = defineProps<Props>()

const isDeletingTask: Ref<boolean> = ref(false)

const deleteTask = async (): Promise<void> => {
    isDeletingTask.value = true
    await tasksStore.deleteTask(props.task.id)
}

const toggleCompleteTask = (): void => {
    tasksStore.toggleCompleteTask(props.task.id)
}

const taskIsComplete: ComputedRef<boolean> = computed(
    () => props.task.status === 'complete'
)

const taskClassesCompleted: ComputedRef<string> = computed(() => {
    return taskIsComplete.value ? 'task--is-complete' : ''
})
const taskClassesDeleting: ComputedRef<string> = computed(() => {
    return isDeletingTask.value ? 'opacity-0 transition-opacity' : ''
})
</script>

<style lang="scss" scoped>
.task {
    @apply flex w-full flex-row items-start;

    &__aside {
        @apply flex items-center after:flex after:h-px after:w-4 after:bg-mint-50 after:content-[''] dark:after:bg-mint-900;
    }
    &__aside-btn {
        @apply flex h-10 w-10 flex-shrink-0 rounded-full bg-mint-50 hover:scale-105 hover:shadow hover:transition-all dark:bg-mint-900;
    }
    &__aside-btn-icon {
        @apply m-auto h-5 w-5 opacity-20 transition-opacity;
    }
    &__body {
        @apply relative flex min-h-10 flex-grow flex-col gap-2 rounded-xl bg-mint-50 px-3 py-2 transition-colors dark:bg-mint-900;
    }
}

.task--is-complete {
    .task__aside {
        @apply after:bg-green-500 dark:after:bg-green-700;
    }
    .task__aside-btn {
        @apply bg-green-500 dark:bg-green-700;
    }
    .task__aside-btn-icon {
        @apply text-white opacity-100;
    }
    .task__body {
        @apply bg-green-500 text-white dark:bg-green-700;
    }
}
.icons {
    @apply h-4 w-4 transition-colors hover:text-orange-500 dark:hover:text-orange-400;
}
</style>
