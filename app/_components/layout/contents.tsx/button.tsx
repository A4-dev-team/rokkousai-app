import "././globals.css";
import React from "react";

interface buttonProps {
  button: string;
}
export default function RootButton({ button }: buttonProps) {
  return (
    <html lang="ja">
      <main className="flex-1 flex justify-center items-center p-5">
        <div className="bg-white rounded-xl shadow-lg p-5 max-w-xs w-full text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
            {button}
          </button>
        </div>
      </main>
    </html>
  );
}
