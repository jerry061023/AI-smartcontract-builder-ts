import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AssistorSchema = new Schema({
    name: String,
    instruction: String,
    result_instruction: String,
    minChatCount: {
        type: Number,
        default: 0
    },
})

const WorkflowSchema = new Schema({
    id: String,
    name: String,
    descrition: String,
    assistors: [AssistorSchema]
})

const Workflows = mongoose.model("workflows", WorkflowSchema);

export default Workflows;
