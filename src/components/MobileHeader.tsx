"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
    
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const handleNav = () => {
            setIsOpen(!isOpen);
        }

        useEffect(() => {
        }, [isOpen])
        
        return (
            <>
              <div className="md:hidden block w-full h-full flex items-center relative">
                    <div className=" w-full h-full flex items-center absolute top-0 left-5">
                        <Image
                            src="https://www.starbucks.co.kr/common/img/common/logo.png"
                            alt="로고"
                            width={45}
                            height={45}
                            priority
                            className='cursor-pointer'
                        />
                    </div>
                    {/* 네비게이션 바 */}
                   
                    <nav className="absolute top-0 right-0">
                        <div className="absolute top-0 right-0 z-40">
                            {isOpen && <MobileMenu isOpen={isOpen} handleNav={handleNav} />}
                        </div>
                        <ul className="w-[120px] h-[60px] pt-[10px] flex justify-between items-center absolute top-0 right-5">
                            <li className="relative">
                                <Image
                                    src="/static/images/icon_user_m.png"
                                    alt="마이페이지"
                                    width={25}
                                    height={25}
                                    priority
                                    className='cursor-pointer'
                                />
                            </li>
                            <li className="relative">
                                <Image
                                    src="/static/images/icon_spot_m.png"
                                    alt="위치조회"
                                    width={25}
                                    height={25}
                                    priority
                                    className='cursor-pointer'
                                />
                            </li>
                            <li className="relative" onClick={handleNav}>
                                <Image
                                    src="/static/images/btn_berger_m.png"
                                    alt="전체메뉴"
                                    width={25}
                                    height={25}
                                    priority
                                    className='cursor-pointer'
                                />
                            </li>
                        </ul>
                    </nav>
                    {/* 고정 프로모션 뱃지 */}
                    <div className='fixed w-[25%] top-[108px] right-2 z-30'>
                        <Image
                            src="/static/images/promotion_image_hyundai.png"
                            alt="promotion_logo_hyundai"
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='w-full h-auto'
                        />
                        <Image
                            src="/static/images/promotion_image_corporate.png"
                            alt="promotion_logo_corporate"
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='w-full h-auto'
                        />
                    </div>
                    
                </div>
            </>
              
        );
    }

    export default MobileHeader;