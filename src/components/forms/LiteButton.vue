<script setup>
const props = defineProps({
    title: String
})
</script>

<template>
    <button class="bg-gray-500 text-white rounded shadow">
        <div class="px-8 py-2 text-center">
            {{ props.title }}
        </div>
    </button>
</template>
