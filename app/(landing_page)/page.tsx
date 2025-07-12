import CompanyList from "@/components/landing-page/parts/CompanyList";
import CTASection from "@/components/landing-page/parts/CTASection";
import DonationWrapper from "@/components/landing-page/parts/DonationWrapper";
import HeroSection from "@/components/landing-page/parts/HeroSection";
import LPCopyright from "@/components/landing-page/parts/LPCopyright";
import LPFooter from "@/components/landing-page/parts/LPFooter";
import LPHeader from "@/components/landing-page/parts/LPHeader";
import Showcase from "@/components/landing-page/parts/Showcase";
import TopGames from "@/components/landing-page/parts/TopGames";

export default function Home() {
  return (
    <>
      <LPHeader />
      <DonationWrapper />
      <HeroSection />
      <CompanyList />
      <TopGames />
      <Showcase />
      <CTASection/>
      <LPFooter />
      <LPCopyright/>
    </>
  );
}
