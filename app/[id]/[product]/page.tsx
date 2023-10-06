'use client'
import responce from "@/public/data/category/data.json"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Form from "@/components/Form/Form"
import { notFound } from "next/navigation"
import { usePathname } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import Price from '@/components/Price/Price';
import TextContentConstructor from "@/components/TextContentConstructor/TextContentConstructor"
import SliderDetail from "@/components/SliderDetail/SliderDetail"

export function fData (responce:any, categoryName:any, productName:any) {
    const resp = responce.find((category:any) => category.id === categoryName)
    const data = resp.products.find((product:any) => product.product===productName)
    return data
}

export default function Page() {
    const pathname = usePathname()
    const categoryName = pathname.split('/')[1]
    const productName = pathname.split('/')[2]
    
    const data = fData(responce, categoryName, productName)
    if (!data){
        notFound()
    }
    return (
        <div>
            <Header data={data.globals.header} />
            <main>
                <div className="container"><h1>{data.content.nameDetail}</h1></div>
                <Breadcrumbs data={data.globals.breadcrumbs}/>
                <div className="container"><Price data={data.content.price}/></div>
                <TextContentConstructor data={data.content.textContent} />
                <SliderDetail data={data.content} />
                {data.content.Form && <Form data={data.content.Form} />}
            </main>
            <Footer data={data.globals.footer} />
        </div>
    )
}
export const dynamicParams = false
