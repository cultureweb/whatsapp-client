import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./UserProfile.css";
import UserInfo from "./UserInfo";
const UserProfile = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="userProfile__icon">
      <IconButton onClick={handleClickOpen}>
        <Avatar src="https://www.e-real.fr/wp-content/themes/perso/images/icone-avatar.png" />
      </IconButton>
      <UserInfo
        // selectedValue={selectedValue}
        // signOut={signOut}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default UserProfile;
