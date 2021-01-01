import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "./UserProfile.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
const UserInfo = (props) => {
  const { onClose, open } = props;

  // const handleClose = () => {

  // };

  // const handleListItemClick = (value) => {

  // };

  return (
    <div className="">
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2>Peter</h2>
        <p>connected</p>
        {onClose ? (
          <IconButton aria-label="close" className="" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </Dialog>
    </div>
  );
};

export default UserInfo;
