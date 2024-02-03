class Ticker {
  currentTick = 1
  maxTicks: number
  interval :NodeJS.Timeout | null = null
  constructor( maxTicks:number) {
    this.maxTicks = maxTicks
  }

  ticker(){
    if (this.interval === null){
      throw new Error('Ticker was not properly initiated')
    }
    console.log('Tic :' + this.currentTick)
    this.currentTick ++
    if (this.currentTick > this.maxTicks) {
      clearInterval(this.interval)
    }
  }

  start(delay:number){
    this.interval = setInterval(this.ticker.bind(this), delay)
  }
}

new Ticker(5).start(1000)

export {}
