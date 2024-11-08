"use client";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import {
	type DialogueProps,
	DialogueController,
} from "@/components/common/DialogueController";

export function View1() {
	const dialogues: DialogueProps[] = [
		{ type: "text", name: "ナレーション", text: "誰もいないようだ" },
	];

	return (
		<div className="h-full w-full absolute bg-[url('/rental-3rd-floor.png')] bg-cover bg-center">
      <div className="h-full flex flex-col justify-end">
				<ScrollableChatWindow>
					<DialogueController dialogues={dialogues} />
				</ScrollableChatWindow>
			</div>
    </div>
	);
}
