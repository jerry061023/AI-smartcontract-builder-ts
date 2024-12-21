import { workflowsDA } from "../data-access";

const workflowService = {
    add: async (data: any) => {
        await workflowsDA.create(data);
    },
    gets: async () => {
        const result = await workflowsDA.find({});
        return result;
    },
    getById: async (id: Number) => {
        const result = await workflowsDA.findOne({ id: id });
        return result;
    },
    update: async (id: string, data: any) => {
        const result = await workflowsDA.update({ id: id }, data);
        return result;
    }
}

export default workflowService