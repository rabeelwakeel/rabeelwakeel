import React from "react";

function Services() {
  return (
    <div>
      <div className="bg-dark">
        {/* Services */}
        <section className="section-sm">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center section-title justify-content-between">
                  <h2 className="mb-0 text-nowrap mr-3">My Gym is providing</h2>
                  <div className="border-top w-100 border-primary d-none d-sm-block" />
                  <div>
                    <a
                      href="Services.js"
                      className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block"
                    >
                      see all
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Services list */}
            <div className="row justify-content-center">
              {/* Services item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 border-primary rounded-0 hover-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src="images/services/s-1.jpg"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2"></ul>
                    <a href="course-single.html">
                      <h4 className="card-title">AEROBICS</h4>
                    </a>
                    <p className="card-text mb-4">
                      {" "}
                      Aerobics is a form of physical exercise that combines
                      rhythmic aerobic exercise with stretching and strength
                      training routines with the goal of improving all elements
                      of fitness.
                    </p>
                    <a
                      href="course-single.html"
                      className="btn btn-primary btn-sm"
                    >
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 border-primary rounded-0 hover-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src="images/services/s-2.jpg"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2"></ul>
                    <a href="course-single.html">
                      <h4 className="card-title">Cardio</h4>
                    </a>
                    <p className="card-text mb-4">
                      {" "}
                      This process strengthens the tissues around the lungs and
                      improves circulation, helping them function. A sign that
                      you have reached a good cardio intensity is when you
                      sweat!
                    </p>
                    <a href="s-single.html" className="btn btn-primary btn-sm">
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
              {/* course item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 border-primary rounded-0 hover-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src="images/services/s-3.jpg"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2"></ul>
                    <a href="s-single.html">
                      <h4 className="card-title">YOGA</h4>
                    </a>
                    <p className="card-text mb-4">
                      {" "}
                      Maximise athletic performance and increase strength and
                      endurance through the power of yoga.Incorporating yoga
                      into your fitness regime can help you perform better on
                      the sports field and in the gym!
                    </p>
                    <a href="s-single.html" className="btn btn-primary btn-sm">
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
              {/* course item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 border-primary rounded-0 hover-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src="images/services/s-4.jpg"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2"></ul>
                    <a href="s-single.html">
                      <h4 className="card-title">Muscular Enduracne</h4>
                    </a>
                    <p className="card-text mb-4">
                      {" "}
                      Muscular endurance is the ability of a muscle or group of
                      muscles to perform repetitive contractions against a force
                      for an extended period of time
                    </p>
                    <a href="s-single.html" className="btn btn-primary btn-sm">
                      Eroll now
                    </a>
                  </div>
                </div>
              </div>
              {/* course item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 border-primary rounded-0 hover-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src="images/services/s-5.jpg"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2"></ul>
                    <a href="s-single.html">
                      <h4 className="card-title">Weight Loss</h4>
                    </a>
                    <p className="card-text mb-4">
                      {" "}
                      Lack of motivation can be a symptom of other factors, such
                      as fatigue, high stress levels, and feeling overwhelmed,"
                      says Clark.
                    </p>
                    <a href="s-single.html" className="btn btn-primary btn-sm">
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
              {/* course item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card p-0 border-primary rounded-0 hover-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src="images/services/s-6.jpg"
                    alt="course thumb"
                  />
                  <div className="card-body">
                    <ul className="list-inline mb-2"></ul>
                    <a href="s-single.html">
                      <h4 className="card-title">Strength endurance</h4>
                    </a>
                    <p className="card-text mb-4">
                      {" "}
                      Strength endurance require a relatively long duration of
                      muscle tension with minimal decrease in efficiency.
                    </p>
                    <a href="s-single.html" className="btn btn-primary btn-sm">
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /course list */}
            {/* mobile see all button */}
            <div className="row">
              <div className="col-12 text-center">
                <a
                  href="Services.js"
                  className="btn btn-sm btn-outline-primary d-sm-none d-inline-block"
                >
                  sell all
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
