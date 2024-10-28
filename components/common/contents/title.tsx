import "./globals.css";
import React from "react";

interface RootContentsProps {
  children: {
    name: string;
  };
}

export default function RootContents({ children }: RootContentsProps) {
  return (
    <html lang="ja">
      <main className="flex-1 flex justify-center items-center p-5">
        <div className="bg-white rounded-xl shadow-lg p-5 max-w-xs w-full text-center">
          <div className="bg-black bg-opacity-60 text-white p-3 rounded-b-xl h-36 overflow-y-scroll">
            <h3 className="text-lg font-bold mb-2">{children.name}</h3>
          </div>
        </div>
      </main>
    </html>
  );
}
