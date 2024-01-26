import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="page_404">
        <div className="error-container">
          <div className="col-1-section ">
            <div className="all-text">
              <h1>404</h1>
              <div className="sub-text">
                <h3>Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
              </div>
              <div className="btn btn-group">
                <NavLink to="/">
                  <button className="btn">Return Home</button>
                </NavLink>
                <NavLink to="/contact">
                  <button className="btn secondary-btn">Report Problem</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-2-section">
            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" />
          </div>
        </div>
      </section>
    </>
  );
}
