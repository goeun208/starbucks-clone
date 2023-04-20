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
                    <div className=" w-full h-full flex items-center absolute top-0 left-2">
                        
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
                    <div className="absolute top-0 right-0 z-40">
                    {isOpen && <MobileMenu/>}
                    </div>
                    <nav className="absolute top-0 right-0">
                    {isOpen && <MobileMenu handleNav={handleNav} />}
                        <ul className="w-[120px] h-[60px] pt-[10px] flex justify-between items-center absolute top-0 right-2">
                            <li className="relative">
                                <Image
                                    src="/images/icon_user_m.png"
                                    alt="로고"
                                    width={25}
                                    height={25}
                                    priority
                                    className='cursor-pointer'
                                />
                            </li>
                            <li className="relative">
                                <Image
                                    src="/images/icon_spot_m.png"
                                    alt="로고"
                                    width={25}
                                    height={25}
                                    priority
                                    className='cursor-pointer'
                                />
                            </li>
                            <li className="relative" onClick={handleNav}>
                                <Image
                                    src="/images/btn_berger_m.png"
                                    alt="로고"
                                    width={25}
                                    height={25}
                                    priority
                                    className='cursor-pointer'
                                />
                            </li>
                        </ul>
                    </nav>
                    {/* 고정 프로모션 뱃지 */}
                    <div className='absolute w-[25%] top-[108px] right-2 z-30'>
                        <Image
                            src="/images/promotion_image_hyundai.png"
                            alt="promotion_logo_hyundai"
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='w-full h-auto'
                        />
                    </div>
                    <div className='absolute w-[25%] top-[228px] right-2 z-30'>
                        <Image
                            src="/images/promotion_image_corporate.png"
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