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
			text: "田崎先生、こんにちは。少しお時間をいただけますか？",
		},
		{
			type: "text",
			name: "田崎先生",
			text: "やあ、元気そうだね。何か聞きたいことでもあるのかな？",
		},
		{
			type: "text",
			name: "主人公",
			text: "はい、実は紙の切れ端を集めていて、先生がお持ちだと伺ったので…",
		},
		{
			type: "image",
			name: "田崎先生",
			text: "なるほど、これのことかな。（机から紙の切れ端を取り出して渡す）",
			imageUrls: ["/68.png"],
		},
		{
			type: "text",
			name: "主人公",
			text: "とても助かります！ありがとうございます、田崎先生！",
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
