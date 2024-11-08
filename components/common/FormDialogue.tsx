"use client";
import { useState, useEffect } from "react";
import { FormInput } from "./FormInput";
import SuccessModal from "./SuccessModal"; // パスは適宜調整してください

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

export const FormDialogue: React.FC<FormDialogueProps> = ({
  name,
  text,
  formName,
  formPlaceholder,
  hint,
  answer,
  onClear,
}) => {
  const [isCleared, setIsCleared] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      setShowSuccessModal(true); // 成功モーダルを表示
      onClear();
    } else {
      alert(`不正解です。もう一度試してください。`);
    }
  };

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
      <p className="text-white text-left" style={{ fontSize: "20px" }}>
        {text}
      </p>
      <div className="text-white text-left">
        {isCleared ? (
          <p>{answer}で正解です。</p>
        ) : (
          <>
            {hint && <p>ヒント：{hint}</p>}
            <FormInput placeholder={formPlaceholder} onSubmit={handleSubmit} />
          </>
        )}
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message={`成功！続きに進めるようになりました`}
      />
    </div>
  );
};