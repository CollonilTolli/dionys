"use client"
import classes from "./PortfolioSlider.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import Image from "next/image"
import Button from "../ui/Button/Button"
import cn from "classnames"

interface PortfolioSlider {
    id?: string
    title: string
    subtitle: string
    slides: {
        image?: any
        title?: string
        location?: string
        stats: {
            name: string
            plateContent: string
        }[]
        text?: {
            title?: string
            text?: string
            list?: string[]
        }
        link?: {
            name: string
            href: string
        }
        btn?: {
            type: string
            content: string
            func?: {
                name: string
                type: string
            }
        }
    }[]
}

export default function PortfolioSlider({ data }: { data: PortfolioSlider }) {
    return (
        <div className={classes.PortfolioSlider} id={data.id}>
            <div className="container">
                <div className={classes.PortfolioSlider_title}>
                    {data.title}
                </div>
                <div className={classes.PortfolioSlider_subtitle}>
                    {data.subtitle}
                </div>
                <div className={classes.PortfolioSlider_swiper}>
                    <Swiper
                        slidesPerView={3}
                        navigation={true}
                        modules={[Navigation]}
                        className={classes.swiper}
                    >
                        {data.slides.map((element) => (
                            <SwiperSlide
                                key={element.title}
                                className={classes.swiper_slide}
                            >
                                {element.image && (
                                    <div className={classes.swiper_slide_image}>
                                        <Image
                                            src={element.image}
                                            alt={element.title || ""}
                                            fill
                                        />
                                    </div>
                                )}
                                <div className={classes.swiper_content}>
                                    {element.title && (
                                        <div
                                            className={
                                                classes.swiper_content_title
                                            }
                                        >
                                            {element.title}
                                        </div>
                                    )}
                                    {element.location && (
                                        <div
                                            className={
                                                classes.swiper_content_location
                                            }
                                        >
                                            <svg
                                                width="22"
                                                height="29"
                                                viewBox="0 0 22 29"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11 16.9766C10.0111 16.9766 9.0444 16.6834 8.22215 16.1341C7.39991 15.5848 6.75904 14.804 6.3806 13.8906C6.00217 12.9771 5.90315 11.972 6.09608 11.0023C6.289 10.0326 6.76521 9.14182 7.46447 8.4427C8.16373 7.74357 9.05465 7.26746 10.0246 7.07457C10.9945 6.88168 11.9998 6.98068 12.9134 7.35905C13.8271 7.73741 14.6079 8.37815 15.1574 9.20023C15.7068 10.0223 16 10.9888 16 11.9775C15.9984 13.3029 15.4711 14.5735 14.5338 15.5106C13.5964 16.4478 12.3256 16.975 11 16.9766ZM11 8.97813C10.4067 8.97813 9.82664 9.15404 9.33329 9.48362C8.83994 9.8132 8.45543 10.2816 8.22836 10.8297C8.0013 11.3778 7.94189 11.9809 8.05765 12.5627C8.1734 13.1445 8.45912 13.679 8.87868 14.0984C9.29824 14.5179 9.83279 14.8036 10.4147 14.9193C10.9967 15.0351 11.5999 14.9757 12.1481 14.7486C12.6962 14.5216 13.1648 14.1372 13.4944 13.6439C13.8241 13.1507 14 12.5708 14 11.9775C13.9992 11.1823 13.6829 10.4198 13.1204 9.85751C12.558 9.29518 11.7954 8.97892 11 8.97813Z"
                                                    fill="#9B2D30"
                                                />
                                                <path
                                                    d="M11 28.975L2.56401 19.0279C2.44679 18.8786 2.33079 18.7283 2.21601 18.577C0.774992 16.6792 -0.00348119 14.3611 1.17029e-05 11.9783C1.17029e-05 9.0615 1.15894 6.26416 3.22184 4.20166C5.28474 2.13917 8.08263 0.980469 11 0.980469C13.9174 0.980469 16.7153 2.13917 18.7782 4.20166C20.8411 6.26416 22 9.0615 22 11.9783C22.0035 14.36 21.2254 16.677 19.785 18.574L19.784 18.577C19.784 18.577 19.484 18.9709 19.439 19.0239L11 28.975ZM3.81201 17.3723C3.81401 17.3723 4.04601 17.6802 4.09901 17.7462L11 25.8836L17.91 17.7352C17.954 17.6802 18.188 17.3703 18.189 17.3693C19.3662 15.8187 20.0023 13.925 20 11.9783C20 9.59183 19.0518 7.30309 17.364 5.6156C15.6761 3.9281 13.387 2.98008 11 2.98008C8.61306 2.98008 6.32388 3.9281 4.63605 5.6156C2.94822 7.30309 2.00001 9.59183 2.00001 11.9783C1.99791 13.9262 2.63379 15.821 3.81201 17.3723Z"
                                                    fill="#9B2D30"
                                                />
                                            </svg>
                                            <span>{element.location}</span>
                                        </div>
                                    )}
                                    {element.stats && (
                                        <div
                                            className={
                                                classes.swiper_content_stats
                                            }
                                        >
                                            {element.stats.map((el) => (
                                                <div
                                                    key={el.name}
                                                    className={
                                                        classes.swiper_content_stat
                                                    }
                                                >
                                                    <span>{el.name} </span>
                                                    <div
                                                        className={
                                                            classes.swiper_content_stats_plate
                                                        }
                                                    >
                                                        {el.plateContent}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {element.text && (
                                        <div
                                            className={cn(
                                                classes.swiper_content_Text,
                                                classes.Text
                                            )}
                                        >
                                            {element.text.title && (
                                                <h6
                                                    className={
                                                        classes.Text_title
                                                    }
                                                >
                                                    {element.text.title}
                                                </h6>
                                            )}
                                            {element.text.text && (
                                                <p
                                                    className={
                                                        classes.Text_text
                                                    }
                                                >
                                                    {element.text.text}
                                                </p>
                                            )}
                                            {element.text.list && (
                                                <ul>
                                                    {element.text.list.map(
                                                        (el) => (
                                                            <li key={el}>
                                                                {el}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                                {element.btn && <Button data={element.btn} />}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
