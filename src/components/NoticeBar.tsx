import Image from "next/image";

const NoticeBar = () => {
    return (
        <div className="w-full h-[62px] relative">
            <div className="z-10 w-[53.5%] h-[62px] bg-black absolute left-0 flex justify-end pr-4">
                <div className="w-[52%] h-full text-white flex items-center relative">
                    <span className="font-semibold">공지사항</span>
                    <ul className="w-[400px] h-[20px] overflow-hidden text-sm ml-3 cursor-pointer relative">
                        <li className="absolute top-0">시스템 개선 및 서비스 점검 안내</li>
                        <li className="absolute top-0 hidden">스타벅스 코리아 사칭 홈페이지 및 이메일 주의 안내</li>
                        <li className="absolute top-0 hidden">탄소중립포인트 인센티브 지급 기준 안내</li>
                    </ul>
                    <div className="absolute right-2 cursor-pointer">
                        <div className="w-9 h-9 relative">
                            <Image
                                src="/images/btn_notice_plus.png"
                                alt="notice_btn"
                                fill
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="z-0 w-[50%] h-[62px] absolute right-0">
                <div className="w-[40%] h-full flex justify-end items-center">
                    <span className="font-semibold">스타벅스 프로모션</span>
                    <div className="w-9 h-9 relative ml-14 cursor-pointer">
                        {/* <Image
                            src="/images/btn_prom_down.png"
                            alt="notice_btn"
                            fill
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoticeBar;