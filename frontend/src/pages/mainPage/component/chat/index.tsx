import React from "react";
import "./index.scss";
import ChatHistory from "./components/chathistory";
import ChatInput from "./components/chatinput";

const Chat = () => {
    return (
        <div className="chat-app">
            <ChatHistory />
            <ChatInput />
        </div>
    );
};

export default Chat;
