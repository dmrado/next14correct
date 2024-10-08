import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { isAdmin } from '@/app/isAdmin.ts'
import { isSessionExpired } from '@/app/isSessionExpired.ts'
import { notFound, redirect } from 'next/navigation'
import { handleAlert } from '@/app/actions/handleAlert.ts'
import { getAlert, getAlerts } from '@/app/actions/getAlerts.ts'
import AlertsList from '@/components/AlertsList.tsx'
import AlertForm from '@/components/AlertForm.tsx'
import { Alert } from '@/app/db/alert.model.ts'
import theme from 'tailwindcss/defaultTheme'

const AddAlert = async () => {
    const alerts = await getAlerts()
    const session = await getServerSession()

    if (!session || !isAdmin(session) || isSessionExpired(session)) {
        return redirect('/api/auth/signin')
    }

    const getAlertForEdit = async (id) => {
        'use server'
        const alertForEdit = await getAlert(id)
        console.log('>>>>>>>>>>>>>>>> >>>>> alertForEdit', alertForEdit)
        if (!alertForEdit) {
            return null
        }
        return alertForEdit // Возвращаем весь объект alert
    }

    const HandleSubmit = async (formData: FormData) => {
        'use server'
        await handleAlert(formData)
    }

    return (<>
        <div className="flex">
            <div className="flex-1 p-4">
                {/* Первая колонка - список alerts */}
                <div className="flex justify-center">
                    <h1 className="mt-6 pb-2">Список объявлений</h1>
                </div>

                <div className="flex-1 p-4 border-r border-gray-300">
                    {alerts.map((alert) =>
                        <AlertsList key={alert.id} id={alert.id} title={alert.title} text={alert.text} getAlertForEdit={getAlertForEdit}/>
                    )}
                </div>
            </div>
            {/* Вторая колонка - форма для добавления нового alert */}
            <div className="flex-1 p-4">
                <div className="flex justify-center">
                    <h1 className="mt-6 pb-2">Создадим новое объявление...</h1>
                </div>

                <div className="items-center p-5">
                    <AlertForm HandleSubmit={HandleSubmit} titleForEdit={alertForEdit.title} textForEdit={alertForEdit.text} />
                    <div className="flex justify-center p-10">
                        <Link href={'/posts'}>
                            <button className='button_blue'>Вернуться</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default AddAlert