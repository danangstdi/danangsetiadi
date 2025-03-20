import Header from "@/components/layouts/Header";
import BottomNav from "@/components/layouts/BottomNav";
import Hero from "@/components/ui/home/Hero";
import { CodeSlash, VectorPen, LayoutTextWindowReverse } from "react-bootstrap-icons";
import ServiceCard from "@/components/partials/card/ServiceCard";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="">
        <Hero/>
        <section id="current-project" className="mt-32">
          <div className="text-center">
            <h1 className="text-3xl poppins-bold text-gray-800">Our Services</h1>
            <p className="line-height-2 text-sm text-gray-600 lg:text-base">Our <strong>best services</strong> for your finest needs.</p>
            <div className="grid mx-10 gap-12 my-14 sm:grid-cols-2 lg:mx-24 xl:mx-72 lg:grid-cols-3">
              <ServiceCard label='Web Development' icon={<CodeSlash size={32} className=""/>} text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, consequuntur saepe dolorem esse blanditiis iste!'/>
              <ServiceCard label='Design Graphic' icon={<VectorPen size={32} className=""/>} text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, consequuntur saepe dolorem esse blanditiis iste!'/>
              <ServiceCard label='UI/UX Design' icon={<LayoutTextWindowReverse size={32} className=""/>} text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, consequuntur saepe dolorem esse blanditiis iste!'/>
            </div>
          </div>
        </section>
      </main>
      <BottomNav/>
    </>
  );
}
