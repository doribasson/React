import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

function App() {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("/");
    socketRef.current.on("your id", id => {
      setYourID(id);
    });

    socketRef.current.on("message", message => {
      receivedMessage(message);
    });
  });

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
      <div>
        {messages.map((message, index) =>
          message.id === yourID ? (
            <li style={{ backgroundColor: "green" }}>{message.body}</li>
          ) : (
            <li style={{ backgroundColor: "blue" }}>{message.body}</li>
          )
        )}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={handleChange}
          placeholder="say something..."
        />
        <button>send</button>
      </form>
    </div>
  );
}

export default App;
