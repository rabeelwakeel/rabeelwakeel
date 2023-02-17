import React from "react";

function Aboutus() {
  return (
    <div>
      {/* about us */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="section-title">About Gym</h2>
              <p>
                My Gym is a health and fitness membership providing its members
                with access to a wide choice of fitness facilities close to
                their home and work. We are driven by a purpose to help people
                lead a healthy and an active lifestyle through a service
                representing excellent value and convenience.{" "}
              </p>
              <p>
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem
              </p>
              <a href="about.html" className="btn btn-outline-primary">
                Read more
              </a>
            </div>
            <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <img
                className="img-fluid w-100"
                src="images/homebgimg.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* /about us */}
    </div>
  );
}

export default Aboutus;
