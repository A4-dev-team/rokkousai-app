import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Escape Game",
  description: "脱出ゲームアプリ",
};

//これ以降

interface RootContentsProps {
  children: {
    charactername: string;
    name: string;
    comment: string;
    button: string;
  };
}

export default function RootContents({ children }: RootContentsProps) {
  return (
    <html lang="ja">
      <main className="flex-1 flex justify-center items-center p-5">
        <div className="bg-white rounded-xl shadow-lg p-5 max-w-xs w-full text-center">
          <div className="bg-black bg-opacity-60 text-white p-3 rounded-b-xl h-36 overflow-y-scroll">
            <h3 className="text-lg font-bold mb-2">{children.name}</h3>
            <p className="text-sm">{children.comment}</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
            {children.button}
          </button>
        </div>
      </main>
    </html>
  );
}
