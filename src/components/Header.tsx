import Image from 'next/image'

interface MenuType {
    title: string;
    menu: string[];
}

interface DropDownType {
    dropTitle: string;
    dropDownMenu: MenuType[];
}

export const DropdownData: DropDownType[] = [
    {
        dropTitle: "COFFEE",
        dropDownMenu: [
                {
                    title: "커피",
                    menu: ["스타벅스 원두", "스타벅스 비아", "스타벅스 앳홈 by 캡슐", "나와 어울리는 커피"],
                },
                {
                    title: "커피 이야기",
                    menu: ["농장에서 우리의 손으로", "최상의 아라비카 원두", "스타벅스 로스트 스펙트럼", "스타벅스 디카페인"],
                },
                {
                    title: "커피 이야기",
                    menu: ["농장에서 우리의 손으로", "최상의 아라비카 원두", "스타벅스 로스트 스펙트럼", "스타벅스 디카페인"],
                },
                {
                    title: "스타벅스 리저브",
                    menu: ["RESERVE MAGAZINE"],
                },
                {
                    title: "에스프레소 음료",
                    menu: ["도피오", "에스프레스 마키아또", "아메리카노", "마키아또", "카푸치노", "라떼", "모카"],
                },
                {
                    title: "최상의 커피를 즐기는 법",
                    menu: ["커피 프레스", "푸어 오버", "아이스 푸어 오버", "커피 메이커"],
                },
            ]
    }
]


export default function Header() {
    return (
        <div className="w-full h-[7.5rem] bg-[#f6f5ef] flex justify-center items-center">
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
                        <li className="mx-4">My Starbucks</li>
                        <li className="mx-4">Customer Service & Ideas</li>
                        <li className="mx-4">Find a store</li>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex absolute right-0 bottom-0 text-[#333] cursor-pointer font-light">
                        
                            {DropdownData.map((dropdown, index) => (
                                <li className="px-4 hover:bg-[#2c2a29] hover:text-[#669900] hover:text-[#669900] hover:underline pt-[10px]">
                                    <p>{dropdown.dropTitle}</p>
                                    <div>
                                        <ul>
                                        {dropdown.dropDownMenu[index].menu.map((item) => (
                                                <li >{item}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                       
                        <li className="px-4 hover:bg-[#2c2a29] hover:text-[#669900] hover:text-[#669900] hover:underline pt-[10px]">MENU</li>
                        <li className="px-4 hover:bg-[#2c2a29] hover:text-[#669900] hover:text-[#669900] hover:underline pt-[10px]">STORE</li>
                        <li className="px-4 hover:bg-[#2c2a29] hover:text-[#669900] hover:text-[#669900] hover:underline pt-[10px]">RESPONSIBILITY</li>
                        <li className="px-4 hover:bg-[#2c2a29] hover:text-[#669900] hover:text-[#669900] hover:underline pt-[10px]">STARBUCKS REWARDS</li>
                        <li className="px-4 hover:bg-[#2c2a29] hover:text-[#669900] hover:text-[#669900] hover:underline pt-[10px]">CORPORATE SALES</li>
                        <li className="px-4 hover:bg-[#2c2a29] hover:text-[#669900] hover:text-[#669900] hover:underline pt-[10px]">WHAT'S NEW</li>
                    </ul>
                </nav>
                <div>

                </div>
            </div>
            
        </div>
    );
}