import Image from "next/image";
import Link from "next/link";
import GameTokenLogo from "../../../public/game_token_hor_logo.svg"

export default function LPHeader() {
    return <header className="flex justify-between border-b border-b-stone-800">
        <section className="flex items-center justify-center border-r border-r-stone-800 w-full md:w-fit p-4">
            <Link href="/" className="flex items-center justify-center w-full h-full">
                <Image width={240} height={100} src={GameTokenLogo} alt="GameToken" className="w-24 md:w-24" />
            </Link>
        </section>
        <section className="flex w-fit items-center">
            <Link href="/login" className="flex items-center justify-center text-center text-sm text-stone-200 w-24 h-full border-l border-l-stone-800 p-4 text-nowrap 
            hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-400 hover:border hover:font-bold
            active:bg-yellow-400/10 active:border-yellow-400 active:text-yellow-400 active:border active:font-bold">
                Log In
            </Link>
            <Link href="/register" className="flex items-center justify-center text-center text-sm text-stone-200 w-24 h-full border-l border-l-stone-800 p-4 text-nowrap 
            hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-400 hover:border hover:font-bold
            active:bg-yellow-400/10 active:border-yellow-400 active:text-yellow-400 active:border active:font-bold">
                Sign Up
            </Link>
        </section>
    </header>
}