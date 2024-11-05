"use client";
import { FormInput } from "@/components/common/FormInput";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { constant } from "@/domain/constant";
import { useRouter } from "next/navigation";

const dialogues = [
  { name: "主人公", text: "こんにちは。このマンションの大家さんでいらっしゃいますか？" },
  { name: "大家", text: "ええ、そうだけど…何かご用ですか？" },
  { name: "主人公", text: "すみません、突然の訪問で失礼します。実は、先日までこのマンションに住んでいた方についてお聞きしたいことがありまして…" },
  { name: "大家", text: "ああ、そういうことね。でもプライバシーもあるからねぇ、簡単に教えられないのよ。" },
  { name: "主人公", text: "おっしゃる通りです。ですので、何か細かい情報を聞きたいわけではないんです。ただ、その方は、当時、大学生なんですけど、少し問題があったようで、警察も彼の行方を追っているんです。少しでもヒントになりそうなことがあればと思いまして…（警察は、嘘です！ごめんなさい…）" },
  { name: "大家", text: "警察が？それは大変ね…大学生はよくいるけど、隣同士の部屋には住んでないわね…もしよかったら部屋の番号を教えてもらえたら、一緒についていくことは可能ですよ…これがマンションの部屋になります。" },
  { name: "（心の声）", text: "（部屋の画像が送信される）" },
  { name: "主人公", text: "ありがとうございます！部屋の番号は…" },
  { name: "（ナレーション）", text: "（様々な情報から犯人の部屋番号を特定しよう。）" }
];

export function Scene1(): JSX.Element {
  const router = useRouter();
  const handleSubmit = (value: string) => {
    if (value === "302") {
      const token = constant.TOKEN.STAGE1_302;
      router.push(`/stage1/owner/scene-2?token=${token}`);
    }
  };

  return (
    <div className="h-full flex flex-col justify-end">
    </div>
  );
}
