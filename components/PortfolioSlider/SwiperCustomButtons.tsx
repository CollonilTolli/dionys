import React from "react"
import { useSwiper } from "swiper/react"
import classes from "./PortfolioSlider.module.scss"
import cn from "classnames"
import { useState } from "react"
export const SwiperCustomButtons = () => {
    const swiper:any = useSwiper()
    const [reloadComponent, setReloadComponent] = useState(false)
    function prev(){
        setReloadComponent(!reloadComponent)
        swiper.slidePrev()
    }
    function next(){
        setReloadComponent(!reloadComponent)
        swiper.slideNext()
    }
    return (
        <div className={classes.SwiperButtons}>
            <button
                className={cn(classes.SwiperButtons_Prev, !swiper.isBeginning && classes.active)}
                onClick={() => prev()}
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
                        transform="matrix(-1 0 0 1 70 0)"
                        fill="#9B2D30"
                    />
                    <path
                        d="M54 33.5C54.8284 33.5 55.5 34.1716 55.5 35C55.5 35.8284 54.8284 36.5 54 36.5V33.5ZM18.9393 36.0607C18.3536 35.4749 18.3536 34.5251 18.9393 33.9393L28.4853 24.3934C29.0711 23.8076 30.0208 23.8076 30.6066 24.3934C31.1924 24.9792 31.1924 25.9289 30.6066 26.5147L22.1213 35L30.6066 43.4853C31.1924 44.0711 31.1924 45.0208 30.6066 45.6066C30.0208 46.1924 29.0711 46.1924 28.4853 45.6066L18.9393 36.0607ZM54 36.5H20V33.5H54V36.5Z"
                        fill="white"
                    />
                </svg>
            </button>
            <button
                className={cn(classes.SwiperButtons_Next, !swiper.isEnd && classes.active)}
                onClick={() => next()}
            >
                <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="35" cy="35" r="35" fill="#9B2D30" />
                    <path
                        d="M16 33.5C15.1716 33.5 14.5 34.1716 14.5 35C14.5 35.8284 15.1716 36.5 16 36.5V33.5ZM51.0607 36.0607C51.6464 35.4749 51.6464 34.5251 51.0607 33.9393L41.5147 24.3934C40.9289 23.8076 39.9792 23.8076 39.3934 24.3934C38.8076 24.9792 38.8076 25.9289 39.3934 26.5147L47.8787 35L39.3934 43.4853C38.8076 44.0711 38.8076 45.0208 39.3934 45.6066C39.9792 46.1924 40.9289 46.1924 41.5147 45.6066L51.0607 36.0607ZM16 36.5H50V33.5H16V36.5Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    )
}
