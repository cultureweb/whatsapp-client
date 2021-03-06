import React from "react";
import "./Sidebar.css";
import {
  DonutLarge as DonutLargeIcon,
  Chat as ChatIcon,
  MoreVert as MoreVertIcon,
  SearchOutlined,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import UserProfile from "../UserProfile/UserProfile";

const Sidebar = ({ signOut }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <UserProfile signOut={signOut} />
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
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
