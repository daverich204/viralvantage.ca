import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../element/clients";
import GetInTouch from "../element/get-in-touch";
import Newsletter from "../element/newsletter";
import TeamSlider3 from "../component/teamSlider-3";
import Testimonial from "../element/testimonial";
import AboutUs from "../element/aboutUs";
import Footer from "../layout/footer";
import Header from "../layout/header";

function AboutUs_3() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About Us</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
        <AboutUs />

        {/* <!-- Video --> */}
        {/*<section className="video-wraper-1">*/}
        {/*  <div className="content-inner bg-gray">*/}
        {/*    <div className="container">*/}
        {/*      <div className="row align-items-center">*/}
        {/*        <div*/}
        {/*          className="col-lg-6 wow fadeInLeft"*/}
        {/*          data-wow-duration="2s"*/}
        {/*          data-wow-delay="0.2s"*/}
        {/*        >*/}
        {/*          <div className="section-head style-3 mb-4">*/}
        {/*            <h2 className="title">Watch Us How Our Team Work Togather</h2>*/}
        {/*            <div className="dlab-separator style-2 bg-primary"></div>*/}
        {/*          </div>*/}
        {/*          <p>*/}
        {/*            Praesent fermentum nisl at ipsum facilisis viverra. Ut*/}
        {/*            elementum accumsan finibus. Cras placerat lacinia mi, ac*/}
        {/*            dictum ante. Donec libero enim, tincidunt sit amet venenatis*/}
        {/*            id, maximus eu quam.{" "}*/}
        {/*          </p>*/}
        {/*          <ul className="list-check style-1 primary m-b30">*/}
        {/*            <li>Suspendisse ullamcorper mollis orci in facilisis.</li>*/}
        {/*            <li>Etiam orci magna, accumsan varius enim volutpat.</li>*/}
        {/*            <li>*/}
        {/*              Donec fringilla velit risus, in imperdiet turpis euismod*/}
        {/*              quis.*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*        <div*/}
        {/*          className="col-lg-6 wow fadeInRight"*/}
        {/*          data-wow-duration="2s"*/}
        {/*          data-wow-delay="0.4s"*/}
        {/*        >*/}
        {/*          <div className="video-bx style-2">*/}
        {/*            <img src="images/video/pic2.jpg" alt="" />*/}
        {/*            <div className="video-btn"></div>*/}
        {/*            <a*/}
        {/*              href="#"*/}
        {/*              className="popup-youtube"*/}
        {/*              onClick={() => setOpen(true)}*/}
        {/*            >*/}
        {/*              <i className="flaticon-play"></i>*/}
        {/*            </a>*/}
        {/*          </div>*/}
        {/*          <ModalVideo*/}
        {/*            channel="youtube"*/}
        {/*            autoplay*/}
        {/*            isOpen={isOpen}*/}
        {/*            videoId="FzcfZyEhOoI"*/}
        {/*            onClose={() => setOpen(false)}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* <!-- Services --> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-3 text-center mb-4">
              <h2 className="title">Our Speciallization</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="icon-bx-wraper style-5 box-hover text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-office"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Strategy & Research</h4>
                    <p className="m-b20">
                      Mauris ut felis malesuada eros varius tristique a at orci.
                      Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                      venenatis ipsum, et porttitor.
                    </p>
                    <Link href="/services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="icon-bx-wraper style-5 box-hover active text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-coding"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Web Development</h4>
                    <p className="m-b20">
                      Mauris ut felis malesuada eros varius tristique a at orci.
                      Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                      venenatis ipsum, et porttitor.
                    </p>
                    <Link href="/services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="icon-bx-wraper style-5 box-hover text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-laptop"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Web Solution</h4>
                    <p className="m-b20">
                      Mauris ut felis malesuada eros varius tristique a at orci.
                      Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                      venenatis ipsum, et porttitor.
                    </p>
                    <Link href="/services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Team --> */}
        {/*<section className="content-inner-1 bg-gray">*/}
        {/*  <div className="container">*/}
        {/*    <div className="section-head style-3 text-center">*/}
        {/*      <h2 className="title">Our Expertise</h2>*/}
        {/*      <div className="dlab-separator style-2 bg-primary"></div>*/}
        {/*    </div>*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-lg-12">*/}
        {/*        <TeamSlider3 />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* <!-- Newsletter --> */}
        <Newsletter />

        {/* <!-- Testimonials --> */}
        {/*<Testimonial />*/}

        {/* <!-- Clients Logo --> */}
        <div className="p-tb50 bg-gray">
          <div className="container">
            <div className="clients-carousel owl-none owl-carousel">
              <ClientSlider />
            </div>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs_3;
