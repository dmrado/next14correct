import { JSX } from 'react'

export type DataItem = {
    id: number,
    name: string,
    href: string,
    annot: JSX.Element
}

export type Book = DataItem & {
    price: number,
    color: string
}