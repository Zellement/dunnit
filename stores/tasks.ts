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
    getters: {
        getTasksOutstanding(): Task[] {
            return this.tasks.filter((task) => task.status != 'complete')
        },
        getTasksComplete(): Task[] {
            return this.tasks.filter((task) => task.status === 'complete')
        }
    },
    actions: {
        createTask(task: Partial<Task>) {
            this.tasks.push({
                id: this.taskIndex,
                title: task.title ?? '',
                body: task.body ?? '',
                status: 'todo'
            })
            this.taskIndex++
        },
        deleteTask(id: number) {
            setTimeout(() => {
                this.tasks = this.tasks.filter((task) => task.id !== id)
            }, 1000)
        },
        toggleCompleteTask(id: number) {
            const task = this.tasks.find((task) => task.id === id)
            if (task) {
                if (task.status === 'complete') {
                    task.status = 'todo'
                } else {
                    task.status = 'complete'
                }
            }
        }
    },
    persist: true
})
