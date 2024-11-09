"use client";
import {
	type DialogueProps,
	DialogueController,
} from "@/components/common/DialogueController";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export default function Page() {
	const dialogues: DialogueProps[] = [
		{
			type: "text",
			name: "主人公",
			text: "こんにちは。お仕事中すみませんが、少しお話を伺ってもよろしいでしょうか？",
		},
		{
			type: "text",
			name: "松本",
			text: "あ、いえいえ、大丈夫です。何か聞きたいことがあるんですか？",
		},
		{
			type: "text",
			name: "主人公",
			text: "実は、こちらで以前働いていた大学生について少し調べていまして。松本さんも何か覚えていることはありますか？",
		},
		{
			type: "text",
			name: "松本",
			text: "すごく頼れる先輩でしたよ。いつも何かと助けてくれて…。うーん、そういえば、よく休憩中にTwitter…あ、今はXか、触ってたくらいですかね？",
		},
		{
			type: "text",
			name: "主人公",
			text: "頼れる先輩だったんですね。他に覚えていることがあれば教えていただけると助かるのですが…",
		},
		{
			type: "text",
			name: "松本",
			text: "あ、そうだ！思い出しました。先輩から『もし神戸大学の後輩が自分を訪ねてきたら、この紙を渡してくれ』って頼まれて、私が預かってたんですよ。",
		},
		{
			type: "text",
			name: "主人公",
			text: "その紙、今もお持ちなんですか？",
		},
		{
			type: "image",
			name: "松本",
			text: "ええ、ずっと保管してました。（バッグから少し折れた紙を取り出す）…これです。先輩がいなくなってからも誰も訪ねて来なかったので、ずっと持っていたんです。※拡大画像がうまく表示できない可能性があります。その場合はLINEで「折れた紙」と送ってください。",
			imageUrls: ["/e-gohan.png"],
		},
		{
			type: "text",
			name: "主人公",
			text: "ありがとうございます！とても助かります。この紙の内容が手がかりになるかもしれません。",
		},
		{
			type: "text",
			name: "松本",
			text: "そうだといいですね。なんだか、今さら役立つことがあるなんて不思議ですけど…。",
		},
		{
			type: "text",
			name: "主人公",
			text: "松本さん、本当にありがとうございます。この紙がきっと大きな手がかりになります。",
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
