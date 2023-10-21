"use client"
import classes from "./Contacts.module.scss"
import cn from "classnames"
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"
import Link from "next/link"

interface Contacts {
    id?: string
    title: string
    yaCoord: number[]
    text: string
    contacts: {
        phoneNumber: string
        telegram: string
        location: string
    }
    chart: string
}

export default function Contacts({ data }: { data: Contacts }) {
    return (
        <div className={cn(classes.Contacts)} id={data.id}>
            <div className="container">
                <div className={classes.Title}>{data.title}</div>
                <div className={cn(classes.Contacts_content)}>
                    <div className={classes.Contacts_map}>
                        <YMaps>
                            <Map
                                defaultState={{ center: data.yaCoord, zoom: 15 }}
                                height={435}
                                width={700}
                                style={{width: "100%"}}
                            >
                                <Placemark
                                    geometry={data.yaCoord}
                                    options={{
                                        preset: "islands#circleIcon",
                                        iconColor: "#9B2D30",
                                    }}
                                />
                            </Map>
                        </YMaps>
                    </div>
                    <div className={classes.Contacts_contacts}>
                        {data.text && <p className={classes.text}>{data.text}</p>}
                        <div className={classes.links}>
                            {data.contacts.phoneNumber && (
                                <div className={classes.links_item}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 50 50"
                                    >
                                        <circle
                                            cx="25"
                                            cy="25"
                                            r="25"
                                            fill="url(#paint0_linear_51_4186)"
                                        ></circle>
                                        <path
                                            fill="#fff"
                                            d="M14.237 23.422A27.433 27.433 0 0028.454 37.22l1.01.45A5.206 5.206 0 0035.9 35.82l1.321-1.967a1.484 1.484 0 00-.301-1.982l-4.477-3.608a1.486 1.486 0 00-2.126.271L28.93 30.4a18.035 18.035 0 01-8.189-8.184l1.867-1.384a1.485 1.485 0 00.272-2.125l-3.612-4.473a1.487 1.487 0 00-1.984-.301l-1.98 1.328a5.198 5.198 0 00-1.839 6.467l.771 1.694z"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_51_4186"
                                                x1="72.835"
                                                x2="-22.823"
                                                y1="24.885"
                                                y2="26.782"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#9B2D30"></stop>
                                                <stop
                                                    offset="0.927"
                                                    stopColor="#FA2D32"
                                                ></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <Link
                                        href={`tel:${data.contacts.phoneNumber}`}
                                    >
                                        {data.contacts.phoneNumber}
                                    </Link>
                                </div>
                            )}
                            {data.contacts.telegram && (
                                <div className={classes.links_item}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 50 51"
                                    >
                                        <path
                                            fill="url(#paint0_linear_51_4189)"
                                            d="M25 .638c-13.806 0-25 11.185-25 24.98C0 39.415 11.194 50.6 25 50.6s25-11.186 25-24.981C50 11.823 38.806.638 25 .638zm12.28 17.114L33.174 37.07c-.302 1.37-1.119 1.703-2.258 1.058l-6.25-4.6-3.013 2.901a1.582 1.582 0 01-1.25.614h-.01l.444-6.357L32.42 20.23c.5-.443-.113-.695-.777-.252l-14.31 9.006-6.167-1.924c-1.334-.422-1.371-1.332.28-1.986l24.097-9.28c1.12-.408 2.096.266 1.733 1.959l.002-.002z"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_51_4189"
                                                x1="72.835"
                                                x2="-22.823"
                                                y1="25.504"
                                                y2="27.402"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#9B2D30"></stop>
                                                <stop
                                                    offset="0.927"
                                                    stopColor="#FA2D32"
                                                ></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <Link
                                        href={`https://t.me/${data.contacts.telegram}`}
                                    >
                                        @{data.contacts.telegram}
                                    </Link>
                                </div>
                            )}
                            {data.contacts.location && (
                                <div className={classes.links_item}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 50 50"
                                    >
                                        <circle
                                            cx="25"
                                            cy="25"
                                            r="25"
                                            fill="url(#paint0_linear_51_4190)"
                                        ></circle>
                                        <path
                                            fill="#fff"
                                            d="M25 28.016a5.458 5.458 0 01-5.04-3.365 5.447 5.447 0 013.975-7.431 5.459 5.459 0 015.6 2.318c.6.896.919 1.95.919 3.028A5.455 5.455 0 0125 28.016zm0-8.72a3.275 3.275 0 00-3.024 2.018 3.268 3.268 0 002.385 4.459 3.275 3.275 0 003.911-3.207A3.273 3.273 0 0025 19.296z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M25 41.097l-9.203-10.845a37.594 37.594 0 01-.38-.491A11.863 11.863 0 0113 22.566c0-3.18 1.264-6.23 3.515-8.479a12.005 12.005 0 0116.97 0A11.986 11.986 0 0137 22.566a11.858 11.858 0 01-2.416 7.191l-.002.003s-.327.43-.376.488L25 41.098zm-7.841-12.65c.002 0 .255.336.313.408L25 37.727l7.538-8.884c.048-.06.303-.398.305-.4a9.698 9.698 0 001.975-5.877 9.807 9.807 0 00-2.875-6.937 9.822 9.822 0 00-13.886 0 9.807 9.807 0 00-2.875 6.937 9.701 9.701 0 001.977 5.881z"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_51_4190"
                                                x1="72.835"
                                                x2="-22.823"
                                                y1="24.885"
                                                y2="26.782"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#9B2D30"></stop>
                                                <stop
                                                    offset="0.927"
                                                    stopColor="#FA2D32"
                                                ></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <address>{data.contacts.location}</address>
                                </div>
                            )}
                        </div>
                        {data.chart && (
                            <p className={classes.chart}>{data.chart}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
