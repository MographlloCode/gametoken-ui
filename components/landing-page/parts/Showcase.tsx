import Image from "next/image";
import Placeholder from "../../../public/placeholder_peach.png"

export default function Showcase() {
    return <section className="flex flex-col">
        <div className="p-8 text-xl md:text-3xl text-stone-200 uppercase text-center border-b border-stone-800">
            <h1 className="font-semibold">Support your <span className="text-yellow-400">Favorite Game</span></h1>
        </div>
        <main className="flex w-full max-h-[700px] overflow-hidden relative justify-center">
            <div className="p-3 md:p-4 bg-stone-950/60 absolute backdrop-blur-sm font-semibold text-yellow-400 uppercase border border-stone-800 border-t-0 text-base md:text-lg">
                <p>that’s how</p>
            </div>
            <Image src={Placeholder} alt="Peach" className="w-full object-cover" />
        </main>
    </section>
}