import classes from "./CategoryItem.module.scss"
import cn from "classnames"
import Image from "next/image"
import Button from "@/components/ui/Button/Button"
import Link from "next/link"

interface CategoryItem {
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
}
export default function CategoryItem({ data }: { data: CategoryItem }) {
    return (
        <div className={cn(classes.CategoryItem)}>
            <Link href={data.link} title={data.title}>
                <div className={classes.imageContainer}>
                    <Image
                        src={data.image}
                        alt={data.text}
                        width={426}
                        height={402}
                    />
                    <span className={classes.title}>{data.title}</span>
                </div>
            </Link>
            <Button data={data.btn} />
        </div>
    )
}
