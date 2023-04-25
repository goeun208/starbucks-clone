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
            if(liIdx !== currentNoticeIdx) {
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
            <div className="w-full relative flex">
                <div className="z-10 w-[53.5%] h-[62px] bg-[#111] flex justify-end relative">
                    <div className="lg:w-[60%] text-white flex items-center">
                        <span className="w-[90px] font-semibold inline-block">공지사항</span>
                        <ul className="w-[250px] lg:w-[400px] h-[20px] overflow-hidden text-sm ml-1 mr-12 cursor-pointer relative" id="notice_wrap">
                            {
                                noticeList.map((notice, noticeIdx) => {
                                    const { label } = notice;
                                    return (
                                        <li
                                            key={label}
                                            className="w-[330px] h-[20px] text-white absolute hover:underline bg-[#111]"
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
                    <div className="absolute top-3 right-3 cursor-pointer">
                            <div className="w-9 h-9 relative">
                                <Image
                                    src="/static/images/btn_notice_plus.png"
                                    alt="notice_btn"
                                    fill
                                />
                            </div>
                        </div>
                </div>

                <div className="z-0 w-[50%] h-[62px] bg-white ">
                    <div className="w-[70%] h-full flex justify-center items-center">
                        <div className="font-semibold div">스타벅스 프로모션</div>
                        <div className="w-9 h-9 relative ml-14 cursor-pointer" onClick={handleBtn}>
                            <Image
                                src="/static/images/btn_prom_down.png"
                                alt="notice_btn"
                                fill
                            />
                        </div>
                    </div>
                </div>

            </div>

                {/* isOpen &&  */}
                    <PromotionSlider />
                


        </div>

    );
}

export default NoticeBar;