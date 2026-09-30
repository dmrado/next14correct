"use client";
import { useState } from "react";
import { setConsentAccepted } from "@/app/actions/setCookiesAccepted.ts";
import { setConsentDeclined } from "@/app/actions/setCookiesAccepted.ts";
import Link from "next/link";

const CookieConsent = ({ isAccepted }: { isAccepted: boolean }) => {
  const [showMessage, setShowMessage] = useState(true);
  const handleAccept = async () => {
    await setConsentAccepted();
    setShowMessage(false);
  };
  const handleDecline = async () => {
    await setConsentDeclined();
    setShowMessage(false);
  };
  if (isAccepted) return <></>;
  if (!showMessage) return <></>;

  return (
    <div
      className="flex flex-col fixed bottom-0 left-0 right-0 mx-auto z-50 shadow-2xl
        w-11/12      // На мобильных: Занимаем 91.6% ширины экрана
        max-w-lg     // Максимальная ширина на всех экранах (xl = 36rem/576px)
        md:max-w-lg  // На средних экранах max 32rem/512px

        // Стиль:

        bg-gray-600 rounded-lg p-4 text-white text-xs text-left space-y-3"
    >
      <h3 className="flex justify-center text-[16px] font-bold">
        Использование файлов cookie
      </h3>

      <div className="text-[14px]">
        Сайт сохраняет файлы cookie, без которых он не может работать: они
        помнят ваш выбор на этом окне и вход в личный кабинет. Счётчиков
        посещаемости и других следящих сервисов на сайте нет.
        {/*  Мы применяем Google*/}
        {/*reCAPTCHA для защиты сайта от спама и злоумышленников, подтверждая, что*/}
        {/*вы человек, а не программа. */}
        Карта и расписание встреч подгружаются со сторонних сайтов — Яндекса
        и Google — но только после того, как вы сами нажмёте кнопку на их
        месте. Пока вы этого не сделали, ваши данные туда не уходят.
        Подробности:
      </div>
      <Link href={"/policy"}>
        <u>Политике конфиденциальности в отношении персональных данных</u>
      </Link>

      <div className="flex justify-center" style={{ gap: "21px" }}>
        <form action={handleAccept}>
          <button className="btn btn-blog">Согласен</button>
        </form>
        <form action={handleDecline}>
          <button className="btn btn-blog">Отказаться</button>
        </form>
      </div>
    </div>
  );
};
export default CookieConsent;
