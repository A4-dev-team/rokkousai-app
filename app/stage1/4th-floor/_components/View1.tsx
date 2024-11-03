"use client";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

const word =
	"ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。";

export function View1(): JSX.Element {
	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<div className="text-white font-medium">
					<OneLineTypeWriter word={word} />
				</div>
			</ScrollableChatWindow>
		</div>
	);
}
