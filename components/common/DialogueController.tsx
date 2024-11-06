import { useState, useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FormDialogue, FormDialogueProps } from "./FormDialogue";
import { ImageDialogue, ImageDialogueProps } from "./ImageDialogue";
import { TextDialogue, TextDialogueProps } from "./TextDialogue";

export type DialogueProps =
  | TextDialogueProps
  | ImageDialogueProps
  | FormDialogueProps;

interface DialogueControllerProps {
  dialogues: DialogueProps[];
}

export const DialogueController: React.FC<DialogueControllerProps> = ({
  dialogues,
}) => {
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

    if (dialogues[currentIndex + 1].type === "form") {
      setAccessibleNext(false);
    }
  };

  const renderDialogueContent = (dialogue: DialogueProps) => {
    switch (dialogue.type) {
      case "text":
        return (
          <TextDialogue
            type={dialogue.type}
            name={dialogue.name}
            text={dialogue.text}
          />
        );
      case "image":
        return (
          <ImageDialogue
            type={dialogue.type}
            name={dialogue.name}
            text={dialogue.text}
            imageUrls={dialogue.imageUrls}
          />
        );
      case "form":
        return (
          <FormDialogue
            type={dialogue.type}
            name={dialogue.name}
            text={dialogue.text}
            formName={dialogue.formName}
            formPlaceholder={dialogue.formPlaceholder}
            answer={dialogue.answer}
            hint={dialogue.hint}
            onClear={handleFormClear}
          />
        );
      default:
        return null;
    }
  };

  // フォームクリア時に次ボタンを表示可能にする
  const handleFormClear = () => {
    setAccessibleNext(true);
  };

  return (
    <div className="dialogue-container ">
      {renderDialogueContent(dialogues[currentIndex])}
      <div className="flex justify-between mt-4 text-center fixed bottom-3">
        {currentIndex > 0 && (
          <button
            className="p-2 text-white rounded flex items-center  mr-20"
            onClick={handlePrevious}
          >
            <HiChevronDoubleLeft className="mr-2" />
            戻る
          </button>
        )}
        <div className="p-2 text-white rounded flex items-center ml-5 mr-5">
          {currentIndex + 1} / {dialogues.length}
        </div>
        {currentIndex < dialogues.length - 1 && accessibleNext && (
          <button
            className="p-2 text-white rounded flex items-center ml-20 "
            onClick={handleNext}
          >
            次へ
            <HiChevronDoubleRight className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DialogueController;
