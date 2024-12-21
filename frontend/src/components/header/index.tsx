import React, { useEffect } from "react";
import './index.scss'
import { Link } from 'react-router-dom'
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import useWorkflow from "../../hooks/workflow";
import useContracts from "../../hooks/contracts";

const Header = () => {
    const address = useAddress();
    const { updateContracts } = useContracts();
    const { updateWorkflow } = useWorkflow();

    useEffect(() => {
        updateContracts(address)
        updateWorkflow()
    }, [address])

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img className="logo-img" src="/images/logo.svg" alt="OpenPhron Logo" />
                <span className="logo-text">OpenPhron</span>
            </Link>
            <div className="header-nav">
                <nav>
                    <Link to=''>AI Library</Link>
                    <Link to="/contract-builder">MyPage</Link>
                </nav>
                <ConnectWallet switchToActiveChain={true} />
            </div>
        </header>
    )
}

export default Header;