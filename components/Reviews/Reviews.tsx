"use client"
import classes from "./Reviews.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"
interface Review {
    id: string
    name?: string
    photo?: string
    text: string
}
interface Reviews {
    title: string
    description: string
    reviews: Review[]
}
export default function Reviews({ data }: { data: Reviews }) {
    return (
        <div className={classes.Reviews}>
            <div className="container">
                <h4 className={classes.title}>{data.title}</h4>
                <div
                    className={classes.description}
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
                <div className={classes.slider}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className={classes.swiper}
                        loop={true}
                    >
                        {data.reviews.map((element) => (
                            <SwiperSlide
                                key={element.id}
                                className={classes.swiper_slide}
                            >
                                <div className={classes.text}>
                                    {element.text}
                                </div>
                                <div className={classes.persona}>
                                    <div className={classes.name}>
                                        {element.name}
                                    </div>
                                    {element.photo && element.name && (
                                        <div className={classes.photo}>
                                            <Image
                                                src={element.photo}
                                                alt={element.name}
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
