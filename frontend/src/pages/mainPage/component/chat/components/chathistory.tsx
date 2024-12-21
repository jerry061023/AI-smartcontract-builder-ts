import React, { useContext, useEffect, useMemo, useRef } from "react";

import "./chathistory.scss";
import useContract from "../../../../../hooks/contract";
import useWorkflow from "../../../../../hooks/workflow";
import { GlobalContext } from "../../../../../context";
import ContentViewer from "../../../../../components/contentViewer";

const ChatHistory = () => {
    const { state } = useContext(GlobalContext)
    const { currentMessages } = useContract();

    const contentRef = useRef(null);

    useEffect(() => {
        console.log("ChatHistory scrolled to bottom");
        if (contentRef.current) {
            contentRef.current.scrollTo({
                top: contentRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [state.contracts]);

    return (
        <div className="chat-history" ref={contentRef}>
            {currentMessages.history.map((msg: any, index: number) => (<ChatMessage key={index} message={msg} />))}
            <ApprovePanel />
        </div>
    );
}

const ChatMessage = ({ message }: any) => {
    return (
        <div className={`chat-message ${message.role === "user" ? "user-message" : "other-message"}`}>
            <div className="message-content" >
                <ContentViewer content={message.content} />
            </div>
        </div>
    );
}

const ApprovePanel = () => {
    const { state } = useContext(GlobalContext)
    const { stepId, currentMessages, approve } = useContract();
    const { workflow } = useWorkflow();

    const isAvailableToApprove = useMemo(() => {
        if (state.isLoading) return false
        if (!workflow) return false
        if (currentMessages.history.length === 0) return false;

        const assistor = workflow.assistors[stepId];
        if (currentMessages.history.length >= assistor.minChatCount * 2) return true;
    }, [state.contracts, currentMessages, stepId, state.isLoading])

    return (
        <>
            {!isAvailableToApprove ?
                (<></>) :
                (<button className="approve-button" onClick={approve}>Approve</button>)
            }
        </>
    )
}
export default ChatHistory;