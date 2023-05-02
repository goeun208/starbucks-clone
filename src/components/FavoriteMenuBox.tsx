"use client";
import Image from "next/image";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";

const FavoriteMenuBox = () => {

    const titleAnimationItem:any = useScrollFadeIn('right', 2);
    const descAnimationItem:any = useScrollFadeIn('right', 2, 0.2);
    const btnAnimationItem:any = useScrollFadeIn('', 2, 0.5);

    return (
        <div className="w-full min-h-[50rem] flex justify-center bg-[url('/static/images/2023_spring2_pick_bg.jpg')] bg-cover bg-top bg-fixed">
             <div className="w-[84rem] min-h-[50rem] relative">
                <div className='hidden md:block w-[22rem] relative'>
                    {/* PICK YOUR FAVORITE */}
                    <div className='hidden md:block absolute top-[150px] w-[75%] right-0' {...titleAnimationItem}>
                        <Image
                            src='/static/images/fav_prod_txt01.png'
                            alt="pick_favorite_img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* MENU_DESCRIPTION */}
                    <div className='hidden md:block absolute top-[400px] w-[100%]' {...descAnimationItem}>
                        <Image
                            src='/static/images/2023_pick_text2_img.png'
                            alt="menu_description"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                    <div {...btnAnimationItem}>
                        <button type="button" className='absolute top-[595px] w-[6rem] right-0 text-white border border-white py-2 rounded-[5px] text-xs hover:animate-whiteButton hover:text-black hover:underline cursor-pointer z-20'>자세히 보기</button>
                    </div>
                    
                </div>
                 <div className='hidden md:block w-[70%] absolute top-[15%] right-0'>
                    <Image
                        src='/static/images/2023_spring2_pick_img.png'
                        alt="2023_spring_menu_img"
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

export default FavoriteMenuBox;