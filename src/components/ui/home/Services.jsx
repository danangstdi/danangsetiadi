import ServiceCard from "@/components/partials/card/ServiceCard"
import { CodeSlash, VectorPen, LayoutTextWindowReverse } from "react-bootstrap-icons";

export default function Services() {
  return (
    <section id="our-services" className="mt-24 lg:mt-32">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Our Services</h1>
        <p className="line-height-2 text-sm text-gray-600 lg:text-base dark:text-slate-300">Our <strong>best services</strong> for your finest needs.</p>
        <div className="grid mx-10 gap-12 my-14 sm:grid-cols-2 lg:mx-24 xl:mx-72 lg:grid-cols-3">
          <ServiceCard main={true} label='Web Development' icon={<CodeSlash size={32}/>} text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, consequuntur saepe dolorem esse blanditiis iste!'/>
          <ServiceCard main={false} label='Design Graphic' icon={<VectorPen size={32}/>} text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, consequuntur saepe dolorem esse blanditiis iste!'/>
          <ServiceCard main={false} label='UI/UX Design' icon={<LayoutTextWindowReverse size={32}/>} text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, consequuntur saepe dolorem esse blanditiis iste!'/>
        </div>
      </div>
    </section>
  )
}
