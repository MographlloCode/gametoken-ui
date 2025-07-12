import Link from "next/link";
import { PiArrowSquareOutFill } from "react-icons/pi";
export default function CTASection() {
    return <section className="flex gap-4 border-stone-800 p-4 py-6 md:p-8 items-center justify-center border-t">
        <Link href={"/"} className="group flex flex-col md:flex-row items-center justify-center md:gap-4 text-stone-200 text-2xl">
            <h1 className="text-base md:text-2xl uppercase text-center font-semibold">Get started to <span className="text-yellow-400 group-hover:text-yellow-600 transition duration-200 ease-in-out">support your favorite game</span></h1>
            <PiArrowSquareOutFill className="text-yellow-400 group-hover:text-yellow-600 transition duration-200 ease-in-out" size={30} />
        </Link>
    </section>
}