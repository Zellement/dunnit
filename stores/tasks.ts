import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

interface State {
    tasks: Task[]
    taskIndex: number
    clearingCompletedTasks: boolean
    formFields: {
        title: string
        body: string
        id: string | null
        completed: boolean
    }
}

export const useTasksStore = defineStore('tasks', {
    state: (): State => ({
        tasks: [],
        taskIndex: 0,
        clearingCompletedTasks: false,
        formFields: {
            title: '',
            body: '',
            id: null,
            completed: false
        }
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
                id: uuidv4(),
                title: task.title ?? '',
                body: task.body ?? '',
                completed: false
            }
            this.setTasks([taskObj])
            this.resetFormFields()
        },
        updateTask(task: Task) {
            console.log(task)
            const index = this.tasks.findIndex((t) => t.id === task.id)
            if (index !== -1) {
                this.tasks[index] = task
            }
            this.resetFormFields()
        },
        clearCompletedTasks() {
            this.clearingCompletedTasks = true
            setTimeout(() => {
                this.tasks = this.tasks.filter((task) => !task.completed)
                this.clearingCompletedTasks = false
            }, 500)
            this.resetFormFields()
        },
        deleteTask(id: string) {
            setTimeout(() => {
                this.tasks = this.tasks.filter((task) => task.id !== id)
            }, 500)
            this.resetFormFields()
        },
        editTask(task: Task) {
            this.formFields.title = task.title
            this.formFields.body = task.body ?? ''
            this.formFields.id = task.id
            this.formFields.completed = task.completed
        },
        toggleCompleteTask(id: string) {
            const task = this.tasks.find((task) => task.id === id)
            if (task) task.completed = !task.completed
        },
        resetFormFields() {
            this.formFields = {
                title: '',
                body: '',
                id: null,
                completed: false
            }
        },
        setTasks(tasks: Task[]) {
            this.tasks = [...this.tasks, ...tasks]
            this.resetFormFields()
        }
    },
    persist: true
})
