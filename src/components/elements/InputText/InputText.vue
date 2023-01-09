<script setup lang="ts">
    const props = defineProps<{
        modelValue?: string,
        label: string,
        placeholder: string,
        name?: string,
        state?: string,
        mask?: any,
        required?: boolean
    }>()

    const emit = defineEmits(['update:modelValue', 'change', 'focus'])

    const updateInputValue = (e: Event) => {
        const target = e.target as HTMLInputElement

        const targetValue = target.value
        if (targetValue) emit('update:modelValue', targetValue)
    }

    const changeInputValue = (e: Event) => {
        if (e) emit('change', e)
    }

    const focusInputValue = (e: Event) => {
        if (e) emit('focus', e)
    }
</script>

<template>
    <span>{{ props.label }}</span>
    <span v-if="props.required" class="text-red-500 ml-2">*</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]"
        :class="{ 'border-red-500': props.state === 'error' }"
    >
        <input type="text" class="border-none w-full focus:border-transparent focus:ring-0 focus:outline-none"
                :placeholder="props.placeholder" :name="props.name" :value="props.modelValue"
                v-maska="props.mask"
                @input="updateInputValue"
                @keydown="changeInputValue"
                @focus="focusInputValue"
        />
    </div>
</template>
