import classes from "./Category.module.scss"
import cn from "classnames"
import Image from "next/image"
import Button from "../ui/Button/Button"
import CategoryItem from "./CategoryItem/CategoryItem"

interface Category {
    blockId?: string
    title: string
    subtitle: string
    items: {
        text: string
        image: any
        link: string
        title: string
        btn: {
            type: string
            content: string
            func?: {
                name: string
                type: string
            }
        }
        textToModal: string
        id: string
    }[]
}
export default function Category({ data }: { data: Category }) {
    return (
        <div className={cn(classes.Category, "container")} id={data.blockId}>
            <h4 className={classes.title}>{data.title}</h4>
            <span className={classes.subtitle}>{data.subtitle}</span>
            <div className={classes.categories}>
                {data.items.map((element) => (
                    <CategoryItem data={element} key={element.id} />
                ))}
            </div>
        </div>
    )
}
