import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { isAdmin } from '@/app/isAdmin.ts'
import { isSessionExpired } from '@/app/isSessionExpired.ts'
import { notFound, redirect } from 'next/navigation'
import { getAlert, getAlerts } from '@/app/actions/getAlerts.ts'
import AlertsList from '@/components/AlertsList.tsx'
import AlertForm from '@/components/AlertForm.tsx'
import { ALERTS_ENABLED } from '@/config.ts'

const AlertsPage = async () => {
    if(!ALERTS_ENABLED) {
        return '404'
    }
    const session = await getServerSession()
    if (!session || !isAdmin(session) || isSessionExpired(session)) {
        return redirect('/api/auth/signin')
    }
    const alerts = await getAlerts()

    return (<>
        <div className="flex">
            <div className="flex-1 p-4">
                <div className="items-center p-5">
                    {/*key перерендеривает компонент для очистки полей формы*/}
                    <AlertForm key={Date.now()} title='' text='' startDate={new Date()} endDate={new Date()}/>
                    <div className="flex justify-center p-10">
                        <Link href={'/posts'}>
                            <button className='button_blue'>Вернуться</button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center">
                    <h1 className="mt-6 pb-2">Список объявлений</h1>
                </div>

                <div className="flex-1 p-4 border-r border-gray-300">
                    <AlertsList alerts={alerts}/>
                </div>
            </div>
        </div>
    </>)
}
export default AlertsPage