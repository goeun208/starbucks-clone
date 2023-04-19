import Image from 'next/image'
import { DropdownData } from '../../public/DropdownData';

export default function Header() {

    return (
        <div className="z-20 w-full h-[7.5rem] bg-[#f6f5ef] flex justify-center items-center border-t-2 border-black fixed">
            <div className="w-[1100px] h-full flex items-center relative">
                <Image
                    src="https://www.starbucks.co.kr/common/img/common/logo.png"
                    alt="로고"
                    width={75}
                    height={75}
                    priority
                    className='cursor-pointer'
                />
                <nav>
                    <ul className="flex absolute top-0 right-12 h-[20px] mt-[15px] text-[#555] text-sm cursor-pointer">
                        <li className="mx-4">Sign In</li>
                        <span className="text-[#eee]">|</span>
                        <li className="mx-4">My Starbucks</li>
                        <span className="text-[#eee]">|</span>
                        <li className="mx-4">Customer Service & Ideas</li>
                        <span className="text-[#eee]">|</span>
                        <li className="mx-4">Find a store</li>
                    </ul>
                </nav>
                </div>

                <nav className='absolute w-full left-0 top-[3.8rem] h-[7.5rem] text-sm'>
                    <div className='w-[1100px] mx-auto my-0'>
                        <ul className="flex justify-end text-[#333] cursor-pointer font-normal pr-5">
                                {DropdownData.map((dropdown, index:number) => (
                                    <li key={index} className='group/gnb'>
                                        <p className='group-hover/gnb:underline px-[1.3rem] pt-[10px] h-[3.5rem] text-center group-hover/gnb:bg-[#2c2a29] group-hover/gnb:text-[#669900]'>{dropdown.dropTitle}</p>
                                        <div className='overflow-hidden hidden group-hover/gnb:block group-hover/gnb:animate-dropdown group-hover/gnb:text-[#669900] bg-[#2c2a29] absolute w-full left-0'>
                                            <div className='flex w-[1100px] mx-auto my-0'>
                                                {dropdown.dropDownMenu.map((menus, menus_idx:number) => (
                                                    <ul className='py-5 w-[230px]' key={menus_idx}>
                                                    {menus.menu.map((item:string, idx:number) => (
                                                        idx === 0 ?
                                                        <li className='pb-3 text-white hover:underline' key={idx}>{item}</li>
                                                        : <li className='pb-1 text-sm text-[#666] hover:underline' key={idx}>{item}</li>
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
                <div>

                </div>
        </div>
    );
}