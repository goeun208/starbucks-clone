"use client";
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

interface SlideProps {
    img: string;
    imgUrl: string; // 자세히 보기 링크 주소
}

interface IUseInterval {
    (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
    const savedCallback = useRef<(() => void) | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    })

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }

        if (interval !== 10000) {
            let id = setInterval(tick, interval);
            return () => clearInterval(id);
        }
    }, [interval]);
}

export const slideArr: SlideProps[] = [
    {
        img: "/static/images/starbucks_promotion_1.jpg",
        imgUrl: "https://www.starbucks.co.kr/whats_new/newsView.do?seq=4910"
    },
    {
        img: "/static/images/starbucks_promotion_2.jpg",
        imgUrl: "https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2147"
    },
    {
        img: "/static/images/starbucks_promotion_3.jpg",
        imgUrl: "https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2120"
    },
];

const PromotionSlider = ({ isOpen }: any) => {

    const [slideIndex, setSlideIndex] = useState(1);
    const [custominterval, setCustomInterval] = useState(2000);
    const [promId, setPromChecked] = useState(0);
    const outRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);

    const SLIDE_NUM = slideArr.length;
    const beforeSlide = slideArr[SLIDE_NUM - 1];
    const afterSlide = slideArr[0];

    let copiedArr = [beforeSlide, ...slideArr, afterSlide];
    const COPIED_NUM = copiedArr.length;


    const handleSlideIdx = (slideidx: number) => {
        setSlideIndex((currentSlide) => (currentSlide + slideidx))

    }

    useInterval(
        () => setSlideIndex((slideIndex) => slideIndex + 1),
        custominterval
    );

    useEffect(() => {
        const promotion = document.querySelector("#promotion_container") as HTMLElement;
        console.log(promotion)
        isOpen ? (promotion.style.height = "650px",
            promotion.style.transition = "all 0.6s ease-out")
            : (promotion.style.height = "0px",
                promotion.style.transition = "all 0.6s ease-out");
    }, [isOpen])

    useEffect(() => {
        if (slideIndex === 5) {
            if (slideRef.current) {
                slideRef.current.style.transition = "";
            }

            setSlideIndex(1);

            setTimeout(() => {
                if (slideRef.current) {
                    slideRef.current.style.transition = "all 0.5s ease-in-out"
                }
            }, 0);
        }
    }, [slideIndex]);

    return (
        <div className="overflow-hidden relative bg-[#f6f5ef]" id="promotion_container" style={{ height: 0 }}>
            {/* 가운데 위치 */}
            <div className='w-[950px] mx-auto z-10 relative'>
                <div className='relative h-[650px] flex justify-between items-center mx-auto'>
                    {/* 이전 버튼 */}
                    <button type="button"
                        className='active:bg-white z-10 w-[51px] h-[51px] rounded-[27.5px] border-2 border-[#222] flex justify-center items-center ' onClick={() => handleSlideIdx(-1)}>
                        <Image
                            src="/static/images/arrow_left_on.png"
                            alt="이전"
                            width={15}
                            height={26}
                        />
                    </button>
                    {/* 다음 버튼 */}
                    <button type="button"
                        className='active:bg-white z-10 w-[51px] h-[51px] rounded-[27.5px] border-2 border-[#222] flex justify-center items-center ' onClick={() => handleSlideIdx(1)}>
                        <Image
                            src="/static/images/arrow_right_on.png"
                            alt="다음"
                            width={15}
                            height={26}
                        />
                    </button>
                </div>    
                {/* 밑 버튼 박스 */}
                <div className='w-[100%] mt-4 mb-7 flex justify-center justify-center absolute bottom-0'>
                    <button type="button"
                        className='z-10 flex justify-center items-center mr-3'>
                        <Image
                            src="/static/images/main_prom_stop.png"
                            alt="to first index"
                            width={9}
                            height={12}
                        />
                    </button>
                    <button type="button"
                        className='z-10 flex justify-center items-center mr-2' onClick={() => setSlideIndex(1)}>
                        <Image
                            src={slideIndex === 1 || slideIndex === 4 ? "/static/images/main_prom_on.png" : "/static/images/main_prom_off.png"}
                            alt="to second index"
                            width={13}
                            height={14}
                        />
                    </button>
                    <button type="button"
                        className='z-10 flex justify-center items-center mr-2' onClick={() => setSlideIndex(2)}>
                        <Image
                            src={slideIndex === 2 ? "/static/images/main_prom_on.png" : "/static/images/main_prom_off.png"}
                            alt="다음"
                            width={13}
                            height={14}
                        />
                    </button>
                    <button type="button"
                        className='z-10 flex justify-center items-center mr-2' onClick={() => setSlideIndex(3)}>
                        <Image
                            src={slideIndex === 3 || slideIndex === 0 ? "/static/images/main_prom_on.png" : "/static/images/main_prom_off.png"}
                            alt="다음"
                            width={13}
                            height={14}
                        />
                    </button>
                </div>
            </div>

            {/* 스와이퍼 */}
            <div
                className="flex mt-10 absolute top-0 left-[34%]"
                ref={slideRef}
                style={{
                    width: `${819 * COPIED_NUM}px`,
                    transition: "all 0.5s ease-in-out",
                    transform: `translateX(${-1 * ((100 / COPIED_NUM) * slideIndex)
                        }%)`,
                }}
            >
                {copiedArr.map((item, index) => (
                    <div key={index} className="w-[819px]  mx-2 relative" style={{ opacity: slideIndex === index ? 1 : 0.5 }}>
                        <Image
                            src={item.img}
                            alt="로고"
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='w-full h-auto'
                        />
                        <button type="button" className='w-[121px] absolute bottom-3 left-[42.5%] text-black border-2 border-black py-2 rounded-[3px] text-sm hover:animate-whiteButton hover:text-black hover:underline cursor-pointer z-20' >자세히 보기</button>
                    </div>
                ))}
            </div>




        </div>
    );
}

export default PromotionSlider;