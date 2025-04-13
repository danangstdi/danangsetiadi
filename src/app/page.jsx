import BottomNav from "@/components/layouts/BottomNav";
import Hero from "@/components/ui/home/Hero";
import Services from "@/components/ui/home/Services";
import Tools from "@/components/ui/home/Tools";
import WebDevelopment from "@/components/ui/home/WebDevelopment";
import Footer from "@/components/layouts/Footer";
import Certificate from "@/components/ui/home/Certificate";
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
        <Certificate/>
      </main>
      <BottomNav/>
      <Footer/>
    </>
  );
}
