'use server'
import { Alert } from '@/app/db/alert.model.ts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { TITLE_MIN_LENGTH } from '@/app/constants.ts'

class ValidationError extends Error {}

type AlertData = {
    id: number | undefined,
    title: string,
    text: string,
    startDate: Date,
    endDate: Date
}
// todo id and text are undefined
const cleanFormData = (formData: FormData): AlertData => {
    const id = formData.get('id')
    const title = formData.get('title')
    const text = formData.get('text')
    console.log('>>>>>>> >>>>console.log handleAlert:', 'id', id, 'title', title, 'text', text)
    if (typeof id !== 'string' || typeof title !== 'string' || typeof text !== 'string') {
        throw new ValidationError('Filedata in text fields')
    }
    if (!title || !text) {
        throw new ValidationError('Title or text is null')
    }
    if (title.length < TITLE_MIN_LENGTH) {
        throw new ValidationError('Title too short')
    }
    const startDate = formData.get('start_date')
    const endDate = formData.get('end_date')
    if(typeof startDate !== 'string' || typeof endDate !== 'string') {
        throw new ValidationError('Filedata in date fields')
    }
    if (!startDate || !endDate) {
        throw new ValidationError('Title or text is null')
    }
    // todo проверить обе даты должны быть больше сегодня, дата окончания больше или равна дате начала. Проверить что это точно даты
    return{
        title,
        text,
        id: id ? Number(id) : undefined,
        startDate: new Date(startDate),
        endDate: new Date(endDate)
    }
}

export const handleAlert = async (formData: FormData) => {
    try {
        const { id, title, text, startDate, endDate } = cleanFormData(formData)

        const alert = await Alert.create({ title, text, startDate, endDate })

    } catch (err) {
        console.error('Error on handleForm:  ', err)
        if (err instanceof ValidationError) {
            return redirect('/api/error/?code=400&message=VALIDATION_ERROR')
        }
        return redirect('/api/error/?code=500&message=SERVER_ERROR')
    }
    revalidatePath('/posts')
    redirect('/posts')
}
