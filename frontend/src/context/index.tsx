import React, { createContext, useState, ReactNode } from 'react';

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const initState = {
    address: "",
    stepId: 0,
    isFinalStep: false,
    contractId: 0,
    contracts: [],
    workflows: [],
    workflowId: 0,
    isLoading: true,
}

const ContextProvider = ({ children }: any) => {
    const [state, setState] = useState<InitState>(initState)

    const update = (newState: Partial<InitState>) => {
        setState(prevState => ({ ...prevState, ...newState }))
    }

    return (
        <GlobalContext.Provider value={{ state, update }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default ContextProvider