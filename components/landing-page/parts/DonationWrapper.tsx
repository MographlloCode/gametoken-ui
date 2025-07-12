import Link from "next/link";
import DonationBar from "../DonationBar";

export default function DonationWrapper() {
    return <section className="border-b border-b-stone-800 p-2 overflow-x-hidden">
        <div className="flex gap-2 items-center h-full justify-center">
            <DonationBar />
            <DonationBar />
            <DonationBar />
            <DonationBar />
            <DonationBar />
        </div>
    </section>
}