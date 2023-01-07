/** @format */

import React, { useState } from "react";
import LOGO from "../Image/logo.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Free Trial</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <a
            href="https://b2-b-epert-works.vercel.app/trial"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button variant="outline-success">As B2B</Button>
          </a>
          <Button variant="outline-success">As B2C</Button>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="navBar">
        <div className="left">
          <img src={LOGO} alt="" />
        </div>
        <div className="right">
          <ul>
            <li className="listHover">Home</li>
            <li className="listHover">Resources</li>
            <li className="listHover" onClick={() => setModalShow(true)}>
              Login | <span style={{ color: "#f0ec0a" }}>Free Trial</span>
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
            <li onClick={() => setModalShow(true)}>
              Login | <span style={{ color: "#f0ec0a" }}>Free Trial</span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="sidebar-menu" style={{ left: "-300px" }}>
          <ul>
            <li>Home</li>
            <li>Resources</li>
            <li onClick={() => setModalShow(true)}>
              Login | <span style={{ color: "#f0ec0a" }}>Free Trial</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
