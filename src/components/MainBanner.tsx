"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const MainBanner = () => {
    const [bannerIdx, setBannerIdx] = useState<number>(2);

    useEffect(() => {
        if(bannerIdx < 5) {
            setTimeout(() => {
                setBannerIdx(bannerIdx + 1);
            }, 500);
            const menuWrap = document.querySelector('#w_spring_menu_wrap')!!.children[bannerIdx] as HTMLDivElement;
            const mobileMenuWrap = document.querySelector('#m_spring_menu_wrap')!!.children[bannerIdx - 1] as HTMLDivElement;
            menuWrap.style.transition = "opacity 0.8s ease-out"; //web version
            menuWrap.style.opacity = "1";
            mobileMenuWrap.style.transition = "opacity 0.8s ease"; //mobile version
            mobileMenuWrap.style.opacity = "1";
        }
    }, [bannerIdx])

    return (
        <>
            {/* 모바일 버전 */}
            <div className="block md:hidden box-border z-10 w-full h-[262vw] relative bg-[url('/images/2023_m_spring2_promotion_bg.jpg')] bg-cover" id="m_spring_menu_wrap">
                <div className='absolute top-[6.5%] left-[14%] w-[43%]'>
                        <Image
                            src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_logo.png"
                            alt="2023_spring_top_logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                </div>
                <div style={{opacity: 0}} className='absolute top-[16%] left-[12%] w-[75%]'>
                    <Image
                        src="/images/2023_m_spring2_top_drink1.png"
                        alt="2023_spring_drink_chouxcream"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div style={{opacity: 0}} className='absolute top-[40%] right-0 w-[83%]'>
                    <Image
                        src="/images/2023_m_spring2_top_drink2.png"
                        alt="2023_spring_drink_chouxcream"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div style={{opacity: 0}} className='absolute top-[61%] left-[12%] w-[73%]'>
                    <Image
                        src="/images/2023_m_spring2_top_drink3.png"
                        alt="2023_spring_drink_chouxcream"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <button type="button" className='absolute bottom-[7%] left-[32%] pb-1 w-[36%] h-[4%] text-[#014938] font-semibold text-[1.3rem] border-2 border-[#014938] rounded-[5px] hover:animate-firstBanner hover:text-white hover:underline'>자세히 보기</button>
            </div>
            {/* 웹 버전 */}
            <div className="hidden md:block z-10 min-h-[31vw] relative bg-[url('/images/2023_spring2_promotion_bg_1.jpg')] bg-cover bg-top" id="w_spring_menu_wrap">
                <div className='absolute top-[36%] left-[15%] w-[17%]'>
                    <Image
                        src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_logo.png"
                        alt="2023_spring_top_logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <button type="button" className='absolute top-[56%] left-[21.5%] w-[7%] text-[#014938] border-2 border-[#014938] p-2 rounded-[5px] text-sm hover:animate-firstBanner hover:text-white hover:underline'>자세히 보기</button>

                <div style={{opacity: 0}} className='absolute top-[10%] left-[49.8%] w-[16%]'
                >
                    <Image
                        src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink1.png"
                        alt="2023_spring_drink_lemon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div style={{opacity: 0}} className='absolute top-[14%] left-[35.8%] w-[18%]'>
                    <Image
                        src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink2.png"
                        alt="2023_spring_drink_lemon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div style={{opacity: 0}} className='absolute top-[14%] left-[59.8%] w-[18%]'>
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
        </>
    );
}

export default MainBanner;