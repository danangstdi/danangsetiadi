import dynamic from 'next/dynamic';
import BottomNav from "@/components/layouts/BottomNav";
import Hero from "@/components/ui/home/Hero";
import Services from "@/components/ui/home/Services";
import Tools from "@/components/ui/home/Tools";
import WebDevelopment from "@/components/ui/home/WebDevelopment";
import Footer from "@/components/layouts/Footer";
import Certificate from "@/components/ui/home/Certificate";
const Header = dynamic( () => {
  return import( '@/components/layouts/Header' );
}, { ssr: false } );

export default function Home() {
  return (
    <>
      <Header/>
      <main className="pb-20">
        <Hero/>
        {/* <div className='bg-gray-100 dark:bg-gradient-to-tr from-teal-700 bg-pink-custom'> */}
        <Tools/>
        <Services/>
        {/* </div> */}
        <WebDevelopment/>
        <Certificate/>
      </main>
      <BottomNav/>
      <Footer/>
    </>
  );
}
