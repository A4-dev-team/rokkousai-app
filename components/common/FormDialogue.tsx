// TODO: Add form component
'use client';
import { useState, useEffect } from 'react';
import { FormInput } from './FormInput';

export interface FormDialogueProps {
    type: "form";
    name: string;
    text: string;
    formName: string;
    formPlaceholder: string;
    answer: string;
    hint?: string;
    onClear: () => void;
}

export const FormDialogue: React.FC<FormDialogueProps> = ({ name, text, formName, formPlaceholder, answer, hint, onClear }) => {
    const [isCleared, setIsCleared] = useState<boolean>(false);

    useEffect(() => {
        const clearedStatus = localStorage.getItem(`${formName}Accessible`);
        if (clearedStatus === "true") {
            setIsCleared(true);
            onClear(); // 初期表示のときもクリア済みなら onClear を呼び出す
        }
    }, [formName, onClear]);

    const handleSubmit = (input: string) => {
        if (input === answer) {
            // 答えが正しければクリア状態を更新
            localStorage.setItem(`${formName}Accessible`, "true");
            setIsCleared(true);
            onClear();
        } else {
            alert("不正解です。もう一度試してください。");
        }
    };

    return (
        <div>
            <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
            <p className="text-white text-left" style={{ fontSize: "20px" }}>{text}</p>
            <div className="text-white text-left">
                {isCleared ? (
                    <p>答え: {answer}</p>
                ) : (
                    <FormInput placeholder={formPlaceholder} onSubmit={handleSubmit} />
                )}
            </div>
        </div>
    );
};
