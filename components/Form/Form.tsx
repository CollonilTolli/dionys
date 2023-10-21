"use client"
import classes from "./Form.module.scss"
import { useEffect, useState, createRef } from "react"
import axios from "axios"
import cn from "classnames"
import Plate from "./Plate"
import Link from "next/link"
import Button from "../ui/Button/Button"

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
        let phoneInputs = document.querySelectorAll("input[data-tel-input]")
        let getInputNumbersValue = function (input: any) {
            return input.value.replace(/\D/g, "")
        }

        let onPhonePaste = function (e: any) {
            let input = e.target,
                inputNumbersValue = getInputNumbersValue(input)
            let pasted = e.clipboardData || window?.Clipboard

            if (pasted) {
                let pastedText = pasted.getData("Text")
                if (/\D/g.test(pastedText)) {
                    input.value = inputNumbersValue
                    return
                }
            }
        }

        let onPhoneInput = function (e: any) {
            let input = e.target,
                inputNumbersValue = getInputNumbersValue(input),
                selectionStart = input.selectionStart,
                formattedInputValue = ""

            if (!inputNumbersValue) {
                return (input.value = "")
            }

            if (input.value.length !== selectionStart) {
                if (e.data && /\D/g.test(e.data)) {
                    input.value = inputNumbersValue
                }
                return
            }

            if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
                if (inputNumbersValue[0] === "9")
                    inputNumbersValue = "7" + inputNumbersValue
                let firstSymbols = inputNumbersValue[0] === "8" ? "+7" : "+7"
                formattedInputValue = input.value = firstSymbols + " "
                if (inputNumbersValue.length > 1) {
                    formattedInputValue +=
                        "(" + inputNumbersValue.substring(1, 4)
                }
                if (inputNumbersValue.length >= 5) {
                    formattedInputValue +=
                        ") " + inputNumbersValue.substring(4, 7)
                }
                if (inputNumbersValue.length >= 8) {
                    formattedInputValue +=
                        "-" + inputNumbersValue.substring(7, 9)
                }
                if (inputNumbersValue.length >= 10) {
                    formattedInputValue +=
                        "-" + inputNumbersValue.substring(9, 11)
                }
            } else {
                formattedInputValue = "+" + inputNumbersValue.substring(0, 16)
            }
            input.value = formattedInputValue
        }
        let onPhoneKeyDown = function (e: any) {
            let inputValue = e.target.value.replace(/\D/g, "")
            if (e.keyCode === 8 && inputValue.length === 1) {
                e.target.value = ""
            }
        }
        phoneInputs.forEach((phoneInput) => {
            phoneInput.addEventListener("keydown", onPhoneKeyDown)
            phoneInput.addEventListener("input", onPhoneInput, false)
            phoneInput.addEventListener("paste", onPhonePaste, false)
        })
    }, [])
    function SendForm(this: any, el: any): any {
        el.preventDefault()
        if (messageNotice) {
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

            axios.post(URI_API, {
                chat_id: chanelId,
                parse_mode: "html",
                text: message,
            })
            formRef.current.removeEventListener("submit", SendForm)
            setMessageNotice(false)
        }
        el.target.reset();
    }
    useEffect(() => {
        if (formRef.current === null) return
        if (messageNotice) {
            formRef.current.addEventListener("submit", SendForm, false)
        }
    }, [formRef, messageNotice])
    return (
        <div className={classes.Form}>
            <div className="container">
                <div className={classes.Title}>{data.title}</div>
                <div className={classes.Form_content}>
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
                    <div className={classes.form}>
                        <div
                            className={cn(
                                classes.Form_content_fields,
                                classes.Fields
                            )}
                        >
                            <form ref={formRef}>
                                <div className={classes.Fields_category}>
                                    <span
                                        className={
                                            classes.Fields_category_title
                                        }
                                    >
                                        Меня интересует...
                                    </span>
                                    <div
                                        className={
                                            classes.Fields_category_plates
                                        }
                                    >
                                        {data.categoryes.length !==
                                            categoryVisible && (
                                            <div
                                                className={cn(
                                                    classes.plate,
                                                    classes.more
                                                )}
                                                onClick={() =>
                                                    setCategoryVisible(
                                                        data.categoryes.length
                                                    )
                                                }
                                            >
                                                Ещё +
                                            </div>
                                        )}
                                        {data.categoryes.map(
                                            (el, index) =>
                                                index < categoryVisible && (
                                                    <Plate data={el} key={el} />
                                                )
                                        )}
                                    </div>
                                </div>
                                <div className={classes.Fields_category_fields}>
                                    {data.fields.name && (
                                        <input
                                            required={true}
                                            type="text"
                                            className={classes.field}
                                            name="name"
                                            placeholder="Как к Вам можно обращаться?"
                                        />
                                    )}
                                    {data.fields.phone && (
                                        <input
                                            required={true}
                                            type="tel"
                                            className={classes.field}
                                            data-tel-input
                                            name="phone_number"
                                            placeholder="+7(____)___-__-__"
                                        />
                                    )}
                                    {data.fields.email && (
                                        <input
                                            required={true}
                                            type="email"
                                            className={classes.field}
                                            name="e_mail"
                                            placeholder="Мы можем связаться с вами по почте"
                                        />
                                    )}
                                    {data.fields.anyLink && (
                                        <input
                                            required={true}
                                            type="text"
                                            className={classes.field}
                                            name="anyLink"
                                            placeholder="Оставьте ссылку на социальную сеть"
                                        />
                                    )}
                                    {data.fields.textarea && (
                                        <textarea
                                            required={true}
                                            name="textArea"
                                            placeholder="Опишите Ваш запрос"
                                        />
                                    )}
                                </div>
                                {messageNotice ? (
                                    <Button
                                        data={{
                                            className: classes.button,
                                            type: messageNotice
                                                ? "submit"
                                                : "main",
                                            content: `${data.btn.content}`,
                                        }}
                                    />
                                ) : (
                                    <div
                                        className={cn(
                                            classes.button,
                                            classes.IsSend
                                        )}
                                        onClick={()=>setMessageNotice(true)}
                                    >
                                        Спасибо, мы свяжемся с Вами!
                                    </div>
                                )}
                            </form>
                        </div>
                        <span className={classes.policy}>
                            заполняя данную форму вы даете согласие на обработку
                            <Link href="/policy/">персональных данных</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
