"use client"
import classes from "./OpenedComponent.module.scss"
import cn from "classnames"
import Image from "next/image"
import BgImage from "@/images/firstComponentMainPage.png"
import Button from "../ui/Button/Button"
import ModalAlert from "../ui/Modals/ModalAlert/ModalAlert"
import { useState } from 'react';
import ModalForm from "../ui/Modals/ModalForm/ModalForm"

interface OpenedComponent {
    prequel: string
    title: string
    description: string
    btn: {
        type: string
        content: string
        func?: {
            name: string
            type: string
        }
    }
}
export default function OpenedComponent({ data }: { data: OpenedComponent }) {
    const [openModal, setOpenModal] = useState(false)
    function clickHandler(){
        setOpenModal(openModal? false : true)
    }
    return (
        <div className={classes.OpenedComponent}>
            <Image className={classes.bgImage} src={BgImage} alt="" fill />
            <div className={cn(classes.content, "container")}>
                <p className={classes.content_prequel}>{data.prequel}</p>
                <h1 className={classes.content_title}>{data.title}</h1>
                <p
                    className={classes.content_description}
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
                <Button data={data.btn} className={classes.button} onClick={()=>clickHandler()}/>
                <ModalForm
                    data={{
                        text: "Заказать звонок",
                        buttonClose: true
                    }}
                    stateModal={openModal}
                />
            </div>
        </div>
    )
}
