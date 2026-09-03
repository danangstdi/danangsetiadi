import BottomNav from "@/components/layouts/BottomNav";
import Hero from "./_partials/Hero";
import Services from "./_partials/Services";
import Tools from "./_partials/Tools";
import WebDevelopment from "./_partials/WebDevelopment";
import GameDevelopment from "./_partials/GameDevelopment";
import Footer from "@/components/layouts/Footer";
import Certificate from "./_partials/Certificate";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="pb-20">
        <Hero/>
        <Tools/>
        <Services/>
        <WebDevelopment/>
        <GameDevelopment/>
        <Certificate/>
      </main>
      <BottomNav/>
      <Footer/>
    </>
  );
}
