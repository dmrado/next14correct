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

                <div className="songs">
                    <Link href="https://www.youtube.com/playlist?list=PLUhK9QiIUX9eeE4RUp0usqia2wDQK_b8-">
                        <div className="song__elem">
                            <div className="song__elem-1">
                                <svg width="49" height="49" viewBox="0 0 39 39" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.1251 17.875V12.1875L24.7001 8.59625C26.0001 7.3125 26.2438 5.265 25.3338 3.6725C24.9866 3.05455 24.4819 2.53957 23.8711 2.17993C23.2603 1.8203 22.5651 1.62883 21.8563 1.625C21.5151 1.625 21.1251 1.67375 20.8163 1.77125C19.0613 2.2425 17.8751 3.8675 17.8751 5.6875V10.9525L12.7726 16.1037C11.4488 17.4556 10.5507 19.1661 10.1896 21.0234C9.82859 22.8807 10.0204 24.8032 10.7413 26.5525C11.9926 29.64 14.7226 31.7687 17.8751 32.3212V33.3125C17.8751 33.735 17.5013 34.125 17.0626 34.125H14.6251V37.375H17.0626C19.2563 37.375 21.1251 35.5712 21.1251 33.3125V32.5C24.4238 32.5 27.8851 29.38 27.8851 24.7812C27.8851 21.0438 24.7651 17.875 21.1251 17.875ZM21.1251 5.6875C21.1251 5.31375 21.3038 5.02125 21.6451 4.92375C22.0026 4.82625 22.3763 4.9725 22.5551 5.2975C22.647 5.45358 22.6841 5.63589 22.6606 5.81549C22.637 5.99508 22.5541 6.16166 22.4251 6.28875L21.1251 7.68625V5.6875ZM17.8751 18.6875C16.2988 19.7275 15.1126 21.515 14.6901 23.1725L17.8751 24.0175V28.9737C16.9434 28.7239 16.082 28.2626 15.3577 27.6256C14.6334 26.9887 14.0657 26.1933 13.6988 25.3012C12.7401 22.9287 13.2601 20.2312 15.0476 18.4112L17.8751 15.4375V18.6875ZM21.1251 29.25V21.0275C23.0263 21.0275 24.6676 22.815 24.6676 24.7812C24.6676 27.625 22.6038 29.25 21.1251 29.25Z"
                                        fill="#004E98"/>
                                </svg>
                            </div>

                            <div className="song__elem-2">
                                <svg width="46" height="42" viewBox="0 0 46 42" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 8.75V23.7125C21.1983 22.7675 18.975 22.4 16.6175 23.1525C14.0491 23.9925 12.075 26.075 11.615 28.525C11.4023 29.6274 11.4818 30.7603 11.8468 31.8289C12.2117 32.8975 12.8516 33.8708 13.7128 34.6674C14.5741 35.4641 15.6317 36.0609 16.7972 36.408C17.9628 36.7551 19.2024 36.8423 20.4125 36.6625C24.1691 36.12 26.8333 32.97 26.8333 29.4875V12.25H30.6666C32.775 12.25 34.5 10.675 34.5 8.75C34.5 6.825 32.775 5.25 30.6666 5.25H26.8333C24.725 5.25 23 6.825 23 8.75Z"
                                        fill="#FF6700"/>
                                </svg>
                            </div>


                            <div className="song__elem-3">
                                <svg width="46" height="42" viewBox="0 0 46 42" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 8.75V23.7125C21.1983 22.7675 18.975 22.4 16.6175 23.1525C14.0491 23.9925 12.075 26.075 11.615 28.525C11.4023 29.6274 11.4818 30.7603 11.8468 31.8289C12.2117 32.8975 12.8516 33.8708 13.7128 34.6674C14.5741 35.4641 15.6317 36.0609 16.7972 36.408C17.9628 36.7551 19.2024 36.8423 20.4125 36.6625C24.1691 36.12 26.8333 32.97 26.8333 29.4875V12.25H30.6666C32.775 12.25 34.5 10.675 34.5 8.75C34.5 6.825 32.775 5.25 30.6666 5.25H26.8333C24.725 5.25 23 6.825 23 8.75Z"
                                        fill="#004E98"/>
                                </svg>
                            </div>


                            <div className="song__elem-4">
                                <svg width="46" height="42" viewBox="0 0 46 42" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 8.75V23.7125C21.1983 22.7675 18.975 22.4 16.6175 23.1525C14.0491 23.9925 12.075 26.075 11.615 28.525C11.4023 29.6274 11.4818 30.7603 11.8468 31.8289C12.2117 32.8975 12.8516 33.8708 13.7128 34.6674C14.5741 35.4641 15.6317 36.0609 16.7972 36.408C17.9628 36.7551 19.2024 36.8423 20.4125 36.6625C24.1691 36.12 26.8333 32.97 26.8333 29.4875V12.25H30.6666C32.775 12.25 34.5 10.675 34.5 8.75C34.5 6.825 32.775 5.25 30.6666 5.25H26.8333C24.725 5.25 23 6.825 23 8.75Z"
                                        fill="#FF6700"/>
                                </svg>
                            </div>
                        </div>
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
