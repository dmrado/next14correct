'use client'
import React, { useEffect } from 'react'

const YandexMetrika = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                (function (m, e, t, r, i, k, a) {
                    m[i] = m[i] || function () {
                        (m[i].a = m[i].a || []).push(arguments)
                    }
                    m[i].l = 1 * new Date()
                    for (var j = 0; j < document.scripts.length; j++) {
                        if (document.scripts[j].src === r) {
                            return
                        }
                    }
                    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                })
                (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

                ym(96326668, 'init', {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                })
            } catch (e) {
                console.error(e)
            }
        }
    }, [])

    return (
        <>
            <noscript>
                <div>
                    <img src="https://mc.yandex.ru/watch/96326668" style={{ position: 'absolute', left: '-9999px' }} alt=""/>
                </div>
            </noscript>
        </>
    )
}

export default YandexMetrika
