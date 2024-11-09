"use client";
import {
	type DialogueProps,
	DialogueController,
} from "@/components/common/DialogueController";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { useState } from "react";
import ImageModal from "@/components/common/ImageModal";

export default function Page() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
			imageUrls: ["/69.png"],
			onOpenModal: (url: string) => setSelectedImage(url),
		},
		{
			type: "text",
			name: "主人公",
			text: "ありがとうございます。",
		},
		{
			type: "text",
			name: "兼松先生",
			text: "あと、ポスターの場所はLINEで「ポスター」と送ればでてくるらしいよ。",
		},
	];

	const openModal = (url: string) => {
    setSelectedImage(url);
  };

	const closeModal = () => {
    setSelectedImage(null);
  };

	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<DialogueController dialogues={dialogues} onOpenImageModal={openModal}/>
			</ScrollableChatWindow>
			{selectedImage && (
        <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
      )}
		</div>
	);
}
