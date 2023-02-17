import React from "react";

function footer() {
  return (
    <div>
      <footer>
        {/* copyright */}
        <div className="copyright py-4 bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 text-sm-left text-center">
                <p className="mb-0">
                  Copyright © , copied &; modified by{" "}
                  <a href="https://themefisher.com/" className="text-muted">
                    Rabeel Wakeel
                  </a>
                </p>
              </div>
              <div className="col-sm-5 text-sm-right text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="d-inline-block p-2"
                      href="https://facebook.com/themefisher/"
                    >
                      <i className="ti-facebook text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="d-inline-block p-2"
                      href="https://twitter.com/themefisher"
                    >
                      <i className="ti-twitter-alt text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="d-inline-block p-2"
                      href="https://github.com/themefisher"
                    >
                      <i className="ti-github text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="d-inline-block p-2"
                      href="https://instagram.com/themefisher/"
                    >
                      <i className="ti-instagram text-primary" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
