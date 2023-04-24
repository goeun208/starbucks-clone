"use client";
import Image from "next/image";
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

const MobileMenu = ({ handleNav }: any) => {
    const MobileArray = [MyStarbucks, ...DropdownData];
    const [menuIdx, setMenuIdx] = useState<number>(0);
    const [innerMenuIdx, setInnerMenuIdx] = useState<number>(0);

    const handleMenuIdx = (n: number) => {
        setMenuIdx(n);
    }

    const handleInnerMenuIdx = (n: number) => {
        console.log(n);
        setInnerMenuIdx(n);
    }

    useEffect(() => {
        const li = document.querySelector('#mobile_menu_box')!!.children[menuIdx] as HTMLElement;
        console.log(li);
        li.style.maxHeight = "50rem";
        console.log(menuIdx);
    }, [menuIdx]);

    useEffect(() => {
        const li = document.querySelector('#mobile_inner_menu_box')!!.children[innerMenuIdx] as HTMLElement;
        console.log(li);
        li.style.maxHeight = "50rem";
        console.log(innerMenuIdx);
    }, [innerMenuIdx]);

    return (
        <div className="flex">
            {/* 뒤 투명 배경 */}
            <div className=" w-[50vw] h-[150vh] bg-black opacity-70"></div>
            {/* 메뉴 박스 */}
            <div className="  w-[65vw] h-[150vh] absoulte bg-[#111111] bottom-0 overflow-auto">
                <div className="w-full h-[10vh] bg-[#2d2926] flex items-center justify-center relative">
                    <button type="button" className="w-8 h-8 absolute top-10 -left-[4rem] z-30" onClick={handleNav}>
                        <Image
                            src="/images/btn_gnb_close.png"
                            alt="promotion_logo_hyundai"
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='w-full h-auto'
                        />
                    </button>
                    <input type="text" className="w-[60%] h-[50px] bg-white pl-2 rounded-[3px]" />
                    <div className="ml-3 w-[25%] h-[50px] bg-[#666] rounded-[3px] flex items-center justify-center text-white text-[1.5rem] font-medium">Search</div>
                </div>
                {/* My starbucks ~ what's new */}
                <nav className='text-xl bg-[#111]'>
                    <div>
                        <ul className="flex flex-col cursor-pointer font-normal" id="mobile_menu_box">
                            {MobileArray.map((dropdown, index: number) => (
                                <li key={index} className='group/gnb' onClick={() => handleMenuIdx(index)}>
                                    <div className="flex justify-between items-center border-b border-[#333] px-[1rem]">
                                        <p className='hover:underline h-[5rem] text-[1.75rem] flex items-center font-medium text-white'>{dropdown.dropTitle}</p>

                                        {
                                            index === menuIdx ?
                                                (
                                                    <Image src="/images/mob_gnb_arrow_up_g.png" alt="arrow" width={20} height={20} />
                                                ) : (
                                                    <Image src="/images/mob_gnb_arrow_down_w.png" alt="arrow" width={20} height={20} />
                                                )
                                        }
                                    </div>
                                    {
                                        index === menuIdx && (
                                            <div className='text-white text-[1.5rem] bg-[#181818] w-full'>
                                                <div className='flex flex-col mx-auto' id="mobile_inner_menu_box">
                                                    {dropdown.dropDownMenu.map((menus, menus_idx: number) => (
                                                        <ul key={menus_idx}>
                                                            {menus.menu.map((title: string, idx: number) => (
                                                                idx === 0 &&
                                                                <li className='text-[#999999] border-b border-[#333] text-[18px]' key={idx} >
                                                                    <div className="flex px-[1.3rem] py-5 justify-between items-center border-b border-[#333]" onClick={() => handleInnerMenuIdx(menus_idx)}>
                                                                        <span>{title}</span>
                                                                        {
                                                                            idx === innerMenuIdx ?
                                                                            (
                                                                                <Image src="/images/mob_gnb_arrow_up_g.png" alt="arrow" width={20} height={20} />
                                                                            ) : (
                                                                                <Image src="/images/mob_gnb_arrow_down_w.png" alt="arrow" width={20} height={20} />
                                                                            )
                                                                        }
                                                                    </div>
                                                                    {
                                                                        menus_idx === innerMenuIdx && (
                                                                            <div>
                                                                                <ul className="bg-[#222]">
                                                                                    {menus.menu.map((item: string, idx: number) => (
                                                                                        idx !== 0 && <li key={idx} className="px-[1.3rem] py-2 text-base text-[#999]">{item}</li>
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