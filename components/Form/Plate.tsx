"use client"
import { useState } from "react"
import classes from "./Form.module.scss"
import cn from "classnames"

export default function Plate({ data }: { data: string }) {
    const [active, setActive] = useState(false)
    return (
        <div
            className={cn(classes.plate, active && classes.plate_active )}
            onClick={() => setActive(!active)}
        >
            {data}
        </div>
    )
}
