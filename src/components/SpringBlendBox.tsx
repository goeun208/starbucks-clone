"use client"
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpringBlendBox = () => {

    const [idx, setIdx] = useState<number>(0);
    const animatedItem:any = useScrollFadeIn(); // 스크롤 커스텀 훅 불러오기
    const animatedCenterItem:any = useScrollFadeIn(); 
    const animatedLeftItem:any = useScrollFadeIn('left', 2); 

    return (
        
        <div className="min-h-[88vh] md:min-h-[23vw] relative
        bg-[url('/static/images/2023_m_spring_promotion_bg_1.jpg')]
        md:bg-[url('/static/images/2023_spring_promotion_bg.jpg')]
        bg-cover" id="spring_blend_box">
            <div className='absolute w-[450px] top-[2%] left-[15%] sm:left-[25%] md:top-[1%] md:left-[30%] md:w-[15%]' {...animatedItem}>
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
            <div className='block md:hidden md:block absolute bottom-[25%] sm:bottom-[22%] right-[30%] w-[40%]' {...animatedCenterItem}>
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
            <button className='block md:hidden absolute bottom-[12%] right-[38%] w-[25%] text-[#e54360] border-[3px] border-[#e54360] py-6 rounded-[3px] font-semibold text-[1.5rem] hover:animate-secondBanner hover:text-white hover:underline'>자세히 보기</button>
            <button className='hidden md:block absolute top-[60%] right-[38%] w-[8%] text-[#e54360] border-2 border-[#e54360] py-2 rounded-[5px] text-xs lg:text-sm  hover:animate-secondBanner hover:text-white hover:underline'>자세히 보기</button>
        </div >
    );
}

export default SpringBlendBox;