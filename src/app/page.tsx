import Link from 'next/link'
import React from 'react'
import Header from '@/app/layout/Header.tsx'
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2">
            Main Page About our organisation
      <Header/>
      <Link href={'/posts'}>Загрузить посты</Link>
    </main>
  )
}
