'use client'
import { handleAlert } from '@/app/actions/handleAlert.ts'

type AlertForm = {
    id: number,
    title: string;
    text: string;
    startDate: Date;
    endDate: Date;
    onSubmit: () => void
}

const NewAlertForm = () => {
    const handleSubmit = async (formData: FormData) => {
        await handleAlert(formData)
            .then(() => console.log('handleAlert in the NewAlertForm is finished'))
    }

    const today = new Date().toISOString()

    return (
        <form className="edit bg-white rounded px-8 pt-6 pb-8" action={handleSubmit}>
            <div className="mb-4">
                <input
                    defaultValue={''}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name='title' placeholder="Заголовок не менее 3 и не более 180 символов"/>
            </div>
            <div className="mb-4">
                <textarea
                    defaultValue={''}
                    name='text'
                    rows={7}
                    style={{ width: '100%' }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Введите текст здесь..."
                />
            </div>
            <div className="row">
                <div>
                    <label htmlFor="start">Дата начала:</label>

                    <input defaultValue={today.split('T')[0]} type="date" id="start" name="start_date"/>
                </div>

                <div>
                    <label htmlFor="start">Дата окончания:</label>

                    <input defaultValue={today.split('T')[0]} type="date" id="start" name="end_date"/>
                </div>
            </div>

            <input hidden type="number" name="id" value='' readOnly/>

            <div className="flex items-center justify-center mt-2">
                <button type='submit' className='button_green'>Записать</button>
            </div>
        </form>
    )
}

export default NewAlertForm