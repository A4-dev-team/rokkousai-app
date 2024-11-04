"use client";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export function View1() {

  const word =
    "ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。";

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-end bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative w-full h-[30%] flex items-start justify-start overflow-y-auto p-4">
        <div className="border border-gray-700 p-2 bg-black opacity-90">
          {/* テキストを上部に配置 */}
          <h1 className="text-white text-4xl mb-4 text-left"></h1>
          <div
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
              こんにちは。突然で申し訳ないのですが、少しお話を伺えますか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              住人
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              あら、どうかしましたか？私に何か用ですか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              私、神戸大学の○○と申します。実は、このマンションに以前住んでいた大学生について少し調べていまして…
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              井口
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              そうなんですね、私はそこの201に住んでいる井口（いぐち）と申します。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              今日はお仕事お休みなんですか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              井口
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              そうそう、看護師やっていて昨日夜勤だったから、今日はお休みなのよ
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              お休み中に、すみません…井口さんは、なにか怪しい大学生を見かけたりしていないでしょうか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              井口
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              ああ、多分あの子ね。エレベーターで何度か会いましたよ。あまり話はしなかったけど、一度だけ、近くの飲食店でアルバイトしてるって言ってました。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              本当ですか？それは貴重な手がかりです！もしかして、飲食店の場所や名前についても何か…？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              井口
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              そこまでは聞いてないのよ。ごめんなさいね。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              なるほど…。情報ありがとうございます！
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              井口
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              いえいえ、あの子ちょっと変わってたけど、そんなに悪い人ではなさそうだったけど…何かあったのかしら？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              いえ、大丈夫です。すごく助かりました！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View1;
