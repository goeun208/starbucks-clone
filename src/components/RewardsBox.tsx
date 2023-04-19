import Image from "next/image";

const RewardsBox = () => {
    return (
        <div className="w-full h-[240px] pt-[30px] pb-[40px] bg-[#1e3932]">
            <div className="w-[1080px] h-full mx-auto my-0 flex justify-between">
                {/* 리워드 로고 */}
                <div className="mx-[40px]">
                    <Image
                        src="/images/rewards-logo.png"
                        alt="rewards_logo"
                        width={176}
                        height={152}
                    />
                </div>
                {/* 소개 글 */}
                <div className="text-white w-[793px] flex flex-col">
                    <div className=" border-b border- mb-[22px]">
                        <div className="text-[26px]">스타벅스만의 특별한 혜택, <span className="font-semibold">스타벅스 리워드</span></div>
                        <div className="">
                            <div className="flex relative my-[12px]">
                                <div className="mb-3 ">
                                    <div className="mb-2">
                                        <span className="font-semibold mr-2">스타벅스 회원이세요?</span>
                                        로그인을 통해 나만의 리워드를 확인해보세요.
                                    </div>
                                    <div>
                                        <span className="font-semibold mr-2">스타벅스 회원이 아니세요?</span>
                                        가입을 통해 리워드 혜택을 즐기세요.
                                    </div>
                                </div>
                                <div className="box-border right-0 top-0 absolute">
                                    <button type="button" className=" rounded-[5px] bg-[#00704a] text-sm px-3 py-2 mr-2">회원가입</button>
                                    <button type="button" className="box-border border-2 rounded-[5px] text-sm px-4 py-2">로그인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex text-sm relative">
                        <div>
                            <div>회원 가입 후, 스타벅스 e-Gift Card를 <span className="font-semibold">"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</span></div>
                            <div>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</div>
                        </div>
                        <div className="absolute right-0">
                            <button type="button" className="box-border border-2 rounded-[5px] text-sm px-4 py-2">e-Gift Card 선물하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RewardsBox;