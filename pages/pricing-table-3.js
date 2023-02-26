

import { useState } from "react";
import PricingT3 from '../component/pricingTable';
import Footer from "../layout/footer";
import Header from "../layout/header";
import Link from 'next/link';


function PricingTable3() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
  {/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Pricing Table</h1>
        {/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Pricing Table</li>
						</ul>
					</nav>
        {/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
  {/* <!-- Banner End --> */}
  	<PricingT3/>

			
	</div>
     <Footer/>
    </>
  )
}

export default PricingTable3;