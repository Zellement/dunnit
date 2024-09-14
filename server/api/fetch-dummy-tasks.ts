export default defineEventHandler(async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1/todos'
        )
        // const response = await getJson({
        //     engine: 'google_maps_reviews',
        //     place_id: 'ChIJrYZDVGr3eUgRCWhg5ojDc90',
        //     hl: 'en',
        //     sort_by: 'newestFirst',
        //     api_key: process.env.SERP_API_KEY
        // })
        console.log(response)
        return response
    } catch (err) {
        console.error(err)
    }
})
