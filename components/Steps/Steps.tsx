import classes from "./Steps.module.scss"
interface Steps{
    title: string
    subtitle: string
    steps: {
        title: string
        subtitle: string
    }[]
}

export default function Steps({data}: {data:Steps}) {
    const number = (num:number) => {
        if (num < 9){
            return `0${num+1}`
        }
        return `${num+1}`
    }
    return(
        <div className={classes.Steps}>
            <div className="container">
                <h4 className={classes.Steps_title}>{data.title}</h4>
                <div className={classes.Steps_subtitle}>{data.subtitle}</div>
                <div className={classes.Steps_content}>
                    {data.steps.map((element, index)=> (
                        <div className={classes.Steps_step} key={index}>
                            <div className={classes.number}>
                                {number(index)}
                            </div>
                            <div className={classes.title}>{element.title}</div>
                            <p className={classes.subtitle} dangerouslySetInnerHTML={{__html: element.subtitle}}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}