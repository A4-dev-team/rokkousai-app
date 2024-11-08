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
			text: "こんにちは、ロイ先生。少しお時間をいただけますか？",
		},
		{
			type: "text",
			name: "ロイ先生",
			text: "ああ、こんにちは。何か用があるのかな？",
		},
		{
			type: "text",
			name: "主人公",
			text: "実は、先生がある生徒から渡されたという紙の切れ端をお譲りいただけないかと思いまして…",
		},
		{
			type: "image",
			name: "ロイ先生",
			text: "ほう、紙の切れ端ね。これのことかな？（ポケットから切れ端を取り出す）",
			imageUrls: ["/67.png"],
		},
		{
			type: "text",
			name: "主人公",
			text: "ありがとうございます！あと、もし他にも何か関連する紙があれば…",
		},
		{
			type: "image",
			name: "ロイ先生",
			text: "ああ、そういえば…君のような学生が来たら、渡せと言われたものがあと2枚...（別の紙を取り出す）",
			imageUrls: ["/65.png", "/81.png"],
		},
		{
			type: "text",
			name: "主人公",
			text: "助かります、先生！",
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
