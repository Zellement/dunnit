import { defineStore } from 'pinia'

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
            return this.tasks.filter((task) => !task.completed)
        },
        getTasksComplete(): Task[] {
            return this.tasks.filter((task) => task.completed)
        }
    },
    actions: {
        createTask(task: Partial<Task>) {
            const taskObj: Task = {
                id: this.taskIndex,
                title: task.title ?? '',
                body: task.body ?? '',
                completed: false
            }
            this.setTasks([taskObj])
            this.taskIndex++
        },
        deleteTask(id: number) {
            setTimeout(() => {
                this.tasks = this.tasks.filter((task) => task.id !== id)
            }, 500)
        },
        toggleCompleteTask(id: number) {
            const task = this.tasks.find((task) => task.id === id)
            if (task) task.completed = !task.completed
        },
        setTasks(tasks: Task[]) {
            this.tasks = [...this.tasks, ...tasks]
        }
    },
    persist: true
})
