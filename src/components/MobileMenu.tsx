"use client";
import Image from "next/image";
import { useScrollFadeIn } from "@/hooks/useControlFadeIn";
import { MobileDropdownData, MobileMenuType } from "../../public/MobileDropdownData";
import { useEffect, useRef, useState } from "react";
import { MobileDropDownType } from "../../public/MobileDropdownData";

const MobileMenu = ({ isOpen, handleNav }: any) => {
    const [data, setData] = useState<MobileDropDownType[]>(MobileDropdownData);
    const [menuIdx, setMenuIdx] = useState<number>(0);
    const [innerMenuIdx, setInnerMenuIdx] = useState<number>(0);
    const [checked, setChecked] = useState<boolean>(false);
    const [innerChecked, setInnerChecked] = useState<boolean>(false);

    useEffect(() => {
        console.log(checked);
    }, [checked])

    useEffect(() => {
        console.log('change')
    }, [data])

    const handleMenuIdx = (n: number) => {
        setChecked(!checked); // true
        // 두번 클릭해야 됨...ㅜㅠ
        data[n].checked = checked;
        setData([...data]);
    }

    const handleInnerMenuIdx = (menus: MobileMenuType, n: number) => {
        setInnerChecked(!innerChecked)
        // data[n].subChecked
        console.log(menus.subChecked);
        menus.subChecked = innerChecked;
        // setData([...data]);
    }

    return (
        <div className="flex w-screen h-screen relative" style={{ width: 0 }} id="nav">
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
                {/* 검색창 */}
                <div className="w-full h-[10vh] bg-[#2d2926] flex items-center justify-center">

                    <input type="text" className="w-[60%] h-[50px] bg-white pl-2 rounded-[3px]" />
                    <div className="ml-3 w-[25%] h-[50px] bg-[#666] rounded-[3px] flex items-center justify-center text-white text-[1.5rem] font-medium">Search</div>
                </div>
                {/* 네비 바 */}
                <nav className='text-xl bg-[#111] oveflow-scroll'>
                    <div>
                        <ul className="flex flex-col cursor-pointer font-normal" id="mobile_menu_box">

                            {
                                MobileDropdownData.map((dropdown_items: MobileDropDownType, first_index: number) => (
                                    <li key={first_index} className='group/gnb'> {/* 첫번째 메뉴 */}
                                        <div className="flex justify-between items-center border-b border-[#333] px-[1rem]" onClick={() => handleMenuIdx(first_index)}>

                                            <p className='hover:underline h-[5rem] text-[1.75rem] flex items-center font-medium text-white'>{dropdown_items.title}</p>

                                            {
                                                dropdown_items.checked ? // 체크 여부 판별하기
                                                    (
                                                        <Image src="/static/images/mob_gnb_arrow_up_w.png" alt="arrow" width={20} height={20} />
                                                    ) : (
                                                        <Image src="/static/images/mob_gnb_arrow_down_w.png" alt="arrow" width={20} height={20} />
                                                    )
                                            }
                                        </div>
                                        {/* {
                                            dropdown_items.checked && 
                                            <div className="text-white">열림</div>
                                        } */}

                                        {/* //첫번째 checked가 true일때 등장!
                                            // 두번째 서브 메뉴 */}
                                    {
                                        dropdown_items.checked && 
                                        <div className='text-white  bg-[#181818] w-full'>
                                            <div className='flex flex-col mx-auto' id="mobile_inner_menu_box">
                                                {dropdown_items.dropDownMenu?.map((menus, menus_idx: number) => (
                                                    <ul key={menus_idx}>
                                                        <div className="flex text-[1.5rem] text-white pl-[2.2rem] pr-[1rem] py-5 justify-between items-center" onClick={() => handleInnerMenuIdx(menus, menus_idx)}>
                                                            <span className="hover:underline">{menus.subTitle}</span>
                                                            {
                                                                menus.subMenu !== null ? ( // subMenu가 있는 것만 나타나게 하기 // 접혔다 펼쳤다 T/F로 구분
                                                                    menus.subChecked ?
                                                                        (
                                                                            <Image src="/static/images/mob_gnb_arrow_up_g.png" alt="arrow" width={20} height={20} />
                                                                        ) :
                                                                        (
                                                                            <Image src="/static/images/mob_gnb_arrow_down_g.png" alt="arrow" width={20} height={20} />
                                                                        )
                                                                ) : null
                                                            }
                                                        </div>
                                                        {
                                                             menus.subChecked &&
                                                            
                                                                menus.subMenu !== null && menus.subMenu.map((subMenus: any, sub_idx: number) => (
                                                                    <li key={sub_idx} className="px-[3.5rem] py-3 text-base text-[#999]">{subMenus}</li>
                                                                ))
                                                            
                                                        }


                                                    </ul>
                                                ))}


                                                {/* 
                                                            menus.subMenu?.map((menu: string, menu_idx: number) => (
                                                                 <li className='text-[#999999] border-b border-[#333] text-[18px]' key={menu_idx}>
                                                                         {
                                                                                menus_idx === innerMenuIdx ?
                                                                                    (
                                                                                        <Image src="/static/images/mob_gnb_arrow_up_g.png" alt="arrow" width={20} height={20} />
                                                                                    ) :
                                                                                    (
                                                                                        <Image src="/static/images/mob_gnb_arrow_down_g.png" alt="arrow" width={20} height={20} />
                                                                                    )
                                                                        }
                                                                    </div>
                                                                            <div>
                                                                                <ul className="bg-[#222]">
                                                                                    {menus.menu.map((menu: string, menu_idx: number) => (
                                                                                        menu_idx !== 0 && <li key={menu_idx} className="px-[3.5rem] py-3 text-base text-[#999]">{menu}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                </li>
                                                    ))}
                                                    ))} */}
                                            </div> 


                                        </div>
                                            }



                                    </li>
                                ))}
                        </ul>
                    </div>

                </nav>
            </div >
        </div >
    );
}

export default MobileMenu;