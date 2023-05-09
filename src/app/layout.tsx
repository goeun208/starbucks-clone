import RecoilR from '@/app/Recoil'
import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Starbucks Korea',
  description: 'Starbucks clone coding App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <RecoilR> */}
          <Header />
          {children}
        {/* </RecoilR> */}
      </body>
    </html>
  )
}
