"use client";
import Image from "next/image";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";

const ReserveMagazine = () => {

    const animationItem: any = useScrollFadeIn('', 2);
    const mobileAnimatedItem:any = useScrollFadeIn('', 2, 0);
    return (
        <div>
            <div className="block rm-md:hidden min-h-[183vw] relative" {...mobileAnimatedItem}>
                <div className='w-[100%] '>
                    <Image
                        src='/static/images/reserve_visual_m.jpg'
                        alt="reserve_costa_rica_logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <button type="button" className='absolute left-[30%] bottom-[8%] z-10 w-[25%] sm:w-[15%] border-2 border-black py-[9px] sm:py-[9px] rounded-[5px] text-xs sm:text-[15px] hover:animate-blackButton hover:text-white hover:underline cursor-pointer z-20'>자세히 보기</button>
            </div>
            {/* web */}
            <div className="hidden rm-md:block z-10 min-h-[17vw] relative overflow-hidden">
                <div className='w-[25%] absolute top-[30%] left-[36%] z-20'>
                    <Image
                        src='/static/images/reserve_text_pc.png'
                        alt="reserve_costa_rica_logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div className='w-[15%] absolute right-[25%] z-10' {...animationItem}>
                    <Image
                        src='/static/images/reserve_visual_pc.png'
                        alt="reserve_costa_rica_logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div className='w-[90%] absolute bottom-0 left-[5%]'>
                    <Image
                        src='/static/images/reserve_bg_pc.png'
                        alt="reserve_costa_rica_logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
            <button className='absolute top-[62%] left-[41.5%] w-[6%] xl:w-[7%] border-2 border-black py-2 rounded-[5px] text-xs xl:text-sm  hover:animate-blackButton hover:text-white hover:underline'>자세히 보기</button>
            </div>
        </div>
    );
}

export default ReserveMagazine;