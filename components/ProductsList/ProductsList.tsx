"use client"
import Link from "next/link"
import classes from "./ProductsList.module.scss"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface ProductsList {
    product: string
    content: {
        name: string
        titleImage: string
    }
}

export default function ProductsList({ data }: { data: ProductsList[] }) {
    const pathname = usePathname()
    return (
        <div className={classes.ProductsList}>
            <div className="container">
                <div className={classes.ProductList_content}>
                    {data.map((element) => (
                        <div className={classes.ProductList_content_item} key={element.content.name}>
                            <Link  className={classes.ProductList_content_link} href={`${pathname}/${element.product}`}>
                                <Image
                                    className={classes.ProductList_content_image}
                                    src={element.content.titleImage}
                                    alt={element.content.name}
                                    width={560}
                                    height={440}
                                />
                                <div className={classes.ProductList_content_text}>{element.content.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
