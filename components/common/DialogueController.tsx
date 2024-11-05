import { useState, useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FormDialogue, FormDialogueProps } from "./FormDialogue";
import { ImageDialogue, ImageDialogueProps } from "./ImageDialogue";
import { TextDialogue, TextDialogueProps } from "./TextDialogue";

export type DialogueProps = TextDialogueProps | ImageDialogueProps | FormDialogueProps;

interface DialogueControllerProps {
    dialogues: DialogueProps[];
}

export const DialogueController: React.FC<DialogueControllerProps> = ({ dialogues }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [logs, setLogs] = useState<DialogueProps[]>([]);
    const [accessibleNext, setAccessibleNext] = useState(true);

    useEffect(() => {
        const savedLogs = JSON.parse(localStorage.getItem("dialogueLogs") ?? "[]");
        setLogs(savedLogs);
    }, []);

    const handlePrevious = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        setAccessibleNext(true);
    };

    const handleNext = () => {
        const currentDialogue = dialogues[currentIndex];
        const newLogs = [...logs, currentDialogue];
        setLogs(newLogs);
        localStorage.setItem("dialogueLogs", JSON.stringify(newLogs));

        if (currentIndex < dialogues.length - 1) setCurrentIndex(currentIndex + 1);

        if (dialogues[currentIndex].type === "form") {
            setAccessibleNext(false);
        }
    };

    const renderDialogueContent = (dialogue: DialogueProps) => {
        switch (dialogue.type) {
            case "text":
                return <TextDialogue type={dialogue.type} name={dialogue.name} text={dialogue.text} />;
            case "image":
                return <ImageDialogue type={dialogue.type} name={dialogue.name} text={dialogue.text} imageUrl={dialogue.imageUrl} />;
            case "form":
                return <FormDialogue type={dialogue.type} name={dialogue.name} text={dialogue.text} form={dialogue.form} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {renderDialogueContent(dialogues[currentIndex])}
            <div className="flex justify-between mt-4">
                {currentIndex > 0 && (
                    <button className="p-2 text-white rounded flex items-center" onClick={handlePrevious}>
                        <HiChevronDoubleLeft className="mr-2" />
                        戻る
                    </button>
                )}
                <div className="p-2 text-white rounded flex items-center">
                    {currentIndex + 1} / {dialogues.length}
                </div>
                {currentIndex < dialogues.length - 1 && accessibleNext && (
                    <button className="p-2 text-white rounded flex items-center" onClick={handleNext}>
                        次へ
                        <HiChevronDoubleRight className="ml-2" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default DialogueController;
