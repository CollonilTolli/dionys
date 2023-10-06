import cn from "classnames"
import classes from "./Breadcrumbs.module.scss"
import Link from "next/link"

interface Breadcrumbs {
    path: string
    link?: string
}

export default function Breadcrumbs({ data }: { data: Breadcrumbs[] }) {
    return (
        <div className={cn("container", classes.BreadCrumbs)}>
            {data.map((el) => (
                <>
                    {el.link ? (
                        <Link href={el.link}>{el.path}</Link>
                    ) : (
                        <span>{el.path}</span>
                    )}
                </>
            ))}
        </div>
    )
}
