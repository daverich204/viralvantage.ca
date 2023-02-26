import Accordion_sm from "../element/accordion_sm";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Link from 'next/link';


function Faq() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Faq</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Faq</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Faq --> */}
		<section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<Accordion_sm/>
					</div>
					<div className="col-lg-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<img src="images/about/img1.png" className="move-4" alt=""/>
					</div>
				</div>
			</div>
		</section>
			
	</div>
	<Footer/>
    </>
  )
}

export default Faq;