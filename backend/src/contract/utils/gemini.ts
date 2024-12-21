import axios from "axios";

import { HttpsProxyAgent } from 'https-proxy-agent';
import dotenv from 'dotenv';

dotenv.config();

class GEMINI {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public async generateTextFromMessage(message: string) {
        const contents: Message[] = [{
            role: "user",
            content: message
        }];
        const result = await this.generateText({ contents });
        return result;
    }

    public async generateText({ contents, instruction = "" }: any) {
        const geminiContents: GeminiMessageFormat[] = this._convertToGeminiFormat(contents);
        const geminiInstruction: { parts: { text: string } } = this._convertToInstructionFormat(instruction);
        const data: GeminiSystemFormat = this._convertToGeminiSystemFormat(geminiContents, geminiInstruction);

        return this._generateFromGemini(data);
    }
    private _convertToGeminiSystemFormat(geminiContents: GeminiMessageFormat[], geminiInstruction: { parts: { text: string } }): GeminiSystemFormat {
        return {
            contents: geminiContents,
            system_instruction: geminiInstruction
        };
    }
    private async _generateFromGemini(data: GeminiSystemFormat) {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${this.apiKey}`;
        const proxyAgent = this.getAgent();
        try {
            const response = await axios.post(apiUrl, data, {
                httpsAgent: proxyAgent,
            });
            const generatedContent = response.data.candidates[0].content;
            return generatedContent.parts[0].text;
        } catch (error) {
            console.error('Error generating content:', error);
            throw new Error('Failed to generate content from Gemini.');
        }
    }

    private _convertToGeminiFormat(contents: Message[]): GeminiMessageFormat[] {
        let result: GeminiMessageFormat[] = [];
        contents.map(content => {
            result.push(
                {
                    role: content.role,
                    parts: [{ text: content.content }]
                }
            )

        })
        return result;
    }

    private _convertToInstructionFormat(instruction: string) {
        return {
            parts: {
                text: instruction
            }
        };
    }

    private getAgent() {
        const proxyHost = process.env.PROXY_HOST;
        const proxyPort = 8888; // Replace with your proxy's port
        const proxyUser = process.env.PROXY_USER; // Optional
        const proxyPass = process.env.PROXY_PASS; // Optional

        if (!proxyHost) {
            throw new Error('PROXY_HOST environment variable is not set');
        }

        // Create a proxy agent
        const proxyUrl = `http://${proxyUser}:${proxyPass}@${proxyHost}:${proxyPort}`;
        return new HttpsProxyAgent(proxyUrl);
    }
}

export default GEMINI;
