"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Zoom, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/zoom"
import classes from "./SliderDetail.module.scss"
import Image from "next/image"
import cn from "classnames"

interface SliderDetail {
    imagesTitle: string
    imagesList: string[]
}
export default function SliderDetail({ data }: { data: SliderDetail }) {
    return (
        data.imagesList.length > 3 && (
            <div className={classes.SliderDetail}>
                <div className="container">
                    <div className={classes.SliderDetail_title}>
                        {data.imagesTitle}
                    </div>
                    <Swiper
                        spaceBetween={40}
                        pagination={{ clickable: true }}
                        modules={[Zoom, Pagination]}
                        className={classes.Swiper}
                        zoom={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2.3,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {data.imagesList.map((element, index) => (
                            <SwiperSlide
                                className={cn(classes.Slide)}
                                key={index}
                            >
                                <div className="swiper-zoom-container">
                                    <Image
                                        src={element}
                                        alt={data.imagesTitle}
                                        width={360}
                                        height={250}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )
    )
}
