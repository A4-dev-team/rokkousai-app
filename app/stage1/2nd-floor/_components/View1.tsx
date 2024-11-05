'use client';
import { DialogueProps, DialogueController} from "@/components/common/DialogueController";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export function View1() {

  const dialogues: DialogueProps[] = [
    { type: "text", name: "主人公", text: "こんにちは。突然で申し訳ないのですが、少しお話を伺えますか？" },
    { type: "text", name: "住人", text: "あら、どうかしましたか？私に何か用ですか？" },
    { type: "text", name: "主人公", text: "私、神戸大学の○○と申します。実は、このマンションに以前住んでいた大学生について少し調べていまして…" },
    { type: "text", name: "井口", text: "そうなんですね、私はそこの201に住んでいる井口（いぐち）と申します。" },
    { type: "text", name: "主人公", text: "今日はお仕事お休みなんですか？" },
    { type: "text", name: "井口", text: "そうそう、看護師やっていて昨日夜勤だったから、今日はお休みなのよ" },
    { type: "text", name: "主人公", text: "お休み中に、すみません…井口さんは、なにか怪しい大学生を見かけたりしていないでしょうか？" },
    { type: "text", name: "井口", text: "ああ、多分あの子ね。エレベーターで何度か会いましたよ。あまり話はしなかったけど、一度だけ、近くの飲食店でアルバイトしてるって言ってました。" },
    { type: "text", name: "主人公", text: "本当ですか？それは貴重な手がかりです！もしかして、飲食店の場所や名前についても何か…？" },
    { type: "text", name: "井口", text: "そこまでは聞いてないのよ。ごめんなさいね。" },
    { type: "text", name: "主人公", text: "なるほど…。情報ありがとうございます！" },
    { type: "text", name: "井口", text: "いえいえ、あの子ちょっと変わってたけど、そんなに悪い人ではなさそうだったけど…何かあったのかしら？" },
    { type: "text", name: "主人公", text: "いえ、大丈夫です。すごく助かりました！" },
  ];

  return (
    <div className="h-full flex flex-col justify-end">
      <ScrollableChatWindow>
        <DialogueController dialogues={dialogues} />
      </ScrollableChatWindow>
    </div>
  );
}
