import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import {
  AttachFile,
  MoreVert as MoreVertIcon,
  SearchOutlined,
  InsertEmoticon as InsertEmoticonIcon,
  Mic as MicIcon,
  MessageSharp,
} from "@material-ui/icons";
import axios from "../../axios.js";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    axios.post("/messages/new", {
      message: input,
      name: "mike",
      timestamp: "Away from anywhere..",
      received: false,
    });
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message, id) => (
          <p
            key={id}
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
        {/* <p className="chat__message chat__receiver">
          <span className="chat__name">Peter</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p> */}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>{" "}
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
