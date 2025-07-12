import Link from "next/link";

export default function DonationBar() {
    return <div className="flex items-center overflow-clip rounded-lg text-sm w-fit">
        <div className="flex items-center gap-0.5 bg-yellow-400 text-stone-800 font-semibold px-2 py-1">
            <span>USD</span>
            <span>40.00</span>
        </div>
        <div className="bg-stone-800 text-stone-200 px-3 py-1">
            <Link href="/">@yaggerthemeister</Link>
        </div>
        <div className="bg-stone-700/50 text-stone-200 px-3 py-1 text-nowrap">
            <span>Segue o meu jogo aí galera! <Link href="/" className="underline text-yellow-400">@yaggerthemeister</Link></span>
        </div>
    </div>
}
