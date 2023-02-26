import Head from "next/head";
import { useEffect, useState } from "react";
//import Slider from "react-rangeslider";
//import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
//import useScrollPosition from "use-scroll-position";
//import "../css/skin/skin-1.css";
//import "../css/skin/skin-2.css";
import "../css/style.css";
import "../css/skin/skin-3.css";
import "../styles/switcher.css";
import "../styles/globals.css";
// import { WOW } from "wowjs";

const isServer = typeof window === 'undefined'
const WOWJS = !isServer ? require('wowjs') : null

function MyApp({ Component, pageProps }) {
  const [toggle1, setToggle1] = useState(false);
  const [body_, setbody_] = useState();
  const [layout, setLayout] = useState("wide");
  const [header, setHeader] = useState("fixed");
  const [header_, setHeader_] = useState();
  const [sliderValu, setSliderValu] = useState(20);

  useEffect(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);

  useEffect(() => {
    if (!isServer) {
      const { WOW } = WOWJS
      const wow = new WOW({
        offset: 100,
        mobile: false,
        live: true
      });

      wow.init()
    }
    return () => {}
  }, []);

 // let scrollPosition = useScrollPosition();
  function toggle() {
    setToggle1(!toggle1);
  }

  const layoutChange = (name) => {
    setLayout(name);
    body_.className = name;
  };

  const backGroundChage = (value) => {
    if (value === "color_1") {
      body_.style.backgroundColor = "rgb(137, 110, 255)";
    } else if (value === "color_2") {
      body_.style.backgroundColor = "rgb(245, 95, 141)";
    } else if (value === "color_3") {
      body_.style.backgroundColor = "rgb(239, 20, 110)";
    }
  };

  const backGroundImage = (value) => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };

  const chageHeader = (value) => {
    setHeader(value);
    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = (value) => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

 /*  header === "fixed" && scrollPosition > 10
    ? header_ && header_[0].classList.add("is-fixed")
    : header_ && header_[0].classList.remove("is-fixed"); */

  return (
    <>
		  <Head>
			  <title>Viral Vantage - Social Media Marketing Agency</title>
			  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      </Head>
      <div className="page-wraper">
        <Component {...pageProps} />
      </div>
      
      <a href="#top">
        <button
          className="scroltop icon-up"
          type="button"
          style={{ display: "inline-block" }}
        >
          <i className="fa fa-arrow-up" />
        </button>
      </a>
    </>
  );
}

export default MyApp;
