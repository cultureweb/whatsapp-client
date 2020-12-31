import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("0ab2632253bd2b0896bc", {
      cluster: "eu"
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", data => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
