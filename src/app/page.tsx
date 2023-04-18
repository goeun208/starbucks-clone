import Header from '@/components/Header'
import PromotionSlider from '@/components/PromotionSlider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <PromotionSlider />
    </>
    
  )
}
