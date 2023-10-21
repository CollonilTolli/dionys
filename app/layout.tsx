import CookieAlert from '@/components/CookieAlert/CookieAlert'
import './globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <CookieAlert />
      </body>
    </html>
  )
}
