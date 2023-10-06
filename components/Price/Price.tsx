import classes from "./Price.module.scss"

export default function Price({ data }: { data: string }) {
    return <div className={classes.Price}>{data}</div>
}
