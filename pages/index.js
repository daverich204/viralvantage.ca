import { useEffect } from "react";
import PricingT3 from "../component/pricingTable";
import AboutUs from "../element/aboutUs";
import GetInTouch3 from "../element/get-in-touch";
import Newsletter from "../element/newsletter";
import Features3 from "../element/our-features";
import Projects from "../element/projects";
import Service from "../element/service";
import Slider from "../element/slider";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Clients from "../element/clients";
import Footer from "../layout/footer";
import Header from "../layout/header";

function Index3() {
 
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider />
        <Service />
        <AboutUs />
        <Features3 />
        {/*<Projects />*/}
        <Newsletter />
        {/*<Team />*/}
        {/*<PricingT3 />*/}
        {/*<Testimonial />*/}
        {/*<Blog />*/}
        {/*<Clients />*/}
        <GetInTouch3 />
        <Footer />
      </div>
    </>
  );
}

export default Index3;
