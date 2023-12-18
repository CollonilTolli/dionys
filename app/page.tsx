import Image from "next/image"
import Header from "@/components/Header/Header"
import data from "../public/data/data.json"
import type { Metadata } from "next"
import OpenedComponent from "@/components/OpenedComponent/OpenedComponent"
import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"
import Category from "@/components/Category/Category"
import BannerAbout from "@/components/BannerAbout/BannerAbout"
import Reviews from "../components/Reviews/Reviews"
import Steps from "@/components/Steps/Steps"
import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider"
import Form from "@/components/Form/Form"
import FAQ from "@/components/FAQ/FAQ"
import Contacts from "@/components/Contacts/Contacts"

export const metadata: Metadata = {
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
        title: data.seo.openGraph.title,
        images: data.seo.openGraph.images,
        description: data.seo.openGraph.description,
    },
}

export default function Home() {
    return (
        <>
            <Header data={data.globals.header} />
            <main>
                {data.content.openedComponent && (
                    <OpenedComponent data={data.content.openedComponent} />
                )}
                {data.content.About && <About data={data.content.About} />}
                {data.content.Category && (
                    <Category data={data.content.Category} />
                )}
                {data.content.BannerAbout && (
                    <BannerAbout data={data.content.BannerAbout} />
                )}
                {data.content.Reviews && (
                    <Reviews data={data.content.Reviews} />
                )}
                {data.content.Steps && <Steps data={data.content.Steps} />}
                {data.content.portfolioSlider && (
                    <PortfolioSlider data={data.content.portfolioSlider} />
                )}
                {data.content.Form && <Form data={data.content.Form} />}
                {data.content.FAQ && <FAQ data={data.content.FAQ} />}
                {data.content.Contacts && (
                    <Contacts data={data.content.Contacts} />
                )}
            </main>
            <Footer data={data.globals.footer} />
        </>
    )
}
