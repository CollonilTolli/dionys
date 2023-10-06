import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

import data from "@/public/data/data.json"

export default function Custom404() {
    return (
        <>
            <Header data={data.globals.header} />
            <main className="container">
                <div className="Error">
                    <div className="Error_content">
                        <div className="Error_title">
                            <h1>Ошибка</h1>
                            <h2>{data.globals.error.title}</h2>
                        </div>
                        <div className="Error_links">
                            <ul>
                                {data.globals.error.links.map((element) => (
                                    <li key={element.href}>
                                        <a href={element.href}>
                                            {element.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="Error_StatusCode">{data.globals.error.statusCode}</div>
                </div>
            </main>
            <Footer data={data.globals.footer} />
        </>
    )
}
