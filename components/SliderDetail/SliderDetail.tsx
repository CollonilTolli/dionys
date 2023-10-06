"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import classes from "./SliderDetail.module.scss"
import Image from "next/image"

interface SliderDetail {
    imagesTitle: string
    imagesList: string[]
}
export default function SliderDetail({ data }: { data: SliderDetail }) {
    return (
        <div className={classes.SliderDetail}>
            <div className="container">
                <div className={classes.SliderDetail_title}>
                    {data.imagesTitle}
                </div>
                <Swiper
                    spaceBetween={40}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className={classes.Swiper}
                    breakpoints={{
                        320: {
                          slidesPerView: 1
                        },
                        768: {
                          slidesPerView: 2
                        },
                        1024: {
                          slidesPerView: 2.3
                        },
                        1280: {
                            slidesPerView: 3
                        }
                      }}
                >
                    {data.imagesList.map((element, index) => (
                        <SwiperSlide className={classes.Slide} key={index}>
                            <Image
                                src={element}
                                alt={data.imagesTitle}
                                width={360}
                                height={250}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
