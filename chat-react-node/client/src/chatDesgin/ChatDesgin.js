import React from "react";
import "./chatDesgin.css";

const ChatDesgin = () => {
  return (
    <div className="chatbox">
      <div className="chatlogs">
        <div className="chat friend">
          <div className="user-photo">
            <img
              src={
                "https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/25594138_10215257259965745_4197992638923673754_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=T5vPUgQ1-ZAAX8WukIe&_nc_ht=scontent.ftlv6-1.fna&oh=69730b312cf4d94668eb1d86af608551&oe=60357888"
              }
            />
          </div>
          <p className="chat-message">what up dori?...!</p>
        </div>

        <div className="chat self">
          <div className="user-photo">
            <img
              src={
                "https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/89786423_10218658397863554_5652470960637345792_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=jK_0FpcWptYAX-j4ODX&_nc_ht=scontent.ftlv6-1.fna&oh=7f44e0d134a096830a711e0b60064284&oe=60336497"
              }
            />
          </div>
          <p className="chat-message">ok ty...!</p>
        </div>

        <div className="chat friend">
          <div className="user-photo">
            <img
              src={
                "https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/25594138_10215257259965745_4197992638923673754_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=T5vPUgQ1-ZAAX8WukIe&_nc_ht=scontent.ftlv6-1.fna&oh=69730b312cf4d94668eb1d86af608551&oe=60357888"
              }
            />
          </div>
          <p className="chat-message">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="chat-form">
        <textarea></textarea>
        <button>send</button>
      </div>
    </div>
  );
};

export default ChatDesgin;
