"use client";
import {
	type DialogueProps,
	DialogueController,
} from "@/components/common/DialogueController";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export function Scene1() {
	const dialogues: DialogueProps[] = [
		{
			type: "text",
			name: "主人公",
			text: "こんにちは。こちらで少しお話を伺ってもよろしいでしょうか？",
		},
		{
			type: "text",
			name: "店長",
			text: "いらっしゃいませ。どういったご用件でしょうか？",
		},
		{
			type: "text",
			name: "主人公",
			text: "実は、こちらで以前アルバイトをしていた大学生について少しお伺いしたくて…",
		},
		{
			type: "text",
			name: "店長",
			text: "ああ、あの子ね。半年前に辞めちゃったんだけど、よく覚えてるよ。仕事も丁寧でね、メニューの表だって彼のアドバイスで少し変更したんだ。",
		},
		{
			type: "text",
			name: "主人公",
			text: "なるほど…メニューの変更ですか。ありがとうございます！彼はいつごろからこちらで働いていたんでしょうか？",
		},
		{
			type: "text",
			name: "店長",
			text: "たしか、ちょうど2年くらい前からだったかな。彼が辞めた後、営業日も少し変えたんだよ。前は水曜日も休みだったんだけど、1週間前から営業するようにしたんだ。だから、彼が働いていた時は週末がメインだったなあ。お客さんの入りも良かったし、忙しい日にはよく頑張ってくれたよ。",
		},
		{
			type: "text",
			name: "主人公",
			text: "それは頼もしかったでしょうね。彼に関することでもう少しだけ教えていただきたいのですが、彼について、印象に残っていることなどはありますか？",
		},
		{
			type: "text",
			name: "店長",
			text: "そうだな…一見真面目そうだけど、妙に周りを警戒しているような感じがあったね。帰る時も、他のスタッフとは一緒に帰らずにさっと出て行くことが多かったんだ。",
		},
		{
			type: "text",
			name: "主人公",
			text: "そうなんですね…。何か気になることがあればと思いまして。",
		},
		{
			type: "text",
			name: "店長",
			text: "今思うと、あの子も何かに追われていたのかもな。でも、仕事には一生懸命だったよ。あまり人と深く話さない子だったけど、頼りになるスタッフだった。",
		},
		{
			type: "text",
			name: "主人公",
			text: "貴重なお話をありがとうございます。",
		},
		{
			type: "text",
			name: "店長",
			text: "役に立てたなら良かったよ。他の店員の上田や松本にも聞いてみてもいいかもね",
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
