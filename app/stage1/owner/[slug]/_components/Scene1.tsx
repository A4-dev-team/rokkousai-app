"use client";
import { FormInput } from "@/components/common/FormInput";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { constant } from "@/domain/constant";
import { useRouter } from "next/navigation";

const word = "主人公";
("こんにちは。このマンションの大家さんでいらっしゃいますか？");
("大家");
("ええ、そうだけど…何かご用ですか？");
("主人公");
("すみません、突然の訪問で失礼します。実は、先日までこのマンションに住んでいた方についてお聞きしたいことがありまして…");
("大家");
("ああ、そういうことね。でもプライバシーもあるからねぇ、簡単に教えられないのよ。");
("主人公");
("おっしゃる通りです。ですので、何か細かい情報を聞きたいわけではないんです。ただ、その方は、当時、大学生なんですけど、少し問題があったようで、警察も彼の行方を追っているんです。少しでもヒントになりそうなことがあればと思いまして…");
("(警察は、嘘です！ごめんなさい…)");
("大家");
("警察が？それは大変ね…大学生はよくいるけど、隣同士の部屋には住んでないわね…もしよかったら部屋の番号を教えてもらえたら、一緒についていくことは可能ですよ…これがマンションの部屋になります。");
("(部屋の画像が送信される)");
("主人公");
("ありがとうございます！部屋の番号は…");
("(様々な情報から犯人の部屋番号を特定しよう。)");

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
      <ScrollableChatWindow>
        <div className="text-white font-medium">
          <OneLineTypeWriter word={word} />
        </div>
        <div className="flex justify-center mt-6">
          <FormInput placeholder="部屋番号を入力" onSubmit={handleSubmit} />
        </div>
      </ScrollableChatWindow>
    </div>
  );
}
