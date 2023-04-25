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

const useInterval : IUseInterval = (callback, interval) => {
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

const PromotionSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1);
    const [custominterval, setCustomInterval] = useState(3000);

    const outRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);

    const SLIDE_NUM = slideArr.length;
    const beforeSlide = slideArr[SLIDE_NUM - 1];
    const afterSlide = slideArr[0];

    let copiedArr = [beforeSlide, ...slideArr, afterSlide];
    const COPIED_NUM = copiedArr.length;

    useInterval(
        () => setSlideIndex((slideIndex) => slideIndex + 1),
        custominterval
      );

    if(slideIndex === 5) {
        if(slideRef.current) {
            slideRef.current.style.transition = "";
        }

        setSlideIndex(1);

        setTimeout(() => {
            if(slideRef.current) {
                slideRef.current.style.transition = "all 0.5s ease-in-out"
            }
        }, 0);
    }

    useEffect(() => {
        // 만약 인덱스가 4라면 interval을 500으로 설정한다.
        if (slideIndex === 4) {
          setCustomInterval (300);
        } else {
          // 평소에는 interval을 3000으로 유지한다.
          setCustomInterval(3000);
        }
      }, [slideIndex]);

    return (
        <div className="overflow-hidden ">
            {/* 가운데 위치 */}
            <div>
                {/* 사진 위치 */}
                <div
                    className="flex my-10"
                    ref={slideRef}
                    style={{
                        width: `${100 * COPIED_NUM}vw`,
                        transition: "all 0.5s ease-in-out",
                        transform: `translateX(${
                            -1 * ((20 / COPIED_NUM) * slideIndex)
                        }%)`,
                    }}
                >
                    {copiedArr.map((item, index) => (
                        <div key={index} className="relative w-[819px] h-[523px] mx-5">
                            <Image
                                src={item.img}
                                alt="로고"
                                fill
                                className='w-full h-auto'
                            />
                        </div>
                    ))}
                </div>

                {/* 밑 버튼 박스 */}
                <div>

                </div>
            </div>

        </div>
    );
}

export default PromotionSlider;