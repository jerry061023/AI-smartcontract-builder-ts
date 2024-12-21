import { userContractsDA } from "../data-access";
import assistorService from "./assistor";
import workflowService from "./workflow";
import { v4 as uuidv4 } from 'uuid';

interface AddMessageParams {
    _id: string,
    stepId: number,
    content: string
}

const userContractService = {
    create: async (data: any) => {
        const { userAddress, initMessage }: { userAddress: string, initMessage: string } = data;
        const contractName = await assistorService.nameFromText(initMessage);
        const workflow = await workflowService.getById(1);
        const assistors = workflow.assistors;
        const steps = assistors.map(assist => ({ history: [] }));

        const uniqueId = uuidv4();
        let userContract: any = {
            id: uniqueId,
            userAddress,
            workflowId: 1,
            name: contractName,
            steps: steps
        }
        userContract = await userContractsDA.create(userContract);

        await userContractService.addMessage({
            _id: userContract._id,
            stepId: 0,
            content: initMessage
        });
        userContract = await userContractsDA.findOne({ _id: userContract._id });
        return userContract;
    },
    get: async (filter: any) => {
        const { _id } = filter;
        const contract = await userContractsDA.findOne({ _id });
        return contract;
    },
    addMessage: async (data: AddMessageParams) => {
        const { _id, stepId, content } = data;
        const message = {
            role: "user",
            content
        }
        await userContractsDA.addMessage({ _id, stepId, message });

        const userContract = await userContractsDA.findOne({ _id: _id });
        const response = await assistorService.generateText({
            workflowId: userContract.workflowId,
            stepId,
            history: userContract.steps[stepId].history
        });

        const responseMessage = {
            role: "model",
            content: response
        }
        await userContractsDA.addMessage({ _id, stepId, message: responseMessage });
        return responseMessage;
    },
    getContractsByUser: async (userAddress: string) => {
        const contracts = await userContractsDA.find({ userAddress: userAddress });
        return contracts;
    },
    saveResult: async (filter: any) => {
        const { _id, stepId } = filter;
        const userContract = await userContractsDA.findOne({ _id });
        const response = await assistorService.extractResult({
            workflowId: userContract.workflowId,
            stepId,
            history: userContract.steps[stepId].history
        });
        await userContractsDA.saveResult({ _id, stepId, content: response });
        return response;
    },
    deleteContractById: async (filter: any) => {
        const { _id } = filter;
        const response = await userContractsDA.delete({ _id });
        return response;
    }


}

export default userContractService;