type IntervalLink = {
    instance: NodeJS.Timeout | null
}

/**
 * Фабрика "тикеров". По сути это функция которая делает для нас другую функцию "тикера" с заданными параметрами
 * Функция tickerFabric не только возвращает функцию, но и хранит в своем состоянии (скоупе) текущее количество тиков
 * @param interval      ссылка на объект интервала (чтобы его можно было сбросить по условию)
 * @param tickNumber    количество тиков через который надо сбросить interval
 * @return ticker       готовая функция, которая пишет текущй счетчик в консоль, увеличивает счетчик из скоупа родителя,
 *                      и проверяет если заданное количество тиков прошло и сбрасывает счетчик
 */
const tickerFabric = (interval:IntervalLink, tickNumber:number) => {
  let tic = 1
  return () => {
    if (interval.instance === null){
      throw new Error('Ticker was not properly initiated')
    }
    console.log('Tic :' + tic)
    tic ++
    if (tic > tickNumber) {
      clearInterval(interval.instance)
    }
  }
}

let interval: IntervalLink = {
  instance: null
}

const ticker = tickerFabric(interval, 5)
interval.instance = setInterval(ticker, 1000)

export {}
