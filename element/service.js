import {useState} from "react";
import Link from 'next/link';

function Service() {
  const [open, setOpen] = useState("p2")
  return (
    <>
      {/* <!-- Service --> */}
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-3 text-center mb-4">
            <h2 className="title">Services We Offer</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
              <div
                className={`${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`}
                onMouseOver={() => setOpen("p1")}>
                <div className="icon-bx">
                  <span className="icon-cell"><i className="flaticon-office"></i></span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Social Media Management</h4>
                  <p className="m-b20">We can manage social media accounts on your behalf, creating and publishing content, engaging with followers, and monitoring performance.</p>
                  <Link href="/services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
              <div
                className={`${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`}
                onMouseOver={() => setOpen("p2")}>
                <div className="icon-bx">
                  <span className="icon-cell"><i className="flaticon-coding"></i></span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Online Advertising</h4>
                  <p className="m-b20">We can create and run social media advertising campaigns, including sponsored posts, promoted tweets, and paid search ads</p>
                  <Link href="/services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
              <div
                className={`${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`}
                onMouseOver={() => setOpen("p3")}>
                <div className="icon-bx">
                  <span className="icon-cell"><i className="flaticon-laptop"></i></span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Analytics and Reporting</h4>
                  <p className="m-b20">We can track and report on social media performance providing insights into what works and what doesn't.</p>
                  <Link href="/services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-head style-3 text-center mb-4">
            <h3 className="title">and more...</h3>
            <Link href="/services">
              <a data-wow-delay="4s" data-wow-duration="3s"
                 className="wow fadeInUp  btn btn-corner gradient btn-primary">
                All Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service;