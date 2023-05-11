"use client";
import Image from "next/image";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";

const FavoriteMenuBox = () => {

    const mtitleAnimationItem: any = useScrollFadeIn('', 2);
    const mdescAnimationItem: any = useScrollFadeIn('', 2, 0.1);
    const mbtnAnimationItem: any = useScrollFadeIn('', 2, 0.3);

    const titleAnimationItem: any = useScrollFadeIn('right', 2);
    const descAnimationItem: any = useScrollFadeIn('right', 2, 0.2);
    const btnAnimationItem: any = useScrollFadeIn('', 2, 0.5);

    return (
        <div>
            {/* mobile */}
            <div className="relative md:hidden h-[200vw] bg-[url('/static/images/2023_m_spring2_pick_bg.jpg')] bg-cover">
                <div className='w-[80%] mx-auto pt-[30%]'>
                    <Image
                        src='/static/images/2023_spring2_pick_img.png'
                        alt="2023_spring_menu_img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <div className='w-[50%] mx-auto pt-[68%]' {...mtitleAnimationItem}>
                        <Image
                            src='/static/images/mobile_menu_txt01.png'
                            alt="2023_spring_menu_img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className='w-[50%] mx-auto pt-[3%]' {...mdescAnimationItem}>
                        <Image
                            src='/static/images/mobile_menu_txt02.png'
                            alt="2023_spring_menu_img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className='mx-auto flex justify-center pt-[3%]' {...mbtnAnimationItem}>
                        <button className='w-[25%] sm:w-[15%] text-white border-2 border-white py-[1%] rounded-[5px] text-[6px] xxs:text-sm hover:animate-whiteButton hover:text-black hover:underline'>자세히 보기</button>
                    </div>
                    
                </div>
            </div>
            {/* web */}
            <div className="hidden md:block w-full min-h-[17vw] flex justify-center bg-[url('/static/images/2023_spring2_pick_bg.jpg')] bg-cover bg-top bg-fixed overflow-hidden">
                <div className="w-[70%] min-h-[50rem] relative mx-auto">
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
                            <button type="button" className='absolute top-[595px] w-[7.8rem] right-0 text-white border border-white py-2 rounded-[5px] text-sm hover:animate-whiteButton hover:text-black hover:underline cursor-pointer z-20'>자세히 보기</button>
                        </div>

                    </div>
                    <div className='hidden md:block w-[50%] semi-lg:w-[55%] absolute top-[30%] semi-lg:top-[12%] right-0'>
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
        </div>

    );
}

export default FavoriteMenuBox;