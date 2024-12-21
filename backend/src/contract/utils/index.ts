import GEMINI from "./gemini";
import dotenv from "dotenv";

dotenv.config();

let GEMINI_KEY: string | undefined = process.env.GEMINI_KEY;

if (!GEMINI_KEY) {
    throw new Error("GEMINI_KEY is not defined in the environment variables.");
}

const gemini: any = new GEMINI(GEMINI_KEY)

const prettyJSON = (data: any) => JSON.stringify(data, null, 2);

console.log(process.env.GEMINI_KEY);

export {
    gemini,
    prettyJSON,
}
