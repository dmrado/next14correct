import Link from 'next/link'
import AboutPage from "@/components/AboutPage";


// export default function About() {
//     return(
//         <>
//             Main Page
//             <Link href={'/posts'}>Загрузить посты</Link>
//         </>
//     )
// }


export const metadata = {
    title: 'Beit-Ieshua | About us',
}

const About = () => {
    return (
        <AboutPage/>
    )
}
export default About
