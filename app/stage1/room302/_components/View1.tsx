import React, { useRef } from "react";

const View1: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-end bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative w-full h-[30%] flex items-start justify-start overflow-y-auto p-4">
        <div className="border border-gray-700 p-2 bg-black opacity-90">
          <h1 className="text-white text-4xl mb-4 text-left"></h1>
          <div
            ref={scrollContainerRef}
            style={{
              height: "100%",
              overflowY: "scroll",
              paddingRight: "15px",
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <style>{`
              ::-webkit-scrollbar {
                display: none; 
              }
            `}</style>
            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              部屋の番号は…そうだ、302号室です。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              大家
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              302号室ね。それなら確かに大学生が住んでた部屋だわ。引っ越すときも荷物を夜遅くに運び出していたし、今思うと少し妙な感じもしていたの。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              そうなんですか…もしよろしければ、302号室を見せていただけませんか？何か手がかりが残っているかもしれません。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              大家
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              そうね…それくらいなら大丈夫よ。念のため、私も一緒に行くわね。
            </p>

            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              （主人公は正しい部屋番号を伝え、大家の信頼を得ることができた。302号室へのアクセスが可能になった。）
            </p>
          </div>
          {/* スクロールの外に「次へ」ボタンを追加 */}
          <div className="flex justify-end mt-4 mb-4 mr-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={onNext}
            >
              次へ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View1;
