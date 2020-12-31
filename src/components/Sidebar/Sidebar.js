import React from "react";
import "./Sidebar.css";
import {
  DonutLarge as DonutLargeIcon,
  Chat as ChatIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://www.e-real.fr/wp-content/themes/perso/images/icone-avatar.png" />
        {/* <Avatar src="https://avatars2.githubusercontent.com/u/35487627?s=460&u=0f7f49fea6388f0991868e3721887405ccbe8033&v=4" /> */}
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
