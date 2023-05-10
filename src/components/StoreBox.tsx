"use client";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";
import Image from "next/image";

const StoreBox = () => {

    const mAnimatedCenterItem:any = useScrollFadeIn('down', 0.5); 
    const mAnimatedBottomItem:any = useScrollFadeIn('up', 0.6);
    const mAnimatedBtnItem:any = useScrollFadeIn('down', 0.5);  
    const animatedCenterItem:any = useScrollFadeIn('left', 1.5); 
    const animatedBottomItem:any = useScrollFadeIn('left', 2); 
    const animatedBtnItem:any = useScrollFadeIn('left', 2.5); 
    
    

    return (
        <div className="w-full min-h-[100vw] md:min-h-[19vw] bg-[url('/static/images/store_bg.jpg')] relative bg-cover overflow-hidden">
            <div>
                {/* 원두 이미지 */}
                <div className='absolute w-[35%] md:w-[18%] top-[33%] md:-top-[15%] left-[22%] md:left-[49%]'>
                    <Image
                        src='/static/images/store_exp_img03.png'
                        alt="store_exp_img03"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                {/* 우측 이미지 2개 */}
                <div className='absolute top-[0%] left-[25%] md:left-[28%] w-[40%] md:w-[17%]'>
                    <Image
                        src='/static/images/221212_main_story_1.png'
                        alt="main_story_1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div className='absolute w-[25%] md:w-[10%] top-[21%] md:top-[45%] left-[55%] md:left-[40%]'>
                    <Image
                        src='/static/images/221212_main_story_2.png'
                        alt="main_story_2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                {/* 가게 아이콘 */}
                <div className='absolute w-[25%] md:w-[11%] bottom-0 right-[2%] md:right-[25%]'>
                    <Image
                        src='/static/images/store_exp_img04.png'
                        alt="store_exp_img04"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                {/* 글자 이미지 상단 */}
                <div className='block md:hidden absolute w-[55%] top-[52%] right-[20%]' {...mAnimatedCenterItem}>
                    <Image
                        src='/static/images/221212_pc_main_story_txt_1.png'
                        alt="pc_main_story_txt_1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div className='hidden md:block absolute w-[16%] top-[27%] right-[29%] ' {...animatedCenterItem}>
                    <Image
                        src='/static/images/221212_pc_main_story_txt_1.png'
                        alt="pc_main_story_txt_1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                {/* 하단 문구 */}
                {/* 모바일 */}
                <div className='block md:hidden absolute w-[60%] top-[65%] right-[18%]' {...mAnimatedBottomItem}>
                    <Image
                        src='/static/images/221212_m_main_story_txt_2.png'
                        alt="pc_main_story_txt_2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div className='hidden md:block absolute w-[16%] top-[45%] right-[29%]' {...animatedBottomItem}>
                    <Image
                        src='/static/images/221212_pc_main_story_txt_2.png'
                        alt="pc_main_story_txt_2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <button type="button" className='block md:hidden absolute right-[40.5%] bottom-[5%] xxs:bottom-[8%] w-[21%] border-2 border-black py-[1.5%] rounded-[3px] text-xs xxs:text-[0.75rem] sm:text-[15px] hover:animate-blackButton hover:text-white hover:underline cursor-pointer z-20' {...mAnimatedBtnItem}>매장 찾기</button>
                <button type="button" className='hidden md:block absolute right-[40%] bottom-[17%] w-[5%] border-2 border-black py-[9px] rounded-[3px] semi-lg:text-xs xl:text-sm hover:animate-blackButton hover:text-white hover:underline cursor-pointer z-20' {...animatedBtnItem}>매장 찾기</button>
            </div>

        </div>
    )
}

export default StoreBox;