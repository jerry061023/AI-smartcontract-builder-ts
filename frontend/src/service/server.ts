import axios from "axios";

const serverProvider = {
    serverUrl: "http://localhost:9000/api",
    createContract: async (data: any) => {
        const response = await axios.post(serverProvider.serverUrl + "/contract", data);
        return response.data;
    },
    getContracts: async (address: string) => {
        const response = await axios.get(serverProvider.serverUrl + "/contract/" + address);
        return response.data;
    },
    sendMessage: async (data: any) => {
        const response = await axios.post(serverProvider.serverUrl + "/contract/message", data);
        return response.data;
    },
    saveResult: async (data: any) => {
        const response = await axios.post(serverProvider.serverUrl + "/contract/save-result", data);
        return response.data;
    },
    getWorkflows: async () => {
        const response = await axios.get(serverProvider.serverUrl + "/workflow");
        return response.data;
    },
    removeContract: async (_id) => {
        await axios.delete(serverProvider.serverUrl + "/contract/" + _id)
    }
}

export default serverProvider;