"use client"
import classes from "./CookieAlert.module.scss"
import Cookies from "js-cookie"
import Button from '../ui/Button/Button';
import { useEffect, useState } from "react";

export default function CookieAlert(){
    const [cookie, setCookie] = useState(true)
    useEffect(()=>{
        if (Cookies.get('AsseptCookie') === "True"){
            setCookie(false)
        }
        else{
            setCookie(true)
        }
    },[cookie])
    function AsseptCookie() {
        Cookies.set('AsseptCookie', 'True', { expires: 7 })
        setCookie(false)
    }
    return cookie ? (
        <div className={classes.CookieAlert}>
            <p>Мы используем куки, чтобы наш сайт был максимально удобным для вас</p>
            <Button className={classes.button} data={{content:"Понятно"}} onClick={()=>AsseptCookie()}/>
        </div>
    ) : (<></>)
}
