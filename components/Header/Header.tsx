import classes from "./Header.module.scss"
import cn from "classnames"
import Image from "next/image"
import YaFlag from "@/images/yaFlag.svg"
import YaLogo from "@/images/yaLogo.svg"
import Link from "next/link"

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
                <a href={el.starStatus === "starBad" ? "#" : yaLink} key={index}>
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
    return (
        <>
            <header>
                <div className={cn(classes.header, "container")}>
                    <div className={classes.logo}>
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
                    </div>
                    <div className={classes.yandex}>
                        <Image className={classes.yandex_flag} src={YaFlag} alt={data.yaText} width={84} height={114}/>
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
                        <span className={classes.phone_description}>{data.phoneDescription}</span>
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
                                        >{element.name}</p>
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
        </>
    )
}
