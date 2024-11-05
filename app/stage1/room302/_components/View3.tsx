import React, { useRef } from "react";
import Form from "./Form";

interface View3Props {
  onFormSubmit: () => void;
}

const View3: React.FC<View3Props> = ({ onFormSubmit }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // スクロールコンテナの参照

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-end bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative w-full h-[30%] flex items-start justify-start overflow-y-auto p-4">
        <div className="border border-gray-700 p-2 bg-black opacity-90">
          {/* テキストを上部に配置 */}
          <h1 className="text-white text-4xl mb-4 text-left"></h1>
          <div
            ref={scrollContainerRef}
            style={{
              height: "100%",
              overflowY: "scroll",
              paddingRight: "15px",
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // スクロールコンテナの背景色を透明度を持たせる
            }}
          >
            <style>{`
              ::-webkit-scrollbar {
                display: none; 
              }
            `}</style>

            {/* ここに長い文章が入る */}
            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              こんにちは。すみません、突然の訪問で…。この部屋に以前住んでいた方について少しお話を伺いたいのですが…
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              安井
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              ああ、はい…どういったご用件でしょうか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              実はその方のことを調べていて、何か手がかりがあればと思って伺ったんです。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              安井
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              僕は会ったことがないので、何も分からないんですけど…ああ、そういえば…。前の住人宛てに不思議な封筒が届いていたんです。結構分厚くて、私も最初は自分宛かと思ったんですが、よく見たら名前が違ってて…。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              その封筒はまだお手元にありますか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              安井
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              ええ、捨てるのも悪い気がして、一応保管していました。部屋の中にありますので、少しお待ちを。
            </p>

            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              （安井が部屋に戻り、しばらくして封筒を持ってくる）
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              安井
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              これです。封筒の表には、やけに古びた字体で名前が書かれていて、中には紙が数枚入っていましたよ。
            </p>

            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              （主人公が封筒を受け取り、中身を確認する）
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              本当にありがとうございます。この封筒が、きっと手がかりになるはずです。
            </p>

            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              （主人公は安井に礼を言い、封筒の中身を持ち帰り、新たな謎を解き明かすために動き出す）
            </p>

            {/* FormコンポーネントにonSubmitを渡す */}
            <div className="flex justify-center mt-6">
              <Form onSubmit={onFormSubmit} /> {/* onSubmitに関数を渡す */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View3;
