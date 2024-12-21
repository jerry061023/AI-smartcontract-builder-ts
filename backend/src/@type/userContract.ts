interface UserContract {
    id: string,
    userAddress: string,
    workflowId: number,
    name: string,
    steps: { history: [], result: string }[]
}