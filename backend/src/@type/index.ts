// //model
// interface Assistor {
//     name: String,
//     instruction: String,
//     result_instruction: String,
//     minChatCount: {
//         type: Number,
//         default: 0
//     },
// }
// interface Instruction {
//     instruction: string
// }

// // data-access usercontractDA.ts
// interface SaveResultParams {
//     _id: string,
//     stepId: number,
//     content: string
// }

// // services/assistor.ts
// interface Message {
//     role: string,
//     content: string
// }
// interface GenerateTextParams {
//     workflowId: number,
//     stepId: number,
//     history: Message[]
// }
// interface _GetAssistorParams {
//     workflowId: number,
//     stepId: number
// }
// interface ExtractResultParams {
//     workflowId: number,
//     stepId: number,
//     history: Message[]
// }
