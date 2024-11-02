import { FormInput } from "@/components/common/FormInput";
import { ScrollableContainer } from "@/components/common/ScrollableContainer";

export default function View1({
	setCurrentPage,
}: {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
	const handleSubmit = (value: string) => {
		if (value === "302") setCurrentPage(1);
	};

	return (
		<div className="h-full flex flex-col justify-end">
			<ScrollableContainer>
				<p className="text-white text-center font-medium">
					ここに長い文章を追加して、スクロールできるようにします。
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
					lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam
					viverra nec consectetur ante hendrerit. Donec et mollis dolor.
					Praesent et diam eget libero egestas mattis sit amet vitae augue.
				</p>
				<p className="text-white text-center font-medium">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
					lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam
					viverra nec consectetur ante hendrerit. Donec et mollis dolor.
					Praesent et diam eget libero egestas mattis sit amet vitae augue.
				</p>
				<div className="flex justify-center mt-6">
					<FormInput title="行きたい部屋はどこなの？" onSubmit={handleSubmit} />
				</div>
			</ScrollableContainer>
		</div>
	);
}
