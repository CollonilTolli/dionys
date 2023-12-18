import CookieAlert from "@/components/CookieAlert/CookieAlert"
import "./globals.scss"
import ErrorBalance from "@/components/ErrorBalance/ErrorBalance"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body>
                <ErrorBalance />
                {/* {children} */}
                {/* <CookieAlert /> */}
            </body>
        </html>
    )
}
