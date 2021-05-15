import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

//count the user in this site with socket.il
function App() {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [allUserCount, setAllUserCount] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("/");

    socketRef.current.on("userCount", userCount => {
      console.log(userCount);
      setAllUserCount(userCount);
    });

    socketRef.current.on("update", userleft => {
      setAllUserCount(userleft);
    });

    return () => {
      socketRef.current.emit("disconnect", allUserCount);
      // socketRef.current.disconnect();
    };
  }, []);

  return (
    <div style={{ backgroundColor: "red", width: "100%", textAlign: "center" }}>
      {`${allUserCount} users in this site`}
    </div>
  );
}

export default App;
