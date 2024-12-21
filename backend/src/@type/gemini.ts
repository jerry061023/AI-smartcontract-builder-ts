interface Message {
    role: string;
    content: string;
}
interface GeminiMessageFormat {
    role: string;
    parts: { text: string }[];
}
interface GeminiSystemFormat {
    contents: GeminiMessageFormat[];
    system_instruction: { parts: { text: string } }
}

