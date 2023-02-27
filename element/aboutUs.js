import Counter from "./counter";
function AboutUs() {
  return (
    <>
      {/* <!-- About Us --> */}
      <section className="content-inner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src="images/about/img6.png" className="move-2" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head style-3 mb-4">
                <h2 className="title">Why Viral Vantage?</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
              <p>
                We offer exceptional customer service, provide high quality content,
                leverage data and analytics to inform our clients and dictate strategy and tactics.
                We pride ourselves on staying up to date with the latest trends and changes.
              </p>
              <p className="m-b30">
                By executing these practices, and delivering exceptional results for our clients,
                we are focused on establishing Viral Vantage as leaders in the SMMA industry.
              </p>
              <Counter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
