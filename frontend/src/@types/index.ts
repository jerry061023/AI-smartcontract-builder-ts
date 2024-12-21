interface Content {
    role: string;
    content: string;
}

interface GenerateTextParams {
    contents: Content[];
    instruction?: string;
}

interface GeminiContent {
    role: string;
    parts: { text: string }[];
}

interface _GenerateFromGeminiParams {
    contents: GeminiContent[];
    system_instruction: { parts: { text: string } };
}

interface InitState {
    address: string,
    stepId: number,
    isFinalStep: boolean,
    contractId: number,
    contracts: any[],
    workflows: any[],
    workflowId: number,
    isLoading: boolean,
}

interface GlobalContextType {
    state: InitState;
    update: (newState: Partial<InitState>) => void; // Accept partial updates
}