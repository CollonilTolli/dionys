import classes from "./Footer.module.scss"
import Link from "next/link"
interface Footer {
    contacts: {
        description: string
        chart: string
        contacts: {
            phone: {
                text: string
                link: string
            }
            telegram: {
                name: string
            }
            location: {
                text: string
            }
        }
    }
    services: {
        title: string
        services: {
            name: string
            link: string
        }[]
    }
    info: {
        title: string
        info: {
            name: string
            content?: string
        }[]
    }
    policy: {
        text: string
        link: string
    }
    warning: string
}

export default function Footer({ data }: { data: Footer }) {
    return (
        <footer>
            <div className={classes.Footer}>
                <div className={classes.Logotype}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="358"
                        height="265"
                        fill="none"
                        viewBox="0 0 358 265"
                    >
                        <path
                            stroke="#9B2D30"
                            strokeLinecap="round"
                            strokeWidth="4.307"
                            d="M65.686 129.217h198.132M65.686 180.904h198.132"
                        ></path>
                        <path
                            stroke="#2D9B45"
                            strokeWidth="4.307"
                            d="M81.837 50.61l9.141-20.433a45.783 45.783 0 0130.971-25.79v0a45.783 45.783 0 0134.034 5.024l1.229.723a49.3 49.3 0 0123.479 33.515l.387 2.09c.6 3.24.902 6.53.902 9.825V70.94"
                        ></path>
                        <path
                            stroke="#2D9B45"
                            strokeWidth="4.307"
                            d="M179.826 68.916v0c46.363 12.082 45.76 78.117-.816 89.35l-4.568 1.101M175.519 159.367l-48.456 3.231-47.38-3.231M83.991 49.533v0C44.978 59.16 29.032 106.014 54.248 137.3l3.9 4.839"
                        ></path>
                        <path
                            stroke="#9B2D30"
                            strokeWidth="4.307"
                            d="M96.913 79.684l30.151 22.613m0 0V63.532m0 38.765v77.53"
                        ></path>
                        <path
                            fill="#fff"
                            stroke="#9B2D30"
                            strokeWidth="4.307"
                            d="M57.07 116.161v90.586c0 1.189.965 2.154 2.154 2.154H80.76c1.19 0 2.154-.965 2.154-2.154v-90.691c0-.539-.202-1.058-.566-1.455l-9.819-10.711a2.154 2.154 0 00-3.048-.128l-11.718 10.817a2.151 2.151 0 00-.693 1.582zM100.144 116.161v90.586c0 1.189.964 2.154 2.153 2.154h21.536c1.19 0 2.154-.965 2.154-2.154v-90.691c0-.539-.202-1.058-.566-1.455l-9.819-10.711a2.154 2.154 0 00-3.048-.128l-11.718 10.817a2.153 2.153 0 00-.692 1.582zM143.216 116.161v90.586c0 1.189.964 2.154 2.153 2.154h21.537a2.154 2.154 0 002.153-2.154v-90.691c0-.539-.202-1.058-.566-1.455l-9.818-10.711a2.155 2.155 0 00-3.049-.128l-11.717 10.817a2.15 2.15 0 00-.693 1.582zM186.288 116.161v90.586c0 1.189.964 2.154 2.154 2.154h21.536a2.154 2.154 0 002.153-2.154v-90.691c0-.539-.202-1.058-.566-1.455l-9.818-10.711a2.154 2.154 0 00-3.048-.128l-11.718 10.817a2.15 2.15 0 00-.693 1.582zM229.36 116.161v90.586c0 1.189.965 2.154 2.154 2.154h21.536c1.19 0 2.154-.965 2.154-2.154v-90.691c0-.539-.202-1.058-.566-1.455l-9.819-10.711a2.154 2.154 0 00-3.048-.128l-11.718 10.817a2.154 2.154 0 00-.693 1.582z"
                        ></path>
                        <path
                            fill="#9B2D30"
                            d="M58.181 256.104l-3.565-1.722 11.257-26.881c.4-.935 1.055-1.402 1.963-1.402.961 0 1.616.467 1.963 1.402l11.297 26.961-3.325 1.642-10.175-24.677h.56l-9.975 24.677zm-4.486 8.413c-.588 0-1.082-.2-1.483-.601-.4-.4-.6-.895-.6-1.482v-6.65c0-.614.2-1.108.6-1.482.4-.401.895-.601 1.482-.601h28.203c.614 0 1.108.2 1.482.601.401.374.601.868.601 1.482v6.65c0 .587-.2 1.082-.6 1.482-.374.401-.869.601-1.483.601-.587 0-1.082-.2-1.482-.601-.4-.4-.601-.895-.601-1.482v-5.048H55.778v5.048c0 .587-.2 1.082-.601 1.482-.374.401-.868.601-1.483.601zM91.167 257.386c-.588 0-1.095-.2-1.522-.601a1.95 1.95 0 01-.641-1.482v-27.121c0-.614.213-1.108.64-1.482a2.149 2.149 0 011.523-.601c.614 0 1.095.2 1.442.601.374.374.561.868.561 1.482v22.714L112.4 226.86c.428-.507.962-.761 1.603-.761.614 0 1.108.2 1.482.601.4.374.601.868.601 1.482v27.121c0 .588-.201 1.082-.601 1.482-.374.401-.868.601-1.482.601-.588 0-1.082-.2-1.483-.601-.4-.4-.601-.894-.601-1.482v-22.674l-19.149 24.036a2.092 2.092 0 01-.72.521c-.294.134-.588.2-.882.2zM138.558 257.787c-2.35 0-4.5-.387-6.45-1.162-1.95-.801-3.632-1.909-5.048-3.325-1.388-1.442-2.47-3.138-3.244-5.088-.775-1.976-1.162-4.139-1.162-6.489 0-2.351.387-4.501 1.162-6.45.774-1.95 1.856-3.632 3.244-5.048 1.416-1.442 3.098-2.55 5.048-3.325 1.95-.801 4.1-1.202 6.45-1.202 2.35 0 4.487.401 6.41 1.202 1.949.775 3.632 1.883 5.047 3.325 1.416 1.416 2.511 3.098 3.285 5.048.775 1.949 1.162 4.099 1.162 6.45 0 2.35-.387 4.513-1.162 6.489-.774 1.95-1.869 3.646-3.285 5.088-1.415 1.416-3.098 2.524-5.047 3.325-1.923.775-4.06 1.162-6.41 1.162zm0-3.766c1.736 0 3.325-.307 4.767-.921a11.904 11.904 0 003.806-2.604 11.468 11.468 0 002.444-3.926c.587-1.496.881-3.111.881-4.847 0-1.736-.294-3.352-.881-4.848-.561-1.495-1.376-2.791-2.444-3.886a11.127 11.127 0 00-3.806-2.604c-1.442-.614-3.031-.921-4.767-.921-1.736 0-3.339.307-4.807.921a11.22 11.22 0 00-3.766 2.604c-1.042 1.095-1.856 2.391-2.444 3.886-.587 1.496-.881 3.112-.881 4.848 0 1.736.294 3.351.881 4.847a12.334 12.334 0 002.444 3.926 12.02 12.02 0 003.766 2.604c1.468.614 3.071.921 4.807.921zM163.071 257.386c-.588 0-1.082-.2-1.482-.601-.401-.4-.601-.894-.601-1.482v-27.121c0-.614.2-1.108.601-1.482.4-.401.894-.601 1.482-.601.614 0 1.108.2 1.482.601.401.374.601.868.601 1.482v11.498h18.588v-11.498c0-.614.2-1.108.601-1.482.401-.401.895-.601 1.482-.601.615 0 1.109.2 1.483.601.373.374.56.868.56 1.482v27.121c0 .588-.187 1.082-.56 1.482-.374.401-.868.601-1.483.601-.587 0-1.081-.2-1.482-.601-.401-.4-.601-.894-.601-1.482v-11.938h-18.588v11.938c0 .588-.2 1.082-.601 1.482-.374.401-.868.601-1.482.601zM198.048 257.386c-.588 0-1.096-.2-1.523-.601a1.95 1.95 0 01-.641-1.482v-27.121c0-.614.214-1.108.641-1.482a2.149 2.149 0 011.523-.601c.614 0 1.094.2 1.442.601.374.374.561.868.561 1.482v22.714l19.229-24.036c.427-.507.961-.761 1.602-.761.614 0 1.108.2 1.482.601.401.374.601.868.601 1.482v27.121c0 .588-.2 1.082-.601 1.482-.374.401-.868.601-1.482.601-.588 0-1.082-.2-1.482-.601-.401-.4-.601-.894-.601-1.482v-22.674l-19.149 24.036a2.09 2.09 0 01-.721.521c-.294.134-.588.2-.881.2zM244.998 257.787c-2.164 0-4.193-.401-6.09-1.202a15.809 15.809 0 01-4.927-3.405c-1.389-1.469-2.484-3.178-3.285-5.128-.775-1.949-1.162-4.059-1.162-6.329 0-2.244.387-4.327 1.162-6.25.801-1.949 1.896-3.645 3.285-5.088a15.501 15.501 0 014.927-3.445c1.87-.828 3.9-1.242 6.09-1.242 2.056 0 3.819.267 5.288.802 1.495.534 2.991 1.415 4.486 2.644.214.16.374.333.481.52.134.161.214.334.24.521.054.16.081.361.081.601 0 .507-.187.935-.561 1.282-.347.32-.775.507-1.282.561-.508.027-1.002-.147-1.482-.521-.989-.855-2.017-1.509-3.085-1.963-1.042-.454-2.43-.681-4.166-.681-1.576 0-3.058.321-4.447.962a11.972 11.972 0 00-3.686 2.644 12.327 12.327 0 00-2.443 3.925c-.588 1.469-.882 3.045-.882 4.728 0 1.709.294 3.311.882 4.807a12.448 12.448 0 002.443 3.886 12.005 12.005 0 003.686 2.644c1.389.614 2.871.921 4.447.921 1.362 0 2.644-.227 3.845-.681a15.346 15.346 0 003.526-1.963c.48-.347.948-.494 1.402-.441.481.027.881.214 1.202.561.32.321.48.775.48 1.362 0 .267-.053.535-.16.802a2.28 2.28 0 01-.481.681 16.055 16.055 0 01-4.647 2.604 15.123 15.123 0 01-5.167.881z"
                        ></path>
                    </svg>
                </div>
                <div className="container">
                    <div className={classes.Footer_top}>
                        <div className={classes.contacts}>
                            <div className={classes.contacts_description}>
                                {data.contacts.description}
                            </div>
                            <div className={classes.contacts_contacts}>
                                {data.contacts.contacts.phone && (
                                    <div className={classes.contacts_contacts_item}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <circle
                                                cx="25"
                                                cy="25"
                                                r="25"
                                                fill="url(#paint0_linear_51_4804)"
                                            ></circle>
                                            <path
                                                fill="#fff"
                                                d="M14.237 23.176a27.44 27.44 0 0014.217 13.806l1.01.45A5.203 5.203 0 0035.9 35.58l1.321-1.968a1.486 1.486 0 00-.301-1.983l-4.477-3.61a1.485 1.485 0 00-2.126.271l-1.385 1.868a18.04 18.04 0 01-8.189-8.188l1.867-1.385a1.485 1.485 0 00.272-2.126l-3.612-4.476a1.486 1.486 0 00-1.984-.301l-1.98 1.328a5.201 5.201 0 00-1.839 6.47l.771 1.696z"
                                            ></path>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_51_4804"
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
                                            href={`tel:${data.contacts.contacts.phone.link}`}
                                            className={classes.contact}
                                        >
                                            {data.contacts.contacts.phone.text}
                                        </Link>
                                    </div>
                                )}
                                {data.contacts.contacts.telegram && (
                                    <div className={classes.contacts_contacts_item}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="51"
                                            fill="none"
                                            viewBox="0 0 50 51"
                                        >
                                            <path
                                                fill="url(#paint0_linear_51_4807)"
                                                d="M25 .419C11.194.419 0 11.61 0 25.414c0 13.803 11.194 24.995 25 24.995s25-11.192 25-24.995C50 11.61 38.806.419 25 .419zm12.28 17.123l-4.105 19.33c-.302 1.37-1.119 1.704-2.258 1.058l-6.25-4.603-3.013 2.903a1.58 1.58 0 01-1.25.615h-.01l.444-6.361 11.583-10.46c.5-.445-.113-.697-.777-.253l-14.31 9.01-6.167-1.924c-1.334-.423-1.371-1.333.28-1.987l24.097-9.286c1.12-.408 2.096.267 1.733 1.96l.002-.002z"
                                            ></path>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_51_4807"
                                                    x1="72.835"
                                                    x2="-22.823"
                                                    y1="25.299"
                                                    y2="27.196"
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
                                            href={`https://t.me/${data.contacts.contacts.telegram.name}`}
                                            className={classes.contact}
                                        >
                                            @
                                            {
                                                data.contacts.contacts.telegram
                                                    .name
                                            }
                                        </Link>
                                    </div>
                                )}
                                {data.contacts.contacts.location && (
                                    <div className={classes.contacts_contacts_item}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                        >
                                            <circle
                                                cx="25"
                                                cy="25"
                                                r="25"
                                                fill="url(#paint0_linear_51_4808)"
                                            ></circle>
                                            <path
                                                fill="#fff"
                                                d="M25 27.854a5.455 5.455 0 01-5.35-6.517A5.454 5.454 0 1125 27.854zm0-8.726a3.273 3.273 0 100 6.546 3.273 3.273 0 000-6.546z"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M25 40.942l-9.203-10.851a38.317 38.317 0 01-.38-.492A11.874 11.874 0 0113 22.401a11.997 11.997 0 0112-11.998A12.001 12.001 0 0137 22.4a11.87 11.87 0 01-2.416 7.195l-.002.003s-.327.43-.376.488L25 40.942zm-7.841-12.657c.002 0 .255.336.313.408L25 37.57l7.538-8.89c.048-.06.303-.397.305-.398a9.707 9.707 0 001.975-5.881A9.815 9.815 0 0025 12.584a9.82 9.82 0 00-9.818 9.817 9.71 9.71 0 001.977 5.884z"
                                            ></path>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_51_4808"
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
                                        <div className={classes.contact}>
                                            {
                                                data.contacts.contacts.location
                                                    .text
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={classes.contacts_chart}>
                                {data.contacts.chart}
                            </div>
                        </div>
                        <div className={classes.services}>
                            <h6>{data.services.title}</h6>
                            <div className={classes.services_items}>
                                {data.services.services.map((el) => (
                                    <div
                                        className={classes.services_items_item}
                                        key={el.link}
                                    >
                                        <Link href={el.link} title={el.name}>
                                            {el.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={classes.info}>
                            <h6>{data.info.title}</h6>
                            <div className={classes.info_items}>
                                {data.info.info.map(el => (
                                    <div className={classes.info_items_item} key={el.name}>
                                        <div className={classes.name}>{el.name}</div>
                                        {el.content && <div className={classes.content}>{el.content}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={classes.Footer_bottom}>
                        <Link href={data.policy.link} className={classes.policy}>{data.policy.text}</Link>
                        {data.warning && <p className={classes.warning}>{data.warning}</p>}
                    </div>
                </div>
            </div>
        </footer>
    )
}
