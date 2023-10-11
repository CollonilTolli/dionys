import responce from "@/public/data/category/data.json"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Form from "@/components/Form/Form"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import Price from "@/components/Price/Price"
import TextContentConstructor from "@/components/TextContentConstructor/TextContentConstructor"
import SliderDetail from "@/components/SliderDetail/SliderDetail"
import _ from "lodash"
interface ResultItem {
    id: string
    product: string
}
export async function generateStaticParams() {
    const result: ResultItem[] = []

    responce.forEach((category) => {
        category.products.forEach((item) => {
            result.push({
                id: category.id,
                product: item.product,
            })
        })
    })

    return result
}

export default function Page({ params }: { params: any }) {
    const { id, product } = params
    const Data: any = () => {
        let i
        responce.map((element: any) => {
            if (element.id == id) {
                element.products.map((el: any) => {
                    if (el.product === product) {
                        i = el
                    }
                })
            }
        })
        return i || false
    }

    const data: any = Data()
    return (
        <div>
            <Header data={data.globals.header} />
            <main>
                <div className="container">
                    <h1>{data.content.nameDetail}</h1>
                </div>
                <Breadcrumbs data={data.globals.breadcrumbs} />
                <div className="container">
                    <Price data={data.content.price} />
                </div>
                <TextContentConstructor data={data.content.textContent} />
                <SliderDetail data={data.content} />
                {data.content.Form && <Form data={data.content.Form} />}
            </main>
            <Footer data={data.globals.footer} />
        </div>
    )
}
export const dynamicParams = false
