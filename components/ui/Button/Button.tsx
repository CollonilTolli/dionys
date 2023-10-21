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
    onClick
}: {
    data: data
    className?: any
    onClick?: any
}) {
    const handleClick = (func: any) => {}
    switch (data.type) {
        case "withImage":
            return (
                <>
                    {data.link ? (
                        <Link
                            className={cn(
                                classes.button,
                                classes.withImage,
                                className,
                                data.className,
                            )}
                            href={data.link}
                            title={data.content}
                            onClick={() => onClick ? onClick() : console.clear()}
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
                                className,
                                data.className,
                            )}
                            onClick={() => onClick ? onClick() : console.clear()}
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
                                className,
                                data.className,
                            )}
                            href={data.link}
                            title={data.content}
                            onClick={() => onClick ? onClick() : console.clear() }
                        >
                            {data.content}
                        </Link>
                    ) : (
                        <button
                            className={cn(
                                classes.button,
                                classes.full,
                                className,
                                data.className,
                            )}
                            onClick={() => onClick ? onClick() : console.clear() }
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
                                className,
                                data.className,
                            )}
                            href={data.link}
                            title={data.content}
                            onClick={() => onClick ? onClick() : console.clear() }
                        >
                            {data.content}
                        </Link>
                    ) : (
                        <button
                            className={cn(
                                className,
                                data.className,
                                classes.button,
                                classes.main,
                            )}
                            onClick={ () => onClick ? onClick() : console.clear()}
                        >
                            {data.content}
                        </button>
                    )}
                </>
            )
    }
}
