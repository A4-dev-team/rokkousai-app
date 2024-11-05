"use client";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { DialogueProps, DialogueController} from "@/components/common/DialogueController";

export function View1() {

  const dialogues: DialogueProps[] = [
    { type: "text", name: "主人公", text: "こんにちは。突然で申し訳ないのですが、少しお話を伺えますか？" },
    { type: "text", name: "住人", text: "うん？大丈夫だけど…" },
    { type: "text", name: "主人公", text: "私、神戸大学の○○と申します。実は、このマンションに以前住んでいた大学生について少し調べていまして。もし何かご存知でしたら、教えていただきたくて…" },
    { type: "text", name: "住人", text: "なるほど….僕は、岸（きし）と申します。" },
    { type: "text", name: "岸", text: "今はフリーターで○○になろうと思って勉強中です。大学生か…そうだなあ…ああ、そういえば妙な挨拶をしてきた子がいたよ。" },
    { type: "text", name: "主人公", text: "どんなエピソードだったか、もし覚えていらっしゃったら教えていただけませんか？" },
    { type: "text", name: "岸", text: "僕が『404号室の岸です』って自己紹介したら、その子が『見つかってよかったですね！僕の部屋番号には4が入らないように選んだんですよ』なんて言ってきたんだ。" },
    { type: "text", name: "主人公", text: "部屋番号に4が入らないように…ですか？" },
    { type: "text", name: "岸", text: "そうそう。僕も思わず『なんで？』って聞いたら、なんか縁起が悪いとかなんとか言ってたね。面白い子だったけど、そう言われてみるとなんだか印象に残ってて。" },
    { type: "text", name: "主人公", text: "その大学生…もしかしたら、私が探している人物かもしれません。" },
    { type: "text", name: "岸", text: "そうなのか？ふむ、確かに彼はちょっと変わっていたけどね…。毎晩遅くに帰ってくることも多かったし、何かに追われているような雰囲気もあったな。" },
    { type: "text", name: "主人公", text: "ありがとうございます。岸さんの情報が非常に役に立ちました。もしかして、他にその方について覚えていることがあれば教えていただけませんか？" },
    { type: "text", name: "岸", text: "いや、これくらいしかないかな…" },
    { type: "text", name: "主人公", text: "ありがとうございます。すごく助かりました！" }
  ];

  return (
    <div className="h-full flex flex-col justify-end">
      <ScrollableChatWindow>
        <DialogueController dialogues={dialogues} />
      </ScrollableChatWindow>
    </div>
  );
}
