import ContactPage from '@/components/ContactPage'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'

export const metadata = {
    title: 'Beit-Ieshua | Information',
}

const Page = async () => {
    // const isAcceptedCookie = await getConsentAccepted()
    return (
        <>
            {/*<h1 style={{textAlign: 'center', color: 'gray'}}>*/}
            {/*    Дорогие друзья! <br/> Эта страница находится в разработке. <br/>Мы хотим подобрать для вас самую полезную и самую свежую информацию. Вскоре!*/}
            {/*</h1>*/}
            {/*<InformationPage/>*/}

            <ContactPage
                // isAcceptedCookie={isAcceptedCookie}
            />
        </>

    )
}

export default Page
