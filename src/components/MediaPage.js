import Link from 'next/link'

const MediaPage = () => {

    return (<>
        <div className="container youtube">
            <div className="videohosting_btns">
                <Link href='https://youtube.com/@stranger-pilgrim?si=aBV7lJaAJu4qrfpR' target="_blank">
                    <button className="btn btn-youtube">YouTube</button>
                </Link>
                <Link href='https://rutube.ru/video/5aac7d67401e9624126964230167d953/?r=wm' target="_blank">
                    <button className="btn btn-youtube">RuTube</button>
                </Link>
            </div>

            <div className="media__list-wrapper">

                <div className="media__list-header">
                    <h2>Наш фотоальбом</h2>
                </div>
                <p>Чтобы посмотреть все фотографии с мероприятия, наведите на фото и нажмите для перехода на диск
                </p>

                <div className="media__list">

                    {/*левый блок 1*/}
                    <div className="media__li media__li_1">
                        <h3>Симха 2021</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%A1%D0%B8%D0%BC%D1%85%D0%B0%202021">
                            <img className="media__img vertical" src="/img/mediapage/Simkha2021.webp" alt="Pic"/>
                        </Link>

                    </div>
                    <div className="media__li media__li_2">
                        <h3>Артем церковь</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%90%D1%80%D1%82%D1%91%D0%BC%20%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C-07.09.21">
                            <img className="media__img" src="/img/mediapage/ArtemCurch.webp" alt="Pic"/>
                        </Link>
                    </div>
                    <div className="media__li media__li_3">
                        <h3>Ощина-Бейт Иешуа-Хамашиах</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%9E%D1%89%D0%B8%D0%BD%D0%B0-%D0%91%D0%B5%D0%B9%D1%82%20%D0%98%D0%B5%D1%88%D1%83%D0%B0-%D0%A5%D0%B0%D0%BC%D0%B0%D1%88%D0%B8%D0%B0%D1%85">
                            <img className="media__img" src="/img/mediapage/Obsh_Be_Ieshua.webp" alt="Pic"/>
                        </Link>
                    </div>

                    {/*правый блок 1*/}
                    <div className="media__li media__li_4">
                        <h3>Песах-2022</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%9F%D0%B5%D1%81%D0%B0%D1%85-2022">
                            <img className="media__img" src="/img/mediapage/Pesakh2022.webp" alt="Pic"/>
                        </Link>
                    </div>
                    <div className="media__li media__li_5">
                        <h3>Симха</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%A1%D0%B8%D0%BC%D1%85%D0%B0">
                            <img className="media__img" src="/img/mediapage/Simkha.webp" alt="Pic"/>
                        </Link>
                    </div>
                    <div className="media__li media__li_6">
                        <h3>Кирил Полонский-2023</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-2023">
                            <img className="media__img vertical" src="/img/mediapage/Polonsky.webp"
                                alt="Pic"/>
                        </Link>

                    </div>

                    {/*левый блок 2*/}
                    <div className="media__li media__li_7">
                        <h3>Суккот 2021</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%A1%D1%83%D0%BA%D0%BA%D0%BE%D1%82%202021%20%D1%84%D0%BE%D1%82%D0%BE">
                            <img className="media__img vertical" src="/img/mediapage/Sukkot2021.webp"
                                alt="Pic"/>
                        </Link>
                    </div>
                    <div className="media__li media__li_8">
                        <h3>Суккот 2023</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D1%81%D1%83%D0%BA%D0%BA%D0%BE%D1%822023">
                            <img className="media__img" src="/img/mediapage/Sukkot2023.webp" alt="Pic"/>
                        </Link>
                    </div>
                    <div className="media__li media__li_9">
                        <h3>Ханука 2021</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%A5%D0%B0%D0%BD%D1%83%D0%BA%D0%B0%202021">
                            <img className="media__img" src="/img/mediapage/Hanuka2021.webp" alt="Pic"/>
                        </Link>
                    </div>

                    {/*правый блок 2*/}
                    <div className="media__li media__li_10">
                        <h3>Шавуот 2023</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%A8%D0%B0%D0%B2%D1%83%D0%BE%D1%82%202023">
                            <img className="media__img" src="/img/mediapage/Shawuot2023.webp" alt="Pic"/>
                        </Link>
                    </div>
                    <div className="media__li media__li_11">
                        <h3>Шкотовские пруды</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D1%88%D0%BA%D0%BE%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D1%80%D1%83%D0%B4%D1%8B">
                            <img className="media__img" src="/img/mediapage/ShkotPrudi.webp" alt="Pic"/>
                        </Link>
                    </div>
                    <div className="media__li media__li_12">
                        <h3>Хупа 2019</h3>
                        <Link target="_blank"
                            href="https://cloud.mail.ru/public/uwcQ/cwZAWLkF3/%D0%A5%D1%83%D0%BF%D0%B0%202019">
                            <img className="media__img vertical" src="/img/mediapage/Hupa2019.webp" alt="Pic"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MediaPage
