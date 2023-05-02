import Image from "next/image";

const StoreBox = () => {
    return (
        <div className="w-full min-h-[80vw] md:min-h-[19vw] bg-[url('/static/images/store_bg.jpg')] relative bg-cover overflow-hidden">
            <div className="">
                {/* 원두 이미지 */}
                <div className='absolute w-[30%] md:w-[18%] top-[33%] md:-top-[15%] left-[25%] md:left-[49%]'>
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
                {/* <div className='absolute w-[366px] top-0 sm:left-[15%] md:left-[20%]'> */}
                <div className='absolute top-[0%] left-[25%] md:left-[30%] w-[34%] md:w-[19%]'>
                    <Image
                        src='/static/images/221212_main_story_1.png'
                        alt="main_story_1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div className='absolute w-[22%] md:w-[10%] top-[21%] md:top-[45%] left-[51%] md:left-[42%]'>
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
                <div className='absolute w-[20%] md:w-[11%] bottom-0 sm:right-[15%] md:right-[25%]'>
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
                <div className='absolute w-[45%] md:w-[18%] top-[52%] md:top-[27%] right-[27%] md:right-[35%] md:right-[28.5%]'>
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
                <div className='block md:hidden absolute w-[45%] top-[65%] right-[25%]'>
                    <Image
                        src='/static/images/221212_m_main_story_txt_2.png'
                        alt="pc_main_story_txt_2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <div className='hidden md:block absolute w-[18%] top-[45%] right-[29%]'>
                    <Image
                        src='/static/images/221212_pc_main_story_txt_2.png'
                        alt="pc_main_story_txt_2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
                <button type="button" className='absolute right-[40.5%] bottom-[10%] md:bottom-[18%] w-[15%] md:w-[6%] text-black border-2 border-black py-[9px] rounded-[3px] text-[15px] hover:animate-blackButton hover:text-white hover:underline cursor-pointer z-20'>매장 찾기</button>
            </div>

        </div>
    )
}

export default StoreBox;