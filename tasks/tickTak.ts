// 'use client'
// import {useState, useEffect} from "react";
// import { faker } from "@faker-js/faker"
// import {number} from "prop-types";
//
// const TickTak = () => {
//     const [index, setIndex] = useState(0)
//     const [message, setMessage] = useState([] as string [])
//
//     const numData = Array.from({length: 10}, (_, index) => index + 1);
//     console.log(numData);
//
//     const tickMessages = numData.map((num, i) => `Tick ${num}`)
//     setMessage(tickMessages)
//
//
//
//
//     useEffect(() => {
//         const tickMessages = numData.map((num, i) => `Tick ${num}`);
//         setMessages(tickMessages);
//
//         // Создаем интервал для обновления индекса
//         const intervalId = setInterval(() => {
//             setIndex((prevIndex) => {
//                 const newIndex = prevIndex + 1;
//                 // Останавливаем интервал, если достигли конца массива
//                 if (newIndex >= tickMessages.length) {
//                     clearInterval(intervalId);
//                     return prevIndex;
//                 }
//                 return newIndex;
//             });
//         }, 1000);
//
//         // Очистка интервала при размонтировании компонента
//         return () => clearInterval(intervalId);
//     }, []);
//
//     return (
//         <div>
//             {messages[index]}
//         </div>
//     );
// };
//
//
// };
//
// export default TickTak;