import Image from "next/image";
import { DropdownData } from "../../public/DropdownData";

const MobileMenu = ({ handleNav }: any) => {
    return (
        <div className=" w-[100vw] flex">
            {/* 뒤 투명 배경 */}
            <div className=" w-[50vw] h-[150vh] bg-black opacity-70"></div> 
            {/* 메뉴 박스 */}
            <div className="  w-[65vw] h-[150vh] absoulte bg-[#111111] bottom-0">
                <div className="w-full h-[10vh] bg-[#2d2926] flex items-center justify-center relative">
                <button type="button" className="hover:animate-dropDownButton w-8 h-8 absolute top-10 -left-[4rem] z-30" onClick={handleNav}>
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
                {/* My starbucks */}
                <div className="w-full h-[7vh] flex items-center bg-[#2d2926] text-[1.75rem] border-y border-[#333]">
                    <ul>
                        <li>
                            <p className='px-[1rem] hover:underlinetext-[1.75rem] flex items-center font-medium text-white hover:underline'>My Starbucks</p>
                        </li>
                    </ul>
                </div>
                {/* coffee ~ what's new */}
                <nav className='text-xl bg-[#111]'>
                    <div className=''>
                        <ul className="flex flex-col cursor-pointer font-normal">
                            {DropdownData.map((dropdown, index: number) => (
                                <li key={index} className='group/gnb'>
                                    
                                    <div className="flex justify-between items-center border-b border-[#333] px-[1rem]">
                                        <p className='group-hover/gnb:underline h-[5rem] text-[1.75rem] flex items-center font-medium text-white'>{dropdown.dropTitle}</p>
                                        <Image
                                           src="/images/mob_gnb_arrow_down_w.png"
                                           alt="arrow"
                                           width={20}
                                           height={20}
                                        />
                                    </div>
                                    <div className='overflow-hidden hidden group-hover/gnb:block group-hover/gnb:animate-dropdown group-hover/gnb:text-[#669900] bg-[#2c2a29] w-full'>
                                        <div className='flex flex-col mx-auto py-2'>
                                            {dropdown.dropDownMenu.map((menus, menus_idx: number) => (
                                                <ul className='' key={menus_idx}>
                                                    {menus.menu.map((item: string, idx: number) => (
                                                        idx === 0 &&
                                                        <li className='px-[1.3rem] py-5 text-[#999999] hover:underline' key={idx}>
                                                            <span className="peer">{item}</span>
                                                            <div className="overflow-hidden hidden peer-hover:block peer-hover:animate-dropdown">
                                                                <ul >
                                                                    {menus.menu.map((item: string, idx: number) => (
                                                                        idx !== 0 && <li key={idx}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))}
                                        </div>


                                    </div>
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