"use client"
import classes from "./BannerAbout.module.scss"
import Image from "next/image"
import cn from "classnames"

interface BannerAbout {
    title: string
    image: any
    alt?: string
    text: string
}
export default function BannerAbout({ data }: { data: any }) {
    function scrollHandler() {
        window.scrollBy({
            top: 120,
            behavior: 'smooth'
        })
    }
    return (
        <div className={classes.BannerAbout}>
            <div className={classes.banner}>
                <div className={cn(classes.container, "container")}>
                    {data.title && (
                        <div className={classes.title}>
                            <h3
                                dangerouslySetInnerHTML={{ __html: data.title }}
                            />
                        </div>
                    )}
                    {data.text && (
                        <div className={classes.text}>
                            <div
                                dangerouslySetInnerHTML={{ __html: data.text }}
                            />
                        </div>
                    )}
                </div>
            </div>
            {data.image && (
                <div className={classes.Image}>
                    <Image src={data.image} alt={data.alt || ""} fill />
                </div>
            )}
            <div
                className={classes.scrollButton}
                onClick={() => scrollHandler()}
            >
                <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="35"
                        cy="35"
                        r="35"
                        transform="rotate(90 35 35)"
                        fill="#9B2D30"
                    />
                    <path
                        d="M36.4473 16C36.4473 15.1716 35.7757 14.5 34.9473 14.5C34.1188 14.5 33.4473 15.1716 33.4473 16H36.4473ZM33.8866 51.0607C34.4724 51.6464 35.4221 51.6464 36.0079 51.0607L45.5539 41.5147C46.1397 40.9289 46.1397 39.9792 45.5539 39.3934C44.9681 38.8076 44.0183 38.8076 43.4325 39.3934L34.9473 47.8787L26.462 39.3934C25.8762 38.8076 24.9265 38.8076 24.3407 39.3934C23.7549 39.9792 23.7549 40.9289 24.3407 41.5147L33.8866 51.0607ZM33.4473 16V50H36.4473V16H33.4473Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    )
}
