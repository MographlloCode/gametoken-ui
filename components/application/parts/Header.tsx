import Image from "next/image";
import Link from "next/link";
import GameTokenLogo from "../../../public/game_token_hor_logo.svg"
import { PiList } from "react-icons/pi";

export default function Header() {
    return <header className="flex justify-between border-b border-b-stone-800">
        <section className="flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center h-full border-r border-r-stone-800 w-full md:w-fit p-4">
                <Image width={240} height={100} src={GameTokenLogo} alt="GameToken" className="w-24 md:w-24" />
            </Link>
            <button className="flex items-center justify-center w-18 border-r h-full border-stone-800 cursor-pointer hover:bg-stone-950">
                <PiList size={26} className="text-stone-200"/>
            </button>
        </section>
        <section className="flex items-center">

        </section>
    </header>
}