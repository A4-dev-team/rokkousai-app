"use client";

import { useState } from 'react';

interface FormProps {
  onSubmit: () => void;
}

export default function Form({ onSubmit }: FormProps) {
  const keyword = "MEAL"; 

  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<boolean | null>(null);

  const handleCheckKeyword = () => {
    if (input === '') { 
      setResult(null); 
      return; 
    }

    const isCorrect = input === keyword;
    setResult(isCorrect);
    
    if (isCorrect) {
      onSubmit();
    }
    
    setInput('');
  };

  return (
    <div
      className="border border-gray-700 shadow-lg rounded-lg p-8 w-80 z-10 mb-4 relative"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 text-white">存在するか探してあげるよ</h1>
      <input
        className='border border-gray-300 rounded-full p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder=""
      />
      <button
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        onClick={handleCheckKeyword}
      >
        送信
      </button>
    </div>
  );
}