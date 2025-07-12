import Link from "next/link";
import GoogleLogo from "../../public/google_logo.svg"
import RedditLogo from "../../public/reddit_logo.svg"
import XLogo from "../../public/x_logo.svg"
import SteamLogo from "../../public/steam_logo.svg"
import Image from "next/image";


export default function ExternalRegisterContainer() {
    return <div className="flex flex-col gap-2 items-center">
        <h1 className="uppercase text-stone-500">External Register</h1>
        <main className="flex gap-4 items-center">
            <Link href="/" className="flex items-center justify-center rounded-xl h-12 w-12 bg-stone-800 border border-stone-700
            hover:shadow-xl hover:bg-stone-950/10 transition-all ease-in-out duration-300">
                <Image src={GoogleLogo} alt="Google External Login" width={30}  className="drop-shadow-lg"/>
            </Link>
            <Link href="/" className="flex items-center justify-center rounded-xl h-12 w-12 bg-stone-800 border border-stone-700
            hover:shadow-xl hover:bg-stone-950/10 transition-all ease-in-out duration-300">
                <Image src={XLogo} alt="Google External Login" width={26}  className="drop-shadow-lg"/>
            </Link>
            <Link href="/" className="flex items-center justify-center rounded-xl h-12 w-12 bg-stone-800 border border-stone-700
            hover:shadow-xl hover:bg-stone-950/10 transition-all ease-in-out duration-300">
                <Image src={SteamLogo} alt="Google External Login" width={30}  className="drop-shadow-lg"/>
            </Link>
            <Link href="/" className="flex items-center justify-center rounded-xl h-12 w-12 bg-stone-800 border border-stone-700
            hover:shadow-xl hover:bg-stone-950/10 transition-all ease-in-out duration-300">
                <Image src={RedditLogo} alt="Google External Login" width={30} className="drop-shadow-lg" />
            </Link>
        </main>
    </div>
}