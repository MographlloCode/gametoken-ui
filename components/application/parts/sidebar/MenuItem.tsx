import Link from "next/link";
import { PiGameController, PiHouse, PiMedal, PiNewspaperClipping, PiTrophy } from "react-icons/pi";

type MenuItemProps = {
    iconName: string,
    menuText: string
}

const switchIconCase = (iconName: string) => {
    switch (iconName) {
        case "home":
            return <PiHouse className="text-stone-200" size={20} />
        case "explore":
            return <PiGameController className="text-stone-200" size={20} />
        case "achievments":
            return <PiTrophy className="text-stone-200" size={20} />
        case "contests":
            return <PiMedal className="text-stone-200" size={20} />
        case "forum":
            return <PiNewspaperClipping className="text-stone-200" size={20} />
        default:
            break;
    }
}

export default function MenuItem({iconName, menuText}: MenuItemProps) {
    return <Link href={"/"} className="flex items-center gap-2 hover:bg-stone-900 p-2 rounded-lg border border-[#111] hover:border-stone-700/50">
        {switchIconCase(iconName)}
        <h1 className="text-stone-200 font-light">{menuText}</h1>
    </Link>
}