import Header from '@/components/Header'
import NoticeBar from '@/components/NoticeBar'
import PromotionSlider from '@/components/PromotionSlider'
import RewardsBox from '@/components/RewardsBox'
import SpringBlendBox from '@/components/SpringBlendBox'
import { Nanum_Gothic } from 'next/font/google'

const nanum_gothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <div className={nanum_gothic.className}>
      <Header />
      <main className='pt-[7.5rem]'>
        <PromotionSlider />
        <NoticeBar />
        <RewardsBox />
        <SpringBlendBox />
      </main>
    </div>
    
  )
}
