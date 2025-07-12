import Link from "next/link";
import GameCard from "../../general/GameCard";
import { PiArrowRight, PiArrowLeft } from "react-icons/pi";


export default function TopGames() {
    return <section className="flex flex-col">
        <header className="flex flex-col md:flex-row uppercase font-semibold">
            <div className="w-full py-4 text-center border-b md:border-r md:border-b-0 border-stone-800">
                <h1 className="text-stone-500 text-xl">Top Voted Games</h1>
            </div>
            <div className="w-full py-4 text-center border-b md:border-r md:border-b-0 border-stone-800">
                <Link href={"/"} className="text-yellow-400 text-xl flex gap-2 items-center justify-center hover:text-yellow-600 transition duration-200">Get Started to Vote <PiArrowRight size={24}/></Link>
            </div>
            <div className="flex justify-between text-center border-b md:border-r md:border-b-0 border-stone-800 text-xl w-full">
                <button className="flex items-center justify-center py-4 text-center text-stone-500 w-full border-r border-stone-800 hover:bg-yellow-400/10 transition-all
                ease-in-out cursor-pointer hover:border-yellow-400 hover:text-yellow-400 hover:border">
                    <PiArrowLeft size={24} />
                </button>
                <button className="flex items-center justify-center py-4 text-center text-stone-500 w-full hover:bg-yellow-400/10 transition-all ease-in-out cursor-pointer
                hover:border-yellow-400 hover:text-yellow-400 hover:border">
                    <PiArrowRight size={24} />
                </button>
            </div>
        </header>
        <main className="flex overflow-x-auto">
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
            <Link href={"/"} className="p-8 border border-r-0 border-stone-800 hover:bg-stone-950 transition-all ease-in-out duration-200">
                <GameCard backgroundUrl="9kings_cover.jpg"/>
            </Link>
        </main>
    </section>
}