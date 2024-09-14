export default defineEventHandler(async () => {
    try {
        const response = await $fetch(
            'https://jsonplaceholder.typicode.com/users/1/todos'
        )
        return response
    } catch (err) {
        console.error(err)
    }
})
