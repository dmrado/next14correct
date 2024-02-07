import Link from "next/link";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-2">
            Main Page About our organisation
            <Link href={'/posts'}>Загрузить посты</Link>
        </main>
    )
}
