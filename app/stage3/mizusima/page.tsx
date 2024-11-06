"use client";
import {
	type DialogueProps,
	DialogueController,
} from "@/components/common/DialogueController";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export function Page() {
	const dialogues: DialogueProps[] = [
		{
			type: "text",
			name: "主人公",
			text: "水島先生、少しだけお話しできる時間をいただけますか？",
		},
		{
			type: "text",
			name: "水島先生",
			text: "おや、どうしたんだい？何か困っているのかね？",
		},
		{
			type: "text",
			name: "主人公",
			text: "はい、実は紙の切れ端を集めていまして、先生がその一部をお持ちと聞いたものですから…",
		},
		{
			type: "image",
			name: "水島先生",
			text: "あーあれのことか、全くある日、ポケットに入っていたんだ。生徒のいたずらだと思っていたが…（紙の切れ端を取り出す）これかね？",
			imageUrls: [""],
		},
		{
			type: "text",
			name: "主人公",
			text: "まさしくこれです！ありがとうございます、先生！",
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

export default Page;
