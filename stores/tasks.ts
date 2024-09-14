import { defineStore } from 'pinia'

// type BooleanKeys<T> = {
//     [K in keyof T]: T[K] extends boolean ? K : never
// }[keyof T]

interface State {
    tasks: Task[]
    taskIndex: number
}

export const useTasksStore = defineStore('tasks', {
    state: (): State => ({
        tasks: [],
        taskIndex: 0
    }),
    actions: {
        createTask(task: Partial<Task>) {
            this.tasks.push({
                id: this.taskIndex,
                title: task.title ?? '',
                body: task.body ?? ''
            })
            this.taskIndex++
        }
    },
    persist: true
})
