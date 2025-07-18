import { ReactElement } from "react"

export default interface bubbleTypes {
    id: number
    size: number,
    left: string,
    top: string,
    duration: string,
    delay: string,
}
export interface navItemsTypes {
    title: string,
    href: string,
}

export interface cardInfosTypes {
    title: string,
    body:string,
    background:string
    icon: ReactElement
}