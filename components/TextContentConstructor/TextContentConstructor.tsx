import classes from "./TextContentConstructor.module.scss"

interface TextContentConstructor {
    id: string
    type: string
    content: string
}
export default function TextContentConstructor({
    data,
}: {
    data: TextContentConstructor[]
}) {
    return (
        <div className={classes.TextContentConstructor}>
            <div className="container">
                {data.map((el) => (
                    <>
                        {el.type === "title" && (
                            <div
                                className={classes.TextContentConstructor_title}
                            >
                                <h6>{el.content}</h6>
                            </div>
                        )}
                        {el.type === "text" && (
                            <div
                                className={classes.TextContentConstructor_text}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: el.content,
                                    }}
                                />
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}
