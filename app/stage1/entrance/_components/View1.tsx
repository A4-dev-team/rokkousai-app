"use client";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export function View1() {
	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<h1 className="text-3xl text-green-400">
					<br />
					<br />
					静かなエントランスだ
					<br />
					<br />
					<br />
				</h1>
			</ScrollableChatWindow>
		</div>
	);
}
