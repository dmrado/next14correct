import type { CSSProperties } from 'react'

/**
 * Расписание встреч общины.
 *
 * Раньше на этом месте стоял встроенный календарь Google: он грузился с чужого
 * сервера при каждом открытии страницы и передавал за границу IP-адрес
 * посетителя. Теперь расписание лежит прямо здесь — сайт ни к кому наружу не
 * обращается, согласия ни на что не требуется, и видно всё сразу.
 *
 * Чтобы изменить расписание, правьте массив ниже: он и есть таблица.
 * Время везде владивостокское — община в Артёме Приморского края.
 */

type Event = {
    time: string
    title: string
    note?: string
}

const SCHEDULE: { day: string, events: Event[] }[] = [
    {
        day: 'Понедельник',
        events: [
            { time: '17:00', title: 'Собрание книжников', note: 'через неделю' },
            { time: '17:00', title: 'Молитва за Россию, Израиль и Корею', note: 'через неделю, по очереди с собранием книжников' },
        ],
    },
    {
        day: 'Вторник',
        events: [
            { time: '20:00', title: 'Собрание в Zoom' },
        ],
    },
    {
        day: 'Среда',
        events: [
            { time: '19:00', title: 'Молитвенное собрание' },
        ],
    },
    {
        day: 'Четверг',
        events: [
            { time: 'весь день', title: 'Посещение больных' },
        ],
    },
    {
        day: 'Пятница',
        events: [
            { time: 'весь день', title: 'Подготовка и встреча Шабата' },
        ],
    },
    {
        day: 'Суббота',
        events: [
            { time: '10:30', title: 'Миньян, групповая молитва' },
            { time: '11:00', title: 'Собрание' },
        ],
    },
    {
        day: 'Воскресенье',
        events: [
            { time: '12:00', title: 'Молитвенное уединение' },
        ],
    },
]

const wrapStyle: CSSProperties = {
    maxWidth: '760px',
    margin: '0 auto',
    color: '#505050',
}

const rowStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    gap: '4px 16px',
    padding: '14px 4px',
    borderTop: '1px solid #e2e2e2',
}

const dayStyle: CSSProperties = {
    flex: '0 0 140px',
    fontWeight: 700,
    fontSize: '17px',
}

const timeStyle: CSSProperties = {
    flex: '0 0 80px',
    fontVariantNumeric: 'tabular-nums',
}

const Schedule = () => (
    <div style={wrapStyle}>
        <h2 style={{ fontSize: '26px', fontWeight: 700, textAlign: 'center', margin: '0 0 6px' }}>
            Расписание встреч
        </h2>
        <p style={{ textAlign: 'center', fontSize: '14px', margin: '0 0 18px' }}>
            Время владивостокское
        </p>

        {SCHEDULE.map(({ day, events }) => (
            <div key={day} style={rowStyle}>
                <div style={dayStyle}>{day}</div>
                <div style={{ flex: '1 1 320px' }}>
                    {events.map((event) => (
                        <div key={event.title} style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', marginBottom: '6px' }}>
                            <span style={timeStyle}>{event.time}</span>
                            <span style={{ flex: '1 1 200px' }}>
                                {event.title}
                                {event.note && (
                                    <span style={{ color: '#808080', fontSize: '14px' }}> — {event.note}</span>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        ))}

        <p style={{ borderTop: '1px solid #e2e2e2', paddingTop: '14px', fontSize: '14px' }}>
            Праздники еврейского календаря — Пурим, Песах, Суккот и другие — проходят
            по отдельным датам. О них сообщаем на собраниях и по связи из раздела ниже.
        </p>
    </div>
)

export default Schedule
