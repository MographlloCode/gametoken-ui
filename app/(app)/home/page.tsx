import Slider from "@/components/application/Slider";
import GameCard from "@/components/general/GameCard";
import Image from "next/image";
import Link from "next/link";
import { PiHeartFill } from "react-icons/pi";
import ProfilePic from "../../../public/profile_pic.jpg"

export default function Home() {
    return <div className="flex flex-col overflow-x-hidden overflow-y-auto w-full h-full text-stone-200 gap-8 px-4 py-8 md:p-8">
        <Slider />
        <section className="w-full flex gap-4 items-center">
            <div>
                <div className="w-96 flex flex-col bg-stone-800 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex gap-4 bg-yellow-500 h-full w-full p-8 items-center">
                        <div className="bg-stone-900 w-32 rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2">
                            <div className="relative w-20 h-20 overflow-hidden rounded-2xl">
                                <Image src={ProfilePic} alt="" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <h1 className="leading-4 text-sm">Gustavo Mello</h1>
                                <p className="text-xs text-stone-400 w-full overflow-hidden">@mographllocodemographllocodemographllocode</p>
                            </div>
                        </div>
                        <div className="bg-stone-900 w-32 rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2">
                            <div className="relative w-20 h-20 overflow-hidden rounded-2xl">
                                <Image src={ProfilePic} alt="" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <h1 className="leading-4 text-sm">Gustavo Mello</h1>
                                <p className="text-xs text-stone-400 w-full overflow-hidden">@mographllocodemographllocodemographllocode</p>
                            </div>
                        </div>
                        <div className="bg-stone-900 w-32 rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2">
                            <div className="relative w-20 h-20 overflow-hidden rounded-2xl">
                                <Image src={ProfilePic} alt="" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <h1 className="leading-4 text-sm">Gustavo Mello</h1>
                                <p className="text-xs text-stone-400 w-full overflow-hidden">@mographllocode</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-4 min-h-24 items-center">
                        <div className="flex flex-col max-w-full">
                            <h1 className="text-xl">Our Supporters</h1>
                            <p className="text-stone-400">Our Supporters</p>
                        </div>
                        <Link href={""} className="uppercase flex items-center gap-1 p-2 bg-yellow-300 hover:bg-yellow-500 text-stone-800 font-bold w-fit text-xs rounded-md">
                            <span>Support us</span>
                            <PiHeartFill/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-sm text-stone-600 uppercase">Based on your preferences</h1>
                    <Link href={"/"} className="text-sm text-yellow-400 uppercase font-medium">Explore</Link>
                </div>
                <div className="flex w-full gap-4 overflow-x-auto">
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                    <GameCard backgroundUrl="9kings_cover.jpg" />
                </div>
            </div>
        </section>
        <section className="w-full flex gap-4 items-center justify-between">
            <section className="flex flex-col gap-4"></section>
            <section className="grow"></section>
            <section className="flex flex-col gap-2">
                <header className="flex justify-between">
                    <h1 className="uppercase font-light text-stone-600">Game of the week</h1>
                    <Link href={"/"} className="uppercase text-yellow-400">See Rank</Link>
                </header>
                <main className="flex flex-col gap-2">
                    <Link href={"/"} className="w-full p-2 border-stone-700 bg-stone-800 flex justify-between">
                        <div className="flex items-center gap-1">
                            <Image src="" alt="" />
                            <Image src="" alt="" />
                            <h1>9Kings</h1>
                        </div>
                        <p className="font-light text-yellow-400 uppercase">43.450</p>
                    </Link>
                    <Link href={"/"} className="w-full p-2 border-stone-700 bg-stone-800 flex justify-between">
                        <div className="flex items-center gap-1">
                            <Image src="" alt="" />
                            <Image src="" alt="" />
                            <h1>9Kings</h1>
                        </div>
                        <p className="font-light text-yellow-400 uppercase">43.450</p>
                    </Link>
                    <Link href={"/"} className="w-full p-2 border-stone-700 bg-stone-800 flex justify-between">
                        <div className="flex items-center gap-1">
                            <p>#<span>3</span></p>
                            <h1>9Kings</h1>
                        </div>
                        <p className="font-light text-yellow-400 uppercase">43.450</p>
                    </Link>
                </main>
            </section>
        </section>
    </div>
}