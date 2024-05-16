'use client'
import Link from 'next/link'
import {useEffect} from "react";

const Header = () => {
    // todo useEffect для адаптивности меню навигации
    useEffect(() => {
        if (typeof window !== "undefined") {
            const header = document.querySelector('.header')
            const burger = document.getElementById('burger')

            burger.addEventListener('click', () => {
                // if (header.classList !== 'open') {
                header.classList.add('open')
                // } else return
            })

            //скрыть при нажатии на пункт меню
            document.querySelectorAll('.menu__link').forEach(item => item.addEventListener('click', () => {
                header.classList.remove('open')
            }))

            //  Закрыть по esc
            window.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    header.classList.remove('open')
                }
            })

            //  Закрыть при клике вне его
            document.getElementById('menu').addEventListener('click', e => {
                e._isClickWithInMenu = true
            })
            burger.addEventListener('click', e => {
                e._isClickWithInMenu = true
            })
            //то есть если кликнули по меню или бургеру - ничего не выполняем
            // document.body.addEventListener('click', e => {
            //     if (e._isClickWithInMenu) return
            //     document.querySelector('.header').classList.remove('open')
            // })
        }

    }, [])

    return (<>
            {/*header-block*/}
            {/*<div className="body-wrapper">*/}
            {/* body-wrapper нужен в AboutPage для меню навигации справа в режиме телефона */}
            {/*header нужен именно здесь, здесь для него useEffect*/}
            <div className="header">
                {/*header__container -  nav*/}
                <nav className="nav">
                    {/*логотип менора с названием начало*/}
                    <div className="nav__logo">
                        {/*Minora*/}
                        <Link href="/public" className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68"
                                 fill="none">
                                <path xmlns="http://www.w3.org/2000/svg"
                                      d="M34.0001 11.3333V56.6666M22.6667 11.3333V17C22.6667 20.0058 23.8608 22.8884 25.9862 25.0139C28.1116 27.1393 30.9943 28.3333 34.0001 28.3333C37.0059 28.3333 39.8885 27.1393 42.014 25.0139C44.1394 22.8884 45.3334 20.0058 45.3334 17V11.3333"
                                      stroke="#004E98" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path xmlns="http://www.w3.org/2000/svg"
                                      d="M11.3334 11.3333V17C11.3334 23.0116 13.7215 28.7769 17.9723 33.0277C22.2231 37.2786 27.9885 39.6666 34 39.6666C40.0116 39.6666 45.777 37.2786 50.0278 33.0277C54.2786 28.7769 56.6667 23.0116 56.6667 17V11.3333M28.3334 56.6666H39.6667"
                                      stroke="#004E98" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        {/*Minora end*/}

                        {/*Star*/}
                        {/*<Link href="/" className="logo">*/}
                        {/*    <svg*/}
                        {/*        xmlns="http://www.w3.org/2000/svg"*/}
                        {/*        width={69}*/}
                        {/*        height={71}*/}
                        {/*        viewBox="0 0 69 71"*/}
                        {/*        fill="none"*/}
                        {/*    >*/}
                        {/*        <path*/}
                        {/*            d="M34.9408 5L63.5709 50.6217H6.31069L34.9408 5Z"*/}
                        {/*            stroke="#004E98"*/}
                        {/*            strokeWidth={5}*/}
                        {/*        />*/}
                        {/*        <path*/}
                        {/*            d="M34.0592 65.829L5.42908 20.2073L62.6893 20.2073L34.0592 65.829Z"*/}
                        {/*            stroke="#004E98"*/}
                        {/*            strokeWidth={5}*/}
                        {/*        />*/}
                        {/*    </svg>*/}

                        {/*</Link>*/}
                        {/*Star end*/}

                        <div className="nav-text">
                            <p className="nav-text_1">Бейт-Иешуа</p>
                            <p className="nav-text_2">Синагога г. Артем</p>
                        </div>
                    </div>
                    {/*логотип менора с названием окончание*/}

                    <button className="header__burger-btn" id="burger">
                        <span/>
                        <span/>
                        <span/>
                    </button>

                    <div className="menu" id="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link className="menu__link" href="/public">
                                    О нас
                                </Link>
                            </li>
                            {/*<li className="menu__item">*/}
                            {/*    <Link className="menu__link" href="/posts">*/}
                            {/*        Блог*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li className="menu__item">
                                <Link className="menu__link" href="/books">
                                    Книжники
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link" href="/media">
                                    Мы
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link" href="/holidays">
                                    Праздники
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link" href="/information">
                                    Полезное
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link" href="/posts">
                                    Блог
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="menu" id="menu">
                            <ul className="menu__list menu_socials">
                                <li className="menu__item menu__item_header">
                                    <Link className="menu__link menu_socials_first" target="_blank"
                                          href="https://t.me/+79146520955">
                                        {/*<i className="fa-brands fa-telegram" />*/}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={36}
                                            height={36}
                                            viewBox="0 0 36 36"
                                            fill="none"
                                        >
                                            <path d="M 18 3 C 9.72 3 3 9.72 3 18 C 3 26.28 9.72 33 18 33 C 26.28 33 33
                                                26.28 33 18 C 33 9.72 26.28 3 18 3 Z M 24.96 13.2 C 24.735 15.57 23.76
                                                21.33 23.265 23.985 C 23.055 25.11 22.635 25.485 22.245 25.53 C 21.375
                                                25.605 20.715 24.96 19.875 24.405 C 18.555 23.535 17.805 22.995 16.53
                                                22.155 C 15.045 21.18 16.005 20.64 16.86 19.77 C 17.085 19.545 20.925
                                                16.05 21 15.735 C 21.0104 15.6873 21.009 15.6378 20.996 15.5907 C
                                                20.9829 15.5437 20.9585 15.5005 20.925 15.465 C 20.835 15.39 20.715
                                                15.42 20.61 15.435 C 20.475 15.465 18.375 16.86 14.28 19.62 C 13.68
                                                20.025 13.14 20.235 12.66 20.22 C 12.12 20.205 11.1 19.92 10.335 19.665
                                                C 9.39 19.365 8.655 19.2 8.715 18.675 C 8.745 18.405 9.12 18.135 9.825
                                                17.85 C 14.205 15.945 17.115 14.685 18.57 14.085 C 22.74 12.345 23.595
                                                12.045 24.165 12.045 C 24.285 12.045 24.57 12.075 24.75 12.225 C 24.9
                                                12.345 24.945 12.51 24.96 12.63 C 24.945 12.72 24.975 12.99 24.96 13.2
                                                Z"
                                                  fill="#004E98"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="menu__item menu__item_header">
                                    <Link className="menu__link" target="_blank"
                                          href="https://api.whatsapp.com/send/?phone=79242693005">
                                        {/*<i className="fa-brands fa-square-whatsapp" />*/}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={36}
                                            height={36}
                                            viewBox="0 0 36 36"
                                            fill="none"
                                        >
                                            <path
                                                d="M 18.0015 3 C 26.286 3 33.0015 9.7155 33.0015 18 C 33.0015 26.2845 26.286 33 18.0015 33 C 15.3507 33.0043 12.7465 32.3028 10.4565 30.9675 L 3.00749 33 L 5.03549 25.548 C 3.69913 23.2573 2.99706 20.652 3.00149 18 C 3.00149 9.7155 9.71699 3 18.0015 3 Z M 12.8895 10.95 L 12.5895 10.962 C 12.3953 10.9738 12.2055 11.0249 12.0315 11.112 C 11.8688 11.2041 11.7202 11.3193 11.5905 11.454 C 11.4105 11.6235 11.3085 11.7705 11.199 11.913 C 10.6442 12.6344 10.3454 13.52 10.35 14.43 C 10.353 15.165 10.545 15.8805 10.845 16.5495 C 11.4585 17.9025 12.468 19.335 13.8 20.6625 C 14.121 20.982 14.436 21.303 14.775 21.6015 C 16.4301 23.0587 18.4024 24.1096 20.535 24.6705 L 21.387 24.801 C 21.6645 24.816 21.942 24.795 22.221 24.7815 C 22.6578 24.7589 23.0844 24.6407 23.4705 24.435 C 23.6669 24.3338 23.8586 24.2237 24.045 24.105 C 24.045 24.105 24.1095 24.063 24.2325 23.97 C 24.435 23.82 24.5595 23.7135 24.7275 23.538 C 24.852 23.409 24.96 23.2575 25.0425 23.085 C 25.1595 22.8405 25.2765 22.374 25.3245 21.9855 C 25.3605 21.6885 25.35 21.5265 25.3455 21.426 C 25.3395 21.2655 25.206 21.099 25.0605 21.0285 L 24.1875 20.637 C 24.1875 20.637 22.8825 20.0685 22.0845 19.7055 C 22.001 19.669 21.9115 19.6482 21.8205 19.644 C 21.7179 19.6335 21.6142 19.645 21.5164 19.6779 C 21.4186 19.7107 21.3289 19.7641 21.2535 19.8345 C 21.246 19.8315 21.1455 19.917 20.061 21.231 C 19.9987 21.3146 19.913 21.3779 19.8147 21.4126 C 19.7164 21.4473 19.61 21.452 19.509 21.426 C 19.4113 21.3998 19.3155 21.3667 19.2225 21.327 C 19.0365 21.249 18.972 21.219 18.8445 21.165 C 17.9836 20.7893 17.1865 20.2817 16.482 19.6605 C 16.293 19.4955 16.1175 19.3155 15.9375 19.1415 C 15.3474 18.5763 14.8331 17.937 14.4075 17.2395 L 14.319 17.097 C 14.2554 17.0012 14.204 16.898 14.166 16.7895 C 14.109 16.569 14.2575 16.392 14.2575 16.392 C 14.2575 16.392 14.622 15.993 14.7915 15.777 C 14.9565 15.567 15.096 15.363 15.186 15.2175 C 15.363 14.9325 15.4185 14.64 15.3255 14.4135 C 14.9055 13.3875 14.4705 12.366 14.0235 11.352 C 13.935 11.151 13.6725 11.007 13.434 10.9785 C 13.353 10.9695 13.272 10.9605 13.191 10.9545 C 12.9895 10.9445 12.7877 10.9465 12.5865 10.9605 L 12.8895 10.95 Z"
                                                fill="#004E98"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="menu__item menu__item_header">
                                    <Link className="menu__link" target="_blank"
                                          href="https://www.youtube.com/@Stranger-pilgrim">
                                        {/*<i className="fa-brands fa-square-youtube"></i>*/}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={34}
                                            height={34}
                                            viewBox="0 0 36 36"
                                            fill="none"
                                        >
                                            <path
                                                d="M 20.8854 17.6994 L 16.8426 15.813 C 16.4898 15.6492 16.2 15.8328 16.2 16.2234 V 19.7766 C 16.2 20.1672 16.4898 20.3508 16.8426 20.187 L 20.8836 18.3006 C 21.2382 18.135 21.2382 17.865 20.8854 17.6994 Z M 18 0.719971 C 8.45637 0.719971 0.719971 8.45637 0.719971 18 C 0.719971 27.5436 8.45637 35.28 18 35.28 C 27.5436 35.28 35.28 27.5436 35.28 18 C 35.28 8.45637 27.5436 0.719971 18 0.719971 Z M 18 25.02 C 9.15477 25.02 8.99997 24.2226 8.99997 18 C 8.99997 11.7774 9.15477 10.98 18 10.98 C 26.8452 10.98 27 11.7774 27 18 C 27 24.2226 26.8452 25.02 18 25.02 Z"
                                                fill="#004E98"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                {/*<li className="menu__item">*/}
                                {/*    <div className="menu__link">*/}
                                {/*        Скрыть*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            {/*</div>*/}
        </>
    );
};

export default Header;
