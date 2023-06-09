"use client";
import Image from "next/image";
import { MobileDropdownData, MobileMenuType } from "../../public/MobileDropdownData";
import { useEffect, useRef, useState } from "react";
import { MobileDropDownType } from "../../public/MobileDropdownData";

const MobileMenu = ({ isOpen, handleNav }: any) => {
    const [data, setData] = useState<MobileDropDownType[]>(MobileDropdownData);
    const ref: any = useRef<HTMLDivElement>(null);
    const containerRef: any = useRef<HTMLDivElement>(null);
    const btnRef: any = useRef<HTMLDivElement>(null);
    const backRef: any = useRef<HTMLDivElement>(null);
    const titleRef: any = useRef<HTMLElement>
    const firstMenuRef: any = useRef<HTMLDivElement>(null);
    const secondMenuRef: any = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setData(MobileDropdownData);
    }, [])

    useEffect(() => {
        isOpen ?
            (
                containerRef.current.style.display = "block",
                backRef.current.style.display = "block",
                backRef.current.style.right = "0",
                
                setTimeout(() => {
                    ref.current.style.transition = "right 0.3s ease-out"
                    ref.current.style.right = "0"
                   btnRef.current.style.transition = "right 0.3s ease-out"
                    btnRef.current.style.right = "73%"
                }, 50)
            )
            :
            (
                ref.current.style.transition = "right 0.3s ease-out",
                ref.current.style.right = "-90vw",
                backRef.current.style.right = "-110vw",
                btnRef.current.style.right = "0",
                setTimeout(() => {
                    containerRef.current.style.display = "none"
                }, 300)
            )
    }, [isOpen])

    const handleMenuIdx = (title: string) => {
        const findIndex = data.findIndex(element => element.title === title)
        let copyArr = [...data];
        if (findIndex !== -1) {
            copyArr[findIndex] = { ...copyArr[findIndex], checked: !copyArr[findIndex].checked };
        }
        setData(copyArr);
    }

    const handleInnerMenuIdx = (title: string, subTitle: string) => {
        const findIndex = data.findIndex(element => element.title === title)
        let copySubArr = [...data];
        if (findIndex !== -1) { //index
            const menu = copySubArr[findIndex].dropDownMenu;
            const subIdx = menu && menu.findIndex(m => m.subTitle === subTitle);
            menu!![subIdx!!] = { ...menu!![subIdx!!], subChecked: !(menu!![subIdx!!].subChecked) }
        }
        setData(copySubArr);
    }

    return (
        <div className="w-screen h-screen relative z-0" style={{ width: 0 }} ref={containerRef}>
            {/* 뒤 투명 배경 */}
            <div className="w-screen h-screen bg-black absolute" style={{ opacity: 0.7, right: "-100vw" }} ref={backRef}></div>
            <div className="relative">
                <button type="button" className="w-5 xs:w-9 absolute top-5 xxs:top-8 xs:top-10 z-30" onClick={handleNav} ref={btnRef}>
                    <Image
                        src="/static/images/btn_gnb_close.png"
                        alt="promotion_logo_hyundai"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='w-full h-auto hover:animate-dropDownButton'
                    />
                </button>
                <div className="fixed w-[70vw] h-screen bg-[#111111] z-20 overflow-y-auto" ref={ref} style={{ right: "-80vw" }}>
                    {/* 검색창 */}
                    <div className="w-full h-[10vh] bg-[#2d2926] border-b border-[#333] flex items-center justify-center">
                        <input type="text" className="w-[60%] h-[30px] xxs:h-[50px] bg-white pl-2 rounded-[3px]" />
                        <div className="ml-3 w-[25%] h-[30px] xxs:h-[50px] bg-[#666] rounded-[3px] flex items-center justify-center text-white text-[0.75rem] xxs:text-[1rem] sm:text-[1.5rem] font-medium">Search</div>
                    </div>
                    {/* 네비 바 */}
                    <nav className='text-xl bg-[#111] oveflow-scroll'>
                        <div>
                            <ul className="flex flex-col cursor-pointer font-normal" id="mobile_menu_box">
                                {
                                    data.map((dropdown_items: MobileDropDownType, first_index: number) => (
                                        <li key={first_index} className='group/gnb'> {/* 첫번째 메뉴 */}
                                            <div className="flex justify-between items-center border-b border-[#333] px-[1rem] sm:px-[1.5rem]" style={{ backgroundColor: first_index === 0 ? '#2d2926' : '#111111' }} onClick={() => handleMenuIdx(dropdown_items.title)} ref={firstMenuRef}>
                                                <p className='h-[50px] xxs:h-[4.8rem] text-sm xs:text-lg sm:text-[1.75rem] flex items-center font-medium text-white'>{dropdown_items.title}</p>
                                                {
                                                    dropdown_items.checked ? // 체크 여부 판별하기
                                                        (
                                                            <Image src="/static/images/mob_gnb_arrow_up_w.png" alt="arrow" width={20} height={20} />
                                                        ) : (
                                                            <Image src="/static/images/mob_gnb_arrow_down_w.png" alt="arrow" width={20} height={20} />
                                                        )
                                                }
                                            </div>

                                            {/* //첫번째 checked가 true일때 등장
                                            // 두번째 서브 메뉴 */}
                                            {
                                                dropdown_items.checked &&
                                                <div className='text-white  bg-[#181818] w-full' >
                                                    <div className='flex flex-col mx-auto overflow-y-hidden animate-navDropdown' id="mobile_inner_menu_box">
                                                        {dropdown_items.dropDownMenu?.map((menus, menus_idx: number) => (
                                                            <ul key={menus_idx}>
                                                                <div className="flex text-sm xs:text-lg sm:text-[1.5rem] text-white border-b border-[#222] px-[1rem] sm:px-[2.2rem] py-2 xxs:py-5 justify-between items-center" onClick={() => handleInnerMenuIdx(dropdown_items.title, menus.subTitle)} ref={secondMenuRef}>
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
                                                                <div className="overflow-hidden animate-navDropdown">
                                                                    {
                                                                        menus.subChecked &&
                                                                        menus.subMenu !== null && menus.subMenu.map((subMenus: any, sub_idx: number) => (
                                                                            <li key={sub_idx} className="bg-[#222] px-[1rem] sm:px-[3rem] py-1 sm:py-3 text-base text-[#999]  overflow-hidden animate-navDropdown">{subMenus}</li>
                                                                        ))
                                                                    }
                                                                </div>

                                                            </ul>
                                                        ))}
                                                    </div>
                                                </div>
                                            }
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </nav>
                </div >
            </div>

        </div >
    );
}

export default MobileMenu;