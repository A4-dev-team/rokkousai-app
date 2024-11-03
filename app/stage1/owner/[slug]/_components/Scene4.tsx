"use client";
import { useRouter } from "next/navigation";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

const word =
	"ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。ここに長い文章を追加して、スクロールできるようにします。";

export function Scene4(): JSX.Element {
	const router = useRouter();

	const handleNext = () => {
		router.push("/stage1/owner/scene-5");
	};

	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<div className="text-white font-medium">
					<OneLineTypeWriter word={word} />
					<div className="flex justify-end mt-4 mb-4 mr-4">
						<button
							type="button"
							className="bg-blue-500 text-white py-2 px-4 rounded"
							onClick={handleNext}
						>
							次へ
						</button>
					</div>
				</div>
				<div className="flex justify-center mt-6"> </div>
			</ScrollableChatWindow>
		</div>
	);
}
