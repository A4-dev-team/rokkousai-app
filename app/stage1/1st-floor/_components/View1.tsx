"use client";
import {
	type DialogueProps,
	DialogueController,
} from "@/components/common/DialogueController";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export function View1() {
	const dialogues: DialogueProps[] = [
		{
			type: "text",
			name: "主人公",
			text: "こんにちは。このマンションの大家さんでいらっしゃいますか？",
		},
		{ type: "text", name: "大家", text: "ええ、そうだけど…何かご用ですか？" },
		{
			type: "text",
			name: "主人公",
			text: "すみません、突然の訪問で失礼します。実は、先日までこのマンションに住んでいた方についてお聞きしたいことがありまして…",
		},
		{
			type: "text",
			name: "大家",
			text: "ああ、そういうことね。でもプライバシーもあるからねぇ、簡単に教えられないのよ。",
		},
		{
			type: "text",
			name: "主人公",
			text: "おっしゃる通りです。ですので、何か細かい情報を聞きたいわけではないんです。ただ、その方は、当時、大学生なんですけど、少し問題があったようで、警察も彼の行方を追っているんです。少しでもヒントになりそうなことがあればと思いまして…（警察は、嘘です！ごめんなさい…）",
		},
		{
			type: "image",
			name: "大家",
			text: "警察が？それは大変ね…大学生はよくいるけど、隣同士の部屋には住んでないわね…もしよかったら部屋の番号を教えてもらえたら、一緒についていくことは可能ですよ…これがマンションの部屋になります。",
			imageUrls: ["https://storage.googleapis.com/abehiroshibot/room.jpg"],
		},
		{
			type: "form",
			name: "主人公",
			text: "ありがとうございます！部屋の番号は…",
			formName: "room302",
			formPlaceholder: "部屋番号を入力してください",
			answer: "302",
			hint: "3桁の部屋番号を入力してください",
			onClear: () => console.log("クリアされました！"),
		},
		//正解のモーダル　もしくは　不正解のモーダルが表示される。正解の場合は
		{
			type: "text",
			name: "主人公",
			text: "部屋の番号は…そうだ、302号室です。",
		},
		{
			type: "text",
			name: "大家",
			text: "302号室ね。それなら確かに大学生が住んでた部屋だわ。引っ越すときも荷物を夜遅くに運び出していたし、今思うと少し妙な感じもしていたの。",
		},
		{
			type: "text",
			name: "主人公",
			text: "そうなんですか…もしよろしければ、302号室を見せていただけませんか？何か手がかりが残っているかもしれません。",
		},
		{
			type: "text",
			name: "大家",
			text: "そうね…それくらいなら大丈夫よ。念のため、私も一緒に行くわね。",
		},
		{
			type: "text",
			name: "ナレーション",
			text: "（主人公は正しい部屋番号を伝え、大家の信頼を得ることができた。302号室へのアクセスが可能になった。）",
		},
	];

	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<DialogueController dialogues={dialogues} />
			</ScrollableChatWindow>
		</div>
	);
}
