import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

export default function LoginCredentialForms() {
    return <form className="flex flex-col gap-6 items-center w-96 px-8">
        <div className="flex flex-col gap-3 items-center w-full">
            <h1 className="text-stone-500 uppercase">Credentials</h1>
            <input type="text" name="username" className="w-full bg-stone-800/30 focus:bg-stone-950 border-stone-700 border p-2 placeholder-stone-500 text-stone-200 transition-all ease-in-out duration-300 outline-0" placeholder="Username"></input>
            <input type="password" name="password" className="w-full bg-stone-800/30 focus:bg-stone-950 border-stone-700 border p-2 placeholder-stone-500 text-stone-200 transition-all ease-in-out duration-300 outline-0" placeholder="Password"></input>
            <div className="self-start text-stone-200 flex gap-1">
                <input type="checkbox" name="remind-me"/>
                <label className="text-sm">Remind me</label>
            </div>
        </div>
        <div className="flex flex-col items-center gap-3">
            <button className="flex gap-2 items-center justify-center font-semibold uppercase px-4 py-2 border border-yellow-400 text-yellow-400 
            hover:bg-stone-950/60 active:bg-stone-950/10 transition-all ease-in-out cursor-pointer">Log In <PiArrowRight size={20} /></button>
            <Link href="/register" className="text-sm text-yellow-400 underline">Don’t have an account? Sign Up!</Link>
        </div>
    </form>
}