import Image from "next/image";
import { PiArrowFatLinesUpFill, PiArrowRight, PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import PlaceholderBanner from "../../public/9kings_banner.jpg"
import GowSeal from "../../public/gow_seal.svg"
import Link from "next/link";

export default function Slider() {
  return <section className="w-full flex gap-4 items-center h-fit">
    <button className="h-8 w-8 min-w-8 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-800/50 cursor-pointer items-center justify-center flex">
      <PiCaretLeftBold />
    </button>
    <main className="w-full flex flex-col gap-2 h-full">
      <Link href={"/"} className="relative min-h-72 h-[400px] bg-stone-800 w-full rounded-xl overflow-hidden border border-stone-800 shadow-xl">
        <div className="absolute w-full h-full flex flex-col justify-between p-4 bg-gradient-to-t from-black to-black/0 z-10">
          <div className="w-full flex justify-between">
            <Image src={GowSeal} alt="" className="w-30 drop-shadow-md" />
            <div className="flex gap-2">
              <div className="flex gap-1 items-center px-2 py-1 text-xs text-yellow-400 bg-stone-950/75 backdrop-blur-xs w-fit rounded-md">
                <span className="uppercase">Roguelike</span> 
              </div> 
              <div className="flex gap-1 items-center px-2 py-1 text-xs text-yellow-400 bg-stone-950/75 backdrop-blur-xs w-fit rounded-md">
                <span>40.234</span> 
                <PiArrowFatLinesUpFill />
              </div> 
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-end">
              <h1 className="font-bold text-3xl">9Kings</h1>
              <p className="text-xl font-medium text-yellow-400">Sad Socket Studios</p>
            </div>
            <p className="max-w-[800px]">9 Kings. 9 cards. 9 tiles. In this pocket roguelike strategy game, you have to build a kingdom powerful enough to withstand the other king's invasions and be crowned the king of kings.</p>
          </div>
        </div>
        <Image src={PlaceholderBanner} alt="" fill className="object-left object-cover" />
      </Link>
      <section className="w-full flex gap-2 items-center">
        <button className="w-full rounded-lg h-2 cursor-pointer bg-yellow-400 transition-all ease-in-out duration-200"></button>
        <button className="w-full rounded-lg h-2 bg-stone-800 cursor-pointer hover:bg-stone-900 transition-all ease-in-out duration-200"></button>
        <button className="w-full rounded-lg h-2 bg-stone-800 cursor-pointer hover:bg-stone-900 transition-all ease-in-out duration-200"></button>
        <button className="w-full rounded-lg h-2 bg-stone-800 cursor-pointer hover:bg-stone-900 transition-all ease-in-out duration-200"></button>
        <button className="w-full rounded-lg h-2 bg-stone-800 cursor-pointer hover:bg-stone-900 transition-all ease-in-out duration-200"></button>
      </section>
    </main>
    <button className="h-8 w-8 min-w-8 rounded-lg border border-stone-700 bg-stone-800 hover:bg-stone-800/50 cursor-pointer items-center justify-center flex">
      <PiCaretRightBold />
    </button>
  </section>
}