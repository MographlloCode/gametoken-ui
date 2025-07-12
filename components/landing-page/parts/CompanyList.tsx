import Image from "next/image";
import SadSocketLogo from "../../public/sadsocket_logo.png"
import RockstarGames from "../../public/rockstar-games.svg"
import PlaystationStudio from "../../public/playstation-studios-1.svg"
import RiotGames from "../../public/riot-games.svg"

export default function CompanyList() {
    return <section className="flex gap-8 items-center overflow-hidden border-b border-stone-800 py-4 justify-center">
        <Image src={SadSocketLogo} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RockstarGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RiotGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={PlaystationStudio} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={SadSocketLogo} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RockstarGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RiotGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={PlaystationStudio} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={SadSocketLogo} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RockstarGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RiotGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={PlaystationStudio} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={SadSocketLogo} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RockstarGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RiotGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={PlaystationStudio} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={SadSocketLogo} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RockstarGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={RiotGames} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
        <Image src={PlaystationStudio} width={200} height={64} alt='Sad Socket Studios' className="w-16"/>
    </section>
}