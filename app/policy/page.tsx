import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import PolicyInner from "@/components/PolicyInner/PolicyInner"
import data from "@/public/data/policy/data.json"

interface Policy {
    title: string
    clause: {
        name: string
        text: string
        subСlause: string[]
    }[]
}

export default function Policy() {
    return (
        <>
            <Header data={data.globals.header} />
            <main>
                <div className="container">
                    <h1>{data.content.title}</h1>
                </div>
                <Breadcrumbs data={data.globals.breadcrumbs} />
                <PolicyInner data={data.content.clause} />
            </main>
            <Footer data={data.globals.footer} />
        </>
    )
}
