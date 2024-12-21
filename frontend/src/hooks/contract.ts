import { useContext, useMemo } from 'react';
import { GlobalContext } from '../context';
import { useAddress } from '@thirdweb-dev/react';
import serverProvider from '../service/server';
import useContracts from './contracts';

// const URL = "http://localhost:9000/api";
const useContract = () => {
    const address = useAddress();
    const { state, update } = useContext(GlobalContext);
    const { updateContracts } = useContracts();

    const currentContract = useMemo(() => {
        if (state.contracts.length === 0) return;
        return state.contracts[state.contractId];
    }, [state.contractId, state.contracts])

    const currentMessages = useMemo(() => {
        if (!currentContract) return { history: [] };
        return currentContract.steps[state.stepId];
    }, [state.stepId, currentContract])

    const createContract = async (idea: any) => {
        update({ isLoading: true });
        let data = {
            userAddress: address,
            initMessage: idea,
        }
        let contract = await serverProvider.createContract(data);
        update({ contracts: [...state.contracts, contract] });
        update({ contractId: state.contracts.length });

        update({ isLoading: false });
        return contract
    }

    const sendMessage = async (_id: string, message: string, stepId: number) => {
        const data = {
            _id,
            stepId: !stepId ? state.stepId : stepId,
            content: message
        }
        update({ isLoading: true });
        _addMessage({ role: "user", content: message })

        const botResponse = await serverProvider.sendMessage(data);
        _addMessage(botResponse)
        update({ isLoading: false });
    }

    const _addMessage = (message: any) => {
        const contracts = [...state.contracts];
        contracts[state.contractId].steps[state.stepId].history.push(message);
        update({ contracts: contracts })
    }

    const approve = async () => {
        update({ isLoading: true });
        const result = await saveResult();

        if (state.stepId === currentContract.steps.length - 1) {
            update({ isFinalStep: true });
            updateContracts(address);
            return;
        }

        update({ stepId: state.stepId + 1 });
        await sendMessage(currentContract._id, result, state.stepId + 1);
        updateContracts(address);
    }

    const saveResult = async () => {
        const data = {
            _id: currentContract._id,
            stepId: state.stepId
        }
        const result = await serverProvider.saveResult(data);
        return result;
    }

    const changeStepId = (id: number) => {
        update({ stepId: id, isFinalStep: false });
    }

    const changeToFinalStep = () => {
        update({ isFinalStep: true });
    }

    const removeContract = async () => {
        update({ isLoading: true });
        await serverProvider.removeContract(currentContract._id);
        updateContracts(address);
        update({ isLoading: false });
    }

    return {
        currentMessages,
        currentContract,
        stepId: state.stepId,
        isFinalStep: state.isFinalStep,
        createContract,
        sendMessage,
        approve,
        changeStepId,
        changeToFinalStep,
        removeContract
    }
}

export default useContract;