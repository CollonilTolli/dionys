"use client"
import classes from "./Reviews.module.scss"
import cn from "classnames"
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
                <div className={cn(classes.quote, classes.left)}>
                            <svg
                                width="143"
                                height="120"
                                viewBox="0 0 143 120"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    opacity="0.3"
                                    clipPath="url(#clip0_51_4026)"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M142.373 18.7419C121.049 29.1541 110.387 41.3882 110.387 55.4447C119.476 56.4859 126.992 60.1735 132.934 66.5076C138.877 72.8417 141.849 80.1735 141.849 88.5033C141.849 97.3536 138.965 104.816 133.197 110.889C127.428 116.963 120.175 120 111.435 120C101.647 120 93.1701 116.052 86.0037 108.156C78.8374 100.26 75.2542 90.6725 75.2542 79.3926C75.2542 45.553 94.306 19.089 132.41 0L142.373 18.7419ZM67.1186 18.7419C45.6196 29.1541 34.8702 41.3882 34.8702 55.4447C44.134 56.4859 51.7373 60.1735 57.6801 66.5076C63.6229 72.8417 66.5943 80.1735 66.5943 88.5033C66.5943 97.3536 63.6666 104.816 57.8112 110.889C51.9557 116.963 44.6584 120 35.919 120C26.1308 120 17.6973 116.052 10.6184 108.156C3.53942 100.26 0 90.6725 0 79.3926C0 45.553 18.9643 19.089 56.8935 0L67.1186 18.7419Z"
                                        fill="#B00000"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_51_4026">
                                        <rect
                                            width="143"
                                            height="120"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
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
                        <div className={cn(classes.quote, classes.right)}>
                            <svg
                                width="143"
                                height="120"
                                viewBox="0 0 143 120"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    opacity="0.3"
                                    clipPath="url(#clip0_51_4028)"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.627121 101.258C21.9514 90.8459 32.6133 78.6118 32.6133 64.5553C23.5243 63.5141 16.0085 59.8265 10.0657 53.4924C4.12285 47.1583 1.15149 39.8265 1.15149 31.4967C1.15149 22.6464 4.03546 15.1844 9.8035 9.11063C15.5715 3.03684 22.8252 0 31.5646 0C41.3528 0 49.8299 3.9479 56.9963 11.8438C64.1626 19.7397 67.7458 29.3275 67.7458 40.6074C67.7458 74.447 48.694 100.911 10.59 120L0.627121 101.258ZM75.8814 101.258C97.3804 90.8459 108.13 78.6118 108.13 64.5553C98.866 63.5141 91.2627 59.8265 85.3199 53.4924C79.3771 47.1583 76.4057 39.8265 76.4057 31.4967C76.4057 22.6464 79.3334 15.1844 85.1888 9.11063C91.0443 3.03684 98.3416 0 107.081 0C116.869 0 125.303 3.9479 132.382 11.8438C139.461 19.7397 143 29.3275 143 40.6074C143 74.447 124.036 100.911 86.1065 120L75.8814 101.258Z"
                                        fill="#B00000"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_51_4028">
                                        <rect
                                            width="143"
                                            height="120"
                                            fill="white"
                                            transform="matrix(-1 0 0 -1 143 120)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
