/** @format */

import React, { useState } from "react";
import LOGO from "../Image/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="left">
          <img src={LOGO} alt="" />
        </div>
        <div className="right">
          <ul>
            <li className="listHover">Home</li>
            <li className="listHover">Resources</li>
            <li className="listHover">
            <a
                href={"https://experts-work.netlify.app/trial"}
                target="_blank"
                rel="noreferrer"
                style={{color :'#fff' , textDecoration : 'none'}}
              >
                Login | <span style={{ color: "#f0ec0a" }}>Free Trial</span>
              </a>
            </li>
            <li className="specialList">
              <i className="fa-solid fa-magnifying-glass Search-icon"></i>
              <input type="text" placeholder="Search" />
            </li>
          </ul>
          <div className="sidebar">
            <i
              className="fa-solid fa-bars hamburger"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
        </div>
      </div>

      {open ? (
        <div className="sidebar-menu" style={{ left: "0px" }}>
          <ul>
            <li>Home</li>
            <li>Resources</li>
            <li>
              <a
                href={"https://experts-work.netlify.app/trial"}
                target="_blank"
                rel="noreferrer"
                style={{color :'#fff' , textDecoration : 'none'}}
              >
                Login | <span style={{ color: "#f0ec0a" }}>Free Trial</span>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="sidebar-menu" style={{ left: "-300px" }}>
          <ul>
            <li>Home</li>
            <li>Resources</li>
            <li>
              <a
                href={"https://experts-work.netlify.app/trial"}
                target="_blank"
                rel="noreferrer"
                style={{color :'#fff' , textDecoration : 'none'}}
              >
                Login | <span style={{ color: "#f0ec0a" }}>Free Trial</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
