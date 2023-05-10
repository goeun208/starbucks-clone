import RecoilR from '@/app/RecoilR'
import Header from '@/components/Header'
import './globals.css'
import ContentsContainer from '@/components/ContentsContainer'

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
        <RecoilR>
          <Header />
          <ContentsContainer>
            {children}
          </ContentsContainer>
        </RecoilR>  
      </body>
    </html>
  )
}
