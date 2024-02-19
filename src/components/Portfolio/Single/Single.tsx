import { FC } from "react"

export interface IItemProps {
    id: number;
    title: string;
    img: string;
    description: string;
}

interface ISingleProps {
    item: IItemProps;
}

export const Single:FC<ISingleProps> = ({ item }) => {
  return (
    <section>{item.title}</section>
  )
}
