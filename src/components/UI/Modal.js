import React, { Fragment } from "react";
import ReactDom from "react-dom";
import BackDrop from "./BackDrop";
import ModalOverlay from "./ModalOverlay";

const portalDest = document.getElementById("overlay");

const Modal = (props) => {
  return <Fragment>
    {ReactDom.createPortal(<BackDrop />, portalDest)}
    {ReactDom.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalDest
    )}
  </Fragment>;
};

export default Modal;
