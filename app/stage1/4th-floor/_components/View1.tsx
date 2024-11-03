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
              うん？大丈夫だけど…
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              私、神戸大学の○○と申します。実は、このマンションに以前住んでいた大学生について少し調べていまして。もし何かご存知でしたら、教えていただきたくて…
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              住人
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              なるほど….僕は、岸（きし）と申します。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">岸</h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              今はフリーターで○○になろうと思って勉強中です。大学生か…そうだなあ…ああ、そういえば妙な挨拶をしてきた子がいたよ。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              どんなエピソードだったか、もし覚えていらっしゃったら教えていただけませんか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">岸</h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              僕が『404号室の岸です』って自己紹介したら、その子が『見つかってよかったですね！僕の部屋番号には4が入らないように選んだんですよ』なんて言ってきたんだ。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              部屋番号に4が入らないように…ですか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">岸</h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              そうそう。僕も思わず『なんで？』って聞いたら、なんか縁起が悪いとかなんとか言ってたね。面白い子だったけど、そう言われてみるとなんだか印象に残ってて。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              その大学生…もしかしたら、私が探している人物かもしれません。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">岸</h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              そうなのか？ふむ、確かに彼はちょっと変わっていたけどね…。毎晩遅くに帰ってくることも多かったし、何かに追われているような雰囲気もあったな。
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              ありがとうございます。岸さんの情報が非常に役に立ちました。もしかして、他にその方について覚えていることがあれば教えていただけませんか？
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">岸</h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              いや、これくらいしかないかな…
            </p>

            <h2 className="text-white text-2xl font-bold mb-4 text-left">
              主人公
            </h2>
            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              ありがとうございます。すごく助かりました！
            </p>

            <p className="text-white text-center" style={{ fontSize: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
              quam viverra nec consectetur ante hendrerit. Donec et mollis
              dolor. Praesent et diam eget libero egestas mattis sit amet vitae
              augue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View1;
