import classes from "./FAQ.module.scss"
import FAQItem from "./FAQItem"

interface FAQtype {
    title: string
    questions: {
        name: string
        text: string
    }[]
}
export default function FAQ({ data }: { data: FAQtype }) {
    return (
        <div className={classes.FAQ}>
            <div className="container">
                <h4 className={classes.FAQ_title}>{data.title}</h4>
                <div className={classes.FAQ_questions}>
                    {
                        data.questions.map(el=> (
                            <FAQItem data={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
