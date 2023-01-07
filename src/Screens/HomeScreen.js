/** @format */

import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Banner from "../Image/ew-landing-page-copy-1-1-transformed 1.png";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="two-sec">
        <div className="left">
          <p className="head">E-learning</p>
          <p className="smallHead">made Easy</p>
          <p className="desc">
            We are known for providing the flexibility of <br />
            self-paced learning and real-time content , <br />
            allowing everyone to learn any technology <br />
            conveniently
          </p>

          <div className="two-btns">
            <a
              href="http://raghu-b2c-qadir-1.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-1">Individual</button>
            </a>
            <a
              href="https://b2-b-epert-works.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-1">Business</button>
            </a>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={Banner} alt="Banner" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomeScreen;
