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
			text: "兼松先生、お忙しいところ失礼します。少しお話できる時間をいただけますか？",
		},
		{
			type: "text",
			name: "兼松先生",
			text: "あら、どうしたの？何か聞きたいことでもあるのかしら？",
		},
		{
			type: "text",
			name: "主人公",
			text: "実は、紙の切れ端を集めていまして、先生がそれをお持ちと聞いたのですが…",
		},
		{
			type: "image",
			name: "兼松先生",
			text: "そうなのね。確かにここにあるわ。（紙の切れ端を渡す）…どう使うつもりかわからないけど、不必要なものだからあげるよ。",
			imageUrls: [""],
		},
		{
			type: "text",
			name: "主人公",
			text: "ありがとうございます。",
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
