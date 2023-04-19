import Image from 'next/image'

export default function PromotionSlider() {
    return (
        <div className="z-10 min-h-[32vw] bg-red-200 relative bg-[url('/images/2023_spring2_promotion_bg_1.jpg')] bg-cover">
            <div className='absolute top-[36%] left-[15%] w-[18%]'>
                <Image
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_logo.png"
                    alt="2023_spring_top_logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <button type="button" className='absolute top-[56%] left-[20%] w-[7%] text-[#014938] border-2 border-[#014938] p-2 rounded-[5px] text-sm hover:animate-firstBanner hover:text-white hover:underline'>자세히 보기</button>
            
            <div className='absolute top-[10%] left-[50.8%] w-[16%]'>
                <Image
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink1.png"
                    alt="2023_spring_drink_lemon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='absolute top-[14%] left-[36.8%] w-[18%]'>
                <Image
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink2.png"
                    alt="2023_spring_drink_lemon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='absolute top-[14%] left-[60.8%] w-[18%]'>
                <Image
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink3.png"
                    alt="2023_spring_drink_lemon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
        </div>
            





    );
}