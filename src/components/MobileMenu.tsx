"use client";
import Image from "next/image";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";
import { DropdownData } from "../../public/DropdownData";
import { useEffect, useState } from "react";

const MyStarbucks = {
    dropTitle: "My Starbucks",
    dropDownMenu: [
        {
            menu: ["My 리워드", "리워드 및 혜택", "별 히스토리"],
        },
        {
            menu: ["My 스타벅스 카드", "보유 카드", "카드 등록", "카드 충전", "분실신고/잔액이전"],
        },
        {
            menu: ["My 스타벅스 e-Gift Card", "선물하기", "선물 내역", "장바구니 내역"],
        },
        {
            menu: ["My 쿠폰", "등록하기", "선물하기", "사용하기"],
        },
        {
            menu: ["My 캘린더"]
        }
    ]
}

const MobileMenu = ({ isOpen, handleNav }: any) => {
    const MobileArray = [MyStarbucks, ...DropdownData];
    const [menuIdx, setMenuIdx] = useState<number>(-1);
    const [innerMenuIdx, setInnerMenuIdx] = useState<number>(-1);

    const handleMenuIdx = (n: number) => {
        
        setMenuIdx(n);
    }

    const handleInnerMenuIdx = (n: number) => {
        setInnerMenuIdx(n);
    }

    // useEffect(() => {
    //     let li;
    //     firstOpen && (
    //     li = document.querySelector('#mobile_menu_box')!!.children[menuIdx] as HTMLElement,
    //     console.log(li),
    //     li.style.maxHeight = "30rem"
    //     );

    // }, [menuIdx]);

    // useEffect(() => {
    //     let li;
    //     firstOpen && (
    //         li = document.querySelector('#mobile_inner_menu_box')!!.children[innerMenuIdx] as HTMLElement,
    //         console.log(li),
    //         li.style.maxHeight = "30rem",
    //         li.style.transition = "height 0.3s",
    //         console.log(innerMenuIdx)
    //     )

    // }, [innerMenuIdx]);

    return (
        <div className="flex w-screen h-screen relative" style={{width: 0}} id="nav">
            {/* 뒤 투명 배경 */}
            <div className="w-screen h-screen bg-black opacity-70"></div>
            {/* 메뉴 박스 */} <button type="button" className="w-7 h-7 absolute top-12 left-[33%]" onClick={handleNav}>
                <Image
                    src="/static/images/btn_gnb_close.png"
                    alt="promotion_logo_hyundai"
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-auto hover:animate-dropDownButton'
                />
            </button>
            <div className="fixed w-[60vw] h-screen bg-[#111111] right-0 overflow-auto ">

                <div className="w-full h-[10vh] bg-[#2d2926] flex items-center justify-center">

                    <input type="text" className="w-[60%] h-[50px] bg-white pl-2 rounded-[3px]" />
                    <div className="ml-3 w-[25%] h-[50px] bg-[#666] rounded-[3px] flex items-center justify-center text-white text-[1.5rem] font-medium">Search</div>
                </div>

                <nav className='text-xl bg-[#111] oveflow-scroll'>
                    <div>
                        <ul className="flex flex-col cursor-pointer font-normal" id="mobile_menu_box">

                            {MobileArray.map((dropdown_items, index: number) => (
                                <li key={index} className='group/gnb'> {/* 첫번째 메뉴 */}
                                    <div className="flex justify-between items-center border-b border-[#333] px-[1rem]" onClick={() => handleMenuIdx(index)}>

                                        <p className='hover:underline h-[5rem] text-[1.75rem] flex items-center font-medium text-white'>{dropdown_items.dropTitle}</p>

                                        {
                                            index === menuIdx ?
                                                (
                                                    <Image src="/static/images/mob_gnb_arrow_up_w.png" alt="arrow" width={20} height={20} />
                                                ) : (
                                                    <Image src="/static/images/mob_gnb_arrow_down_w.png" alt="arrow" width={20} height={20} />
                                                )
                                        }
                                    </div>
                                    {
                                        // 두번째 서브 메뉴
                                        menuIdx === index && (
                                            <div className='text-white  bg-[#181818] w-full'>
                                                <div className='flex flex-col mx-auto' id="mobile_inner_menu_box">
                                                    {dropdown_items.dropDownMenu.map((menus, menus_idx: number) => (
                                                        <ul key={menus_idx}>
                                                            {menus.menu.map((menu: string, menu_idx: number) => (
                                                                menu_idx === 0 &&
                                                                <li className='text-[#999999] border-b border-[#333] text-[18px]' key={menu_idx}>
                                                                    <div className="flex text-[1.5rem] text-white pl-[2.2rem] pr-[1rem] py-5 justify-between items-center" onClick={() => handleInnerMenuIdx(menus_idx)}>
                                                                        <span className="hover:underline">{menu}</span>
                                                                        {
                                                                            menus.menu.length > 1 ?
                                                                                menus_idx === innerMenuIdx ?
                                                                                    (
                                                                                        <Image src="/static/images/mob_gnb_arrow_up_g.png" alt="arrow" width={20} height={20} />
                                                                                    ) :
                                                                                    (
                                                                                        <Image src="/static/images/mob_gnb_arrow_down_g.png" alt="arrow" width={20} height={20} />
                                                                                    )
                                                                                : null
                                                                        }
                                                                    </div>
                                                                    {
                                                                        menus_idx === innerMenuIdx && (
                                                                            <div>
                                                                                <ul className="bg-[#222]">
                                                                                    {menus.menu.map((menu: string, menu_idx: number) => (
                                                                                        menu_idx !== 0 && <li key={menu_idx} className="px-[3.5rem] py-3 text-base text-[#999]">{menu}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ))}
                                                </div>


                                            </div>
                                        )
                                    }

                                </li>
                            ))}
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;