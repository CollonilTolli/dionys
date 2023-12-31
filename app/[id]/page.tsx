import responce from "@/public/data/category/data.json"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import _ from "lodash"
import Form from "@/components/Form/Form"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ProductsList from "@/components/ProductsList/ProductsList"
import { Metadata } from "next"

export async function generateStaticParams() {
    return responce.map((post: any) => ({
        id: post.id,
    }))
}

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params.id
    const Data: any = () =>
        responce.map((element: any) => {
            if (element.id == params.id) return element
        })
    const resp = Data()
    _.remove(resp, (item: any) => !item)
    const data = resp[0]
    return {
        title: data.seo.title,
        description: data.seo.description,
        openGraph: {
            title: data.seo.openGraph.title,
            images: data.seo.openGraph.images,
            description: data.seo.openGraph.description,
        },
    }
}

export default function Page({
    params,
}: {
    params: { id: string; seo: any; content: any; globals: any }
}) {
    const Data: any = () =>
        responce.map((element: any) => {
            if (element.id == params.id) return element
        })
    const resp = Data()
    _.remove(resp, (item: any) => !item)
    const data = resp[0]
    return (
        <div>
            <Header data={data.globals.header} />
            <main>
                <div className="container ">
                    <h1>{data.content.title}</h1>
                </div>
                {data.globals.breadcrumbs && (
                    <Breadcrumbs data={data.globals.breadcrumbs} />
                )}
                <div className="container">
                    <p>{data.content.desctiption}</p>
                </div>
                <ProductsList data={data.products} />
                {data.content.Form && <Form data={data.content.Form} />}
            </main>
            <Footer data={data.globals.footer} />
        </div>
    )
}
export const dynamicParams = false
