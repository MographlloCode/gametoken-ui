import Image from "next/image";
import Link from "next/link";
import { PiBell, PiChats, PiList, PiMagnifyingGlass, PiTrophy } from "react-icons/pi";

import GameTokenLogo from "../../../public/game_token_hor_logo.svg"
import ProfilePic from "../../../public/profile_pic.jpg"

export default function Header() {
    return <header className="flex justify-between border-b border-b-stone-800">
        <section className="flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center h-full border-r border-r-stone-800 w-full md:w-fit py-2 px-4">
                <Image width={240} height={100} src={GameTokenLogo} alt="GameToken" className="w-20" />
            </Link>
            <button className="flex items-center justify-center w-14 border-r h-full border-stone-800 cursor-pointer hover:bg-stone-950">
                <PiList size={20} className="text-stone-200"/>
            </button>
        </section>
        <section className="hidden md:flex items-center">
            <div className="h-full w-96 flex items-center justify-center">
                <div className="rounded-md overflow-hidden bg-stone-900 border border-stone-800 flex w-full h-9">
                    <input className="p-2 outline-0 text-sm font-light h-full w-full flex items-center justify-center border-r border-stone-800 text-stone-200 placeholder:text-sm placeholder:font-light" placeholder="Search"/>
                    <button className="h-full w-10 flex items-center justify-center hover:bg-stone-950/20 cursor-pointer">
                        <PiMagnifyingGlass size={16} className="text-stone-200" />
                    </button>
                </div>
            </div>
        </section>
        <section className="flex items-center">
            <button className="border-l border-stone-800 h-full w-12 flex items-center justify-center cursor-pointer
            hover:bg-stone-950/20">
                <div className="relative">
                    <div className="w-2 h-2 bg-red-600 rounded-full absolute right-0 top-0"></div>
                    <PiTrophy size={20} className="text-stone-200" />
                </div>
            </button>
            <button className="border-l border-stone-800 h-full w-12 flex items-center justify-center cursor-pointer
            hover:bg-stone-950/20">
                <div className="relative">
                    <div className="w-2 h-2 bg-red-600 rounded-full absolute right-0 top-0"></div>
                    <PiChats size={20} className="text-stone-200" />
                </div>
            </button>
            <button className="border-l border-stone-800 h-full w-12 flex items-center justify-center cursor-pointer
            hover:bg-stone-950/20">
                <div className="relative">
                    <div className="w-2 h-2 bg-red-600 rounded-full absolute right-0 top-0"></div>
                    <PiBell size={20} className="text-stone-200" />
                </div>
            </button>
            <button className="border-l border-stone-800 h-full w-12 flex items-center justify-center cursor-pointer
            hover:bg-stone-950/20">
                <div className="rounded-full w-7 h-7 bg-stone-400 overflow-hidden">
                    <Image src={ProfilePic} alt="" className="w-full object-cover" width={124} height={124} />
                </div>
            </button>
        </section>
    </header>
}