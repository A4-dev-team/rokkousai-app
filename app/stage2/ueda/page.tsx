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
			text: "すみません、少しお話を伺ってもよろしいでしょうか？",
		},
		{
			type: "text",
			name: "上田",
			text: "え？あ、いいですよ。何かご用ですか？",
		},
		{
			type: "text",
			name: "主人公",
			text: "実は、ここで以前アルバイトしていた大学生について少し調べているんです。もしかして、上田さんも何か覚えていることはありますか？",
		},
		{
			type: "text",
			name: "上田",
			text: "ああ、あの人のことですね…。ちょっと変わった人でしたけど、悪い人じゃなかったですよ。あんまり深くは話さなかったけど。",
		},
		{
			type: "text",
			name: "主人公",
			text: "何か印象に残っていることなどがあれば、教えていただけますか？",
		},
		{
			type: "text",
			name: "上田",
			text: "そうですねえ…そういえば、たまたま帰りがけに会って、空を見上げてたので『月が好きなの？』って聞いたら、『天体が好きですねー』って答えてましたね。",
		},
		{
			type: "text",
			name: "主人公",
			text: "天体が好き…ですか。なんだか意外です。彼が天体に興味を持っているなんて、他の方からは聞いたことがなかったので。",
		},
		{
			type: "text",
			name: "上田",
			text: "ええ、そうですよね。こっちも『そうなんだ』くらいしか反応しなかったんですけど…",
		},
		{
			type: "text",
			name: "主人公",
			text: "ありがとうございます、上田さん。もしかしたら、天体に関することが彼にとって大事な要素だったのかもしれませんね。",
		},
		{
			type: "text",
			name: "上田",
			text: "そうかもしれませんね…。でも、それくらいしか覚えていなくて、お役に立てなくてすみません。」",
		},
		{
			type: "text",
			name: "主人公",
			text: "いえ、十分役立っています。小さなことでもヒントになりますから。",
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
