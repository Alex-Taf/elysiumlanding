import { $host } from './index'

export class FormVerify {
    async send(formData: Record<string, string>) {
        return await $host.post('/mail/', { message: formData })
    }
}
