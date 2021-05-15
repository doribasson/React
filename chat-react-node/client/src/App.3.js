import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #46516e;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const Input = styled.input`
  width: 98%;
  height: 50px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  background-color: pink;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  cursor: pointer;
  font-size: 17px;
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage1 = styled.div`
  width: 25%;
  background-color: pink;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const MyMessage = styled.div`
  width: 75%;
  background-color: pink;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 75%;
  background-color: transparent;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;
const PartnerMessage1 = styled.div`
  width: 25%;
  background-color: transparent;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

const App = () => {
  const [yourID, setYourID] = useState();
  // const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState("");
  const [chat, setChat] = useState({
    id: {},
    name: "",
    message: "",
    messages: []
  });

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("/");

    socketRef.current.on("your id", id => {
      setChat(oldChat => ({ ...oldChat, id: id }));
    });

    socketRef.current.on("message", message => {
      console.log("here");
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    console.log(chat.messages);
    const { messages } = chat;
    // let messages = chat.messages;
    // setMessages(oldMsgs => [...oldMsgs, message]);
    setChat(oldChat => ({
      ...oldChat,
      messages: [...oldChat.messages, message]
    }));
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: chat.message,
      id: yourID,
      name: chat.name
    };

    // setMessage("");
    setChat(oldChat => ({ ...oldChat, message: "" }));
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    // setMessage(e.target.value);
    setChat(oldChat => ({ ...oldChat, [e.target.name]: e.target.value }));
  }

  return (
    <Page>
      <Container>
        {chat.messages.map((mychat, index) => {
          if (mychat.id === yourID) {
            return (
              <MyRow key={index}>
                <MyMessage1>{mychat.name}</MyMessage1>
                <MyMessage>{mychat.body}</MyMessage>
              </MyRow>
            );
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage1>{mychat.name}</PartnerMessage1>
              <PartnerMessage>{mychat.body}</PartnerMessage>
            </PartnerRow>
          );
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <Input
          value={chat.name}
          name="name"
          onChange={handleChange}
          placeholder="Say your name..."
        />
        <TextArea
          value={chat.message}
          name="message"
          onChange={handleChange}
          placeholder="Say something..."
        />
        <Button>Send</Button>
      </Form>
    </Page>
  );
};

export default App;
