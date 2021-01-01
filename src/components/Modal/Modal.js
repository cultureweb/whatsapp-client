import React from "react";
import ReactDOM from "react-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Modal.css";

const signout = () => {
  console.log("signout");
};

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <IconButton aria-label="close" className="" onClick={hide}>
                  <CloseIcon />
                </IconButton>
              </div>
              <button
                type="button"
                // className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={signout}
              >
                <p>signout</p>
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
