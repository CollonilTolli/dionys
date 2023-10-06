import classes from "./PolicyInner.module.scss"

interface PolicyInner {
    name: string
    text?: string
    subСlause: string[]
}

export default function PolicyInner({ data }: { data: PolicyInner[] }) {
    return (
        <div className="container">
            {data.map((el, index) => (
                <div className={classes.Clause}>
                    <h4 className={classes.Clause_title}>{index+1}{el.name}</h4>
                    {el.text && (
                        <p
                            className={classes.Clause_paragraph}
                            dangerouslySetInnerHTML={{ __html: el.text }}
                        />
                    )}

                    {el.subСlause && (
                        <ul>
                            {el.subСlause.map((e, i) => (
                                <li key={e}><em>{index+1}.{i+1}</em>{e}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    )
}
