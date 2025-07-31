

import ExhibitorsShowcase from "@/components/ExhibitorsShowcase";
import Header from "@/components/Header";
import HeroPage from "@/components/HeroPage";
import ThankYouContact from "@/components/ThankYouContact";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <HeroPage />
        <ExhibitorsShowcase />
        <ThankYouContact />
      </div>
    </>
  );
}
