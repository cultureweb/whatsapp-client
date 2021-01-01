import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./UserProfile.css";
import Modal from "../Modal/Modal";
import useModal from "../../hooks/useModal";

const UserProfile = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="userProfile__icon">
      <IconButton onClick={toggle}>
        <Avatar src="https://www.e-real.fr/wp-content/themes/perso/images/icone-avatar.png" />
      </IconButton>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default UserProfile;
