"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NoticeBar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const slideRef = useRef<HTMLDivElement>(null);
    const currentNotice = document.getElementById('notice');
    const [idx, setIndex] = useState<number>(0);
    const handleBtn = () => {
        setIsOpen(!isOpen)
    }
    const cardNum = 3;
    const cardList = ['공지사항', '공지사항2222', '공지사항333'];
    let slideWidth = currentNotice?.clientWidth;
    let slideItems = document.querySelectorAll("#noticeCard");
    // 무한 슬라이드를 위해 start, end 슬라이드 복사하기


    // 고치기 => 함수형 컴포넌트 안에 넣으면 무한 생성됨....
    const loopInterval = setInterval(() => {
        idx < cardList.length - 1 ? setIndex(idx + 1) : setIndex(0)
    }, 3000);

        // 슬라이드에 마우스가 올라간 경우 루프 멈추기
    currentNotice?.addEventListener("mouseover", () => {
        console.log('해제!!')
        clearInterval(loopInterval);
    });
    
    // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
    currentNotice?.addEventListener("mouseout", () => {
        setInterval(() => {
            idx < cardList.length - 1 ? setIndex(idx + 1) : setIndex(0)
        }, 1000);
    });

    return (
        <div className="w-full relative">
            <div className="w-full relative flex">
                <div className="z-10 w-[53.5%] h-[62px] bg-black flex justify-end pr-4">
                    <div className="w-[52%] h-full text-white flex items-center relative">
                        <span className="font-semibold" onClick={() => console.log(slideWidth, slideItems)}>공지사항</span>
                        <div className="w-[400px] h-[1.8vh] overflow-hidden text-[15px] ml-3 mt-1 cursor-pointer " id="notice">
                            <div
                                className="flex-col" 
                                ref={slideRef}
                                style={{
                                    height: `${1.8* cardNum}vh`,
                                    transition: "all 500ms linear",
                                    transform: `translateY(${-1 * ((100 / cardList.length) * idx)
                                        }%)`,
                                }}
                                onClick={() => console.log(idx)}
                            >
                                
                                {cardList.map((item, index) => (
                                    // 3번 div
                                    <div key={index} className="relative py-1">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute right-2 cursor-pointer">
                            <div className="w-9 h-9 relative">
                                <Image
                                    src="/images/btn_notice_plus.png"
                                    alt="notice_btn"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="z-0 w-[50%] h-[62px] bg-white">
                    <div className="w-[40%] h-full flex justify-end items-center">
                        <span className="font-semibold">스타벅스 프로모션</span>
                        <div className="w-9 h-9 relative ml-14 cursor-pointer" onClick={handleBtn}>
                            <Image
                                src="/images/btn_prom_down.png"
                                alt="notice_btn"
                                fill
                            />
                        </div>
                    </div>
                </div>

            </div>
            {
                isOpen && (
                    <div className="py-[40px]">
                        <div className="w-[100vw] flex gap-5 animate-dropdown overflow-hidden" ref={slideRef}>
                            <div className="w-[70rem]" >
                                <Image
                                    src="/images/starbucks_promotion_1.jpg"
                                    alt="starbucks_promotion_star"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="w-[70rem]">
                                <Image
                                    src="/images/starbucks_promotion_2.jpg"
                                    alt="starbucks_promotion_reserve"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="w-[70rem]">
                                <Image
                                    src="/images/starbucks_promotion_3.jpg"
                                    alt="starbucks_promotion_spring_menu"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                    </div>

                )
            }

        </div>

    );
}

export default NoticeBar;