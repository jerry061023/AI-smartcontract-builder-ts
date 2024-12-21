import React, { useMemo } from "react";
import './index.scss'
import useContract from "../../../../hooks/contract";
import useWorkflow from "../../../../hooks/workflow";

const Steps = () => {
    const { workflow } = useWorkflow();

    const steps = useMemo(() => {
        if (!workflow) return [];
        return workflow.assistors.map((assistor: any) => assistor.name);
    }, [workflow]);

    return (
        <div className="steps">
            {
                steps.map((step: string, index: number) => <Step step={step} index={index} key={index} />)
            }
            <FinalStep stepId={steps.length} />
        </div>
    );
};

const Step = ({ step, index }: any) => {
    const { stepId, isFinalStep, changeStepId } = useContract();
    const isActive = useMemo(() => stepId === index && !isFinalStep, [stepId, isFinalStep, index]);

    return (
        <div className="circle" onClick={() => changeStepId(index)} >
            <div className="number" data-state={isActive} >{index}</div>
            <span>{step}</span>
        </div>
    )
}

const FinalStep = ({ stepId }) => {
    const { isFinalStep, changeToFinalStep } = useContract();
    return (
        <div className="circle" onClick={() => changeToFinalStep()} >
            <div className="number" data-state={isFinalStep} >{stepId}</div>
            <span>Result</span>
        </div>
    )
}

export default Steps;
