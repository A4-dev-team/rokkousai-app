// "use client";

// import { useState } from 'react';

// const keyword = "A4";

// export default function Home() {
//   const [input, setInput] = useState<string>('');
//   const [result, setResult] = useState<string>('');

//   const checkKeyword = () => {
//     if (input === '') { 
//       setResult(''); 
//       return; 
//     }

//     if (input === keyword) {
//       setResult('正解！');
//     } else {
//       setResult('間違い！');
//     }
//     setInput('');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-80">
//         <h1 className="text-2xl font-bold text-center mb-4">キーワードチェック</h1>
//         <div className="text-center mb-4">キーワードを入力してください</div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="キーワードを入力"
//           className='border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
//         />
//         <button
//           onClick={checkKeyword}
//           className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
//         >
//           送信
//         </button>
//         {result && <div className="mt-4 text-lg text-center text-gray-700">{result}</div>}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from 'react';

// const scenes = [
//   <div className="h-screen w-screen flex items-center justify-center bg-red-500 text-white rounded-lg">Scene 1</div>,  // 赤
//   <div className="h-screen w-screen flex items-center justify-center bg-orange-500 text-white rounded-lg">Scene 2</div>,  // オレンジ
//   <div className="h-screen w-screen flex items-center justify-center bg-yellow-500 text-white rounded-lg">Scene 3</div>,  // 黄
//   <div className="h-screen w-screen flex items-center justify-center bg-green-500 text-white rounded-lg">Scene 4</div>,   // 緑
//   <div className="h-screen w-screen flex items-center justify-center bg-cyan-500 text-white rounded-lg">Scene 5</div>,    // 水色
//   <div className="h-screen w-screen flex items-center justify-center bg-blue-500 text-white rounded-lg">Scene 6</div>,     // 青
//   <div className="h-screen w-screen flex items-center justify-center bg-indigo-500 text-white rounded-lg">Scene 7</div>,   // インディゴ
//   <div className="h-screen w-screen flex items-center justify-center bg-purple-500 text-white rounded-lg">Scene 8</div>,    // 紫
//   <div className="h-screen w-screen flex items-center justify-center bg-violet-500 text-white rounded-lg">Scene 9</div>,     // バイオレット
//   <div className="h-screen w-screen flex items-center justify-center bg-purple-700 text-white rounded-lg">Scene 10</div>,     // 濃い紫
// ];

// export default function Home() {
//   const [currentScene, setCurrentScene] = useState<number>(0);
  
//   const nextScene = () => {
//     if (currentScene < scenes.length - 1) {
//       setCurrentScene(prev => prev + 1);
//     }
//   };

//   const previousScene = () => {
//     if (currentScene > 0) {
//       setCurrentScene(prev => prev - 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 m-0 p-0">
//       <div className="flex-grow flex items-center justify-center">
//         {scenes[currentScene]}
//       </div>
//       <div className="flex justify-between w-full max-w-xs mb-4">
//         <button 
//           onClick={previousScene} 
//           disabled={currentScene === 0} 
//           className={`w-1/3 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 text-sm ${currentScene === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           戻る
//         </button>
//         <div className="w-2" />
//         <button 
//           onClick={nextScene} 
//           disabled={currentScene === scenes.length - 1} 
//           className={`w-1/3 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 text-sm ${currentScene === scenes.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           次へ
//         </button>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from 'react';

// const keyword = "A4";

// export default function Home() {
//   const [input, setInput] = useState<string>('');
//   const [result, setResult] = useState<string>('');
//   const [isCorrect, setIsCorrect] = useState<boolean>(false);
//   const [showNext, setShowNext] = useState<boolean>(false); // 次へボタンの表示管理

//   const checkKeyword = () => {
//     if (input === '') { 
//       setResult(''); 
//       return; 
//     }

//     if (input === keyword) {
//       setResult('正解！');
//       setIsCorrect(true);
//       setShowNext(true); // 正解時に次へボタンを表示
//     } else {
//       setResult('間違い！');
//       setIsCorrect(false);
//       setShowNext(false); // 不正解時に次へボタンを非表示
//     }
//     setInput('');
//   };

//   const handleNext = () => {
//     // 遷移するためのフラグを更新（ここでは例として簡単な表示）
//     alert("次のページへ遷移します！"); // 実際の遷移の代わりにアラートを表示
//     // 次のページに関連する状態を管理する場合は、ここで状態を更新
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-80">
//         <h1 className="text-2xl font-bold text-center mb-4">キーワードチェック</h1>
//         <div className="text-center mb-4">キーワードを入力してください</div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="キーワードを入力"
//           className='border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
//         />
//         <button
//           onClick={checkKeyword}
//           className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
//         >
//           送信
//         </button>
//         {result && <div className="mt-4 text-lg text-center text-gray-700">{result}</div>}
        
//         {/* 正解した場合のみ次へボタンを表示 */}
//         {showNext && (
//           <button
//             onClick={handleNext}
//             className="mt-4 w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
//           >
//             次へ
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from 'react';

const keywords = ["A4", "B2", "C3", "D1", "E5", "F6", "G7", "H8", "I9", "J0"];

const scenes = [
  <div className="h-screen w-screen flex items-center justify-center bg-red-500 text-white rounded-lg">Scene 1</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-orange-500 text-white rounded-lg">Scene 2</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-yellow-500 text-white rounded-lg">Scene 3</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-green-500 text-white rounded-lg">Scene 4</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-cyan-500 text-white rounded-lg">Scene 5</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-blue-500 text-white rounded-lg">Scene 6</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-indigo-500 text-white rounded-lg">Scene 7</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-purple-500 text-white rounded-lg">Scene 8</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-violet-500 text-white rounded-lg">Scene 9</div>,
  <div className="h-screen w-screen flex items-center justify-center bg-purple-700 text-white rounded-lg">Scene 10</div>,
];

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [showNext, setShowNext] = useState<boolean>(false);

  const checkKeyword = () => {
    if (input === '') { 
      setResult(''); 
      return; 
    }

    if (input === keywords[currentScene]) {
      setResult('正解！');
      setShowNext(true);
    } else {
      setResult('間違い！');
      setShowNext(false);
    }
    setInput('');
  };

  const handleNext = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(prev => prev + 1);
      setShowNext(false);
      setResult('');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* シーンを背面に表示 */}
      <div className="absolute inset-0">
        {scenes[currentScene]}
      </div>

      {/* キーワードチェックを上に配置 */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 z-10 mb-4 relative">
        <h1 className="text-2xl font-bold text-center mb-4">キーワードチェック</h1>
        <div className="text-center mb-4">キーワードを入力してください</div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="キーワードを入力"
          className='border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
        <button
          onClick={checkKeyword}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          送信
        </button>
        {result && <div className="mt-4 text-lg text-center text-gray-700">{result}</div>}
        
        {/* 次へボタンのためのスペース */}
        <div className="mt-4">
          {showNext && (
            <button
              onClick={handleNext}
              className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
            >
              次へ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
