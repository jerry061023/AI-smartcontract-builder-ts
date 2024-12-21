import React, { useMemo, useState } from "react";
import './index.scss'

import useContract from "../../../../hooks/contract";
import useWorkflow from "../../../../hooks/workflow";
import ContentViewer from "../../../../components/contentViewer";
import Modal from "../../../../components/modal";

const ResultPage = () => {
    const { currentContract } = useContract();
    const { workflow } = useWorkflow();
    const [showModal, setShowModal] = useState(-1);

    const handleCardClick = (index) => {
        setShowModal(index);
    };

    const closeModal = () => {
        setShowModal(-1);
    };

    const results = useMemo(() => {
        if (!currentContract) return [];
        if (!workflow) return [];
        return currentContract.steps.map((step, index) => ({
            name: workflow.assistors[index].name,
            content: step.result
        }));
    }, [currentContract, workflow]);

    return (
        <div className="cards-container">
            {
                results.map((result: any, index: number) => <ResultCard result={result} onClick={() => handleCardClick(index)} />)
            }
            {showModal !== -1 && <Modal onClose={closeModal}>
                <h2 className="card-name">{results[showModal].name}</h2>
                <ContentViewer content={results[showModal].content} />
            </Modal>}
        </div>
    )
}

const ResultCard = ({ result, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-content-wrapper">
                <h2 className="card-name">{result.name}</h2>
                <ContentViewer content={result.content} />
            </div>
        </div>
    )
}

export default ResultPage