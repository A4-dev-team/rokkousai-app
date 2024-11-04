"use client";
import { FormInput } from "@/components/common/FormInput";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { constant } from "@/domain/constant";
import { useRouter } from "next/navigation";

const word =
	"ここに長い文章を追加して、スクロールできるようにします。存在するか探してあげるよ";

export function View3(): JSX.Element {
	const router = useRouter();
	const handleSubmit = (value: string) => {
		if (value === "MEAL") {
			const token = constant.TOKEN.STAGE1_MEAL;
			router.push(`/stage1/owner/view-4?token=${token}`);
		}
	};

	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableChatWindow>
				<div className="text-white font-medium">
					<OneLineTypeWriter word={word} />
				</div>
				<div className="flex justify-center mt-6">
					<FormInput placeholder="" onSubmit={handleSubmit} />
				</div>
			</ScrollableChatWindow>
		</div>
	);
}
