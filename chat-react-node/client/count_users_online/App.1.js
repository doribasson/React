import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

function App() {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [allUserCount, setAllUserCount] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("/");
    socketRef.current.on("yourid", id => {
      setYourID(id);
    });

    socketRef.current.on("message", message => {
      receivedMessage(message);
    });

    socketRef.current.on("userCount", userCount => {
      console.log(userCount);
      setAllUserCount(userCount);
    });

    socketRef.current.on("update", userleft => {
      setAllUserCount(userleft);
    });

    // return () => socketRef.current.disconnect();
    return () => {
      // socketRef.current.emit("disconnect", allUserCount);
      socketRef.current.emit("disconnect", allUserCount);
      // setAllUserCount(allUserCount - 1);
      socketRef.current.disconnect();
    };
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <div
        style={{ backgroundColor: "red", width: "100%", textAlign: "center" }}
      >
        {`${allUserCount} users in this site`}
      </div>
      <div>
        {messages.map((message, index) =>
          message.id === yourID ? <li>message</li> : "lala"
        )}
      </div>
    </div>
  );
}

export default App;
