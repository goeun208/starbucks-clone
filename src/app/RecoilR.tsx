"use client";

import { ReactNode} from "react";
import { RecoilRoot } from "recoil";

interface Props {
    children: ReactNode;
};

const RecoilR = ({ children }: Props) => {
    return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilR;