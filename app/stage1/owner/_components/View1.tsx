import { FormInput } from "@/components/common/FormInput";
import { OneLineTypeWriter } from "@/components/common/OneLineTypeWriter";
import { ScrollableChatWindow } from "@/components/common/ScrollableChatWindow";

const word =
	"ここに長い文章を追加して、スクロールできるようにします。どこの部屋に行きたいの？？";

export default function View1({
	setCurrentPage,
}: {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
	const handleSubmit = (value: string) => {
		if (value === "302") setCurrentPage(2);
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
