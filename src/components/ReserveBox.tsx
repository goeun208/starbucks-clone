"use client";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";
import Image from "next/image";

const ReserveBox = () => {

    const mobileAnimatedItem:any = useScrollFadeIn('', 2, 0);
    const animatedItem:any = useScrollFadeIn();

    return (
        <div>
            <div className="w-[100%] h-[120vh] block md:hidden bg-[url('/static/images/230125_m_reserve_bg.jpg')] bg-cover bg-top" {...mobileAnimatedItem}>
                <button className='block md:hidden absolute bottom-[10%] right-[35%] w-[30%] text-white border-[3px] border-white py-6 rounded-[5px] text-[1.5rem] hover:animate-whiteButton hover:text-black hover:underline'>자세히 보기</button>
            </div>
            {/* 웹 버전 */}
            <div className="hidden md:block z-10 min-h-[17vw] relative bg-[url('/static/images/230125_pc_reserve_bg.jpg')] bg-cover bg-top">
                <div className='absolute top-[9%] left-[34%] w-[14%]'>
                    <Image
                        src='/static/images/230125_pc_reserve_logo.png'
                        alt="reserve_costa_rica_logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <button type="button" className='absolute top-[65%] left-[36%] w-[8%] text-white border-2 border-white py-2 rounded-[5px] text-xs hover:animate-whiteButton hover:text-black hover:underline cursor-pointer z-20'>자세히 보기</button>
                
                <div className='absolute top-[3%] right-[9%] w-[80%]' {...animatedItem}>
                    <Image
                        src='/static/images/230127_reserve_coffee_bg.png'
                        alt="reserve_coffee_icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
        
    );
}

export default ReserveBox;