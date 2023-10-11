import responce from "@/public/data/category/data.json"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Form from "@/components/Form/Form"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import Price from "@/components/Price/Price"
import TextContentConstructor from "@/components/TextContentConstructor/TextContentConstructor"
import SliderDetail from "@/components/SliderDetail/SliderDetail"

interface ResultItem {
    category: string
    product: string
}
export async function  generateStaticParams() {
    const posts = responce
    const result: ResultItem[] = []

    posts.forEach((category) => {
        category.products.forEach((item) => {
            result.push({
                category: category.id,
                product: item.product,
            })
        })
    })

    return result
}
// export function fData(
//     responce: any,
//     categoryName: string,
//     productName: string
// ) {
//     const resp = responce.find((category: any) => category.id === categoryName)
//     const data: any = resp.products.find(
//         (product: any) => product.product === productName
//     )
//     return data
// }

export default function Page({ params }: { params: any }) {
    const categoryName = params.id
    const productName = params.product

    // const data = fData(responce, categoryName, productName)
    const Data = () => {
        responce.map((element: any) => {
            if (element.id == params.id) {
                element.map((el: any) => {
                    if (el.product === params.product) return el
                })
            }
            else {
                return false
            }
        })
    }
    const data:any = Data()
    if (!data) {
        notFound()
    }
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
