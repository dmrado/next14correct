import ContactsPage from "../components/ContactsPage.js";

export const metadata = {
    title: 'Beit-Ieshua | Information',
}


const Page = () => {
    return (
        <>
            {/*<h1 style={{textAlign: 'center', color: 'gray'}}>*/}
            {/*    Дорогие друзья! <br/> Эта страница находится в разработке. <br/>Мы хотим подобрать для вас самую полезную и самую свежую информацию. Вскоре!*/}
            {/*</h1>*/}
            {/*<InformationPage/>*/}

            <ContactsPage/>
        </>

    );
};

export default Page;
