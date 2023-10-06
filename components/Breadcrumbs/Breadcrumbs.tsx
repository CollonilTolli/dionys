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
            <div className={classes.cont_breadcumb}>
                {data.map((el) => (
                    <>
                        {el.link ? (
                            <Link className={cn(classes.bread_el) } href={el.link}>{el.path}</Link>
                        ) : (
                            <span className={classes.bread_el} >{el.path}</span>
                        )}
                   </>
                ))}
            </div>
        </div>
    )
}
