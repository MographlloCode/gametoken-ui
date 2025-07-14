import DonationWrapper from "@/components/general/parts/DonationWrapper";
import LPCopyright from "@/components/landing-page/parts/LPCopyright";
import LPFooter from "@/components/landing-page/parts/LPFooter";
import LPHeader from "@/components/landing-page/parts/LPHeader";
import Image from "next/image";

import Placeholder from "../../../public/placeholder_peach.png"
import ExternalLoginContainer from "@/components/landing-page/ExternalLoginContainer";
import LoginCredentialForms from "@/components/landing-page/LoginCredentialsForm";

export default function Home() {
  return (
    <>
      <LPHeader />
      <DonationWrapper />
      <main className="flex grow w-full">
        <section className="flex flex-col gap-8 p-8 w-full lg:w-[700px] items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl text-stone-200">Hey there!</h1>
            <p className="text-stone-200">It’s great to see you :D</p>
          </div>
          <ExternalLoginContainer />
          <LoginCredentialForms />
        </section>
        <section className="hidden lg:block w-full overflow-hidden border-l border-stone-800 max-h-[750px]">
          <Image src={Placeholder} alt="" className="w-full object-cover"/>
        </section>
      </main>
      <LPFooter />
      <LPCopyright/>
    </>
  );
}
