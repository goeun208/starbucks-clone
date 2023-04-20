import FavoriteMenuBox from '@/components/FavoriteMenuBox'
import Header from '@/components/Header'
import NoticeBar from '@/components/NoticeBar'
import PromotionSlider from '@/components/PromotionSlider'
import ReserveBox from '@/components/ReserveBox'
import RewardsBox from '@/components/RewardsBox'
import SpringBlendBox from '@/components/SpringBlendBox'

export default function Home() {
  return (
    <div>
      <Header />
      
      <main className='pt-[70px] md:pt-[7.5rem]'>
        <PromotionSlider />
        <NoticeBar />
        {/* <RewardsBox /> */}
        <SpringBlendBox />
        <ReserveBox />
        {/* <FavoriteMenuBox /> */}
      </main>
    </div>
    
  )
}
