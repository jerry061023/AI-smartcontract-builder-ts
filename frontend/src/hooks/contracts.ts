import { useContext } from "react";
import { GlobalContext } from "../context";
import serverProvider from "../service/server";

const useContracts = () => {
    const { state, update } = useContext(GlobalContext);

    const updateContracts = async (address: string) => {
        if (!address) return;
        const contracts = await serverProvider.getContracts(address);
        update({ contracts, isLoading: false });
    }

    const changeContract = (id: number) => {
        update({ contractId: id, stepId: 0, isFinalStep: false })
    }

    return {
        contractId: state.contractId,
        contracts: state.contracts,
        updateContracts,
        changeContract
    };
}

export default useContracts;