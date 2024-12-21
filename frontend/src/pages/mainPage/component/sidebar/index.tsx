import React from "react";
import useContracts from "../../../../hooks/contracts";
import './index.scss'
import useContract from "../../../../hooks/contract";
const SideBar = () => {
    const { contractId, contracts, changeContract } = useContracts();
    const { removeContract } = useContract();

    return (
        <aside className="sidebar">
            {/* <button className="sidebar-btn">
                <div>dfgfdg</div>
                <div className="tooltip-show-symbol">
                    <svg fill="none" width="16" height="16" viewBox="0 0 20 20" style={{ minWidth: "16px", minHeight: "16px", color: "currentcolor" }}><g id="dots-horizontal">
                        <g id="Vector">
                            <path d="M4.16659 8.41675C3.29213 8.41675 2.58325 9.12563 2.58325 10.0001C2.58325 10.8745 3.29213 11.5834 4.16659 11.5834C5.04104 11.5834 5.74992 10.8745 5.74992 10.0001C5.74992 9.12563 5.04104 8.41675 4.16659 8.41675Z" fill="currentcolor"></path>
                            <path d="M9.99992 8.41675C9.12547 8.41675 8.41658 9.12563 8.41658 10.0001C8.41658 10.8745 9.12547 11.5834 9.99992 11.5834C10.8744 11.5834 11.5833 10.8745 11.5833 10.0001C11.5833 9.12563 10.8744 8.41675 9.99992 8.41675Z" fill="currentcolor"></path>
                            <path d="M15.8333 8.41675C14.9588 8.41675 14.2499 9.12563 14.2499 10.0001C14.2499 10.8745 14.9588 11.5834 15.8333 11.5834C16.7077 11.5834 17.4166 10.8745 17.4166 10.0001C17.4166 9.12563 16.7077 8.41675 15.8333 8.41675Z" fill="currentcolor"></path>
                        </g>
                    </g></svg>
                    <div className='tooltip'>
                        <div class="tooltip-content">
                            <div class="tool-panel">
                                <div className='tool-item' onClick={ }>remove</div>
                                <div className='tool-item'>edit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </button> */}

            {
                contracts.map((contract: any, index: number) =>
                    <button
                        className="sidebar-btn"
                        data-selected={contractId === index}
                        key={index}
                        onClick={() => changeContract(index)} >
                        <div>{contract.name}</div>
                        <div className="tooltip-show-symbol">
                            <svg fill="none" width="16" height="16" viewBox="0 0 20 20" style={{ minWidth: "16px", minHeight: "16px", color: "currentcolor" }}><g id="dots-horizontal">
                                <g id="Vector">
                                    <path d="M4.16659 8.41675C3.29213 8.41675 2.58325 9.12563 2.58325 10.0001C2.58325 10.8745 3.29213 11.5834 4.16659 11.5834C5.04104 11.5834 5.74992 10.8745 5.74992 10.0001C5.74992 9.12563 5.04104 8.41675 4.16659 8.41675Z" fill="currentcolor"></path>
                                    <path d="M9.99992 8.41675C9.12547 8.41675 8.41658 9.12563 8.41658 10.0001C8.41658 10.8745 9.12547 11.5834 9.99992 11.5834C10.8744 11.5834 11.5833 10.8745 11.5833 10.0001C11.5833 9.12563 10.8744 8.41675 9.99992 8.41675Z" fill="currentcolor"></path>
                                    <path d="M15.8333 8.41675C14.9588 8.41675 14.2499 9.12563 14.2499 10.0001C14.2499 10.8745 14.9588 11.5834 15.8333 11.5834C16.7077 11.5834 17.4166 10.8745 17.4166 10.0001C17.4166 9.12563 16.7077 8.41675 15.8333 8.41675Z" fill="currentcolor"></path>
                                </g>
                            </g></svg>
                            <div className='tooltip'>
                                <div class="tooltip-content">
                                    <div class="tool-panel">
                                        <div className='tool-item' onClick={() => removeContract()}>remove</div>
                                        <div className='tool-item'>edit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                )
            }
        </aside>
    )
}

export default SideBar;