const ticker = (num = 10, duration=1000)=> {
  for (let i = 0; i < num; i++) {
    setTimeout(()=>{
      console.log('Tic' + i)
    }, duration * i)
  }
}

ticker()

export {}
