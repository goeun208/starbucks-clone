import Image from "next/image";

const RewardsBox = () => {
    return (
        <div>
            {/* 모바일 버전 */}
            <div className="block semi-lg:hidden w-full semi-sm:h-[430px] px-[15px] xs:px-[30px] py-[40px] semi-sm:py-0 bg-[#1e3932] mx-auto semi-sm:flex justify-center">
                <div className="mx-auto semi-sm:mx-[15px] md:mx-[30px] semi-sm:mt-[4rem] w-[44%]">
                        <Image
                            src="/static/images/rewards-logo.png"
                            alt="rewards_logo"
                            width={248}
                            height={215}
                        />
                </div>
                <div className="text-white flex-col w-[100%] semi-sm:min-w-[50%] mx-auto text-center semi-sm:text-left semi-sm:ml-[30px] pt-[30px] relative">
                    <div className="text-[1.25rem] xs:text-[1.5rem] leading-8"> 스타벅스만의 특별한 혜택,</div>
                    <div className="font-semibold text-[1.25rem] xs:text-[1.5rem]">스타벅스 리워드</div>
                     
                            <div className="">
                                <div className="flex justify-center semi-sm:justify-start relative h-[9.5rem] my-4 border-b">
                                    <div className="">
                                        <div className="mb-1">
                                            <span className="font-semibold mr-2 leading-5">스타벅스 회원이세요?</span>
                                            로그인을 통해 <div>나만의 리워드를 확인해보세요.</div>
                                        </div>
                                        <div>
                                            <span className="font-semibold mr-2 leading-5">스타벅스 회원이 아니세요?</span>
                                            <div>가입을 통해 리워드 혜택을 즐기세요.</div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 flex">
                                        <button type="button" className=" rounded-[5px] bg-[#00704a] text-sm w-[40vw]  semi-sm:w-[12vw] py-2 mr-2">회원가입</button>
                                        <button type="button" className="box-border border-2 rounded-[5px] text-sm w-[40vw] semi-sm:w-[12vw] py-2">로그인</button>
                                    </div>
                                </div>
                            </div>
                        
                        <div className="flex justify-center semi-sm:justify-start text-sm relative h-[12rem] semi-sm:h-[7.5rem] leading-6 semi-sm:leading-4">
                            <div>
                                <div>회원 가입 후, 스타벅스 e-Gift Card를
                                    <div className="semi-sm:hidden font-semibold">"나에게 선물하기"로 구매하시고, <p>편리하게 등록하세요!</p></div> 
                                    <div className="hidden semi-sm:block font-semibold">"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</div>
                                </div>
                                <div>카드를 등록하여 스타벅스 리워드 회원이 되신 후,</div>
                                    <div>첫 구매를 하시면 무료 음료쿠폰을 드립니다!</div>
                            </div>
                            <div className="absolute bottom-0 ">
                                <button type="button" className="w-[80vw] semi-sm:w-auto box-border border-2 rounded-[5px] text-sm semi-sm:px-4 py-2">e-Gift Card 선물하기</button>
                            </div>
                        </div> 
                    </div>
            </div>
            {/* 웹 버전 */}
            <div className="hidden semi-lg:block w-full min-h-[240px] pt-[30px] pb-[40px] bg-[#1e3932]">
                <div className="h-full mx-auto my-0 flex justify-center">
                    {/* 리워드 로고 */}
                    <div className="mx-[40px]">
                        <Image
                            src="/static/images/rewards-logo.png"
                            alt="rewards_logo"
                            width={176}
                            height={152}
                        />
                    </div>
                    {/* 소개 글 */}
                    <div className="text-white w-[793px] flex flex-col">
                        <div className=" border-b border- mb-[22px] relative">
                            <div className="text-[26px]">스타벅스만의 특별한 혜택,
                                <span className="font-semibold"> 스타벅스 리워드</span>
                            </div>
                            <div>
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
        </div>
    );
}

export default RewardsBox;