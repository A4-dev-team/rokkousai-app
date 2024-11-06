import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export interface ImageDialogueProps {
	type: "image";
	name: string;
	text: string;
	imageUrls: string[];
}

export const ImageDialogue: React.FC<ImageDialogueProps> = ({
  name,
  text,
  imageUrls,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // モーダルを開く関数
  const openModal = (url: string) => {
    setSelectedImage(url);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-4 text-left">{name}</h2>
      <p className="text-white text-left" style={{ fontSize: "20px" }}>
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
            onClick={() => openModal(url)} // 画像クリックでモーダルを開く
          />
        ))}
      </div>

      {/* モーダル */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // 背景クリックでモーダルを閉じる
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="拡大画像"
              className="max-w-full max-h-full rounded-md"
            />
            <IoIosCloseCircle
              className="absolute top-2 right-2 text-gray-500 text-4xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default ImageDialogue;
