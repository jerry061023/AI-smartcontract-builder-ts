import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    role: String,
    content: String
})

const StepSchema = new Schema({
    history: [MessageSchema],
    result: String
})

const UserContractSchema = new Schema({
    id: String,
    userAddress: String,
    name: String,
    workflowId: String,
    steps: [StepSchema]
})

const UserContracts = mongoose.model("userContracts", UserContractSchema);

export default UserContracts;
