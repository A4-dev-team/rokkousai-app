"use client";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import {
	type DialogueProps,
	DialogueController,
} from "@/components/common/DialogueController";

export function View2() {
	const dialogues: DialogueProps[] = [
		{
			type: "text",
			name: "主人公",
			text: "こんにちは。すみません、突然の訪問で…。この部屋に以前住んでいた方について少しお話を伺いたいのですが…",
		},
		{
			type: "text",
			name: "安井",
			text: "ああ、はい…どういったご用件でしょうか？",
		},
		{
			type: "text",
			name: "主人公",
			text: "実はその方のことを調べていて、何か手がかりがあればと思って伺ったんです。",
		},
		{
			type: "text",
			name: "安井",
			text: "僕は会ったことがないので、何も分からないんですけど…ああ、そういえば…。前の住人宛てに不思議な封筒が届いていたんです。結構分厚くて、私も最初は自分宛かと思ったんですが、よく見たら名前が違ってて…。",
		},
		{
			type: "text",
			name: "主人公",
			text: "その封筒はまだお手元にありますか？",
		},
		{
			type: "text",
			name: "安井",
			text: "ええ、捨てるのも悪い気がして、一応保管していました。部屋の中にありますので、少しお待ちを。",
		},
		{
			type: "text",
			name: "ナレーション",
			text: "（安井が部屋に戻り、しばらくして封筒を持ってくる）",
		},
		{
			type: "image",
			name: "安井",
			text: "これです。封筒の表には、やけに古びた字体で名前が書かれていて、中には紙が数枚入っていましたよ。",
			imageUrls: ["https://storage.googleapis.com/abehiroshibot/envelope.jpg"],
		},
		{
			type: "text",
			name: "主人公",
			text: "本当にありがとうございます。この封筒が、きっと手がかりになるはずです。",
		},
		{
			type: "text",
			name: "ナレーション",
			text: "（主人公は安井に礼を言い、封筒の中身を持ち帰り、新たな謎を解き明かすために動き出す）",
		},
	];

	return (
		<div className="h-full w-full absolute bg-[url('/rental-yasui.png')] bg-cover bg-center">
      <div className="h-full flex flex-col justify-end">
				<ScrollableChatWindow>
					<DialogueController dialogues={dialogues} />
				</ScrollableChatWindow>
			</div>
    </div>
	);
}
