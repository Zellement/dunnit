<template>
    <div class="p-4">
        <div class="grid-layout container">
            <div class="col-span-full h-full lg:col-span-4 lg:row-start-1">
                <div class="sticky top-0">
                    <site-header />
                    <form-create-task />
                    <generate-dummy-tasks class="mt-16" />
                </div>
            </div>
            <main class="col-span-full lg:col-span-8 lg:col-start-5">
                <slot />
            </main>
            <site-footer class="col-span-full text-right" />
        </div>
    </div>
</template>

<script setup lang="ts"></script>
