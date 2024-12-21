import contractWorkflow from "../config/contractWorkflow.json";
import { workflowService } from "../services";

const workflowContoller = {
    initConfig: async () => {
        await workflowService.add(contractWorkflow);
    },
    getWorkflows: async (req: any, res: any) => {
        const result = await workflowService.gets();
        res.json(result);
    },
    getWorkflowById: async (req: any, res: any) => {
        const { id }: { id: string } = req.params;
        const result = await workflowService.getById(Number(id));
        res.json(result);
    }
}

export default workflowContoller;