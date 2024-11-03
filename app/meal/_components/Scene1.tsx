"use client";
import { FormInput } from "@/components/common/FormInput";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";
import { constant } from "@/domain/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";

const word =
	"ここに長い文章を追加して、スクロールできるようにします。セキュリティの答えは…";
const hint = "ヒント: 正しいキーワードは「かみ食堂」です。";

export function Scene1(): JSX.Element {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = (value: string) => {
		if (value.trim() === "") {
			return;
		}
		if (value === "かみ食堂") {
			const token = constant.TOKEN.KAMISHOKUDOU;
			router.push("/stage2/manager");
			setError(null);
		} else {
			setError(hint);
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
				{error && <div className="text-white mt-2">{error}</div>}
			</ScrollableChatWindow>
		</div>
	);
}
