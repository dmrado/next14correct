'use server'
import { getAlert } from '@/app/actions/getAlerts.ts'
import { handleAlert } from '@/app/actions/handleAlert.ts'
export const consumeAlert = async (id) => {
    await getAlert(id)
}
export const HandleSubmit = async (formData: FormData) => {
    await handleAlert(formData)
}