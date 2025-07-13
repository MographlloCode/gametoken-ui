import Image from "next/image";
import Link from "next/link";

import ProfilePic from "../../../../public/profile_pic.jpg"

export default function CategoryItem() {
    return <Link href={"/"} className="flex items-center text-sm justify-between gap-2 hover:bg-stone-900 p-2 rounded-lg border border-[#111] hover:border-stone-700/50">
        <div className="flex items-center gap-2">
            <div className="rounded-lg w-7 h-7 bg-stone-400 overflow-hidden">
                <Image src={ProfilePic} alt="" className="w-full object-cover" width={124} height={124} />
            </div>
            <h1 className="text-stone-200 font-light">Roguelike Boyz</h1>
        </div>
        <div className="p-1 bg-red-600 felx items-center justify-center text-xs rounded-full text-stone-200 font-medium">
            +99
        </div>
    </Link>
}
