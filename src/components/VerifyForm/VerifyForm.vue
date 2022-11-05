<script setup lang="ts">
    import InputNumberPhone from '../elements/InputNumberPhone/InputNumberPhone.vue'
    import InputText from '../elements/InputText/InputText.vue'
    import SelectExc from '../elements/SelectExc/SelectExc.vue'
    import InputSelect from '../elements/InputSelect/InputSelect.vue'
</script>

<template>
    <section class="flex justify-center bg-skin-default py-[52px] px-[162px]">
        <div class="flex flex-col bg-white rounded-xl xl:py-[72px] xl:px-[70px] sm:py-[50px] sm:px-[24px] gap-y-8">
            <span class="flex items-center gap-x-4 font-bold text-xl">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 10.58L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.58Z" fill="black"/>
                </svg>
                <span>Volver atras</span>
            </span>
            <span class="xl:text-[36px] sm:text-[27px]">Dentity Verification Process KYC</span>
            <section class="flex xl:flex-row sm:flex-col xl:gap-x-10">
                <aside class="flex flex-col">
                    <div class="mb-10">
                        <InputText label="Nombre y apellido" placeholder="Ingresa tu nombre" />
                    </div>
                    <div class="mb-10">
                        <InputText label="Email" placeholder="Example@mail.com" />
                    </div>
                    <div class="mb-10">
                        <InputSelect label="País de procedencia"
                                    :options="[{name: 'Colombia', value: 'CO'}, {name: 'Russia', value: 'RU'}]"
                                    :defaultValue="{name: 'Colombia', value: 'CO'}"
                        />
                    </div>
                    <div class="mb-10">
                        <InputText label="Cantidad de tokens" placeholder="¿Cuantos tokens elysium quieres?" />
                    </div>
                </aside>
                <aside class="flex flex-col">
                    <div class="mb-10">
                        <InputText label="Fecha de nacimiento" placeholder="Ingresa tú fecha de nacimiento" />
                    </div>
                    <div class="mb-10">
                        <InputNumberPhone label="Número de teléfono" />
                    </div>
                    <div class="mb-10">
                        <InputText label="Dirección" placeholder="Ingresa tú ubicación" />
                    </div>
                    <div class="mb-10">
                        <SelectExc label="¿ Que establecoin usará para el intercambio?" />
                    </div>
                </aside>
            </section>
        </div>
    </section>
</template>