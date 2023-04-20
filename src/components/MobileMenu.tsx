import { DropdownData } from "../../public/DropdownData";

const MobileMenu = ({handleNav}: any) => {
    return (
        <div className=" w-[65vw] h-[150vh] absoulte bg-[#111111] bottom-0 ml-[30vw]">
           <div className="w-full h-[10vh] bg-[#2d2926] flex items-center justify-center">
                <div className="w-[42%] h-[38%] bg-white rounded-[3px]"></div>
                <div className="ml-3 w-[20%] h-[38%] bg-[#666666] rounded-[3px] flex items-center justify-center text-white text-[1.75rem] font-medium">Search</div>
           </div>
           {/* My starbucks */}
           <div className="w-full h-[7vh]flex items-center ">
                <ul>
                    <li>
                       <p className='px-[1rem] hover:underline border-b border-[#666] h-[5rem] text-[1.75rem] flex items-center font-medium text-white'>My Starbucks</p>
                    </li>
                </ul>
           </div>
           {/* coffee ~ what's new */}
           <nav className='text-xl bg-[#111]'>
                <div className=''>
                    <ul className="flex flex-col cursor-pointer font-normal">
                        {DropdownData.map((dropdown, index: number) => (
                            <li key={index} className='group/gnb'>
                                <p className='group-hover/gnb:underline border-b px-[1rem] border-[#666] h-[5rem] text-[1.75rem] flex items-center font-medium text-white'>{dropdown.dropTitle}</p>
                                <div className='overflow-hidden hidden group-hover/gnb:block group-hover/gnb:animate-dropdown group-hover/gnb:text-[#669900] bg-[#2c2a29] w-full'>
                                    <div className='flex flex-col mx-auto py-2'>
                                        {dropdown.dropDownMenu.map((menus, menus_idx: number) => (
                                            <ul className='' key={menus_idx}>
                                                {menus.menu.map((item: string, idx: number) => (
                                                    idx === 0 &&
                                                        <li className=' px-[1.3rem] py-5 text-[#999999] hover:underline' key={idx}>
                                                            <span className="peer">{item}</span>
                                                            <div className="overflow-hidden hidden peer-hover:block peer-hover:animate-dropdown">
                                                                <ul >
                                                                {menus.menu.map((item: string, idx: number) => (
                                                                    idx !== 0 && <li>{item}</li>
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
    );
}

export default MobileMenu;