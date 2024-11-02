import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

export function View3() {
	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<h1 className="text-3xl text-green-400">
					3階から302に行けるようになった
				</h1>
			</ScrollableChatWindow>
		</div>
	);
}
