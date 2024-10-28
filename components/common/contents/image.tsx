import "./././globals.css";
import React from "react";
import Image from "next/image";

interface PhotoProps {
  photo: {
    imageUrl: string;
    charactername: string;
  };
}

export default function PhotoImage({ photo }: PhotoProps) {
  return (
    <html lang="ja">
      <Image
        src={photo.imageUrl}
        alt={photo.charactername}
        className="rounded-t-xl w-full"
        width={500} //後で修正
        height={300} //後で修正
      />
    </html>
  );
}
