import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

interface ImageModalProps {
  selectedImage: string;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, closeModal }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20 h-screen w-screen overflow-visible"
      onClick={closeModal}
    >
      <div className="relative overflow-visible">
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
  );
};

export default ImageModal;
