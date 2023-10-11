"use client"
import classes from "./Header.module.scss"
import cn from "classnames"
import Image from "next/image"
import YaFlag from "@/images/yaFlag.svg"
import YaLogo from "@/images/yaLogo.svg"
import Link from "next/link"
import { useState } from "react"

interface Links {
    link?: string
    name: string
    id: string
    dropdown?: {
        link?: string
        name: string
        id: string
    }[]
}
interface HeaderData {
    links: Links[]
    yaLink: string
    yaText: string
    logo: string
    logoDescription: string
    phoneNumber: string
    phoneDescription: string
    phoneLink: string
}

function Stars({ yaLink }: { yaLink: string }) {
    const stars: any[] = [
        { starStatus: "starBad" },
        { starStatus: "starBad" },
        { starStatus: "starBad" },
        { starStatus: "starGood" },
        { starStatus: "starGood" },
    ]
    return (
        <>
            {stars.map((el: any, index: number) => (
                <a
                    href={el.starStatus === "starBad" ? "#" : yaLink}
                    key={index}
                >
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 12 12"
                    >
                        <path
                            fill="#CCC"
                            d="M2.214 11.99l.941-4.066L0 5.189l4.168-.362L5.79.992l1.622 3.835 4.168.362-3.155 2.735.94 4.066L5.79 9.834 2.214 11.99z"
                        ></path>
                    </svg>
                </a>
            ))}
        </>
    )
}
export default function Header({ data }: { data: HeaderData }) {
    const stars = []
    const [openedBurger, setOpenedBurger] = useState(false)
    const [openedCategory, setOpenedCategory] = useState(false)
    const BurgerHandler = () => {
        if (!openedBurger) {
            setOpenedBurger(true)
        }
        if (openedBurger) {
            setOpenedBurger(false)
            setOpenedCategory(false)
        }
    }
    return (
        <>
            <header>
                <div className={cn(classes.header, "container")}>
                    <Link href="/" className={classes.logo}>
                        <Image
                            className={classes.logo_image}
                            width={125}
                            height={125}
                            src={data.logo}
                            alt={data.logoDescription}
                        />
                        <span className={classes.logo_description}>
                            {data.logoDescription}
                        </span>
                    </Link>
                    <div className={classes.yandex}>
                        <Image
                            className={classes.yandex_flag}
                            src={YaFlag}
                            alt={data.yaText}
                            width={84}
                            height={114}
                        />
                        <div className={classes.yandexLinks}>
                            <div className={classes.yandexLinks_stars}>
                                <div className={classes.yandexLinks_stars_logo}>
                                    <Image src={YaLogo} alt="" />
                                </div>
                                <Stars yaLink={data.yaLink} />
                            </div>
                            <div className={classes.yandexLinks_text}>
                                {data.yaText}
                            </div>
                        </div>
                    </div>
                    <div className={classes.phone}>
                        <a
                            href={`tel:${data.phoneLink}`}
                            className={classes.phone_phoneNumber}
                        >
                            {data.phoneNumber}
                        </a>
                        <span className={classes.phone_description}>
                            {data.phoneDescription}
                        </span>
                    </div>
                </div>
            </header>
            {data.links && (
                <header className={cn(classes.stickyHeader, "container")}>
                    <nav className={classes.navigation}>
                        <ul className={classes.list}>
                            {data.links.map((element) => (
                                <li
                                    className={classes.list_element}
                                    key={element.id}
                                >
                                    {element.link ? (
                                        <Link
                                            href={element.link}
                                            className={
                                                classes.list_element_link
                                            }
                                        >
                                            {element.name}
                                        </Link>
                                    ) : (
                                        <p
                                            className={cn(
                                                classes.list_element_link,
                                                classes._noLink
                                            )}
                                        >
                                            {element.name}
                                        </p>
                                    )}
                                    {element.dropdown && (
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="9"
                                                fill="none"
                                                viewBox="0 0 16 9"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M1.086.344C1.297.124 1.584 0 1.883 0c.3 0 .586.124.797.344l5.582 5.819L13.844.344c.213-.214.498-.332.794-.33.295.003.578.127.787.344a1.2 1.2 0 01.33.821c.003.309-.11.606-.316.827l-6.38 6.65c-.21.22-.498.344-.797.344-.299 0-.585-.124-.797-.344l-6.38-6.65c-.21-.22-.33-.52-.33-.83 0-.312.12-.611.33-.832z"
                                                ></path>
                                            </svg>
                                        </div>
                                    )}
                                    {element.dropdown && (
                                        <div className={classes.dropdown}>
                                            <ul
                                                className={classes.dropdownList}
                                            >
                                                {element.dropdown.map((el) => (
                                                    <li
                                                        className={
                                                            classes.dropdownList_element
                                                        }
                                                        key={el.id}
                                                    >
                                                        <Link
                                                            href={
                                                                el.link || "#"
                                                            }
                                                            className={
                                                                classes.dropdownList_element_link
                                                            }
                                                        >
                                                            {el.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            )}
            <header
                className={cn(
                    classes.mobileHeader,
                    openedBurger && classes.Opened
                )}
            >
                <div className={classes.mobileHeader_upper}>
                    <div className={classes.Title}>
                        <Link href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="63"
                                height="12"
                                fill="none"
                                viewBox="0 0 63 12"
                            >
                                <path
                                    fill="#fff"
                                    d="M2.03 9.392L.927 8.86 4.405.557c.124-.289.326-.433.606-.433.297 0 .5.144.607.433l3.49 8.327-1.028.508-3.143-7.623h.173L2.03 9.392zM.642 11.99a.622.622 0 01-.457-.185.622.622 0 01-.186-.458V9.293c0-.19.062-.343.186-.458a.622.622 0 01.457-.186h8.712c.19 0 .342.062.458.186a.597.597 0 01.185.458v2.054a.622.622 0 01-.185.458.597.597 0 01-.458.185.622.622 0 01-.458-.185.622.622 0 01-.186-.458v-1.56H1.287v1.56a.622.622 0 01-.186.458.597.597 0 01-.458.185zM12.218 9.788a.664.664 0 01-.47-.186.603.603 0 01-.198-.458V.767c0-.19.066-.342.198-.458a.664.664 0 01.47-.185c.19 0 .338.062.446.185a.619.619 0 01.173.458v7.016L18.777.36a.621.621 0 01.494-.235c.19 0 .342.062.458.185a.597.597 0 01.186.458v8.377a.622.622 0 01-.186.458.597.597 0 01-.458.186.622.622 0 01-.458-.186.622.622 0 01-.185-.458V2.141l-5.915 7.424a.646.646 0 01-.223.16.653.653 0 01-.272.063zM26.856 9.912a5.35 5.35 0 01-1.992-.36 4.708 4.708 0 01-1.56-1.026 4.786 4.786 0 01-1.002-1.572 5.448 5.448 0 01-.358-2.004c0-.726.12-1.39.358-1.993a4.647 4.647 0 011.003-1.559A4.467 4.467 0 0124.864.371 5.193 5.193 0 0126.856 0c.726 0 1.386.124 1.98.371a4.553 4.553 0 012.574 2.586c.239.603.359 1.267.359 1.993 0 .726-.12 1.394-.36 2.004a4.686 4.686 0 01-1.014 1.572c-.437.437-.957.78-1.56 1.027-.593.239-1.253.359-1.979.359zm0-1.164a3.72 3.72 0 001.473-.284 3.678 3.678 0 001.175-.805c.33-.346.582-.75.755-1.212.181-.462.272-.961.272-1.497 0-.537-.09-1.036-.272-1.498a3.41 3.41 0 00-.755-1.2 3.432 3.432 0 00-1.175-.804 3.72 3.72 0 00-1.473-.285 3.81 3.81 0 00-1.485.285c-.445.19-.833.458-1.163.804a3.663 3.663 0 00-.755 1.2 4.058 4.058 0 00-.272 1.498c0 .536.09 1.035.272 1.497.182.462.433.866.755 1.212.33.339.718.607 1.163.805.454.19.949.284 1.485.284zM34.428 9.788a.622.622 0 01-.458-.186.622.622 0 01-.186-.458V.767c0-.19.062-.342.186-.458a.622.622 0 01.458-.185c.19 0 .342.062.458.185a.597.597 0 01.185.458V4.32h5.742V.767c0-.19.061-.342.185-.458a.622.622 0 01.458-.185c.19 0 .342.062.458.185a.619.619 0 01.173.458v8.377a.646.646 0 01-.173.458.597.597 0 01-.458.186.622.622 0 01-.458-.186.622.622 0 01-.185-.458V5.457H35.07v3.687a.622.622 0 01-.185.458.597.597 0 01-.458.186zM45.231 9.788a.664.664 0 01-.47-.186.603.603 0 01-.198-.458V.767c0-.19.066-.342.198-.458a.664.664 0 01.47-.185c.19 0 .338.062.446.185a.619.619 0 01.173.458v7.016L51.79.36a.621.621 0 01.495-.235c.19 0 .342.062.457.185a.597.597 0 01.186.458v8.377a.622.622 0 01-.186.458.597.597 0 01-.457.186.622.622 0 01-.458-.186.622.622 0 01-.186-.458V2.141l-5.915 7.424a.646.646 0 01-.222.16.653.653 0 01-.273.063zM59.733 9.912a4.782 4.782 0 01-1.88-.372A4.884 4.884 0 0156.33 8.49a5.108 5.108 0 01-1.014-1.584 5.248 5.248 0 01-.36-1.955c0-.693.12-1.337.36-1.93a4.956 4.956 0 011.014-1.572A4.786 4.786 0 0157.852.384 4.593 4.593 0 0159.733 0c.636 0 1.18.082 1.634.247.462.165.924.438 1.386.817a.54.54 0 01.148.161.32.32 0 01.074.16c.017.05.025.112.025.186a.52.52 0 01-.173.396.67.67 0 01-.396.174.678.678 0 01-.458-.161 3.634 3.634 0 00-.953-.606c-.322-.14-.75-.21-1.287-.21-.486 0-.944.098-1.373.296a3.7 3.7 0 00-1.139.817c-.321.346-.573.75-.754 1.212-.182.454-.273.94-.273 1.46 0 .529.091 1.023.273 1.485.181.454.433.854.754 1.2a3.7 3.7 0 001.139.817c.429.19.887.285 1.373.285.421 0 .817-.07 1.188-.21a4.74 4.74 0 001.09-.607c.148-.107.292-.152.432-.136a.526.526 0 01.371.173c.1.1.149.24.149.421a.662.662 0 01-.05.248.702.702 0 01-.148.21 4.954 4.954 0 01-1.435.804 4.669 4.669 0 01-1.597.273z"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                    <button
                        className={classes.burgerButton}
                        onClick={() => BurgerHandler()}
                    >
                        <div />
                        <div />
                    </button>
                </div>
                <div className={classes.mobileHeader_burgerContent}>
                    {data.links.map((element) => (
                        <>
                            <li
                                className={cn(
                                    classes.list_element,
                                    openedCategory && classes.openCategory
                                )}
                                onClick={() => {
                                    if (element.dropdown)
                                        setOpenedCategory(!openedCategory)
                                }}
                                key={element.id}
                            >
                                {element.link ? (
                                    <Link
                                        href={element.link}
                                        className={classes.list_element_link}
                                    >
                                        {element.name}
                                    </Link>
                                ) : (
                                    <p
                                        className={cn(
                                            classes.list_element_link,
                                            classes._noLink
                                        )}
                                    >
                                        {element.name}
                                    </p>
                                )}
                                {element.dropdown && (
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="9"
                                            fill="none"
                                            viewBox="0 0 16 9"
                                        >
                                            <path
                                                fill="#9B2D30"
                                                d="M1.086.344C1.297.124 1.584 0 1.883 0c.3 0 .586.124.797.344l5.582 5.819L13.844.344c.213-.214.498-.332.794-.33.295.003.578.127.787.344a1.2 1.2 0 01.33.821c.003.309-.11.606-.316.827l-6.38 6.65c-.21.22-.498.344-.797.344-.299 0-.585-.124-.797-.344l-6.38-6.65c-.21-.22-.33-.52-.33-.83 0-.312.12-.611.33-.832z"
                                            ></path>
                                        </svg>
                                    </div>
                                )}
                            </li>
                            {element.dropdown && (
                                <div
                                    className={cn(
                                        classes.dropdown,
                                        openedCategory && classes.openedCategory
                                    )}
                                >
                                    <ul className={classes.dropdownList}>
                                        {element.dropdown.map((el) => (
                                            <li
                                                className={
                                                    classes.dropdownList_element
                                                }
                                                key={el.id}
                                            >
                                                <Link
                                                    href={el.link || "#"}
                                                    className={
                                                        classes.dropdownList_element_link
                                                    }
                                                >
                                                    {el.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </header>
        </>
    )
}
