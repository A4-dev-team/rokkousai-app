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
			text: "なるほど、これのことかな。（机から紙の切れ端を取り出して渡す）※拡大画像がうまく表示できない可能性があります。その場合はLINEで「紙切れ4」と送ってください。",
			imageUrls: ["/68.png"],
			onOpenModal: (url: string) => setSelectedImage(url),
		},
		{
			type: "text",
			name: "主人公",
			text: "とても助かります！ありがとうございます、田崎先生！",
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
