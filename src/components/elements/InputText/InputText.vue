<script setup lang="ts">
    const props = defineProps<{
        modelValue?: string,
        label: string,
        placeholder: string,
        name?: string,
        state?: string,
        mask?: any
    }>()

    const emit = defineEmits(['update:modelValue', 'change'])

    const updateInputValue = (e: Event) => {
        if (e && e.target) emit('update:modelValue', e.target?.value)
    }

    const changeInputValue = (e: Event) => {
        if (e) emit('change', e)
    }
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]"
        :class="{ 'border-red-500': props.state === 'error' }"
    >
        <input type="text" class="border-none w-full focus:border-transparent focus:ring-0 focus:outline-none"
                :placeholder="props.placeholder" :name="props.name" :value="modelValue"
                v-maska="props.mask"
                @input="updateInputValue"
                @keyup="changeInputValue"
        />
    </div>
</template>
