"use client"
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpringBlendBox = () => {

    const [idx, setIdx] = useState<number>(0);
    const mAnimatedItem:any = useScrollFadeIn();
    const animatedItem:any = useScrollFadeIn(); // 스크롤 커스텀 훅 불러오기
    const animatedCenterItem:any = useScrollFadeIn(); 
    const animatedLeftItem:any = useScrollFadeIn('left', 2); 

    return (
        
        <div className="min-h-[150vw] md:min-h-[23vw] relative
        bg-[url('/static/images/2023_m_spring_promotion_bg_1.jpg')]
        md:bg-[url('/static/images/2023_spring_promotion_bg.jpg')]
        bg-cover" id="spring_blend_box">
            <div className='md:hidden absolute w-[70%] top-[2%] left-[15%]' {...mAnimatedItem}>
                <Image
                    src='/static/images/2023_spring_promotion_img.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='hidden md:block absolute top-[1%] left-[30%] w-[15%]' {...animatedItem}>
                <Image
                    src='/static/images/2023_spring_promotion_img.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            {/* 글자 이미지 */}
            <div className='block md:hidden md:block absolute bottom-[22%] right-[30%] w-[40%]' {...animatedCenterItem}>
                <Image
                    src='/static/images/2023_m_spring_promotion_txt_2.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='hidden md:block absolute top-[34%] right-[32%] w-[14%]' {...animatedLeftItem}>
                <Image
                    src='/static/images/2023_spring_promotion_txt_2.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <button className='block md:hidden w-[35%] absolute bottom-[11%] right-[32%] text-[#e54360] border-[#e54360] border-2 sm:border-[3px] py-[3%] rounded-[5px] font-semibold text-[1rem] xs:text-[1.25rem] hover:animate-secondBanner hover:text-white hover:underline'>자세히 보기</button>
            <button className='hidden md:block absolute top-[60%] right-[38.5%] w-[7.5%] text-[#e54360] border-2 border-[#e54360] py-2 rounded-[5px] text-xs xl:text-sm  hover:animate-secondBanner hover:text-white hover:underline'>자세히 보기</button>
        </div >
    );
}

export default SpringBlendBox;