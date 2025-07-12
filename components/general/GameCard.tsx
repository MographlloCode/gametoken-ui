import { PiArrowFatLinesUpFill, PiArrowSquareOut } from "react-icons/pi";

type GameCardProps = {
  backgroundUrl?: string;
};

export default function GameCard({ backgroundUrl }: GameCardProps) {
  const backgroundStyle = backgroundUrl ? { backgroundImage: `url('/${backgroundUrl}')` } : {};

  return (
    <article className="flex flex-col gap-3 w-52">
        <div
            className="flex flex-col justify-end bg-cover bg-center w-full h-64 rounded-xl overflow-hidden p-2 group"
            style={backgroundStyle}
        >
            <div className="flex justify-between">
                <div className="px-2 py-1 text-sm text-yellow-400 bg-stone-950/75 backdrop-blur-[2px] w-fit rounded-md">
                    #45
                </div> 
                <div className="flex gap-1 items-center px-2 py-1 text-sm text-yellow-400 bg-stone-950/75 backdrop-blur-[2px] w-fit rounded-md">
                    40.234 <PiArrowFatLinesUpFill />
                </div> 
            </div>
        </div>
        <main className="flex justify-between items-center">
            <div className="flex flex-col">
                <h1 className="font-semibold text-stone-200 text-lg leading-6">9Kings</h1>
                <p className="text-stone-500 uppercase text-sm">Sad Socket Studios</p>
            </div>
            <PiArrowSquareOut size={24} className="text-yellow-400"/>
        </main>
    </article>
  );
}
