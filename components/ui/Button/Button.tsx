"use client"
import classes from "./Button.module.scss"
import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import Pngwing from "@/images/pngwing.png"

interface data {
    className?: any
    link?: string
    content: string
    func?: any
    type?: string
}
export default function Button({
    data,
    className,
}: {
    data: data
    className?: any
}) {
    const handleClick = (func: any) => {
        console.log(func)
    }
    switch (data.type) {
        case "withImage":
            return (
                <>
                    {data.link ? (
                        <Link
                            className={cn(
                                classes.button,
                                classes.withImage,
                                className
                            )}
                            href={data.link}
                            title={data.content}
                        >
                            {data.content}
                            <Image
                                src={Pngwing}
                                width={136}
                                height={110}
                                alt={data.content}
                            />
                        </Link>
                    ) : (
                        <button
                            className={cn(
                                classes.button,
                                classes.withImage,
                                className
                            )}
                            onClick={() => handleClick(data.func)}
                        >
                            {data.content}
                            <Image
                                src={Pngwing}
                                width={136}
                                height={110}
                                alt={data.content}
                            />
                        </button>
                    )}
                </>
            )

        case "full":
            return (
                <>
                    {data.link ? (
                        <Link
                            className={cn(
                                classes.button,
                                classes.full,
                                className
                            )}
                            href={data.link}
                            title={data.content}
                        >
                            {data.content}
                        </Link>
                    ) : (
                        <button
                            className={cn(
                                classes.button,
                                classes.full,
                                className
                            )}
                            onClick={() => handleClick(data.func)}
                        >
                            {data.content}
                        </button>
                    )}
                </>
            )
        default:
            return (
                <>
                    {data.link ? (
                        <Link
                            className={cn(
                                classes.button,
                                classes.main,
                                className
                            )}
                            href={data.link}
                            title={data.content}
                        >
                            {data.content}
                        </Link>
                    ) : (
                        <button
                            className={cn(
                                classes.button,
                                classes.main,
                                className
                            )}
                            onClick={() => handleClick(data.func)}
                        >
                            {data.content}
                        </button>
                    )}
                </>
            )
    }
}
