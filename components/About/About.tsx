import classes from "./About.module.scss"
import cn from "classnames"
import Image from "next/image"

interface About {
    blockId: string
    title: string
    description: string
    items: {
        text: string
        image: any
    }[]
}
export default function About({ data }: { data: About }) {
    return (
        <div className={cn(classes.About, "container")} id={data.blockId}>
            <div className={classes.pseudo}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="260"
                    fill="none"
                    viewBox="0 0 60 260"
                >
                    <path
                        fill="#9B2D30"
                        fillRule="evenodd"
                        d="M5 10A5 5 0 105 0a5 5 0 000 10zm0 50a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zM60 5a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
            <div className={classes.content}>
                <div className={classes.content_title}>{data.title}</div>
                <p
                    className={classes.content_description}
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
                <div className={classes.aboutItems}>
                    {data.items.map((element) => (
                        <div
                            className={classes.aboutItems_item}
                            key={element.text}
                        >
                            <Image
                                className={classes.aboutItems_item_image}
                                src={element.image}
                                alt={element.text}
                                width={83}
                                height={83}
                            />
                            <p
                                className={classes.aboutItems_item_text}
                                dangerouslySetInnerHTML={{
                                    __html: element.text,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={cn(classes.pseudo, classes.pseudo_right)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="260"
                    fill="none"
                    viewBox="0 0 60 260"
                >
                    <path
                        fill="#9B2D30"
                        fillRule="evenodd"
                        d="M5 10A5 5 0 105 0a5 5 0 000 10zm0 50a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zM60 5a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10zm5 45a5 5 0 11-10 0 5 5 0 0110 0zm-5 55a5 5 0 100-10 5 5 0 000 10z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
        </div>
    )
}
