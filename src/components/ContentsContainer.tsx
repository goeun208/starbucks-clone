"use client";

import { openMobileMenu } from "@/recoil/state";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

const ContentsContainer = ( {children}
  :{
    children: React.ReactNode
  }) => {
    const mainRef:any = useRef<HTMLDivElement>();
    const isOpenMenu = useRecoilValue<boolean>(openMobileMenu);

    useEffect(() => {
        isOpenMenu  ? (
            mainRef.current.style.transition = "left 0.7s ease-out",
            mainRef.current.style.left = "-60vw"
        ) : (
            mainRef.current.style.transition = "left 0.7s ease-out",
            mainRef.current.style.left = "0"
        )
    }, [isOpenMenu])
    return (
        <div ref={mainRef} style={{ position: "relative"}}>
            {children}
        </div>
    )
}

export default ContentsContainer;
