<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const props = defineProps({
    title: String,
    isBgDark: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="accordion--container">
        <div @click="isOpen=!isOpen" class="flex justify-between items-center gap-4 cursor-pointer">
            <div>
                <p :class="props.isBgDark?'text-white':'text-ather-black-100'" class="accordion--title">{{ props.title }}</p>
            </div>
            <div>
                <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" :class="props.isBgDark?'text-white':'text-black'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" :class="props.isBgDark?'text-white':'text-black'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </div>
        </div>
        <div :class="isOpen?'flex':'hidden'" class="w-[95%]">
            <slot class="accordion--details"></slot>
        </div>
        <div class="w-full h-[1px] mt-2" :class="props.isBgDark?'bg-[#25292e]':'bg-[#D7D7D7]'"></div>
    </div>
</template>

<style scoped>

.accordion--container {
    @apply
    grid
    grid-cols-1
    gap-2
    rounded-md
    p-5;
}

.accordion--title {
    @apply
    text-[17px]
    leading-[40px]
    font-[400];
}

.accordion--details {
    @apply
    text-[15px]
    leading-[25px]
    mb-[20px]
}
</style>
