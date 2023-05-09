import { atom } from "recoil";

const openMobileMenu = atom<boolean>({
    key: "openMobileMenu",
    default: false
})

export { openMobileMenu };