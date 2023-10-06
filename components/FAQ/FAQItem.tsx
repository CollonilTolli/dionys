"use client"
import { useState } from "react"
import classes from "./FAQ.module.scss"
import cn from "classnames"

interface questions {
    name: string
    text: string
}

export default function FAQItem({ data }: { data: questions }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={cn(classes.FAQItem, open && classes.FAQItem_opened)}>
            <div className={classes.FAQItem_head}>
                <div className={classes.FAQItem_head_name}>{data.name}</div>
                <div
                    className={classes.FAQItem_head_button}
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="none"
                        viewBox="0 0 60 60"
                    >
                        <rect
                            width="59"
                            height="59"
                            x="0.5"
                            y="0.5"
                            stroke="#AAABAB"
                            rx="11.5"
                        ></rect>
                        <path
                            fill="#9B2D30"
                            d="M20.462 26.497A1.525 1.525 0 0121.578 26c.42 0 .82.179 1.117.497l7.814 8.405 7.815-8.405c.298-.31.697-.48 1.11-.476.415.003.81.182 1.104.497.292.315.458.74.462 1.186.004.445-.156.874-.443 1.194l-8.931 9.605a1.525 1.525 0 01-1.117.497c-.418 0-.82-.179-1.116-.497l-8.93-9.605a1.765 1.765 0 01-.463-1.2c0-.45.166-.883.462-1.2z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className={classes.FAQItem_body}>
                <div dangerouslySetInnerHTML={{ __html: data.text }} />
            </div>
        </div>
    )
}
