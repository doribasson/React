import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import ChatDesgin from "./chatDesgin/ChatDesgin";

const App = () => {
  return (
    <>
      <ChatDesgin />
    </>
  );
};

export default App;
