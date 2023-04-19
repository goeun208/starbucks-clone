import Image from "next/image";

const SpringBlendBox = () => {
    return (
        <div className="min-h-[28vw] relative bg-[url('/images/2023_spring_promotion_bg.jpg')] bg-cover ">
            <div className='absolute top-[1%] left-[25%] w-[18%]'>
                <Image
                    src='/images/2023_spring_promotion_img.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <div className='absolute top-[40%] right-[28%] w-[18%]'>
                <Image
                    src='/images/2023_spring_promotion_txt_2.png'
                    alt="2023_spring_blend"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <button className='absolute top-[62%] right-[40%] w-[6%] text-[#e54360] border-2 border-[#e54360] py-2 rounded-[5px] text-sm hover:animate-secondBanner hover:text-white hover:underline'>자세히 보기</button>
        </div >
    );
}

export default SpringBlendBox;