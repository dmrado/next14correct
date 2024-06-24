'use client'

import { useEffect } from 'react'

const AboutPage = () => {

    useEffect(() => {
        // for nav_scrolled
        if (typeof window === 'undefined') {
            return
        }
        let elementNav = document.querySelector('.nav')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1) {
                elementNav?.classList.add('nav_scrolled')
            } else {
                elementNav?.classList.remove('nav_scrolled')
            }
        })
    }, [])

    return (<>
        {/*header-block*/}
        {/*    body-wrapper нужен для меню навигации справа в режиме телефона именно здесь тогад корректно работает и нет горизонтального скролла*/}
        <div className="body-wrapper">

            {/*<div className="header">*/}
            <div className="header__banner">

                <div className="header__info">
                    <h1>ОБЩИНА МЕССИАНСКИХ ХРИСТИАН <br/><span className='quotes'>«</span>БЕЙТ ЙЕШУА<span className='quotes'>»</span> <br/> В ГОРОДЕ АРТЁМЕ <span className='quotes'>*</span></h1>

                    <a href="#mission">
                        <button className="btn header__btn">Наша миссия</button>
                    </a>
                    {/*это затемнение которое наезжает на облака*/}
                </div>
                <img className="header__img" src="/img/banner/Film Grain Texture.png" alt=""/>

            </div>
            {/*</div>*/}
        </div>
        <div className="container">
            <div className="about__wrapper">
                <div className="about__list">
                    <div className="about__list-item">
                        <h3>О нас</h3>
                        <p className="about__text">
                                Шалом вам дорогие друзья братья и сëстры!
                                Рад приветствовать вас на сайте нашей мессианской общины &quot;Бейт Йешуа&quot;. Меня зовут
                                Николай Феоктистов и я пастор этой общины со дня её основания. Я женат имею жену
                                помощницу она играет и поёт в нашей общине. У нас трое взрослых детей, шесть внуков, две
                                внучки, и один правнук.
                        </p>
                    </div>

                    <div className="about__list-item">
                        <img className="about__img" src="/img/aboutpage/22.webp" alt="Pic"/>
                    </div>

                    <div className="about__list-item">
                        <img className="about__img" src="/img/aboutpage/222.webp" alt="Pic"/>
                    </div>

                    <div className="about__list-item">
                        <img className="about__img" src="/img/aboutpage/33.webp" alt="Pic"/>
                    </div>

                    <div className="about__list-item">
                        <img className="about__img" src="/img/aboutpage/44.webp" alt="Pic"/>
                    </div>

                    <div className="about__list-item">
                        <p className="about__text">
                                Община была образована в 2011 году Приморский край г. Артём, мы входим в международную
                                конгрегацию &quot;Чозен пипл министриз&quot; или &quot;Служение избранному народу&quot;, а также в Мессианский Союз России. Мы регулярно
                                собираемся по субботам в городе Артем, ул. Пушкина 16. Начало Богослужения в 11-00 час.
                                Отмечаем праздники и проводим время вместе, изучая Слово Божье в простоте сердца.
                        </p>
                    </div>

                    <div className="about__list-item_last">
                        <img className="about__img-5" src="/img/aboutpage/5555.webp" alt="Pic"/>
                    </div>
                </div>
            </div>
            {/*____________________________________________________________________*/}

            <div className="mission__wrapper">
                <div className="mission__list-header"><h2>Наша миссия</h2></div>

                <div className="mission__list" id="mission">
                    <div className="mission__list-item_1">
                        <p className="text">
                                Мы евреи, уверовавшие в Иисуса Христа исповедуем мессианский иудаизм, соблюдаем день
                                Шаббата, а также все праздники которые определил Творец в Торе (Левит 23 глава).
                                В нашей общине есть разные национальности, которые разделяют с нами наше учение
                                основанное на Слове Божьем.
                            <br/>
                                Одна из основных целей нашего учения: Рим 1:16 донести Благую весть до еврейского
                                народа, а также и другим людям, которая заключается в том, что &quot;Иисус Христос пришел в
                                этот мир, что бы спасти грешников!...&quot; &quot;Праведный верою жив будет...&quot; и &quot;Верующий в Него
                                не судится и на суд не приходит, но перешел от
                                смерти в жизнь&quot;.
                                Это касается каждого человека, рожденного на земле.
                        </p>
                    </div>

                    <div className="mission__list-item_2">
                        <img className="mission__img" src="/img/aboutpage/66.webp" alt="Pic"/>
                    </div>

                    <div className="mission__list-item_3">
                        <img className="mission__img" src="/img/aboutpage/77.webp" alt="Pic"/>
                    </div>

                    <div className="mission__list-item_4">
                        <p className="text">
                                Согласно Божьему Слову, каждому человеку положено умереть и предстать перед
                                Божьим судом. И евреи, и не евреи все под грехом. Человек потерян и не может сам
                                спастись, например выполняя свод правил или обрядов. Поэтому &quot;Бог
                                пожелал проявить Свою справедливость, простив грехи...и все получают оправдание
                                даром...&quot; Рим 3:24-25, потому что за нас умер Иисус Христос. Так Бог сам разрешил
                                неразрешимый вопрос спасения человека от наказания за грехи.
                                И теперь всем, кто поверит и с благодарностью примет это искупление, подаренное Христом
                                Иисусом, выносится оправдательный приговор в вечности, воскресение в конце времен
                                после смерти и вечная жизнь с Богом на небесах!
                            <br/>
                                Эту Благую весть мы исповедуем и проповедуем. Мы всем сердцем хотим, что бы спасся
                                каждый, как еврей, так и не еврей, потому что все находятся под властью одного и того же
                                греха и нет различия. И, как написано в Деяниях Апостолов 4:12, нет другого имени под
                                небом, кроме имени Иисуса Христа, которым надлежало бы человеку спастись.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default AboutPage
