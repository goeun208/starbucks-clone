"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clearInterval, setInterval } from "timers";
import PromotionSlider from "./PromotionSlider";

const NoticeBar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const interval = useRef<any>(null); //공지사항 슬라이드를 위한 ref
    const [currentNoticeIdx, setCurrentNoticeIdx] = useState<number>(0);
    const handleBtn = () => {
        setIsOpen(!isOpen)
    }
    const noticeList = [
        {
            label: '시스템 개선 및 서비스 점검 안내',
        },
        {
            label: '위치정보 이용약관 개정안내',
        },
        {
            label: '금융상품 판매대리·중개업무 위탁 확인증서 게시',
        }];

    useEffect(() => {
        const li = document.querySelector('#notice_wrap')!!.children[currentNoticeIdx] as HTMLElement;
        li.style.transition = "top 0.3s";
        li.style.top = "0px";
    }, [currentNoticeIdx]);

    const textRotateAnimation = () => {
        Array.from(document.querySelector('#notice_wrap')!!.children).forEach((li: any, liIdx) => {
            if (liIdx !== currentNoticeIdx) {
                li.style.top = "20px";
            } else {
                li.style.transition = "none";
            }
        });
        setCurrentNoticeIdx((currentNoticeIdx + 1) % noticeList.length);
    }

    useEffect(() => {
        clearInterval(interval.current);
        interval.current = setInterval(textRotateAnimation, 2000);
        return () => {
            clearInterval(interval.current);
        }
    }, [currentNoticeIdx]);

    return (
        <div className="w-full">
            {/* 공지사항 */}
            <div className="w-full relative sm:flex">
                <div className="z-10 xs:pl-4 sm:w-[50%] lg:w-[52%] h-[110px] sm:h-[80px] bg-[#111] flex sm:justify-center relative">
                    <div className="text-white flex justify-start items-center">
                        <span className="block sm:hidden w-9 h-9 relative mx-2">
                            <Image
                                src="/static/images/icon_board_speaker.png"
                                alt="notice_btn"
                                fill
                            />
                        </span>
                        <span className="hidden sm:block w-[10vw] text-center ml-2 font-semibold inline-block">공지사항</span>
                        <ul className="w-[150px] xxs:w-[250px] xs:w-[350px] sm:w-[240px] md:w-[250px] semi-lg:w-[350px] h-[26px] sm:h-[20px] overflow-hidden text-sm mr-12 cursor-pointer relative" id="notice_wrap">
                            {
                                noticeList.map((notice, noticeIdx) => {
                                    const { label } = notice;
                                    return (
                                        <li
                                            key={label}
                                            className="w-[100%] w-[350px] text-lg sm:text-sm sm:w-[200px] md:w-[250px] semi-lg:w-[350px] h-[26px] sm:h-[20px] text-white absolute hover:underline bg-[#111]"
                                            style={{
                                                zIndex: noticeIdx === currentNoticeIdx ? 10 : 1,
                                            }}
                                            onMouseOver={() => {
                                                clearInterval(interval.current);
                                            }}
                                            onMouseLeave={() => {
                                                interval.current = setInterval(textRotateAnimation, 2000)
                                            }}>
                                            {label}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="absolute top-[35%] sm:top-6 right-3 cursor-pointer">
                        <div className="w-9 h-9 relative mr-5 sm:mr-0">
                            <Image
                                src="/static/images/btn_notice_plus.png"
                                alt="notice_btn"
                                fill
                            />
                        </div>
                    </div>
                </div>

                <div className="z-0 sm:w-[50%] h-[110px] sm:h-[80px] bg-[#f6f5ef] flex justify-center">
                    <div className="w-[100%] md:w-[80%] lg:w-[70%] h-full flex justify-center items-center">
                        <div className="text-xl sm:text-base font-semibold div">스타벅스 프로모션</div>
                        <div className="w-9 h-9 relative ml-14 cursor-pointer" onClick={handleBtn}>
                            {
                                isOpen ? (
                                    <Image
                                        src="/static/images/btn_prom_up.png"
                                        alt="notice_btn"
                                        fill
                                    />
                                ) : (
                                    <Image
                                        src="/static/images/btn_prom_down.png"
                                        alt="notice_btn"
                                        fill
                                    />
                                )
                            }

                        </div>
                    </div>
                </div>

            </div>

            <PromotionSlider isOpen={isOpen} />



        </div>

    );
}

export default NoticeBar;