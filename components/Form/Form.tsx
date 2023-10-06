"use client"
import classes from "./Form.module.scss"
import { useEffect, useState, createRef } from "react"
import axios from "axios"
import cn from "classnames"
import Plate from "./Plate"
import Link from "next/link"

interface Form {
    title: string
    subtitle?: string
    chart?: string
    categoryes: string[]
    fields: {
        name: boolean
        phone: boolean
        textarea?: boolean
        email?: boolean
        anyLink?: boolean
    }
    btn: {
        type: string
        content: string
        func?: {
            name: string
            type: string
        }
    }
}

type MessageContent =
    | "name"
    | "phone_number"
    | "e_mail"
    | "anyLink"
    | "textArea"

type MessageMapper = Record<MessageContent, string>

export default function Form({ data }: { data: Form }) {
    const [categoryVisible, setCategoryVisible] = useState(3)
    const formRef: any = createRef()
    const tokenBot = process.env.NEXT_PUBLIC_TELEGRAM_BOT_APIKEY
    const chanelId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    const URI_API = `https://api.telegram.org/${tokenBot}/sendMessage`

    const [messageNotice, setMessageNotice] = useState(true)

    useEffect(() => {
        if (formRef.current === null) return
        formRef.current.addEventListener(
            "submit",
            function (this: any, el: any) {
                el.preventDefault()
                let message = `<b>Уведомление</b>\n`
                const messageMapper: MessageMapper = {
                    name:
                        this.name &&
                        (message += `<b>Имя:</b> ${this.name.value}\n`),
                    phone_number:
                        this.phone_number &&
                        (message += `<b>Номер Телефона:</b> ${this.phone_number.value}\n`),
                    e_mail:
                        this.e_mail &&
                        (message += `<b>Почта:</b> ${this.e_mail.value}\n`),
                    anyLink:
                        this.anyLink &&
                        (message += `<b>Ссылка</b> ${this.anyLink.value}\n`),
                    textArea:
                        this.textArea &&
                        (message += `<b>Текст:</b> ${this.textArea.value}\n`),
                }
                const category = document.querySelectorAll(
                    `.${classes.plate_active}`
                )
                const activeCategory: string[] = []
                category.forEach((el: any) => {
                    activeCategory.push(el.innerText)
                })
                message += `Выбранные категории: ${activeCategory.toString()}`

                if (messageNotice)
                    axios.post(URI_API, {
                        chat_id: chanelId,
                        parse_mode: "html",
                        text: message,
                    })
                setMessageNotice(false)
            }
        )
    }, [formRef, messageNotice, URI_API])
    return (
        <div className={classes.Form}>
            <div className="container">
                <div className={classes.Form_content}>
                    <div className={classes.Title}>{data.title}</div>
                    <div
                        className={cn(
                            classes.Form_content_description,
                            classes.Description
                        )}
                    >
                        {data.subtitle && (
                            <div
                                className={classes.Description_text}
                                dangerouslySetInnerHTML={{
                                    __html: data.subtitle,
                                }}
                            />
                        )}
                        {data.chart && (
                            <div className={classes.Description_chart}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="38"
                                    height="38"
                                    fill="none"
                                    viewBox="0 0 38 38"
                                >
                                    <path
                                        fill="#9B2D30"
                                        d="M19.175 30.159c2.95 0 5.778-1.176 7.864-3.268A11.176 11.176 0 0030.296 19c0-2.959-1.172-5.797-3.257-7.89a11.103 11.103 0 00-7.864-3.267c-2.95 0-5.778 1.176-7.864 3.268a11.176 11.176 0 00-3.257 7.89c0 2.958 1.171 5.796 3.257 7.889a11.103 11.103 0 007.864 3.268zm0-25.104c1.825 0 3.633.36 5.32 1.061a13.9 13.9 0 014.51 3.024 13.986 13.986 0 010 19.724 13.879 13.879 0 01-9.83 4.084c-7.688 0-13.902-6.276-13.902-13.947A13.97 13.97 0 019.345 9.14a13.879 13.879 0 019.83-4.085zm.695 6.973v7.322l6.256 3.724-1.043 1.715-7.298-4.393v-8.368h2.085z"
                                    ></path>
                                </svg>
                                <span>прием заявок с 8 до 20</span>
                            </div>
                        )}
                    </div>
                    <div
                        className={cn(
                            classes.Form_content_fields,
                            classes.Fields
                        )}
                    >
                        <form ref={formRef}>
                            <div className={classes.Fields_category}>
                                <span>Меня интересует...</span>
                                <div className={classes.Fields_category_plates}>
                                    {data.categoryes.map(
                                        (el, index) =>
                                            index < categoryVisible && (
                                                <Plate data={el} key={el} />
                                            )
                                    )}
                                    {data.categoryes.length !==
                                        categoryVisible && (
                                        <div
                                            className={classes.plate}
                                            onClick={() =>
                                                setCategoryVisible(
                                                    data.categoryes.length
                                                )
                                            }
                                        >
                                            Ещё +
                                        </div>
                                    )}
                                </div>
                                <div className={classes.Fields_category_fields}>
                                    {data.fields.name && (
                                        <input
                                            type="text"
                                            className={classes.field}
                                            name="name"
                                            placeholder="Как к Вам можно обращаться?"
                                        />
                                    )}
                                    {data.fields.phone && (
                                        <input
                                            type="tel"
                                            className={classes.field}
                                            name="phone_number"
                                            placeholder="+7(____)___-__-__"
                                        />
                                    )}
                                    {data.fields.email && (
                                        <input
                                            type="email"
                                            className={classes.field}
                                            name="e_mail"
                                            placeholder="Мы можем связаться с вами по почте"
                                        />
                                    )}
                                    {data.fields.anyLink && (
                                        <input
                                            type="text"
                                            className={classes.field}
                                            name="anyLink"
                                            placeholder="Оставьте ссылку на социальную сеть"
                                        />
                                    )}
                                    {data.fields.textarea && (
                                        <textarea
                                            name="textArea"
                                            placeholder="Опишите Ваш запрос"
                                        />
                                    )}
                                </div>
                                <button type="submit">
                                    {data.btn.content}
                                </button>
                            </div>
                        </form>
                        <span>
                            заполняя данную форму вы даете согласие на обработку{" "}
                            <Link href="/policy/">персональных данных</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}