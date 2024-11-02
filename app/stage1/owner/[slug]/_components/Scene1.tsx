"use client";
import { FormInput } from "@/components/common/FormInput";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { constant } from "@/domain/constant";
import { useRouter } from "next/navigation";

const word =
	"ここに長い文章を追加して、スクロールできるようにします。どこの部屋に行きたいの？？";

export function Scene1(): JSX.Element {
	const router = useRouter();
	const handleSubmit = (value: string) => {
		if (value === "302") {
			const token = constant.TOKEN.STAGE1_302;
			router.push(`/stage1/owner/scene-2?token=${token}`);
		}
	};

	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<div className="text-white font-medium">
					<OneLineTypeWriter word={word} />
				</div>
				<div className="flex justify-center mt-6">
					<FormInput placeholder="部屋番号を入力" onSubmit={handleSubmit} />
				</div>
			</ScrollableChatWindow>
		</div>
	);
}
