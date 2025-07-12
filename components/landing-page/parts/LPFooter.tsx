import Link from "next/link";
import GameTokenLogo from "../../../public/game_token_hor_logo.svg"
import Image from "next/image";
import { PiLinkedinLogoFill, PiXLogoFill, PiDiscordLogoFill, PiHeartFill } from "react-icons/pi";
export default function LPFooter() {
    return <footer className="flex flex-col w-full lg:flex-row border-t border-stone-800">
        <section className="flex justify-between border-b border-stone-800 p-4 lg:w-fit lg:flex-col lg:justify-start lg:gap-2 lg:items-center lg:border-r lg:border-b-0">
            <Link href={"/"}>
                <Image width={240} height={100} src={GameTokenLogo} alt="GameToken" className="w-22 lg:w-32" />
            </Link>
            <div className="flex items-center gap-4">
                <Link href="" className="text-yellow-400"><PiLinkedinLogoFill  size={18}/></Link>
                <Link href="" className="text-yellow-400"><PiXLogoFill  size={18}/></Link>
                <Link href="" className="text-yellow-400"><PiDiscordLogoFill size={18} /></Link>
            </div>
        </section>
        <section className="flex justify-between w-full">
            <div className="flex flex-col gap-3 p-4 border-r border-stone-800 w-full">
                <h2 className="uppercase text-xs font-semibold text-stone-700">Categories</h2>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
            </div>
            <div className="flex flex-col gap-3 p-4 border-r border-stone-800 w-full">
                <h2 className="uppercase text-xs font-semibold text-stone-700">Studios</h2>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
            </div>
            <div className="flex flex-col gap-3 p-4 border-r border-stone-800 w-full">
                <h2 className="uppercase text-xs font-semibold text-stone-700">Know us</h2>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
                <Link href={"/"} className="text-stone-500 font-medium text-sm hover:text-stone-400">Roguelike</Link>
            </div>
        </section>
        <section className="p-8 text-stone-500 text-sm border-t border-stone-800 lg:border-0 lg:max-w-96 w-full">
            <div className="flex flex-col gap-3 max-w-96">
                <h1 className="font-semibold text-yellow-400">Hey there! :D</h1>
                <p>Around here we survive from donations, if you like our platform, leave us some changes for the coffee token</p>
                <Link href={""} className="uppercase flex gap-1 py-1 px-2 bg-yellow-300 hover:bg-yellow-500 text-stone-800 font-bold w-fit text-xs rounded-md">
                    <span>Support us</span>
                    <PiHeartFill/>
                </Link>
            </div>
        </section>
    </footer>
}