import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./index.scss";
import React, { useState } from 'react';
import { formatText } from "../../utils";
import generateChartCode from "../../utils/generateChartCode";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

const ContentViewer = ({ content }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const parseMessage = (message: string) => {
        if (!message) return []
        const regex = /```(?:\w+)?\n([\s\S]*?)```/g;
        const parts = [];
        let lastIndex = 0;
        let match: any;

        // Extract code blocks and other text
        while ((match = regex.exec(message)) !== null) {
            if (match.index > lastIndex) {
                parts.push({ type: "text", content: message.slice(lastIndex, match.index) });
            }
            parts.push({ type: "code", content: match[1].trim() });
            lastIndex = regex.lastIndex;
        }

        // Add remaining text after the last code block
        if (lastIndex < message.length) {
            parts.push({ type: "text", content: message.slice(lastIndex) });
        }

        return parts;
    };

    const parseContent = parseMessage(content);

    const handleCopyCode = (chartData: any) => {
        try {
            // Generate code string here 
            const codeString = generateChartCode(chartData);
            // Copy to clipboard
            setCopySuccess(true)
            navigator.clipboard.writeText(codeString)
                .then(() => {
                    alert('Copied!');
                })
                .catch((error) => {
                    console.error('Error copying to clipboard:', error);
                    alert('Failed to copy chart code.');
                });
        }
        catch (error: any) {
            console.log('error', error);
        }
    };

    return (
        <div>
            {parseContent.map((part, index) => {
                if (part.type === "code") {

                    return (
                        <> {
                            (copySuccess === false) ? (
                                <div className="copy-button-container" onClick={() => handleCopyCode(part.content)}>
                                    <ContentCopyIcon className="ContentCopyIcon" /><span>Copy</span>
                                </div>

                            ) : (
                                <div className="copy-button-container">
                                    <DoneIcon /><span>Copied!</span>
                                </div>
                            )
                        }
                            <div key={index} style={{ margin: "0.5rem 0" }}>
                                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                                    {part.content}
                                </SyntaxHighlighter>
                            </div>
                        </>
                    );
                }
                return (
                    <div key={index} style={{ margin: "0.5rem 0" }}>
                        <div dangerouslySetInnerHTML={{ __html: formatText(part.content) }} />
                    </div>
                );
            })}
        </div>
    );
};

export default ContentViewer;