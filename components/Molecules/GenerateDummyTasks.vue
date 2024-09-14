<template>
    <div class="">
        <button @click.prevent="fetchDummyData">Click me</button>
    </div>
</template>

<script lang="ts" setup>
const fetchDummyData = async () => {
    const { data } = await useFetch('/api/fetch-dummy-data')
    console.log(data.value)
}
</script>
