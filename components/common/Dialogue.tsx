'use client';
import { useState, useEffect } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { OneLineTypeWriter } from './OneLineTypeWriter';

interface DialogueProps {
    dialogues: { name: string; text: string }[];
}

const Dialogue: React.FC<DialogueProps> = ({ dialogues }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [logs, setLogs] = useState<{ name: string; text: string }[]>([]);

    useEffect(() => {
        // 初期表示でログがローカルストレージにあれば取得
        const savedLogs = JSON.parse(localStorage.getItem('dialogueLogs') ?? '[]');
        setLogs(savedLogs);
    }, []);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleNext = () => {
        const currentDialogue = dialogues[currentIndex];
        const newLogs = [...logs, currentDialogue];
        setLogs(newLogs);
        localStorage.setItem('dialogueLogs', JSON.stringify(newLogs));

        // 次のセリフに移動
        if (currentIndex < dialogues.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div>
            <h2 className="text-white text-2xl font-bold mb-4 text-left">
                {dialogues[currentIndex].name}
            </h2>
            <p className="text-white text-left" style={{ fontSize: '20px' }}>
                {/* TODO：どっちか選ぶ */}
                {/* <OneLineTypeWriter key={currentIndex} word = {dialogues[currentIndex].text} /> */}
                {dialogues[currentIndex].text}
            </p>
            <div className="flex justify-between mt-4">
                {currentIndex > 0 ? (
                    <button
                        className="p-2 text-white rounded flex items-center"
                        onClick={handlePrevious}
                    >
                        <HiChevronDoubleLeft className="mr-2" />
                        戻る
                    </button>
                ) : (
                    <div></div> // 次へがないときに左寄せにする
                )}

                {currentIndex < dialogues.length - 1 ? (
                    <button
                        className="p-2 text-white rounded flex items-center"
                        onClick={handleNext}
                    >
                        次へ
                        <HiChevronDoubleRight className="ml-2" />
                    </button>
                ) : (
                    <div></div> // 戻るがないときに右寄せにする
                )
                }
            </div>
        </div>
    );
};

export default Dialogue;
