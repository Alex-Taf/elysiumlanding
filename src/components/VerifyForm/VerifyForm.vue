<script setup lang="ts">
    import { reactive } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { email, required, numeric } from '@vuelidate/validators'
    import { messages } from './VerifyForm.i18n'
    import { useI18n } from 'vue-i18n'

    import InputNumberPhone from '../elements/InputNumberPhone/InputNumberPhone.vue'
    import InputText from '../elements/InputText/InputText.vue'
    import InputTextInvalidDialog from '../elements/InputText/InputTextInvalidDialog.vue'
    import InputTextInvalidMessage from '../elements/InputText/InputTextInvalidMessage.vue'
    import SelectExc from '../elements/SelectExc/SelectExc.vue'
    import InputSelect from '../elements/InputSelect/InputSelect.vue'
    import Button from '../elements/Button/Button.vue'

    import Phones from "../../static/phones.json"

    const { t } = useI18n({ messages, useScope: 'global' })

    const state = reactive({
        nameAndSurname: '',
        email: '',
        birthdate: '',
        adress: '',
        symbolicSum: '',
        phoneOptions: Phones.phones,
        phoneSelected: {
            countryCode: "rus",
            countryName: "Russia",
            countryMask: '+7 (###) ###-##-##',
            countryMaskPlaceholder: "+7 (___) ___ - __ - __"
        }
    })

    const maskDatePattern = {
        mask: 'DD.MM.YYYY',
        tokens: {
            'D': {
                pattern: /[0-9]/
            },
            'M': {
                pattern: /[0-9]/
            },
            'Y': {
                pattern: /[0-9]/
            }
        }
    }

    const validateRules = {
        nameAndSurname: { required },
        email: { email, required },
        birthdate: { required },
        adress: { required },
        symbolicSum: { required, numeric }
    }

    const v$ = useVuelidate(validateRules, state)
</script>

<template>
    <section class="flex justify-center bg-skin-default py-[52px] px-[162px]">
        <div class="flex flex-col bg-white rounded-xl xl:py-[72px] xl:px-[70px] sm:py-[50px] sm:px-[24px] gap-y-8">
            <router-link to="/">
                <span class="flex items-center gap-x-4 font-bold text-xl">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 10.58L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.58Z" fill="black"/>
                    </svg>
                    <span>{{ t('back') }}</span>
                </span>
            </router-link>
            <span class="xl:text-[36px] sm:text-[27px]">{{ t('verifyLabel') }}</span>
            <section class="flex xl:flex-row sm:flex-col xl:gap-x-10">
                <aside class="flex flex-col">
                    <div class="mb-10">
                        <InputText
                            v-model="state.nameAndSurname"
                            @change="v$.nameAndSurname.$touch"
                            :state="v$.nameAndSurname.$invalid && v$.nameAndSurname.$dirty ? 'error' : ''"
                            :required="true"
                            :label="t('form.name.label')"
                            :placeholder="t('form.name.placeholder')"
                        />
                        <InputTextInvalidDialog>
                            <InputTextInvalidMessage
                                v-if="v$.nameAndSurname.$invalid && v$.nameAndSurname.$dirty && state.nameAndSurname === ''"
                            >
                                {{ t('form.name.errors.required') }}
                            </InputTextInvalidMessage>
                        </InputTextInvalidDialog>
                    </div>
                    <div class="mb-10">
                        <InputText
                            v-model="state.email"
                            @change="v$.email.$touch"
                            :state="v$.email.$invalid && v$.email.$dirty ? 'error' : ''"
                            :required="true"
                            name="email"
                            :label="t('form.email.label')"
                            :placeholder="t('form.email.placeholder')"
                        />
                        <InputTextInvalidDialog>
                            <InputTextInvalidMessage
                                v-if="v$.email.$invalid && v$.email.$dirty"
                            >
                                {{ t('form.email.errors.email') }}
                            </InputTextInvalidMessage>
                            <InputTextInvalidMessage
                                v-if="v$.email.$invalid && v$.email.$dirty && state.email === ''"
                            >
                            {{ t('form.email.errors.required') }}
                            </InputTextInvalidMessage>
                        </InputTextInvalidDialog>
                    </div>
                    <div class="mb-10">
                        <InputSelect :label="t('form.country.label')"
                                    :options="[{name: 'Colombia', value: 'CO'}, {name: 'Russia', value: 'RU'}]"
                                    :defaultValue="{name: 'Colombia', value: 'CO'}"
                        />
                    </div>
                    <div class="mb-10">
                        <InputText
                            v-model="state.symbolicSum"
                            @change="v$.symbolicSum.$touch"
                            :state="v$.symbolicSum.$invalid && v$.symbolicSum.$dirty ? 'error' : ''"
                            :required="true"
                            :label="t('form.numberOfTokens.label')"
                            :placeholder="t('form.numberOfTokens.placeholder')"
                        />
                        <InputTextInvalidDialog>
                            <InputTextInvalidMessage
                                v-if="v$.symbolicSum.$invalid && v$.symbolicSum.$dirty"
                            >
                                {{ t('form.numberOfTokens.errors.numeric') }}
                            </InputTextInvalidMessage>
                            <InputTextInvalidMessage
                                v-if="v$.symbolicSum.$invalid && v$.symbolicSum.$dirty && state.symbolicSum === ''"
                            >
                                {{ t('form.numberOfTokens.errors.required') }}
                            </InputTextInvalidMessage>
                        </InputTextInvalidDialog>
                    </div>
                </aside>
                <aside class="flex flex-col">
                    <div class="mb-10">
                        <InputText
                            v-model="state.birthdate"
                            :mask="maskDatePattern"
                            @change="v$.birthdate.$touch"
                            :state="v$.birthdate.$invalid && v$.birthdate.$dirty ? 'error' : ''"
                            :required="true"
                            :label="t('form.birthDate.label')"
                            :placeholder="t('form.birthDate.placeholder')"
                        />
                        <InputTextInvalidDialog>
                            <InputTextInvalidMessage
                                v-if="v$.birthdate.$invalid && v$.birthdate.$dirty && state.birthdate === ''"
                            >
                                {{ t('form.birthDate.errors.required') }}
                            </InputTextInvalidMessage>
                        </InputTextInvalidDialog>
                    </div>
                    <div class="mb-10">
                        <InputNumberPhone
                            :options="state.phoneOptions"
                            v-model="state.phoneSelected"
                            :label="t('form.phone.label')"
                        />
                    </div>
                    <div class="mb-10">
                        <InputText
                            v-model="state.adress"
                            @change="v$.adress.$touch"
                            :state="state.adress === '' && v$.adress.$dirty ? 'error' : ''"
                            :required="true"
                            :label="t('form.address.label')"
                            :placeholder="t('form.address.placeholder')"
                        />
                        <InputTextInvalidDialog>
                            <InputTextInvalidMessage v-if="state.adress === '' && v$.adress.$dirty">
                                {{ t('form.adress.errors.required') }}
                            </InputTextInvalidMessage>
                        </InputTextInvalidDialog>
                    </div>
                    <div class="mb-10">
                        <SelectExc :label="t('form.establecoin.label')" />
                    </div>
                </aside>
            </section>
            <Button class="xl:flex xl:self-end xl:w-[215px] h-[52px] text-base">{{ t('send') }}</Button>
        </div>
    </section>
</template>