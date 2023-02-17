import React from "react";

function banner() {
  return (
    <div>
      {/* banner-feature */}
      <section className="bg-gray overflow-md-hidden">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-xl-4 col-lg-5 align-self-end">
              <img
                className="img-fluid w-100"
                src="images/banner/banner-feature.png"
                alt="banner-feature"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="row feature-blocks bg-gray justify-content-between">
                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                  <i className="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon" />
                  <h3 className="mb-xl-4 mb-lg-3 mb-4">Scholorship News</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad
                  </p>
                </div>
                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                  <i className="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon" />
                  <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Notice Board</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad
                  </p>
                </div>
                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                  <i className="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon" />
                  <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Achievements</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad
                  </p>
                </div>
                <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                  <i className="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon" />
                  <h3 className="mb-xl-4 mb-lg-3 mb-4">Admission Now</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /banner-feature */}
    </div>
  );
}

export default banner;
