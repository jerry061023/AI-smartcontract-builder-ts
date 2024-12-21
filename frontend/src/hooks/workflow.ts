import { useContext, useMemo } from "react";
import { GlobalContext } from "../context";
import serverProvider from "../service/server";

const useWorkflow = () => {
    const { state, update } = useContext(GlobalContext);

    const updateWorkflow = async () => {
        let workflows = await serverProvider.getWorkflows();
        update({ workflows });
    }

    const workflow = useMemo(() => {
        if (state.workflows.length === 0) return;
        return state.workflows[state.workflowId];
    }, [state.workflowId, state.workflows])

    return { workflow, updateWorkflow };
}

export default useWorkflow;