import Link from 'next/link'

export default function About() {
    return(
        <>
            Main Page
            <Link href={'/posts'}>Загрузить посты</Link>
        </>
    )
}
