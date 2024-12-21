import React from "react";
import Steps from "./component/steps";
import Chat from "./component/chat";
import "./index.css";
import "./index.scss";
import SideBar from "./component/sidebar";
import ResultPage from "./component/result";
import useContract from "../../hooks/contract";

const MainPage = () => {
  const { isFinalStep } = useContract();
  return (
    <div className="main-container">
      <SideBar />
      <div className="chat-container">
        <Steps />
        {isFinalStep ? <ResultPage /> : <Chat />}
      </div>
    </div>
  );
};

export default MainPage;
