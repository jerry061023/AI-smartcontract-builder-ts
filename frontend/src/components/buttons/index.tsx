import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const LoadingButton = (props: any) => {
    const { state } = useContext(GlobalContext);
    const { onClick, className = "", children } = props;
    return (
        <button
            disabled={state.isLoading}
            onClick={onClick}
            className={className}
        >
            {state.isLoading ? 'Loading...' : <>{children}</>}
        </button>
    );
};

export default LoadingButton;