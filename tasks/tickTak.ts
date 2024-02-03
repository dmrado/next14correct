'use client'
import {useState, useEffect} from "react"

const TickTak = () => {
    // const [index, setIndex] = useState(0)
    const [message, setMessage] = useState([] as string [])

    // const numData = Array.from({length: 10}, (_, index) => index + 1);
    // console.log(numData);


    useEffect(() => {
        const ticker = (num = 10, duration=1000)=> {
            for (let i = 0; i < num; i++) {
                setTimeout(()=>{
                    setMessage(prevMessages => [...prevMessages, `Tic ${i}`])//prevMessages в функции обновления состояния является частью стандартного API хуков состояния в React. Когда вы вызываете функцию обновления состояния, переданную через useState, вы можете передать ей функцию, а не конкретное значение. Эта функция получит текущее значение состояния в качестве аргумента, что позволяет вам обновить состояние на основе предыдущего значения.
                }, duration * i)
            }
        }
        ticker()
        export {}
    }, []);

    return <>{message}</>
}
export default TickTak