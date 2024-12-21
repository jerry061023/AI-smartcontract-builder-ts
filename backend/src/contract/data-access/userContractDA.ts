import BaseDataAccess from "./baseDataAccess";

class UserContractDA extends BaseDataAccess {
    constructor(model: any) {
        super(model);
    }
    public async addMessage(data: any) {
        const { _id, stepId, message } = data;
        const userContract = await this.findOne({ _id: _id });
        userContract.steps[stepId].history.push(message);
        const result = await this.update({ _id: _id }, userContract);
        return result;
    }
    public async saveResult(data: Result) {
        const { _id, stepId, content } = data;
        const userContract = await this.findOne({ _id: _id });

        userContract.steps[stepId].result = content;

        // remove the next steps
        userContract.steps = userContract.steps.map((step: any, index: any) => (index <= stepId ? step : []))

        await this.update({ _id: _id }, userContract);
        return content;
    }
}

export default UserContractDA;