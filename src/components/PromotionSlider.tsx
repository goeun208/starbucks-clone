import Image from 'next/image'

export default function PromotionSlider() {
    return (
        // <div className='w-full min-h-[505px] relative'>
        //     {/* <Image
        //         src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_promotion_bg_1.jpg"
        //         alt='프로모션 배너'
        //         fill
        //         className='relative !important'
        //     /> */}
        //     <Image
        //         src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_logo.png"
        //         alt="love us"
        //         width={383}
        //         height={89}
        //         className='absolute top-[300px] left-[30rem] fixed'
        //     />
        //     <button className='absolute top-[450px] left-[40rem] fixed text-[#014938] border-2 border-[#014938] p-4 rounded-[5px]'>자세히 보기</button>
        //     <div className="min-h-[32vw] bg-red-200 relative bg-[url('/images/2023_spring2_promotion_bg_1.jpg')] bg-cover"></div>
        //     {/* <div className="w-[20rem] min-h-[70%] absolute top-0 bg-[url('/images/2023_spring2_top_drink1.png')] bg-contain"></div> */}
        //     <div>

        //     </div>
        //     {/* <Image
        //         src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink1.png"
        //         alt="슈크림 라떼"
        //         width={318}
        //         height={510}
        //         className='absolute top-[200px] right-[50rem]  fixed'
        //     /> */}
        //     <Image
        //         src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink2.png"
        //         alt="핑크 플라워 티"
        //         width={365}
        //         height={421}
        //         className='absolute top-[170px] right-[65rem]'
        //     />
        //     <Image
        //         src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink3.png"
        //         alt="바질 레몬 셔벗 블렌디드"
        //         width={369}
        //         height={410}
        //         className='absolute top-[170px] right-[34rem]'
        //     />
        // </div>
        
        <div className="min-h-[32vw] bg-red-200 relative bg-[url('/images/2023_spring2_promotion_bg_1.jpg')] bg-cover">
            <div className='absolute top-[36%] left-[13.3%] w-[20%]'>
                <Image
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_logo.png"
                    alt="2023_spring_top_logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <button className='absolute top-[55%] left-[19.5%] min-w-[10%] text-[#014938] border-2 border-[#014938] p-4 rounded-[5px]'>자세히 보기</button>
            
            <div className='absolute top-[10%] left-[50.8%] w-[16%]'>
                <Image
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink1.png"
                    alt="2023_spring_drink_lemon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='absolute top-[14%] left-[36.8%] w-[18%]'>
                <Image
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_top_drink2.png"
                    alt="2023_spring_drink_lemon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='absolute top-[14%] left-[60.8%] w-[18%]'>
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
            





    );
}