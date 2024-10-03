'use server'
import { Alert } from '@/app/db/alert.model.ts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { TITLE_MIN_LENGTH } from '@/app/constants.ts'

class ValidationError extends Error {}

type AlertData = {
    id: number | undefined,
    title: string,
    text: string
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
    return { title, text, id: id ? Number(id) : undefined }
}

export const handleAlert = async (formData: FormData) => {
    try {
        const { id, title, text } = cleanFormData(formData)

        const alert = await Alert.create({ id: id, title, text })

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
