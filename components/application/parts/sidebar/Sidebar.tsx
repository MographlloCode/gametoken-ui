import Link from "next/link";
import MenuItem from "./MenuItem";
import { PiArrowSquareOut } from "react-icons/pi";
import Image from "next/image";
import CommunityItem from "./CommunityItem";
import CategoryItem from "./CategoryItem";

export default function Sidebar() {
    return <div className="hidden flex-col gap-4 absolute left-0 top-0 h-full w-72 bg-[#111] backdrop-blur-md
     border-r border-stone-800 z-50 shadow-xl py-2 px-4 overflow-x-hidden overflow-y-auto">
        <div className="flex flex-col w-full gap-1">
            <MenuItem menuText="Home" iconName="home" />
            <MenuItem menuText="Explore" iconName="explore" />
            <MenuItem menuText="Achievments" iconName="achievments" />
            <MenuItem menuText="Contests" iconName="contests" />
            <MenuItem menuText="Forum" iconName="forum" />
        </div>
        <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between items-center text-sm">
                <h1 className="uppercase text-stone-600">Community</h1>
                <Link href="/" className="flex items-center gap-1 text-yellow-400">
                    <span>See all</span>
                    <PiArrowSquareOut />
                </Link>
            </div>
            <div className="flex flex-col w-full">
                <CommunityItem />
                <CommunityItem />
                <CommunityItem />
                <CommunityItem />
                <CommunityItem />
            </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center text-sm">
                <h1 className="uppercase text-stone-600">Genres</h1>
                <Link href="/" className="flex items-center gap-1 text-yellow-400">
                    <span>See all</span>
                    <PiArrowSquareOut />
                </Link>
            </div>
            <div className="flex flex-col w-full">
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>
    </div>
}