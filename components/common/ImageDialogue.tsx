import React from "react";

export interface ImageDialogueProps {
	type: "image";
	name: string;
	text: string;
	imageUrls: string[];
  onOpenModal: (url: string) => void; // 追加
}

export const ImageDialogue: React.FC<ImageDialogueProps> = ({
  name,
  text,
  imageUrls,
  onOpenModal, // 追加
}) => {
  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
      <p className="text-white text-left mb-2" style={{ fontSize: "20px" }}>
        {text}
      </p>
      {/* 複数の画像を表示 */}
      <div className="flex flex-wrap gap-4 justify-center">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${name}の画像${index + 1}`}
            className="w-4/12 h-auto rounded-md cursor-pointer"
            onClick={() => onOpenModal(url)} // クリックでモーダルを開く
          />
        ))}
      </div>
    </div>
  );
};


export default ImageDialogue;
