import Image from "next/image";
import RaiseYourGames from "../../public/raise_your_games.svg"
import LineScratch from "../../public/scratch_line.svg"
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

export default function HeroSection() {
    return <section className="flex flex-col md:flex-row w-full border-b border-stone-800">
        <div className="w-full flex items-center justify-center p-8 lg:p-24 border-b md:border-r md:border-b-0 border-stone-800 max-h-[700px]">
            <Image src={RaiseYourGames} width={700} height={400} className="w-full" alt="Raise your games" />
        </div>
        <div className="w-full flex flex-col gap-8 items-center justify-center p-8 md:p-16 text-stone-200">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-center text-xl md:text-3xl font-bold uppercase max-w-[450px]">Discover, Vote and RAISE your <span className="relative">favorite GAME<Image src={LineScratch} width={120} height={80} alt="" className="w-72 absolute bottom-0 right-0" /></span></h1>
                <p className="text-center text-md md:text-xl max-w-[450px] font-light">Embrace your favorite indie games by raising them to the top of our leaderboards</p>
            </div>
            <Link href="/" className="flex gap-2 items-center justify-center font-semibold uppercase px-4 py-2 border border-yellow-400 text-yellow-400 
            hover:bg-yellow-400/10 active:bg-yellow-400/20 transition-all ease-in-out">Get Started <PiArrowRight size={20} /></Link>
        </div>
    </section>
}