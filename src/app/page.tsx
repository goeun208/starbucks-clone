import FavoriteMenuBox from '@/components/FavoriteMenuBox'
import MainBanner from '@/components/MainBanner'
import NoticeBar from '@/components/NoticeBar'
import ReserveBox from '@/components/ReserveBox'
import ReserveMagazine from '@/components/ReserveMagazine'
import RewardsBox from '@/components/RewardsBox'
import SpringBlendBox from '@/components/SpringBlendBox'
import StoreBox from '@/components/StoreBox'

export default function Home() {
  return (
    <div>      
      <main className='pt-[70px] md:pt-[7.5rem]'>
        <MainBanner />
        <NoticeBar />
        <RewardsBox />
        <SpringBlendBox />
        <ReserveBox />
        <FavoriteMenuBox />
        <ReserveMagazine />
        <StoreBox />
      </main>
    </div>
    
  )
}
