import ContactPage from '@/components/ContactPage'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'

export const metadata = {
    title: 'Beit-Ieshua | Information',
}

const Page = async () => {
    return (
        <>
            <ContactPage/>
        </>

    )
}

export default Page
