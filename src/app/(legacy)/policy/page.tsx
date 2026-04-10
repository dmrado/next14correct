"use client";
import Link from "next/link";

const Policy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-sm text-gray-300 leading-relaxed">
      <h1 className="text-center text-xl sm:text-2xl font-bold text-white mb-6">
        Политика конфиденциальности
      </h1>

      <div className="space-y-5">
        <p>
          Настоящая политика определяет порядок обработки персональных данных в
          соответствии с Федеральным законом №152-ФЗ «О персональных данных».
        </p>

        <div>
          <h2 className="text-white font-semibold mb-1">
            1. Сбор персональных данных
          </h2>
          <p>
            Мы не осуществляем целенаправленный сбор персональных данных через
            формы сайта. Пользователь может добровольно предоставить данные
            (например, email или номер телефона) при обращении по указанным
            контактам.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-1">2. Цели обработки</h2>
          <p>Персональные данные используются исключительно для:</p>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>обработки обращений</li>
            <li>обратной связи с пользователем</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-1">
            3. Правовые основания
          </h2>
          <p>
            Обработка персональных данных осуществляется на основании
            добровольного предоставления данных пользователем.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-1">
            4. Хранение и защита данных
          </h2>
          <p>
            Мы принимаем необходимые организационные и технические меры для
            защиты персональных данных от несанкционированного доступа,
            изменения или уничтожения.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-1">
            5. Передача третьим лицам
          </h2>
          <p>
            Персональные данные не передаются третьим лицам, за исключением
            случаев, предусмотренных законодательством Российской Федерации.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-1">
            6. Использование cookie
          </h2>
          <p>
            Сайт может использовать cookie-файлы для обеспечения корректной
            работы, аналитики и улучшения пользовательского опыта. Продолжая
            использовать сайт, вы соглашаетесь с их использованием.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-1">
            7. Права пользователя
          </h2>
          <p>
            Пользователь имеет право запросить уточнение, обновление или
            удаление своих персональных данных.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-1">8. Контакты</h2>
          <p>
            По вопросам обработки персональных данных:
            <br />
            <span className="text-primary">halom6755@yandex.ru</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/information">
          <button className="btn btn-blog">Назад</button>
        </Link>
      </div>
    </div>
  );
};

export default Policy;
