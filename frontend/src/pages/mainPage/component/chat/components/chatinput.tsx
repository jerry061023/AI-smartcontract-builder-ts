import React, { useContext, useEffect, useState } from "react";
import "./chatinput.scss";
import useContract from "../../../../../hooks/contract";
import LoadingButton from "../../../../../components/buttons";
import { GlobalContext } from "../../../../../context";

const ChatInput = () => {
    const { state } = useContext(GlobalContext);
    const { currentContract, sendMessage } = useContract();

    const [userInput, setUserInput] = useState("");

    const handleSendMessage = async () => {
        if (state.isLoading) return;
        if (!userInput.trim()) return;
        await sendMessage(currentContract._id, userInput, state.stepId);
        setUserInput("");
    }

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevents a new line from being added
            console.log("Enter key pressed");
            handleSendMessage();
        }
    };

    return (
        <div className="chat-input-panel">
            <textarea
                className="chat-input"
                placeholder="Type your message here..."
                value={userInput}
                onChange={(e: any) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className="input-actions">
                <LoadingButton className="send-button" onClick={handleSendMessage}>Send</LoadingButton>
            </div>
        </div>
    )
}

export default ChatInput;