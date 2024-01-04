import Image from 'next/image'
import Link from "next/link";

export default function About() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        About
        <Link href={'/posts'}>Загрузить посты</Link>
      </main>
  )
}
