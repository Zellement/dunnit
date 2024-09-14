<template>
    <div class="layout p-4">
        <div class="grid-layout container">
            <div class="col-span-full lg:col-span-4 lg:row-start-1">
                <site-header />
                <form-create-task />
            </div>
            <main
                class="col-span-full row-span-full lg:col-span-8 lg:col-start-5"
            >
                <slot />
            </main>
            <site-footer class="col-span-full w-full text-right" />
        </div>
    </div>
</template>

<script setup lang="ts"></script>
