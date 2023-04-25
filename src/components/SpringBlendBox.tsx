"use client"
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpringBlendBox = () => {

    const [idx, setIdx] = useState<number>(0);
    const animatedItem:any = useScrollFadeIn(); // 스크롤 커스텀 훅 불러오기
    const animatedLeftItem:any = useScrollFadeIn('left', 2); 

    // useEffect(() => { // 글씨 애니메이션
    //     if(idx < 2) {
    //         setTimeout(() => {
    //             setIdx(idx + 1);
    //         }, 500);
    //         const blendWrap = document.querySelector('#spring_blend_box')!!.children[idx] as HTMLDivElement;
    //         idx === 1 && ( blendWrap.style.opacity = "1", blendWrap.style.right = "32%", blendWrap.style.transition = "right 2s ease-out");
    //     }
    // }, [idx])

    return (
        <div className="min-h-[23vw] relative bg-[url('/static/images/2023_spring_promotion_bg.jpg')] bg-cover" id="spring_blend_box">
            {/* 스크롤 애니메이션 사용을 위해 {...animatedItem} */}
            <div className='absolute top-[1%] left-[30%] w-[15%]' {...animatedItem}>
                <Image
                    src='/static/images/2023_spring_promotion_img.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='absolute top-[34%] right-[32%] w-[14%]' {...animatedLeftItem}>
                <Image
                    src='/static/images/2023_spring_promotion_txt_2.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <button className='absolute top-[60%] right-[38%] w-[8%] text-[#e54360] border-2 border-[#e54360] py-2 rounded-[5px] text-xs lg:text-sm  hover:animate-secondBanner hover:text-white hover:underline'>자세히 보기</button>
        </div >
    );
}

export default SpringBlendBox;