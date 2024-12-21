import userContractService from "../services/userContract";

const contractController = {
    sendInitMessage: async (req: any, res: any) => {
        try {
            const { userAddress, initMessage }: { userAddress: string, initMessage: string } = req.body;
            console.log({ userAddress, initMessage })
            const userContract = await userContractService.create({ userAddress, initMessage });
            console.log({ userContract })
            res.json(userContract);
        } catch (error) {
            console.log("sendInitMessage-error: ", error.message);
        }
    },
    sendMessage: async (req: any, res: any) => {
        try {
            const { _id, stepId, content } = req.body;
            const response = await userContractService.addMessage({ _id, stepId, content });
            res.json(response);
        } catch (error) {
            console.log("send-message-error: ", error.message);
        }
    },
    getContracts: async (req: any, res: any) => {
        try {
            const { userAddress } = req.params;
            console.log({ userAddress })
            const contracts = await userContractService.getContractsByUser(userAddress);
            res.json(contracts);
        } catch (error) {
            console.log("get-contract-error: ", error.message);
        }
    },
    saveResult: async (req: any, res: any) => {
        try {
            const { _id, stepId } = req.body;
            console.log(req.body, "save-result")
            const result = await userContractService.saveResult({ _id, stepId });
            res.json(result);

        } catch (error) {
            console.log("save-result-error: ", error.message);
        }
    },
    deleteContract: async (req: any, res: any) => {
        try {
            const { _id } = req.params;
            const result = await userContractService.deleteContractById({ _id });
            res.json(result);
        } catch (error) {
            console.log("delete-contract-error", error.message);
        }
    }
}

export default contractController