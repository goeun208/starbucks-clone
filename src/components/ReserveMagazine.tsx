"use client";
import Image from "next/image";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";

const ReserveMagazine = () => {

    const animationItem: any = useScrollFadeIn('',2);
    return (
        <div className="w-full h-[33vh] flex justify-center items-end">
            <div className="w-[85%] h-[27vh] bg-[url('/static/images/reserve_bg_pc.png')] flex justify-center bg-cover relative">
                {/* 사진 */}
                <div className="w-[70%] relative flex justify-center -mt-[52px]">
                    {/* 로고 */}
                    <div className='mt-[9%] ml-[100px] w-[588px] z-20'>
                        <Image
                            src='/static/images/reserve_text_pc.png'
                            alt="reserve_costa_rica_logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className='w-[348px] z-10 absolute right-0' {...animationItem}>
                        <Image
                            src='/static/images/reserve_visual_pc.png'
                            alt="reserve_costa_rica_logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                
                <button type="button" className='absolute left-[38%] bottom-[30%] w-[8rem] text-black border-2 border-black py-[9px] rounded-[5px] text-[15px] hover:animate-blackButton hover:text-white hover:underline cursor-pointer z-20'>자세히 보기</button>
            </div> 
        </div>
    );
}

export default ReserveMagazine;